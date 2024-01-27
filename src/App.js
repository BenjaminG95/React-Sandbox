import './App.css';
import logo from './logo.svg';

import UseStateExamples from './examples/useStateExamples';
import UseEffectExample from "./examples/useEffectExample";

function App() {
    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className={'flex-container flex-evenly w-100'}>
                    <UseStateExamples/>
                    <UseEffectExample/>
                </div>
            </header>
        </div>
    );
}

export default App;
