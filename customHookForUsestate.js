function useMyState(initializer) {
    const [count, setCount] = useState(initializer);
    useEffect(() => {
        console.log(count);
    }, [count]);
    return [count, setCount];

}
export default function App() {
    const [counter, setCounter] = useMyState(0);
    const onClickCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            {counter}
            <button onClick={onClickCounter}>Click Me!</button>
        </div>
    );
}
