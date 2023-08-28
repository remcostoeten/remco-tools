import { Label, Input, Checkbox } from '@ui/ui-imports';

type InputWithLabelProps = {
    label?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxWithLabel = {
    label?: string;
    value?: string;
    checked?: boolean;
    defaultValue?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputWithLabel({ label, className, value, placeholder, onChange }: InputWithLabelProps) {
    return (
        <div className="flex flex-col gap-2 `${className}`">
            <Label>{label}</Label>
            <Input value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}

const CheckboxWithLabel = ({ label, className, value, defaultValue, checked }: CheckboxWithLabel) => {
    return (
        <div className="flex flex-col gap-2 `${className}`">
            <Label>{label}</Label>
            <Checkbox value={value} checked={checked} defaultValue={defaultValue} />
        </div>
    );
};

export { InputWithLabel, CheckboxWithLabel };
