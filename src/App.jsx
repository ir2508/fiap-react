import Counter from "./components/Counter"

function App({tool = "VUE"}) {
    return (
        <>
            <h1>{tool}</h1>
            <Counter />
        </>
    )
}

export default App