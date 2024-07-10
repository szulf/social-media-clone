import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed } from './Feed';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/test" element={<div>route /test</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
