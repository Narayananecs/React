import '../components/Card.css'
function Card(props) {
    let classs = "card "+props.className; 
    return (<div className={classs}>{props.children} </div>)
}
export default Card