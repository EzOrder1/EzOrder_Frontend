import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rider, RiderFormData } from "@/types";

interface RiderFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: Rider | null;
    onSubmit: (data: RiderFormData) => void;
    isSubmitting: boolean;
}

export function RiderForm({
    open,
    onOpenChange,
    initialData,
    onSubmit,
    isSubmitting
}: RiderFormProps) {
    const [formData, setFormData] = useState<RiderFormData>({
        name: "",
        phone_number: "",
        vehicle_info: "",
        status: "active"
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                phone_number: initialData.phone_number,
                vehicle_info: initialData.vehicle_info,
                status: initialData.status
            });
        } else {
            setFormData({
                name: "",
                phone_number: "",
                vehicle_info: "",
                status: "active"
            });
        }
    }, [initialData, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Rider" : "Add New Rider"}</DialogTitle>
                    <DialogDescription>
                        {initialData ? "Edit the details of the rider here." : "Enter the details of the new rider."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Rider Name"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            value={formData.phone_number}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            placeholder="+1234567890"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="vehicle">Vehicle Info</Label>
                        <Input
                            id="vehicle"
                            value={formData.vehicle_info}
                            onChange={(e) => setFormData({ ...formData, vehicle_info: e.target.value })}
                            placeholder="Honda C100 - Red (ABC-123)"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <Select
                            value={formData.status}
                            onValueChange={(value: 'active' | 'inactive') =>
                                setFormData({ ...formData, status: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save Rider"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
