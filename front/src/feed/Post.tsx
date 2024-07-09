export type PostPropType = {
    username: string;
    message: string;
}

export function Post(props: PostPropType) {
    // Dont know how to do the profile pic
    // Gonna figure that out when working on backend probably
    return (
        <div className='bg-green-500 w-80'>
            <div>{props.username}</div>
            <div>{props.message}</div>
        </div>
    );
}