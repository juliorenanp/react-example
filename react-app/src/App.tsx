import { useState } from "react"
import Onepiece from "./components/Onepiece"
import { AppRoutes } from "./routes"

function App() {
    const [crew, setMember] = useState<string[]>([
        'Zoro',
        'Luffy',
        'Nami'
    ])

    function createMember() {
        setMember([...crew, 'test'])
    }


    return (
        // <AppRoutes />
        <div>
            {crew.map(member => {
                return <Onepiece text={member} />
            })}

        {/* <p><Onepiece text="Zoro"/></p> 
        <p><Onepiece text="Luffy"/></p> 
        <p><Onepiece text="Nami"/></p>  */}

            <button 
                onClick={createMember} 
                style={{ 
                    backgroundColor: '#8257E6', 
                    border: 0, 
                    padding: '6px 12px', 
                    color: 'white' 
                    }}>
                Add caracter
            </button>
        </div>
    )
}

export default App
