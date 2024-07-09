import { Post, PostPropType } from './Post';

export function Feed() {
    // Some sort of fetch call to the backend here
    const test: PostPropType[] = [];
    for (let i = 0; i < 10; i++) {
        test.push({username: `user${i+1}`, message: `message${i+1}`})
    }

    return (
        <div className='flex w-screen bg-gray-600'>
            <nav className='grow'>
                Vertical navbar here
            </nav>
            <div className='flex flex-col items-center grow bg-blue-500'>
                {test.map(post => <Post {...post}/>)}
            </div>
            <div className='grow'>
                Something like suggested accounts/posts
            </div>
        </div>
    );
}