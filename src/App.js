import './App.css';
import logo from './logo.svg';

import UseStateExample from './examples/useStateExample/useStateExample';
import UseEffectExample from "./examples/useEffectExample/useEffectExample";
import UseRefExample from "./examples/useRefExample/useRefExample";
import UseCallbackExample from "./examples/useCallbackExample/useCallbackExample";
import PropsExample from "./examples/propsExample/propsExample";
import MemoExample from "./examples/useMemoExample/useMemoExample";
import UseContextExample from "./examples/useContextExample/useContextExample";
import UseReducerExample from "./examples/useReducerExample/useReducerExample";
import CustomHookExample from "./examples/customHookExample/customHookExample";

function App() {
    return (<div className={'App'}>
        <header className={'App-header'}>
            <h1> React Sandbox </h1>
        </header>
        <main className={'App-main'}>
            <img src={logo} className="App-logo" alt="logo"/>
            <p className={'text-small'}>
                Les fichiers avec les informations concernant ces méthodes sont disponibles <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main'}
                target={"_blank"} rel="noreferrer"
            >
                sur le dépôt GitHub</a> dans le dossier src puis <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main/src/examples'}
                target={"_blank"} rel="noreferrer"
            >   examples
                </a><br/>
                N'hésitez pas à cloner le dépôt et à tester les différentes méthodes. Amusez-vous à comprendre comment
                elles fonctionnent!
                <br/>
                Have fun! 🤩🚀
            </p>
            <div className={'flex-container flex-evenly w-100'}>
                <UseStateExample/>
                <UseEffectExample/>
                <UseCallbackExample/>
                <UseRefExample/>
                <MemoExample/>
                <PropsExample/>
                <UseReducerExample/>
                <UseContextExample/>
                <CustomHookExample/>
            </div>
        </main>
    </div>);
}

export default App;
