import './Home.css'
const Home=(props)=>{
    return(
        <div className="Home">
        <h1>We have currently {props.length.length} articles in our dataBase (thank you for your visit)</h1>
        </div>
    )
}
export default Home