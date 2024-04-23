import { Menu } from "../components/Menu";
import { Courses } from "../components/Courses";
import { CourseList, CourseTag } from "../domain/types";
import { useState } from "react";
import { useAsyncEffect } from "../infrastructure/hooks/useAsyncEffect";
import { useAppSettings } from "../contexts/AppSettingsContext";

export type CoursesOverviewProps = {};

export function CoursesOverview(_props: CoursesOverviewProps) {
    const appSettings = useAppSettings();

    const [selectedTag, setSelectedTag] = useState<CourseTag | undefined>(undefined);
    const [courseList, setCourseList] = useState<CourseList | undefined>(undefined);

    useAsyncEffect(
        async () => {
            const courses =await appSettings.repository.course.list();
            setCourseList(new CourseList(courses));
        },
        []);

    if (courseList == null) {
        return <span>Loading. Please wait</span>;
    }

    return <div className="page-container">
        <Menu selectedTag={selectedTag} courses={courseList} onTagSelection={setSelectedTag} />
        <Courses selectedTag={selectedTag} courses={courseList} />
    </div>;
}
