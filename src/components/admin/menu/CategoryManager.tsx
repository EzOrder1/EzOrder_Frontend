import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Trash2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface CategoryManagerProps {
    categories: string[];
    onCreate: (name: string) => void;
    onRename: (oldName: string, newName: string) => void;
    onDelete: (name: string) => void;
}

export function CategoryManager({
    categories,
    onCreate,
    onRename,
    onDelete,
}: CategoryManagerProps) {
    const { toast } = useToast();
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState<string | null>(null);
    const [renameValue, setRenameValue] = useState("");
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const handleCreate = () => {
        if (!newCategory.trim()) {
            toast({
                title: "Category name required",
                description: "Enter a name to create a category.",
                variant: "destructive",
            });
            return;
        }
        onCreate(newCategory.trim());
        setNewCategory("");
        setIsCreateOpen(false);
    };

    const startEditing = (category: string) => {
        setEditingCategory(category);
        setRenameValue(category);
    };

    const cancelEditing = () => {
        setEditingCategory(null);
        setRenameValue("");
    };

    const handleRename = () => {
        if (!renameValue.trim() || !editingCategory) return;
        onRename(editingCategory, renameValue.trim());
        setEditingCategory(null);
    };

    return (
        <Card className="border-0 shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-end">
                    <Button onClick={() => setIsCreateOpen(true)}>Add</Button>
                </div>

                <div className="space-y-4">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50"
                        >
                            {editingCategory === category ? (
                                <div className="flex flex-1 items-center gap-2">
                                    <Input
                                        value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        className="h-8"
                                    />
                                    <Button size="icon" variant="ghost" onClick={handleRename}>
                                        <Check className="h-4 w-4 text-green-600" />
                                    </Button>
                                    <Button size="icon" variant="ghost" onClick={cancelEditing}>
                                        <X className="h-4 w-4 text-red-600" />
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <span className="font-medium">{category}</span>
                                    <div className="flex gap-1">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => startEditing(category)}
                                        >
                                            <Edit2 className="h-4 w-4 text-blue-500" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => onDelete(category)}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    {categories.length === 0 && (
                        <p className="text-center text-muted-foreground p-4">No categories defined yet.</p>
                    )}
                </div>

                <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                    <DialogContent className="sm:max-w-[420px]">
                        <DialogHeader>
                            <DialogTitle>Add Category</DialogTitle>
                            <DialogDescription>Give your menu category a clear name.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-2">
                            <Input
                                placeholder="Category name"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleCreate();
                                    }
                                }}
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleCreate}>Create</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
