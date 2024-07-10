type PanelPropsType = {
    title: string;
    bottom?: boolean;
};

export function Panel(props: PanelPropsType) {
    let bottomClass = '';
    if (props.bottom) {
        bottomClass = 'mt-auto';
    }

    return (
        <div className={`${bottomClass} text-lg rounded-lg bg-gray-700 my-5 py-3 w-4/5 text-center text-white shadow-lg hover:bg-gray-800 select-none transition duration-200 active:translate-y-0.5`}>
            {props.title}
        </div>
    );
}
