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
import { Edit, Trash2, Plus } from "lucide-react";
import { Rider } from "@/types";

interface RiderListProps {
    riders: Rider[];
    onCreate: () => void;
    onEdit: (rider: Rider) => void;
    onDelete: (id: string) => void;
}

export function RiderList({ riders, onCreate, onEdit, onDelete }: RiderListProps) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Registered Riders</h2>
                <Button onClick={onCreate} className="gap-2">
                    <Plus className="h-4 w-4" /> Add Rider
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Vehicle</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {riders.map((rider) => (
                            <TableRow key={rider.id}>
                                <TableCell className="font-medium">{rider.name}</TableCell>
                                <TableCell>{rider.phone_number}</TableCell>
                                <TableCell>{rider.vehicle_info}</TableCell>
                                <TableCell>
                                    <Badge variant={rider.status === 'active' ? 'default' : 'secondary'}>
                                        {rider.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => onEdit(rider)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:text-destructive"
                                            onClick={() => {
                                                if (confirm('Are you sure you want to delete this rider?')) {
                                                    onDelete(rider.id);
                                                }
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {riders.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No riders found. Add your first rider!
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
