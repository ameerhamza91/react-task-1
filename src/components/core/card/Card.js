import "./card.css"

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <strong>Author:</strong>
                <p>{props.name}</p>
                <strong>Title:</strong>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
export default Card;