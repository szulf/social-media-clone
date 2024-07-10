import { Post, PostPropType } from './components/Post';
import { Navbar } from './components/Navbar/Navbar'

export function Feed() {
    // Some sort of fetch call to the backend here
    const test: PostPropType[] = [];
    for (let i = 0; i < 10; i++) {
        test.push({ username: `user${i + 1}`, message: `message${i + 1}` })
    }

    return (
        <div className='flex w-screen min-h-screen bg-gray-600'>
            <Navbar />
            <div className='flex flex-col items-center basis-3/5 bg-blue-500'>
                {test.map(post => <Post {...post} />)}
            </div>
            <div className='basis-1/5'>
                a suggest asdasdjk laksjdlka jlaksj dlkajsd
            </div>
        </div>
    );
}