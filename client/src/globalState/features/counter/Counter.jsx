import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counterSlice"

export const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>

            </div>
        </div>
    )
}
