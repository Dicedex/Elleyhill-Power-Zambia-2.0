
import { z } from "zod";

// Schema for a single appliance
export const applianceSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Appliance name is required."),
  wattage: z.number({invalid_type_error: "Must be a number"}).min(1, "Wattage must be at least 1."),
  quantity: z.number({invalid_type_error: "Must be a number"}).min(1, "Quantity must be at least 1."),
});

// Schema for the calculator form
export const calculatorSchema = z.object({
  appliances: z.array(applianceSchema).min(1, "Please add at least one appliance."),
  applicationType: z.enum(["household", "company", "industrial"]),
  systemVoltage: z.enum(["12", "24", "48"]),
  backupDuration: z.number({invalid_type_error: "Must be a number"}).min(1, "Backup duration must be at least 1 hour."),
  peakSunlightHours: z.number({invalid_type_error: "Must be a number"}).min(1, "Sunlight hours must be at least 1."),
  singlePanelWattage: z.number({invalid_type_error: "Must be a number"}).min(1, "Panel wattage must be at least 1."),
});

// Type inference for Appliance schema
export type Appliance = z.infer<typeof applianceSchema>;
// Type inference for CalculatorValues schema
export type CalculatorValues = z.infer<typeof calculatorSchema>;

// Type definition for calculation results
export type CalculationResults = {
    totalLoad: number;
    inverterSizeKW: number;
    batteryBankKWh: number;
    batteryBankAh: number;
    systemVoltage: number;
    solarArraySizeKW: number;
    numberOfPanels: number;
    depthOfDischarge: number;
}
