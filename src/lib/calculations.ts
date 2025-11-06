import { type CalculatorValues, type CalculationResults } from './schemas';

const INVERTER_SAFETY_MARGIN = 1.25; // 25%
const BATTERY_DEPTH_OF_DISCHARGE = 0.8; // 80%
const SOLAR_SYSTEM_EFFICIENCY_LOSS = 0.85; // Account for losses (inverter, wiring, dirt etc.)

export function calculateAll(values: CalculatorValues): CalculationResults {
    const totalLoad = values.appliances.reduce((sum, app) => sum + (app.wattage * app.quantity), 0);

    const inverterSizeKW = (totalLoad * INVERTER_SAFETY_MARGIN) / 1000;

    const systemVoltage = parseInt(values.systemVoltage, 10);
    const backupDuration = values.backupDuration;
    
    // Total energy required for backup, accounting for battery efficiency
    const totalEnergyWh = (totalLoad * backupDuration) / BATTERY_DEPTH_OF_DISCHARGE;
    const batteryBankKWh = totalEnergyWh / 1000;
    const batteryBankAh = totalEnergyWh / systemVoltage;

    // Solar Panel Calculation
    // Total energy panels need to generate daily, accounting for system losses
    const requiredEnergyGenerationWh = totalEnergyWh / SOLAR_SYSTEM_EFFICIENCY_LOSS;
    
    // Total panel wattage needed
    const totalPanelWattage = requiredEnergyGenerationWh / values.peakSunlightHours;

    const solarArraySizeKW = totalPanelWattage / 1000;

    // Number of panels
    const numberOfPanels = Math.ceil(totalPanelWattage / values.singlePanelWattage);

    return {
        totalLoad,
        inverterSizeKW,
        batteryBankKWh,
        batteryBankAh,
        systemVoltage: systemVoltage,
        depthOfDischarge: BATTERY_DEPTH_OF_DISCHARGE,
        solarArraySizeKW,
        numberOfPanels,
    };
}
