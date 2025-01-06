export function User(props) {
    return (
        <div>
            <img src={props.img} alt="" />
            <h3>I am {props.firstName} {props.lastName}</h3>
        </div>
    )
}
