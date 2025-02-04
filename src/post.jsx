import './Posts.css'
export default function Post ({post}){
    const {userId, id, title, body} = post
    return (
        <div className='post'>
            <p>User Id : {userId}</p>
            <p>Id : {id}</p>
            <p>Tittle : {title}</p>
            <p>Body : {body}</p>
        </div>
    )
}