import { Metadata } from 'next';
import Image from 'next/image';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';

import { Button } from '@ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ui/hover-card';
import { Label } from '@ui/label';
import { Separator } from '@ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { Textarea } from '@ui/textarea';

import { ScriptInput } from '@/components/python-converter/components/script-generate-input';
import { MaxLengthSelector } from '../../components/playground/components/maxlength-selector';
import { PresetActions } from '../../components/playground/components/preset-actions';
import { PresetSave } from '../../components/playground/components/preset-save';
import { PresetSelector } from '../../components/playground/components/preset-selector';
import { PresetShare } from '../../components/playground/components/preset-share';
import { TemperatureSelector } from '../../components/playground/components/temperature-selector';
import { TopPSelector } from '../../components/playground/components/top-p-selector';
import { presets } from '../../components/playground/data/presets';
import EditIcon from '@/components/icons/edit-icon';
import CompleteIcon from '@/components/icons/complete-icon';
import InsertIcon from '@/components/icons/insert-icon';
import { Actionselector } from '@/components/python-converter/components/action-selector';
import { types } from '../../components/playground/data/models';
import { Actions } from '../../components/python-converter/data/actions';
import PythonScriptGenerator from './components/python-script-generator';

export const metadata: Metadata = {
    title: 'Playground',
    description: 'The OpenAI Playground built using the components.',
};

export default function PlaygroundPage() {
    return (
        <>
            <div className="md:hidden">
                <Image src="/examples/playground-light.png" width={1280} height={916} alt="Playground" className="block dark:hidden" />
                <Image src="/examples/playground-dark.png" width={1280} height={916} alt="Playground" className="hidden dark:block" />
            </div>
            <div className="hidden h-full flex-col md:flex">
                <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                    <h2 className="text-lg font-semibold">Generate your python script 🐍</h2>
                    <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                        <PresetSelector presets={presets} />
                        <PresetSave />
                        <div className="hidden space-x-2 md:flex">
                            <ScriptInput />
                            <PresetShare />
                        </div>
                        <PresetActions />
                    </div>
                </div>
                <Separator />
                <Tabs defaultValue="insert" className="flex-1">
                    <div className="container h-full py-6">
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
                                <TabsContent value="insert" className="mt-0 border-0 p-0">
                                    <div className="flex flex-col space-y-4 border p-4">
                                        <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                                            <PythonScriptGenerator />
                                            {/* <Textarea placeholder="We're writing to [inset]. Congrats from OpenAI!" className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]" /> */}
                                            {/* <div className="rounded-md border bg-muted"></div> */}
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
