import React, { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Setting {
    id: string;
    title?: string;
    description?: string;
    defaultChecked?: boolean;
    onToggle?: (isChecked: boolean) => void;
}

interface PageSettingProps {
    title?: string;
    description: string;
    settings: Setting[];
}

export default function PageSetting({ title, description, settings }: PageSettingProps): JSX.Element {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                {settings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between space-x-2">
                        <Label htmlFor={setting.id} className="flex flex-col space-y-1">
                            <span>{setting.title}</span>
                            <span className="font-normal leading-snug text-muted-foreground">
                                {setting.description}
                            </span>
                        </Label>
                        <Switch
                            id={setting.id}
                            defaultChecked={setting.defaultChecked}
                            onCheckedChange={(isChecked: boolean) => {
                                setting.onToggle && setting.onToggle(isChecked);
                            }}
                        />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
