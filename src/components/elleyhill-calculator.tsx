
"use client";

import { useEffect, useState, useRef } from "react";
import { useForm, FormProvider, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


import { calculatorSchema, type CalculatorValues, type Appliance, type CalculationResults } from "@/lib/schemas";
import { calculateAll } from "@/lib/calculations";
import { APPLIANCE_DATA, type ApplianceData } from "@/data/appliances";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";


import { Plus, Trash2, Info, Power, Battery, Sun, Zap, HelpCircle, FileDown, RotateCcw, Copy, Check, Lightbulb, Tv, Wind, Refrigerator, Building, Home, ChevronsUpDown, Mail, Phone, MapPin } from "lucide-react";

const getDefaultValues = (applicationType: "household" | "company" | "industrial"): CalculatorValues => ({
  appliances: [
    { id: uuidv4(), name: "LED Bulb", wattage: 10, quantity: 4 },
    { id: uuidv4(), name: "Refrigerator (Single Door)", wattage: 150, quantity: 1 },
    { id: uuidv4(), name: "Television (LED)", wattage: 100, quantity: 1 },
  ],
  applicationType: applicationType,
  systemVoltage: "48",
  backupDuration: 4,
  peakSunlightHours: 5,
  singlePanelWattage: 545,
});


export function ElleyhillCalculator() {
  const [currentApplicationType, setCurrentApplicationType] = useState<"household" | "company" | "industrial">("household");
  
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: getDefaultValues(currentApplicationType),
    mode: "onChange",
  });

  const { fields, append, remove, replace } = useFieldArray({
    control: form.control,
    name: "appliances",
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [summaryDialogOpen, setSummaryDialogOpen] = useState(false);
  
  const applicationType = form.watch("applicationType");

  useEffect(() => {
    if (applicationType !== currentApplicationType) {
        setCurrentApplicationType(applicationType);
        const newDefaultValues = getDefaultValues(applicationType);
        form.reset(newDefaultValues);
        replace(newDefaultValues.appliances);
        setResults(calculateAll(newDefaultValues));
    }
  }, [applicationType, currentApplicationType, form, replace]);


  useEffect(() => {
    const subscription = form.watch((value) => {
      const parsedValues = calculatorSchema.safeParse(value);
      if (parsedValues.success) {
        setResults(calculateAll(parsedValues.data));
      } else {
        setResults(null);
      }
    });

    const initialParsedValues = calculatorSchema.safeParse(form.getValues());
    if (initialParsedValues.success) {
        setResults(calculateAll(initialParsedValues.data));
    }

    return () => subscription.unsubscribe();
  }, [form]);

  const applianceOptions = APPLIANCE_DATA[applicationType];

  const handleApplianceSelect = (name: string, index: number) => {
    form.setValue(`appliances.${index}.name`, name, { shouldValidate: true });
    const selectedAppliance = applianceOptions.find(app => app.name === name);
    if (selectedAppliance) {
      form.setValue(`appliances.${index}.wattage`, selectedAppliance.wattage, { shouldValidate: true });
    }
  };
  
  const addCustomAppliance = (index: number) => {
    form.setValue(`appliances.${index}.name`, 'Custom Appliance');
    form.setValue(`appliances.${index}.wattage`, 100);
  }

  const resetForm = () => {
    const newDefaultValues = getDefaultValues(applicationType)
    form.reset(newDefaultValues);
    setResults(calculateAll(newDefaultValues));
  }

  const getResultValue = (value: number | undefined, suffix: string = '', precision: number = 2) => {
    if (value === undefined || value === null || isNaN(value)) {
      return '...';
    }
    return `${value.toFixed(precision)} ${suffix}`;
  };

  return (
    <TooltipProvider>
      <FormProvider {...form}>
        <div className="space-y-8">

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2"><Lightbulb className="text-primary"/>Start Here: Select Your Use Case</CardTitle>
                <CardDescription>Choose the type of environment where you'll be using your solar power system. This will tailor the appliance list to your needs.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="max-w-sm">
                    <FormField
                        control={form.control}
                        name="applicationType"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center">Application Type
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent><p>Select the primary use for your solar setup.</p></TooltipContent>
                                </Tooltip>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="household"><div className="flex items-center gap-2"><Home className="h-4 w-4"/> Household</div></SelectItem>
                                    <SelectItem value="company"><div className="flex items-center gap-2"><Building className="h-4 w-4"/> Company</div></SelectItem>
                                    <SelectItem value="industrial"><div className="flex items-center gap-2"><Wind className="h-4 w-4"/> Industrial</div></SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            </CardContent>
        </Card>


          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Lightbulb className="text-primary"/>Your Appliances</CardTitle>
                  <CardDescription>Add the appliances you want to power. You can select from the list or add a custom one.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <AnimatePresence>
                      {fields.map((field, index) => (
                        <motion.div
                          key={field.id}
                          layout
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -300 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-start gap-2 p-3 bg-background rounded-lg border"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                             <FormField
                                control={form.control}
                                name={`appliances.${index}.name`}
                                render={({ field }) => (
                                <FormItem className="flex flex-col sm:col-span-2">
                                  <FormLabel>Appliance</FormLabel>
                                  <Select
                                    onValueChange={(value) => {
                                        if (value === "custom") {
                                            addCustomAppliance(index);
                                        } else {
                                            handleApplianceSelect(value, index);
                                        }
                                    }}
                                    value={field.value}
                                    >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an appliance" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            {applianceOptions.map((app) => (
                                                <SelectItem key={app.name} value={app.name}>
                                                    {app.name} (~{app.wattage}W)
                                                </SelectItem>
                                            ))}
                                            <SelectItem value="custom">
                                                <div className="flex items-center gap-2">
                                                    <Plus className="h-4 w-4"/>
                                                    <span>Add Custom Appliance</span>
                                                </div>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`appliances.${index}.wattage`}
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Wattage (W)</FormLabel>
                                    <FormControl>
                                    <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`appliances.${index}.quantity`}
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                    <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => remove(index)} className="mt-8 text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <Button type="button" onClick={() => append({ id: uuidv4(), name: "", wattage: 0, quantity: 1 })} className="mt-6">
                    <Plus className="mr-2 h-4 w-4" /> Add Appliance
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><Zap className="text-primary"/>System Configuration</CardTitle>
                  <CardDescription>Tell us about your power needs and system preferences.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <FormField
                        control={form.control}
                        name="backupDuration"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center">Backup Duration (Hours)
                            <Tooltip>
                                <TooltipTrigger asChild><Info className="h-3 w-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent><p>How long you want to power your appliances <br/> when there's no other power source.</p></TooltipContent>
                                </Tooltip>
                            </FormLabel>
                            <FormControl>
                                <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="systemVoltage"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center">System Voltage
                            <Tooltip>
                                <TooltipTrigger asChild><Info className="h-3 w-3 ml-1" /></TooltipTrigger>
                                <TooltipContent><p>The operational voltage of your battery bank. <br/> Higher voltage is generally more efficient.</p></TooltipContent>
                            </Tooltip>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={String(field.value)}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select voltage" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="12">12V</SelectItem>
                                <SelectItem value="24">24V</SelectItem>
                                <SelectItem value="48">48V</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="peakSunlightHours"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center">Peak Sunlight Hours
                            <Tooltip>
                                <TooltipTrigger asChild><Info className="h-3 w-3 ml-1" /></TooltipTrigger>
                                <TooltipContent><p>Average daily hours of direct sunlight <br/> your location receives.</p></TooltipContent>
                            </Tooltip>
                            </FormLabel>
                            <FormControl>
                                <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="singlePanelWattage"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center">Single Panel Wattage (W)
                            <Tooltip>
                                <TooltipTrigger asChild><Info className="h-3 w-3 ml-1" /></TooltipTrigger>
                                <TooltipContent><p>The power rating of one individual <br/> solar panel you plan to use.</p></TooltipContent>
                            </Tooltip>
                            </FormLabel>
                            <FormControl>
                                <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </CardContent>
              </Card>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center gap-2"><FileDown className="text-primary"/>Your Solar System Estimate</CardTitle>
                  <CardDescription>Here's what we recommend based on your inputs.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    <div className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <Power className="h-6 w-6 text-primary"/>
                            <div>
                                <p className="font-semibold">Total Load</p>
                                <p className="text-xs text-muted-foreground">Combined power of all appliances.</p>
                            </div>
                        </div>
                        <p className="font-headline text-xl font-semibold">{getResultValue(results?.totalLoad, 'W', 0)}</p>
                    </div>

                    <Separator />
                    
                    <p className="font-headline text-lg">Inverter & Battery</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between items-center p-3 border rounded-lg col-span-full">
                            <div className="flex items-center gap-2">
                                <Zap className="h-4 w-4 text-muted-foreground"/>
                                <p>Inverter Rating</p>
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3" /></TooltipTrigger>
                                    <TooltipContent><p>Recommended inverter size, including a 25% <br/> safety margin for load spikes.</p></TooltipContent>
                                </Tooltip>
                            </div>
                            <p className="font-semibold">{getResultValue(results?.inverterSizeKW, 'kW')}</p>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                                <Battery className="h-4 w-4 text-muted-foreground"/>
                                <p>Bank Size (kWh)</p>
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3" /></TooltipTrigger>
                                    <TooltipContent><p>Total energy storage needed to meet <br/> your backup duration requirement.</p></TooltipContent>
                                </Tooltip>
                            </div>
                            <p className="font-semibold">{getResultValue(results?.batteryBankKWh, 'kWh')}</p>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                                <Battery className="h-4 w-4 text-muted-foreground"/>
                                <p>Bank Size (Ah)</p>
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3" /></TooltipTrigger>
                                    <TooltipContent><p>Total Ampere-hour capacity needed for your <br/> selected system voltage.</p></TooltipContent>
                                </Tooltip>
                            </div>
                            <p className="font-semibold">{getResultValue(results?.batteryBankAh, 'Ah', 0)}</p>
                        </div>
                    </div>
                    
                    <Separator />

                    <p className="font-headline text-lg">Solar Panel Recommendation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                       <div className="flex justify-between items-center p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                                <Sun className="h-4 w-4 text-muted-foreground"/>
                                <p>Array Size</p>
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3" /></TooltipTrigger>
                                    <TooltipContent><p>Total power output needed from your <br/> solar panels to charge the batteries daily.</p></TooltipContent>
                                </Tooltip>
                            </div>
                            <p className="font-semibold">{getResultValue(results?.solarArraySizeKW, 'kW')}</p>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                            <div className="flex items-center gap-2">
                                <Sun className="h-4 w-4 text-muted-foreground"/>
                                <p>Number of Panels</p>
                                <Tooltip>
                                    <TooltipTrigger asChild><Info className="h-3 w-3" /></TooltipTrigger>
                                    <TooltipContent><p>Estimated number of panels based on your <br/> specified single panel wattage.</p></TooltipContent>
                                </Tooltip>
                            </div>
                            <p className="font-semibold">{getResultValue(results?.numberOfPanels, '', 0)}</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-4">
                        <Button onClick={resetForm} variant="outline" className="w-full">
                            <RotateCcw className="mr-2 h-4 w-4" /> Reset
                        </Button>
                         <Dialog open={summaryDialogOpen} onOpenChange={setSummaryDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                <FileDown className="mr-2 h-4 w-4" /> View Summary
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0">
                                <SummaryReport values={form.getValues()} results={results} onClose={() => setSummaryDialogOpen(false)} />
                            </DialogContent>
                        </Dialog>
                    </div>

                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </FormProvider>
    </TooltipProvider>
  );
}


const SummaryReport = ({ values, results, onClose }: { values: CalculatorValues, results: CalculationResults | null, onClose: () => void }) => {
    const reportRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    
    if (!results) {
        return (
             <DialogHeader className="p-6">
                <DialogTitle className="font-headline text-3xl">Generating Summary...</DialogTitle>
                <DialogDescription>
                    Please fill out the form to generate your summary.
                </DialogDescription>
            </DialogHeader>
        )
    }

    const handleDownloadPdf = async () => {
        const element = reportRef.current;
        if (!element) return;
        
        setIsGenerating(true);
        
        try {
            const canvas = await html2canvas(element, { 
                scale: 2,
                backgroundColor: '#ffffff',
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("elleyhill-solar-summary.pdf");
        } catch(error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsGenerating(false);
        }
    };
    
    return (
        <>
            <DialogHeader className="p-6 pb-4 border-b flex-shrink-0">
                <DialogTitle className="font-headline text-2xl md:text-3xl">Elleyhill Solar Power Summary</DialogTitle>
                <DialogDescription>
                    A detailed breakdown of your power needs and our recommended solution. Generated on {new Date().toLocaleDateString()}.
                </DialogDescription>
            </DialogHeader>
            <div className="flex-grow overflow-y-auto">
                <div ref={reportRef} className="p-6 bg-white text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Column 1: Inputs */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-headline text-xl border-b pb-2 mb-3">Your Configuration</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between"><span>Application Type:</span><span className="font-medium capitalize">{values.applicationType}</span></li>
                                    <li className="flex justify-between"><span>System Voltage:</span><span className="font-medium">{values.systemVoltage} V</span></li>
                                    <li className="flex justify-between"><span>Backup Duration:</span><span className="font-medium">{values.backupDuration} hours</span></li>
                                    <li className="flex justify-between"><span>Peak Sunlight:</span><span className="font-medium">{values.peakSunlightHours} hours/day</span></li>
                                    <li className="flex justify-between"><span>Panel Wattage:</span><span className="font-medium">{values.singlePanelWattage} W</span></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl border-b pb-2 mb-3">Your Appliances</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    {values.appliances.map(app => (
                                        <li key={app.id} className="flex justify-between border-b border-gray-100 py-1">
                                            <span>{app.quantity}x {app.name}</span>
                                            <span>{app.quantity * app.wattage} W</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between font-bold text-base mt-2 pt-2 border-t border-gray-300">
                                    <span>Total Load:</span>
                                    <span>{results.totalLoad.toFixed(0)} W</span>
                                </div>
                            </div>
                        </div>
                        {/* Column 2: Results */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-headline text-xl border-b pb-2 mb-3">System Recommendation</h3>
                                <div className="p-4 rounded-lg bg-green-50 border border-green-200 space-y-3">
                                    <h4 className="font-bold text-green-800">Inverter & Battery</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Recommended Inverter:</span>
                                            <span className="font-medium">{results.inverterSizeKW.toFixed(2)} kW</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Battery Bank Size (kWh):</span>
                                            <span className="font-medium">{results.batteryBankKWh.toFixed(2)} kWh</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Battery Bank Size (Ah):</span>
                                            <span className="font-medium">{results.batteryBankAh.toFixed(0)} Ah</span>
                                        </li>
                                    </ul>
                                    <Separator className="my-2 bg-green-200"/>
                                    <h4 className="font-bold text-green-800">Solar Panels</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span>Required Array Size:</span>
                                            <span className="font-medium">{results.solarArraySizeKW.toFixed(2)} kW</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Number of Panels:</span>
                                            <span className="font-medium">{results.numberOfPanels} panels</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl border-b pb-2 mb-3">Important Notes</h3>
                                <div className="text-xs text-gray-600 space-y-2 p-3 bg-gray-50 rounded-lg">
                                    <p>• Inverter size includes a <strong>25%</strong> safety margin for reliability.</p>
                                    <p>• Battery calculations assume a Depth of Discharge (DoD).</p>
                                    <p>• Solar panel estimates are based on your provided peak sunlight hours and account for typical system efficiency losses.</p>
                                    <p>• This is an estimate. Consult a qualified solar professional for a detailed site assessment and system design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200 text-center text-xs text-gray-500">
                        <h4 className="font-bold text-base text-black mb-2">Contact Elleyhill for a Quote</h4>
                        <p className="flex items-center justify-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span>admin@elleyhill.co.za</span>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span>+260 9740 41745</span>
                        </p>
                        <p className="flex items-center justify-center gap-2 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span>Chrislex warehouse unit 6, Roma Park Commercial (Off Zambezi Rd), Lusaka</span>
                        </p>
                        <p className="mt-4 text-balance">Developed by <a href="https://webco-2003.web.app" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-primary">Webco</a>. © 2024 Elleyhill. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0 flex justify-end gap-2 p-6 border-t bg-background">
                 <Button variant="outline" onClick={onClose}>Close</Button>
                <Button onClick={handleDownloadPdf} disabled={isGenerating} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {isGenerating ? (<><Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> Generating...</>) : (<><FileDown className="mr-2 h-4 w-4" /> Save as PDF</>)}
                </Button>
            </div>
        </>
    )
}
