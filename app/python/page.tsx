import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';

import { Button } from '@ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ui/hover-card';
import { Label } from '@ui/label';
import { Separator } from '@ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { Textarea } from '@ui/textarea';

import CompleteIcon from '@c/icons/complete-icon';
import EditIcon from '@c/icons/edit-icon';
import InsertIcon from '@c/icons/insert-icon';
import { Actionselector } from '@c/python-converter/components/action-selector';
import { ScriptInput } from '@c/python-converter/components/script-generate-input';
import { MaxLengthSelector } from '@c/playground/components/maxlength-selector';
import { PresetActions } from '@c/playground/components/preset-actions';
import { PresetSave } from '@c/playground/components/preset-save';
import { PresetSelector } from '@c/playground/components/preset-selector';
import { PresetShare } from '@c/playground/components/preset-share';
import { TemperatureSelector } from '@c/playground/components/temperature-selector';
import { TopPSelector } from '@c/playground/components/top-p-selector';
import { types } from '@c/playground/data/models';
import { presets } from '@c/playground/data/presets';
import { Actions } from '@c/python-converter/data/actions';

import PythonScriptGenerator from '@/app/python/components/python-script-generator';
import Toolbar from '@/components/playground/components/toolbar';
export default function pythonScriptPlayground() {
    return (
        <>
            <div className="h-full flex-col md:flex">
               <Toolbar/>
                <Separator />
                <Tabs defaultValue="insert" className="flex-1">
                    <div className="black my-8 container h-full pt-8 pb-8 mt-8 py-6">
                        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                <div className="grid gap-2">
                                    <HoverCard openDelay={200}>
                                        <HoverCardTrigger asChild>
                                            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mode</span>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-[320px] text-sm" side="left">
                                            Choose the interface that best suits your task. You can provide: a simple prompt to complete, starting and ending text to insert a completion within, or some text with instructions to edit it.
                                        </HoverCardContent>
                                    </HoverCard>
                                    <TabsList className="grid grid-cols-3">
                                        <TabsTrigger value="insert" disabled>
                                            <span className="sr-only">Edit</span>
                                            <EditIcon />
                                        </TabsTrigger>
                                        <TabsTrigger value="complete" disabled>
                                            <span className="sr-only">Complete</span>
                                            <CompleteIcon />
                                        </TabsTrigger>
                                        <TabsTrigger value="insert">
                                            <span className="sr-only">Insert</span>
                                            <InsertIcon />
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                <Actionselector types={types} Actions={Actions} />
                                <TemperatureSelector defaultValue={[0.56]} />
                                <MaxLengthSelector defaultValue={[256]} />
                                <TopPSelector defaultValue={[0.9]} />
                            </div>
                            <div className="md:order-1">
                                <TabsContent value="complete" className="mt-0 border-0 p-0">
                                    <div className="flex h-full flex-col space-y-4">
                                        <Textarea placeholder="Write a tagline for an ice cream shop" className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]" />
                                        <div className="flex items-center space-x-2">
                                            <Button>Submit</Button>
                                            <Button variant="secondary">
                                                <span className="sr-only">Show history</span>
                                                <CounterClockwiseClockIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                                <PythonScriptGenerator />
                                <TabsContent value="edit" className="mt-0 border-0 p-0">
                                    <div className="flex flex-col space-y-4">
                                        <div className="grid h-full gap-6 lg:grid-cols-2">
                                            <div className="flex flex-col space-y-4">
                                                <div className="flex flex-1 flex-col space-y-2">
                                                    <Label htmlFor="input">Input</Label>
                                                    <Textarea id="input" placeholder="We is going to the market." className="flex-1 lg:min-h-[580px]" />
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <Label htmlFor="instructions">Instructions</Label>
                                                    <Textarea id="instructions" placeholder="Fix the grammar." />
                                                </div>
                                            </div>
                                            <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button>Submit</Button>
                                            <Button variant="secondary">
                                                <span className="sr-only">Show history</span>
                                                <CounterClockwiseClockIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </>
    );
}
