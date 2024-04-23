import { Course } from "../domain/types"

export type AppSettings = {
    readonly repository: {
        readonly course: {
            readonly list: () => Promise<ReadonlyArray<Course>>
        }
    }
}
