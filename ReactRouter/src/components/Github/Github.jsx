import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // })
    // ;
    return (
        <div className="text-center m-4 bg-gray-700 p-4 text-3xl">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Image" width={300} /></div>
    )
}

export default Github

export const GithubInfoLoader = async () =>{
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return await response.json()
}