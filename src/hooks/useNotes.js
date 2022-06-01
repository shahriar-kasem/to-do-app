import { useEffect, useState } from "react"
import { useQuery } from "react-query";

const useNotes = () => {
    const {data: notes, refetch, isLoading} = useQuery('notesData', () => fetch('http://localhost:5000/notes').then(res=>res.json()
    )
    )
    return {notes, refetch, isLoading};
}

export default useNotes;