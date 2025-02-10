import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleAddToBookmark, handleAddReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                    handleAddReadingTime={handleAddReadingTime}
                    handleAddToBookmark={handleAddToBookmark}
                    blog={blog}
                    key={blog.id}
                ></Blog>)
            }


        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func
}

export default Blogs;