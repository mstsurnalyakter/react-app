import React from 'react'
import { useParams, useLocation } from 'react-router'
// import blogsData from '../data';

const Blog = () => {

    const {title} = useParams();
    const location = useLocation();



    // const [bodyData, setBodyData] = useState("");

    // useEffect(()=>{
    //         const blogData = blogsData.filter(blog => blog.title === title);
    //         setBodyData(blogData[0].body)
    // }, [])

  return (
    <div>
        <h1>{title} Page</h1>
        <p>{location.state.body.slice(0, 250)}</p>
        <p>{location.state.body.slice(251, 800)}</p>
    </div>
  )
}

export default Blog;