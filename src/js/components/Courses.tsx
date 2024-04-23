import { Course } from "../components/Course";
import { CourseList } from "../domain/types";

export type CoursesProps = {
    selectedTag: string | undefined
    courses: CourseList
}

export function Courses(props: CoursesProps) {
    const coursesOfTag = (
        props.selectedTag == null
        ? props.courses.courses
        : props.courses.courses.filter(course => course.tags.has(props.selectedTag!))
    );

    const courses = coursesOfTag.map(
        course => <Course key={ course.id } course={ course } />
    );

    return <div className="courses">
        { courses }
    </div>;
}
