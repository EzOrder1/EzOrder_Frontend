import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { OrdersTable, Order } from "./OrdersTable";
import api from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { RiderSelectionModal } from "../riders/RiderSelectionModal";
import { Rider } from "@/types";
import { useState } from "react";

interface ActiveOrdersProps {
    onOrderClick: (order: Order) => void;
}

export function ActiveOrders({ onOrderClick }: ActiveOrdersProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isRiderModalOpen, setIsRiderModalOpen] = useState(false);
    const [pendingOrderId, setPendingOrderId] = useState<string | null>(null);

    const activeOrdersQuery = useQuery({
        queryKey: ["active-orders"],
        queryFn: async () => {
            const res = await api.get("/api/v1/orders/active");
            return res.data as Order[];
        },
        refetchInterval: 15000, // Auto-refresh every 15s for kitchen view
    });

    const ridersQuery = useQuery({
        queryKey: ["riders"],
        queryFn: async () => {
            const res = await api.get("/api/v1/riders/");
            return res.data.items as Rider[];
        },
    });

    const orderStatusMutation = useMutation({
        mutationFn: async (payload: { orderNumber: string; status: string; riderId?: string }) => {
            await api.put(`/api/v1/orders/${payload.orderNumber}/status`, {
                status: payload.status,
                rider_id: payload.riderId,
            });
        },
        onSuccess: () => {
            toast({ title: "Order status updated" });
            queryClient.invalidateQueries({ queryKey: ["active-orders"] });
            // Invalidate main orders too so everything stays in sync
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            queryClient.invalidateQueries({ queryKey: ["order-stats"] });
        },
        onError: () => {
            toast({ title: "Failed to update status", variant: "destructive" });
        }
    });

    const handleStatusChange = (orderNumber: string, status: string) => {
        if (status === "out_for_delivery") {
            const activeRiders = (ridersQuery.data || []).filter((r) => r.status === "active");
            if (activeRiders.length === 0) {
                toast({
                    title: "No active riders",
                    description: "Add or activate a rider to assign deliveries.",
                    variant: "destructive",
                });
                return;
            }
            setPendingOrderId(orderNumber);
            setIsRiderModalOpen(true);
            return;
        }
        orderStatusMutation.mutate({ orderNumber, status });
    };

    const handleRiderSelect = (riderId: string) => {
        if (!pendingOrderId) return;
        orderStatusMutation.mutate({
            orderNumber: pendingOrderId,
            status: "out_for_delivery",
            riderId,
        });
        setPendingOrderId(null);
    };

    if (activeOrdersQuery.isLoading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Active Orders</h1>
                <span className="text-sm text-muted-foreground">
                    Auto-refreshing every 15s
                </span>
            </div>

            <OrdersTable
                orders={activeOrdersQuery.data || []}
                onOrderClick={onOrderClick}
                onStatusChange={handleStatusChange}
            />
            <RiderSelectionModal
                open={isRiderModalOpen}
                onOpenChange={(open) => {
                    setIsRiderModalOpen(open);
                    if (!open) setPendingOrderId(null);
                }}
                riders={ridersQuery.data || []}
                onSelect={handleRiderSelect}
            />
        </div>
    );
}
