import { useState } from "react"
import Onepiece from "./components/Onepiece"

function App() {
    const [crew, setMember] = useState<string[]>([
        'Zoro',
        'Luffy',
        'Nami'
    ])

    function createMember(){
        setMember([...crew,'test'])
    }


    return (
        <div>
            {crew.map(member => {
                return <Onepiece text={member} />
            })}

            {/* <p><Onepiece text="Zoro"/></p> 
        <p><Onepiece text="Luffy"/></p> 
        <p><Onepiece text="Nami"/></p>  */}

            <button onClick={createMember}>Add caracter</button>
        </div>
    )
}

export default App
