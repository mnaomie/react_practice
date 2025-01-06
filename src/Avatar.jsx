export function User({firstName, lastName, image}) {
    return (
        <div>
            <img src={image}/>
            <h3>I am {firstName} {lastName}</h3>
        </div>
    )
}
