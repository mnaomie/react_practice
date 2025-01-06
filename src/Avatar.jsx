export function User(firstName, lastName, img) {
    return (
        <div>
            <img src={img} alt="" />
            <h3>I am {firstName} {lastName}</h3>
        </div>
    )
}
