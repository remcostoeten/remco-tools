import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type Summary = { title: String; data: any; icon?: any; tooltip?: string; info?: any };
export default function SummaryCard({ title, data, icon: Icon, tooltip = '', info: Info }: Summary) {
    const IconWithTooltip = () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Icon className="absolute right-3 top-1 h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent className="normal-case" side="bottom">
                {tooltip}
            </TooltipContent>
        </Tooltip>
    );

    return (
        <div className="relative">
            {/* <div className="pb-0">
                <div className="text-xs font-semibold uppercase text-muted-foreground">
                    {title}
                    {Info ? <Info /> : null}
                </div>
                {Icon && tooltip ? <IconWithTooltip /> : Icon ? <Icon className="absolute right-3 top-1 h-4 w-4" /> : null}
            </div>
            <div>
                <p title={data} className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-extrabold tabular-nums text-foreground">
                    {data}
                </p>
            </div> */}
        </div>
    );
}