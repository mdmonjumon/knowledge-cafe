import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div>
            <Blog
            
            blogs={blogs}
            ></Blog>
            
        </div>
    );
};

export default Blogs;