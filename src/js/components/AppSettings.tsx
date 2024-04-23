import { PropsWithChildren } from "react";
import { AppSettings } from "../infrastructure/appSettings";
import { AppSettingsContext } from "../contexts/AppSettingsContext";
import { getCourses } from "../repositories/courseRepository";
import { remoter } from "../infrastructure/remoter";
import urls from "../infrastructure/urls";

export function AppSettingsProvider(props: PropsWithChildren<{}>) {
    const settings: AppSettings = {
        repository: {
            course: {
                list: async () => await getCourses(remoter, urls.courses.list)
            }
        }
    } as const;

    return (
        <AppSettingsContext.Provider value={ settings }>
            { props.children }
        </AppSettingsContext.Provider>
    );
}
