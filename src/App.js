import './App.css';
import logo from './logo.svg';

import UseStateExample from './examples/useStateExample';
import UseEffectExample from "./examples/useEffectExample";
import UseRefExample from "./examples/useRefExample";
import UseCallbackExample from "./examples/useCallbackExample";

function App() {
    return (<div className={'App'}>
        <header className={'App-header'}>
            <img src={logo} className="App-logo" alt="logo"/>
            <p className={'text-small'}>
                Les fichiers avec les informations concernant ces méthodes sont disponibles <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main'}
                target={"_blank"} rel="noreferrer"
            >
                sur le dépôt GitHub</a> dans le <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main/src/examples'}
                target={"_blank"} rel="noreferrer"
            >
                dossier src</a><br/>
                N'hésitez pas à cloner le dépôt et à tester les différentes méthodes. Amusez-vous à comprendre comment
                elles fonctionnent!
                <br/>
                Have fun! 🤩🚀
            </p>
            <div className={'flex-container flex-evenly w-100'}>
                <UseStateExample/>
                <UseEffectExample/>
                <UseRefExample/>
                <UseCallbackExample/>
            </div>
        </header>
    </div>);
}

export default App;
