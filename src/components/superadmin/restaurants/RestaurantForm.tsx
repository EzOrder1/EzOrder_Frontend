import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Restaurant, RestaurantFormData } from "@/types";

interface RestaurantFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: Restaurant | null;
    onSubmit: (data: RestaurantFormData) => void;
    isSubmitting: boolean;
}

const emptyForm: RestaurantFormData = {
    name: "",
    description: "",
    address: "",
    phone_number: "",
    category: "General",
    is_active: true,
};

export function RestaurantForm({
    open,
    onOpenChange,
    initialData,
    onSubmit,
    isSubmitting,
}: RestaurantFormProps) {
    const [formData, setFormData] = useState<RestaurantFormData>(emptyForm);

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                description: initialData.description || "",
                address: initialData.address || "",
                phone_number: initialData.phone_number || "",
                category: initialData.category || "General",
                is_active: initialData.is_active ?? true,
            });
        } else {
            setFormData(emptyForm);
        }
    }, [initialData, open]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Restaurant" : "Add Restaurant"}</DialogTitle>
                    <DialogDescription>
                        {initialData
                            ? "Update restaurant details and status."
                            : "Create a new restaurant with the essentials."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Restaurant Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Luna Bistro"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Short description for internal reference"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            placeholder="Street, city"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone_number">Phone Number</Label>
                        <Input
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            placeholder="+92 300 1234567"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            placeholder="General"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Status</Label>
                        <Select
                            value={formData.is_active ? "active" : "inactive"}
                            onValueChange={(value) =>
                                setFormData({ ...formData, is_active: value === "active" })
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
                            {isSubmitting ? "Saving..." : "Save Restaurant"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
