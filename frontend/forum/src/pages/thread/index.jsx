import { useState, useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

const ThreadPage = () => {
    let [searchParamsList] = useSearchParams()
    let threadName = searchParamsList.get('t')

    console.log(threadName)

    let [threadList, setThreadList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/thread-info?thread_name=${threadName}`).then(res => console.log(res.data))
    }, [])


    return (<>
        <h1>Threads</h1>
    </>)
}

export default ThreadPage;