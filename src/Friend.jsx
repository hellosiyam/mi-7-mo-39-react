export default function Friend ({friend}) {
    const {name, username, email} = friend
    return(
        <div className="box">
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    )
}