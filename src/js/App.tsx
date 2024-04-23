import { AppSettingsProvider } from "./components/AppSettings";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { CoursesOverview } from "./pages/CoursesOverview";

export function App() {
    return <ErrorBoundary message="Something went wrong. Please contact the support.">
        <AppSettingsProvider>
            <CoursesOverview />
        </AppSettingsProvider>
    </ErrorBoundary>;
}
