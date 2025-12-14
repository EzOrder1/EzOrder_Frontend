import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { DeliveryZone, DeliveryZoneFormData } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface DeliveryZoneFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: DeliveryZoneFormData) => void;
    initialData?: DeliveryZone;
    isLoading?: boolean;
}

export function DeliveryZoneForm({
    open,
    onOpenChange,
    onSubmit,
    initialData,
    isLoading,
}: DeliveryZoneFormProps) {
    const [formData, setFormData] = useState<DeliveryZoneFormData>({
        name: "",
        latitude: 0,
        longitude: 0,
        radius_km: 5,
        is_active: true,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                latitude: initialData.latitude,
                longitude: initialData.longitude,
                radius_km: initialData.radius_km,
                is_active: initialData.is_active,
            });
        } else {
            setFormData({
                name: "",
                latitude: 0,
                longitude: 0,
                radius_km: 5,
                is_active: true,
            });
        }
    }, [initialData, open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.latitude || !formData.longitude) {
            toast({
                title: "Validation Error",
                description: "Please fill all required fields",
                variant: "destructive",
            });
            return;
        }
        onSubmit(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {initialData ? "Edit Delivery Zone" : "Add New Delivery Zone"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Zone Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Clifton, Gulshan"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input
                                id="latitude"
                                type="number"
                                step="any"
                                value={formData.latitude}
                                onChange={(e) =>
                                    setFormData({ ...formData, latitude: parseFloat(e.target.value) })
                                }
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input
                                id="longitude"
                                type="number"
                                step="any"
                                value={formData.longitude}
                                onChange={(e) =>
                                    setFormData({ ...formData, longitude: parseFloat(e.target.value) })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="radius">Delivery Radius (km)</Label>
                        <Input
                            id="radius"
                            type="number"
                            step="0.1"
                            min="0.1"
                            value={formData.radius_km}
                            onChange={(e) =>
                                setFormData({ ...formData, radius_km: parseFloat(e.target.value) })
                            }
                            required
                        />
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <Switch
                            id="active-mode"
                            checked={formData.is_active}
                            onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                        />
                        <Label htmlFor="active-mode">Active Zone</Label>
                    </div>

                    <div className="rounded-md bg-slate-100 p-3 text-sm text-slate-500">
                        <p>💡 Tip: Use Google Maps to find the Latitude/Longitude of the center of your delivery area.</p>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-indigo-600 to-violet-600">
                            {isLoading ? "Saving..." : initialData ? "Update Zone" : "Add Zone"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
