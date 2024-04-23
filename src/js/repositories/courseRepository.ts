import { Course } from "../domain/types";
import { Remoter } from "../infrastructure/remoter";

type CourseDto = {
    readonly name: string
    readonly id: string
    readonly image: string
    readonly bgColor: string
    readonly tags: ReadonlyArray<string>
}

function dtoToCourse(dto: CourseDto): Course {
    return {
        name: dto.name,
        id: dto.id,
        imageUrl: dto.image,
        backgroundColor: dto.bgColor,
        tags: new Set(dto.tags)
    };
}

export async function getCourses(remoter: Remoter, url: string): Promise<ReadonlyArray<Course>> {
    const dtoList = await remoter.get<ReadonlyArray<CourseDto>>(url);
    return dtoList.map(dtoToCourse);
};
