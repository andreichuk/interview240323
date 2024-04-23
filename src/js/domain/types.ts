export type CourseTag = string;

export type Course = {
    readonly name: string
    readonly id: string
    readonly imageUrl: string
    readonly backgroundColor: string
    readonly tags: ReadonlySet<CourseTag>
}

export class CourseList {
    readonly courses: ReadonlyArray<Course>
    readonly tags: ReadonlySet<CourseTag>

    constructor(courses: ReadonlyArray<Course>) {
        this.courses = courses;
        this.tags = CourseList.getTagSet(courses);
    }

    static getTagSet(courses: Iterable<Course>) : ReadonlySet<CourseTag> {
        const tagSet = new Set<CourseTag>();

        for(const course of courses) {
            for(const tag of course.tags) {
                tagSet.add(tag);
            }
        }

        return tagSet;
    }
}
