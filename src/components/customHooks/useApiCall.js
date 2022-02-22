import axios from "axios"
import { useEffect, useState } from "react"

export const useApiCall = (url)=>{
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setState(response.data.results)
            }).catch(e => console.log(e))
    }, [url])

    return state
}

