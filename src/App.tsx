import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from './components/utility/BreakpointProvider';
import Routes from './routes/Routes';

const App = (): React.ReactElement => (
    <BrowserRouter>
        <BreakpointProvider>
            <div className="app">
                <Routes />
            </div>
        </BreakpointProvider>
    </BrowserRouter>
);

export default App;
