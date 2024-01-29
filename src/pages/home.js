import logo from "../logo.svg";
import UseStateExample from "../components/examples/useState/useStateExample";
import UseEffectExample from "../components/examples/useEffect/useEffectExample";
import UseCallbackExample from "../components/examples/useCallback/useCallbackExample";
import UseRefExample from "../components/examples/useRef/useRefExample";
import MemoExample from "../components/examples/useMemo/useMemoExample";
import PropsExample from "../components/examples/props/propsExample";
import UseReducerExample from "../components/examples/useReducer/useReducerExample";
import UseContextExample from "../components/examples/useContext/useContextExample";
import CustomHookExample from "../components/examples/customHook/customHookExample";
import ReactRouterExample from "../components/examples/reactRouter/reactRouterExample";
import ReactRouterWithParamExample from "../components/examples/reactRouter/reactRouterWithParamExample";

const Home = () => {
    return (<>
        <main className={'App-main'}>
            <img src={logo} className="App-logo" alt="logo"/>
            <p className={'text-small'}>
                Les fichiers avec les informations concernant ces méthodes sont disponibles <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main'}
                target={"_blank"} rel="noreferrer"
            > sur le dépôt GitHub</a> dans le dossier src puis <a
                className={'color-teal'}
                href={'https://github.com/BenjaminG95/React-Sandbox/tree/main/src/examples'}
                target={"_blank"} rel="noreferrer"
            > examples
            </a><br/>
                N'hésitez pas à cloner le dépôt et à tester les différentes méthodes. Amusez-vous à
                comprendre comment
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
                <ReactRouterExample/>
                <ReactRouterWithParamExample/>
            </div>
        </main>
    </>)
}

export default Home;
