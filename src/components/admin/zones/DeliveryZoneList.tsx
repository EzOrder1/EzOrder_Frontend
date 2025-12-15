import { useState } from "react";
import { Plus, Pencil, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DeliveryZone, DeliveryZoneFormData } from "@/types";
import { DeliveryZoneForm } from "./DeliveryZoneForm";
import api from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export function DeliveryZoneList() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingZone, setEditingZone] = useState<DeliveryZone | undefined>();
    const queryClient = useQueryClient();

    // Fetch Zones
    const zonesQuery = useQuery({
        queryKey: ["zones"],
        queryFn: async () => {
            const response = await api.get("/api/v1/zones");
            return response.data;
        },
    });

    const zones = zonesQuery.data?.items || [];

    // Mutations
    const createZone = useMutation({
        mutationFn: async (data: DeliveryZoneFormData) => {
            await api.post("/api/v1/zones", data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            setIsFormOpen(false);
            setEditingZone(undefined);
            toast({ title: "Success", description: "Zone created successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to create zone", variant: "destructive" }),
    });

    const updateZone = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: DeliveryZoneFormData }) => {
            await api.put(`/api/v1/zones/${id}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            setIsFormOpen(false);
            setEditingZone(undefined);
            toast({ title: "Success", description: "Zone updated successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to update zone", variant: "destructive" }),
    });

    const deleteZone = useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/api/v1/zones/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["zones"] });
            toast({ title: "Success", description: "Zone deleted successfully" });
        },
        onError: () => toast({ title: "Error", description: "Failed to delete zone", variant: "destructive" }),
    });

    const handleSubmit = (data: DeliveryZoneFormData) => {
        if (editingZone) {
            updateZone.mutate({ id: editingZone.id, data });
        } else {
            createZone.mutate(data);
        }
    };

    const handleEdit = (zone: DeliveryZone) => {
        setEditingZone(zone);
        setIsFormOpen(true);
    };

    const handleCreate = () => {
        setEditingZone(undefined);
        setIsFormOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">Delivery Zones</h2>
                <Button onClick={handleCreate} className="bg-gradient-to-r from-indigo-600 to-violet-600">
                    <Plus className="mr-2 h-4 w-4" /> Add Zone
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Active Zones</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Zone Name</TableHead>
                                <TableHead>Center Coords</TableHead>
                                <TableHead>Radius (km)</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {zonesQuery.isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24">Loading zones...</TableCell>
                                </TableRow>
                            ) : zones.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">No delivery zones defined.</TableCell>
                                </TableRow>
                            ) : (
                                zones.map((zone: DeliveryZone) => (
                                    <TableRow key={zone.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center">
                                                <MapPin className="mr-2 h-4 w-4 text-indigo-500" />
                                                {zone.name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs">
                                            {zone.latitude.toFixed(4)}, {zone.longitude.toFixed(4)}
                                        </TableCell>
                                        <TableCell>{zone.radius_km} km</TableCell>
                                        <TableCell>
                                            <Badge variant={zone.is_active ? "default" : "secondary"}>
                                                {zone.is_active ? "Active" : "Inactive"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleEdit(zone)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 hover:text-red-600"
                                                onClick={() => {
                                                    if (confirm("Are you sure you want to delete this zone?")) {
                                                        deleteZone.mutate(zone.id);
                                                    }
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <DeliveryZoneForm
                open={isFormOpen}
                onOpenChange={(open) => {
                    setIsFormOpen(open);
                    if (!open) setEditingZone(undefined);
                }}
                onSubmit={handleSubmit}
                initialData={editingZone}
                isLoading={createZone.isPending || updateZone.isPending}
            />
        </div>
    );
}
