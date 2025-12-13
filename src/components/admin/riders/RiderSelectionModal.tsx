import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rider } from "@/types";

interface RiderSelectionModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    riders: Rider[];
    onSelect: (riderId: string) => void;
}

export function RiderSelectionModal({
    open,
    onOpenChange,
    riders,
    onSelect
}: RiderSelectionModalProps) {
    const [selectedRiderId, setSelectedRiderId] = useState<string>("");

    const handleConfirm = () => {
        if (selectedRiderId) {
            onSelect(selectedRiderId);
            onOpenChange(false);
            setSelectedRiderId(""); // Reset
        }
    };

    const activeRiders = riders.filter(r => r.status === 'active');

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Assign Rider for Delivery</DialogTitle>
                    <DialogDescription>
                        Choose an active rider to deliver this order.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="rider">Select Rider</Label>
                        <Select onValueChange={setSelectedRiderId} value={selectedRiderId}>
                            <SelectTrigger>
                                <SelectValue placeholder="Choose a rider..." />
                            </SelectTrigger>
                            <SelectContent>
                                {activeRiders.map((rider) => (
                                    <SelectItem key={rider.id} value={rider.id}>
                                        {rider.name} ({rider.vehicle_info})
                                    </SelectItem>
                                ))}
                                {activeRiders.length === 0 && (
                                    <SelectItem value="none" disabled>No active riders available</SelectItem>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} disabled={!selectedRiderId}>
                        Assign & Update Status
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
