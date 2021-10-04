import { useState } from "react"



export default function GetUserComponent(props){
    const {setIsLoggedIn, setUser} = props

    const [userInput, setUserInput] = useState()

    function HandleLogin(){
        setUser(userInput)
        setIsLoggedIn(true)
    }


    return(
        <form>
            <input onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
        </form>
    )
}