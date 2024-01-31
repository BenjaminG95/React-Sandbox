import logo                        from "../logo.svg";
import UseStateExample             from "../components/examples/useState/useStateExample";
import UseEffectExample            from "../components/examples/useEffect/useEffectExample";
import UseCallbackExample          from "../components/examples/useCallback/useCallbackExample";
import UseRefExample               from "../components/examples/useRef/useRefExample";
import MemoExample                 from "../components/examples/useMemo/useMemoExample";
import PropsExample                from "../components/examples/props/propsExample";
import UseReducerExample           from "../components/examples/useReducer/useReducerExample";
import UseContextExample           from "../components/examples/useContext/useContextExample";
import CustomHookExample           from "../components/examples/customHook/customHookExample";
import ReactRouterExample          from "../components/examples/reactRouter/reactRouterExample";
import ReactRouterWithParamExample from "../components/examples/reactRouter/reactRouterWithParamExample";
import ReactResource               from "../components/reactResources";

const Home = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center justify-center ">
                <img src={ logo } className="animate-spin h-32 mt-10" alt="logo"/>
                <div className="">
                    <p className="text-xl font-bold text-gray-800 mt-10 mb-16 text-center p-3">
                        Les fichiers avec les informations concernant ces méthodes sont disponibles
                        <a className="text-cyan-300 hover:text-indigo-800"
                           href="https://github.com/BenjaminG95/React-Sandbox/tree/main"
                           target="_blank" rel="noreferrer"> sur le dépôt GitHub</a> dans le dossier src/components
                        puis <br/><a
                        className="text-cyan-300 hover:text-indigo-800"
                        href="https://github.com/BenjaminG95/React-Sandbox/tree/main/src/components/examples"
                        target="_blank" rel="noreferrer"
                    > examples</a>.
                        N'hésitez pas à cloner le dépôt et à tester les différentes méthodes. Amusez-vous à
                        comprendre comment elles fonctionnent!
                        <br/>
                        Have fun! 🤩🚀
                    </p>
                </div>
                <div className="flex justify-center ">
                    <div
                        className="grid gap-4 w-full place-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5">
                        <UseStateExample/>
                        <UseEffectExample/>
                        <UseCallbackExample/>
                        <UseRefExample/>
                        <MemoExample/>
                        <PropsExample/>
                        <UseContextExample/>
                        <ReactRouterExample/>
                        <ReactRouterWithParamExample/>
                        <CustomHookExample/>
                        <UseReducerExample/>
                        <ReactResource/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
