import React, { useEffect ,useState} from 'react'

const FetchResources = () => {

const [resourseType,setResourceType] = useState('posts');
const [items, setItems] = useState([]);




    useEffect(() => {
        console.log("useEffect called");
        fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error:', error))
    }, [resourseType])
   

  return (
    <div>
    <button onClick={() => setResourceType('posts')}>Posts</button>
    <button onClick={() => setResourceType('users')}>Users</button>
    <button onClick={() => setResourceType('albums')}>Albums</button>
    <h1>{resourseType}</h1>
    {items.map(item => <div key={item.id}>{item.title}</div>)}
    </div>

   

  )
}

export default FetchResources