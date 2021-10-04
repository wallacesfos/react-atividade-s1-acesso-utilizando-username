

export default function WelcomePage(props){
    const {user, setIsLoggedIn} = props

    function HandleLogout(){
        setIsLoggedIn(false)
    }

    return(
        <div>
            <h4>Bem vindo {user}!</h4>
            <button onClick={HandleLogout}>sair</button>
        </div>
    )
}