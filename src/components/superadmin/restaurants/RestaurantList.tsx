import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Power } from "lucide-react";
import { Restaurant } from "@/types";

interface RestaurantListProps {
    restaurants: Restaurant[];
    onCreate: () => void;
    onEdit: (restaurant: Restaurant) => void;
    onToggleStatus: (restaurant: Restaurant) => void;
    onDelete: (id: string) => void;
}

const formatDate = (value?: string) => {
    if (!value) return "--";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "--";
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export function RestaurantList({
    restaurants,
    onCreate,
    onEdit,
    onToggleStatus,
    onDelete,
}: RestaurantListProps) {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-semibold">Restaurants</h2>
                    <p className="text-sm text-muted-foreground">
                        Manage onboarding, status, and visibility across the platform.
                    </p>
                </div>
                <Button onClick={onCreate} className="gap-2">
                    Add Restaurant
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="hidden lg:table-cell">Address</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {restaurants.map((restaurant) => (
                            <TableRow key={restaurant.id}>
                                <TableCell className="font-medium">{restaurant.name}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary">
                                        {restaurant.category || "General"}
                                    </Badge>
                                </TableCell>
                                <TableCell>{restaurant.phone_number || "--"}</TableCell>
                                <TableCell className="hidden lg:table-cell text-muted-foreground">
                                    {restaurant.address || "--"}
                                </TableCell>
                                <TableCell>
                                    <Badge variant={restaurant.is_active ? "default" : "secondary"}>
                                        {restaurant.is_active ? "Active" : "Inactive"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-muted-foreground">
                                    {formatDate(restaurant.updated_at || restaurant.created_at)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => onEdit(restaurant)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className={restaurant.is_active ? "text-amber-600" : "text-emerald-600"}
                                            onClick={() => onToggleStatus(restaurant)}
                                        >
                                            <Power className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:text-destructive"
                                            onClick={() => {
                                                if (confirm(`Delete ${restaurant.name}? This cannot be undone.`)) {
                                                    onDelete(restaurant.id);
                                                }
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {restaurants.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="py-8 text-center text-muted-foreground">
                                    No restaurants found. Add the first one to get started.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
