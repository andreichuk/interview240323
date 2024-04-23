export type MenuItemProps = {
    readonly title: string
    readonly isActive: boolean
    readonly onSelection: () => void
}

export function MenuItem(props: MenuItemProps) {
    const className = "menu-item" + (props.isActive ? " active" : "");

    return <li className={ className } onClick={ () => props.onSelection() }>
        {props.title}
    </li>;
}
