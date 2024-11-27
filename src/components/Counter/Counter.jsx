import { useDispatch, useSelector } from "react-redux"
import { change, decrement, increment, reset } from "../../redux/actions"

export default function Counter() {
    const counter = useSelector(state => state.counter.counter)
    const step = useSelector(state => state.counter.step)

    const dispatch = useDispatch()
    const handlePlusClick = () => { 
        dispatch(increment())
    }
    const handleMinusClick = () => {
        dispatch(decrement())
     }
    const handleResetClick = () => {
        dispatch(reset())
     }
    const handleChangeStep = (e) => {
        dispatch(change(+e.target.value))
    }
    return (
        <div>
            <div>
                <h1>{counter}</h1>
                <input value={step} onChange={handleChangeStep}/>
                <div>
                    <button onClick={handleMinusClick}>minus</button>
                    <button onClick={handleResetClick}>reset</button>
                    <button onClick={handlePlusClick}>plus</button>
                </div>
            </div>
        </div>
    )
}