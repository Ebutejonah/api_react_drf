import React from 'react'
import { useParams } from 'react-router-dom'


const AdvocatePage = () => {
    const params = useParams()
    const username = params.username
    return (
        <div>
            <h1>{username}'s Page</h1>
        </div>
    )
}

export default AdvocatePage