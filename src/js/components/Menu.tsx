import { CourseTag, CourseList } from "../domain/types";
import { MenuItem } from "./MenuItem";

export type MenuProps = {
    readonly selectedTag: CourseTag | undefined
    readonly courses: CourseList
    readonly onTagSelection: (tag: CourseTag | undefined) => void
}

export function Menu(props: MenuProps) {
    const menuItems = [...props.courses.tags].map(
        tag => <MenuItem key={tag}
            title={tag}
            isActive={ tag === props.selectedTag }
            onSelection={() => props.onTagSelection(tag)} />
    );

    return <ul className="menu">
        <MenuItem title="Все темы"
            isActive={undefined === props.selectedTag}
            onSelection={() => props.onTagSelection(undefined)} />
        {menuItems}
    </ul>;
}
