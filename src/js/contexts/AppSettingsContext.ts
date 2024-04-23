import { createContext, useContext } from "react";
import { AppSettings } from "../infrastructure/appSettings";

export const AppSettingsContext = createContext<AppSettings>(undefined!);

export function useAppSettings() {
    return useContext(AppSettingsContext);
}
