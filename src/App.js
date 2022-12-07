import './App.css';
import {useState} from "react";
import {useSignalREffect} from "./index";
import {Router} from "./Router";


function App() {
    const [messages, setMessage] = useState([]);

    useSignalREffect("newMessage", (message) => {
        console.log(message);
    }, [messages])

    return (<Router/>);
}

export default App;
