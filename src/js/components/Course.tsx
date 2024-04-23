import { Course } from "../domain/types";

export type CourseProps = {
    readonly course: Course
}

export function Course(props: CourseProps) {
    const course = props.course;
    const style: React.CSSProperties = {
        backgroundColor: course.backgroundColor
    };

    return <div className="course">
        <div className="course-image" style={ style }>
            <img src={ props.course.imageUrl } alt={ course.name } />
        </div>
        <div className="course-title">{ course.name }</div>
    </div>;
}
