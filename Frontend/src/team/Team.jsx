import { useEffect } from 'react'
import { Team_Form, Team_Info } from './Team_Import'
import './assets/css/Team.css'

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="team-page">
            <Team_Info />
            <Team_Form />
        </div>
    )
}

export default Team