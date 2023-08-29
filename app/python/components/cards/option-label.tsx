import { Label } from '@ui/label';
import { Icons } from '@/components/icons';

interface OptionLabelProps {
    htmlFor: string;
    icon?: any;
    text: string;
    isChecked: boolean;
}

export function OptionLabel({ htmlFor, icon, text, isChecked }: OptionLabelProps) {
    return (
        <Label htmlFor={htmlFor} className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${isChecked ? 'border-primary' : ''}`}>
            {/* @ts-ignore */}
            {icon && <Icons icon={icon} className="w-6 h-6" />}
            {text}
        </Label>
    );
}
