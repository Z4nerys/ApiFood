import axios from "axios"
import { useEffect, useState } from "react"

export const useApiCall = (url) => {
    const [state, setState] = useState([])

    useEffect(() => {
        try {
            axios.get(url)
                .then(response => {
                    setState(response.data.results)
                }).catch(e => console.log(e))
        } catch (error) {
            console.log('fallo x: ' + error)
        }

    }, [url])

    return state
}

