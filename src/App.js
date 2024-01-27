import './App.css';
import logo from './logo.svg';

import UseStateExample from './examples/useStateExample';
import UseEffectExample from "./examples/useEffectExample";
import UseRefExample from "./examples/useRefExample";

function App() {
    return (
        <div className={'App'}>
            <header className={'App-header'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className={'flex-container flex-evenly w-100'}>
                    <UseStateExample/>
                    <UseEffectExample/>
                    <UseRefExample/>
                </div>
            </header>
        </div>
    );
}

export default App;
