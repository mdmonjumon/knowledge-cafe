import PropTypes from 'prop-types';

const Blog = ({blogs}) => {
    console.log(blogs)
    return (
        <div>
            <h1>Total Blogs: {blogs.length} </h1>
            
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blogs: PropTypes.array.isRequired
}