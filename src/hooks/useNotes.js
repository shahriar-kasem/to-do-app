import { useEffect, useState } from "react"

const useNotes = () => {
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/notes')
        .then(res=>res.json())
        .then(data=>setTask(data))
    },[])
    return [task, setTask];
}

export default useNotes;