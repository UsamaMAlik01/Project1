
import { useParams } from "react-router-dom"
function User() {
    const { userId } = useParams()
    return (
        <div className="bg-slate-800 text-white flex w-full h-15 text-center justify-center font-bold p-4">User: {userId}</div>
    )
}

export default User
