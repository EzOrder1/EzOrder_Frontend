import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SuperAdminSidebar } from "@/components/superadmin/SuperAdminSidebar";
import { RestaurantList } from "@/components/superadmin/restaurants/RestaurantList";
import { RestaurantForm } from "@/components/superadmin/restaurants/RestaurantForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, Search, Shield } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Restaurant, RestaurantFormData } from "@/types";

type RestaurantListResponse = {
    items: Restaurant[];
    total: number;
};

const SuperAdminDashboard = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { toast } = useToast();
    const [authorized, setAuthorized] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const [userName, setUserName] = useState<string>("Super Admin");
    const [activeSection, setActiveSection] = useState("restaurants");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isRestaurantModalOpen, setIsRestaurantModalOpen] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (!token || !storedUser) {
            navigate("/admin/login");
            setAuthChecked(true);
            return;
        }

        try {
            const parsed = JSON.parse(storedUser);
            setUserName(parsed?.name || "Super Admin");
            if (parsed?.role === "superadmin") {
                setAuthorized(true);
            } else {
                toast({ title: "Access denied", variant: "destructive" });
                navigate("/");
            }
        } catch {
            navigate("/admin/login");
        } finally {
            setAuthChecked(true);
        }
    }, [navigate, toast]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchQuery(searchTerm.trim());
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");

        const handle = () => {
            if (media.matches) {
                setIsSidebarOpen(false);
            }
        };

        handle();

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", handle);
            return () => media.removeEventListener("change", handle);
        }

        media.addListener(handle);
        return () => media.removeListener(handle);
    }, []);

    const restaurantsQuery = useQuery({
        queryKey: ["superadmin-restaurants", statusFilter, searchQuery],
        queryFn: async () => {
            const res = await api.get("/api/v1/restaurants/admin", {
                params: {
                    status: statusFilter === "all" ? undefined : statusFilter,
                    search: searchQuery || undefined,
                },
            });
            return res.data as RestaurantListResponse;
        },
        enabled: authorized,
    });

    const createRestaurantMutation = useMutation({
        mutationFn: async (data: RestaurantFormData) => {
            const res = await api.post("/api/v1/restaurants/admin", data);
            return res.data as Restaurant;
        },
        onSuccess: () => {
            toast({ title: "Restaurant created" });
            setIsRestaurantModalOpen(false);
            queryClient.invalidateQueries({ queryKey: ["superadmin-restaurants"] });
        },
        onError: () => toast({ title: "Failed to create restaurant", variant: "destructive" }),
    });

    const updateRestaurantMutation = useMutation({
        mutationFn: async (payload: { id: string; data: RestaurantFormData }) => {
            const res = await api.put(`/api/v1/restaurants/admin/${payload.id}`, payload.data);
            return res.data as Restaurant;
        },
        onSuccess: () => {
            toast({ title: "Restaurant updated" });
            setIsRestaurantModalOpen(false);
            setEditingRestaurant(null);
            queryClient.invalidateQueries({ queryKey: ["superadmin-restaurants"] });
        },
        onError: () => toast({ title: "Failed to update restaurant", variant: "destructive" }),
    });

    const toggleStatusMutation = useMutation({
        mutationFn: async (payload: { id: string; is_active: boolean }) => {
            const res = await api.patch(`/api/v1/restaurants/admin/${payload.id}/status`, {
                is_active: payload.is_active,
            });
            return res.data as Restaurant;
        },
        onSuccess: () => {
            toast({ title: "Restaurant status updated" });
            queryClient.invalidateQueries({ queryKey: ["superadmin-restaurants"] });
        },
        onError: () => toast({ title: "Failed to update status", variant: "destructive" }),
    });

    const deleteRestaurantMutation = useMutation({
        mutationFn: async (id: string) => {
            await api.delete(`/api/v1/restaurants/admin/${id}`);
        },
        onSuccess: () => {
            toast({ title: "Restaurant deleted" });
            queryClient.invalidateQueries({ queryKey: ["superadmin-restaurants"] });
        },
        onError: () => toast({ title: "Failed to delete restaurant", variant: "destructive" }),
    });

    const restaurants = restaurantsQuery.data?.items || [];
    const totalCount = restaurants.length;
    const activeCount = useMemo(
        () => restaurants.filter((restaurant) => restaurant.is_active).length,
        [restaurants]
    );
    const inactiveCount = totalCount - activeCount;

    if (!authChecked) {
        return (
            <div className="grid min-h-screen place-items-center bg-slate-50 px-6">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
                    Loading control center...
                </div>
            </div>
        );
    }

    if (!authorized) return null;

    return (
        <div className="flex min-h-screen bg-slate-50">
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-900 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:translate-x-0 lg:border-r lg:border-slate-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <SuperAdminSidebar
                    activeSection={activeSection}
                    setActiveSection={(section) => {
                        setActiveSection(section);
                        setIsSidebarOpen(false);
                    }}
                />
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="mr-4 lg:hidden"
                    >
                        <MenuIcon className="h-5 w-5" />
                    </Button>

                    <div className="flex flex-1 items-center gap-3">
                        <Badge variant="secondary" className="gap-2 text-xs uppercase tracking-[0.15em]">
                            <Shield className="h-3 w-3" />
                            Super Admin
                        </Badge>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <Shield className="h-4 w-4 text-primary" />
                                </div>
                                <span className="hidden text-sm font-medium md:inline-block">{userName}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("refresh_token");
                                    localStorage.removeItem("user");
                                    navigate("/admin/login");
                                }}
                            >
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                <main className="flex-1 overflow-y-auto p-6">
                    {activeSection === "restaurants" && (
                        <div className="space-y-6">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold tracking-tight">
                                        Restaurant Control Center
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Oversee onboarding, status changes, and platform health.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <div className="relative min-w-[220px]">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            value={searchTerm}
                                            onChange={(event) => setSearchTerm(event.target.value)}
                                            placeholder="Search restaurants..."
                                            className="pl-9"
                                        />
                                    </div>
                                    <Select
                                        value={statusFilter}
                                        onValueChange={(value: "all" | "active" | "inactive") =>
                                            setStatusFilter(value)
                                        }
                                    >
                                        <SelectTrigger className="w-[160px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Status</SelectItem>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="inactive">Inactive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">
                                            Total Restaurants
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{totalCount}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">
                                            Active
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold text-emerald-600">{activeCount}</div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-medium text-muted-foreground">
                                            Inactive
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold text-amber-600">{inactiveCount}</div>
                                    </CardContent>
                                </Card>
                            </div>

                            {restaurantsQuery.isLoading ? (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                                    Loading restaurants...
                                </div>
                            ) : restaurantsQuery.isError ? (
                                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    Failed to load restaurants. Please try again.
                                </div>
                            ) : (
                                <RestaurantList
                                    restaurants={restaurants}
                                    onCreate={() => {
                                        setEditingRestaurant(null);
                                        setIsRestaurantModalOpen(true);
                                    }}
                                    onEdit={(restaurant) => {
                                        setEditingRestaurant(restaurant);
                                        setIsRestaurantModalOpen(true);
                                    }}
                                    onToggleStatus={(restaurant) => {
                                        toggleStatusMutation.mutate({
                                            id: restaurant.id,
                                            is_active: !restaurant.is_active,
                                        });
                                    }}
                                    onDelete={(id) => deleteRestaurantMutation.mutate(id)}
                                />
                            )}
                            <RestaurantForm
                                open={isRestaurantModalOpen}
                                onOpenChange={setIsRestaurantModalOpen}
                                initialData={editingRestaurant}
                                isSubmitting={
                                    createRestaurantMutation.isPending ||
                                    updateRestaurantMutation.isPending
                                }
                                onSubmit={(data) => {
                                    if (editingRestaurant?.id) {
                                        updateRestaurantMutation.mutate({ id: editingRestaurant.id, data });
                                    } else {
                                        createRestaurantMutation.mutate(data);
                                    }
                                }}
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
