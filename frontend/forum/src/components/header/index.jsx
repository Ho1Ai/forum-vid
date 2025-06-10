import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Header = () => {
    let [threadList, setThreadList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/').then(res => console.log(res.data))
    }, [])

    return (<header>
        <h2>
            Forum
        </h2>
        
        <nav>
            <a to={{pathname: "thread", search: "q"}} href="thread?t=q">q</a>
        </nav>

    </header>)
}

export default Header