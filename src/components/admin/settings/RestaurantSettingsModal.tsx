import { useEffect, useMemo, useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Restaurant } from "@/types";

interface RestaurantSettingsModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    restaurant?: Restaurant | null;
    onSave: (data: RestaurantSettingsForm) => void;
    onUploadLogo: (file: File) => void;
    isSaving: boolean;
    isUploading: boolean;
    canEdit: boolean;
}

export interface RestaurantSettingsForm {
    name: string;
    description: string;
    address: string;
    phone_number: string;
    category: string;
}

const emptyForm: RestaurantSettingsForm = {
    name: "",
    description: "",
    address: "",
    phone_number: "",
    category: "General",
};

const getFileName = (path?: string | null) => {
    if (!path) return "";
    return path.split(/[\\/]/).pop() || path;
};

export function RestaurantSettingsModal({
    open,
    onOpenChange,
    restaurant,
    onSave,
    onUploadLogo,
    isSaving,
    isUploading,
    canEdit,
}: RestaurantSettingsModalProps) {
    const [formData, setFormData] = useState<RestaurantSettingsForm>(emptyForm);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const hasRestaurant = Boolean(restaurant);

    useEffect(() => {
        if (restaurant) {
            setFormData({
                name: restaurant.name || "",
                description: restaurant.description || "",
                address: restaurant.address || "",
                phone_number: restaurant.phone_number || "",
                category: restaurant.category || "General",
            });
        } else {
            setFormData(emptyForm);
        }
        setLogoFile(null);
    }, [restaurant, open]);

    const previewUrl = useMemo(() => {
        if (!logoFile) return "";
        return URL.createObjectURL(logoFile);
    }, [logoFile]);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave(formData);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[480px] max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Restaurant Settings</DialogTitle>
                    <DialogDescription>
                        Update your restaurant profile, contact details, and branding.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant={restaurant?.is_active ? "default" : "secondary"}>
                        {restaurant?.is_active ? "Active" : "Inactive"}
                    </Badge>
                    {restaurant?.logo_path && (
                        <span className="text-xs text-muted-foreground">
                            Current logo: {getFileName(restaurant.logo_path)}
                        </span>
                    )}
                </div>
                <form
                    onSubmit={(event) => {
                        handleSubmit(event);
                        if (logoFile) {
                            onUploadLogo(logoFile);
                        }
                    }}
                    className="space-y-4"
                >
                    <div className="grid gap-2">
                        <Label htmlFor="restaurant-name">Restaurant Name</Label>
                        <Input
                            id="restaurant-name"
                            value={formData.name}
                            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                            placeholder="Restaurant name"
                            required
                            disabled={!canEdit}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="restaurant-description">Description</Label>
                        <Textarea
                            id="restaurant-description"
                            value={formData.description}
                            onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                            placeholder="Short description"
                            disabled={!canEdit}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="restaurant-address">Address</Label>
                        <Input
                            id="restaurant-address"
                            value={formData.address}
                            onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                            placeholder="Street, city"
                            disabled={!canEdit}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="restaurant-phone">Phone Number</Label>
                        <Input
                            id="restaurant-phone"
                            value={formData.phone_number}
                            onChange={(event) => setFormData({ ...formData, phone_number: event.target.value })}
                            placeholder="+92 300 1234567"
                            disabled={!canEdit}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="restaurant-category">Category</Label>
                        <Input
                            id="restaurant-category"
                            value={formData.category}
                            onChange={(event) => setFormData({ ...formData, category: event.target.value })}
                            placeholder="General"
                            disabled={!canEdit}
                        />
                    </div>

                    <div className="rounded-lg border border-dashed border-slate-200 p-4">
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="restaurant-logo">Restaurant Logo</Label>
                            <Input
                                id="restaurant-logo"
                                type="file"
                                accept="image/*"
                                onChange={(event) => {
                                    const file = event.target.files?.[0];
                                    setLogoFile(file || null);
                                }}
                                disabled={!canEdit}
                            />
                            <span className="text-xs text-muted-foreground">
                                Logo uploads when you save changes.
                            </span>
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Logo preview"
                                    className="h-24 w-24 rounded-lg border object-cover"
                                />
                            )}
                            {logoFile && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setLogoFile(null)}
                                >
                                    Clear
                                </Button>
                            )}
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Close
                        </Button>
                        <Button type="submit" disabled={(isSaving || isUploading) || !canEdit || !hasRestaurant}>
                            {(isSaving || isUploading) ? "Saving..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
