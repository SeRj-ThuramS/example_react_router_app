import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState'

let i = 0

function Home() {
    useEffect(() => {
        document.title = "Home Page"; // Устанавливаем title для страницы "About"
    }, []);

    
    const { state , setData } = useGlobalState()
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        setData(userInput)
        console.log(state)
    }

    return (
        <div>
            <h2>Home Page</h2>
            <p>User: {state ? state.data : 'No user'}</p>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <button onClick={handleSubmit}>Set User</button>
        </div>
    )
}

export default Home