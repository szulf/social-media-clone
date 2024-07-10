import { Panel } from './Panel';

export function Navbar() {
    return (
        <div className='basis-1/5 flex flex-col items-center'>
            <Panel title='Main Page' />
            <Panel title='Search' />
            <Panel title='Messages' />
            <Panel title='Saved' />
            <Panel title='Account' />
            <Panel title='Settings' bottom />
        </div>
    );
}