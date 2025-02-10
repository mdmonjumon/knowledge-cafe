import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark, handleAddReadingTime }) => {

    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <div className='border-b-2 border-gray-300 py-6 space-y-4'>
                <div> <img className='rounded-xl' src={cover} alt="" /> </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-14 h-14 object-cover rounded-full' src={author_img} alt="" />

                        </div>
                        <div>
                            <h4 className='font-bold text-xl md:text-2xl'>{author} </h4>
                            <p className='text-base font-semibold text-[#11111199]'><span>{posted_date} (days ago) </span> </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-medium text-xl text-[#11111199]'> {reading_time} min read</span>
                        <button onClick={() => handleAddToBookmark(blog)} className='hover:cursor-pointer hover:text-xl text-[#11111199]'><FaRegBookmark></FaRegBookmark></button>
                    </div>
                </div>

                <h3 className='text-2xl md:text-4xl font-bold'>{title}  </h3>
                <p> {
                    hashtags.map((hashtag, i) => <span className='mr-2 font-medium text-xl text-[#11111199]' key={i}> {hashtag} </span>)
                }
                </p>
                <button 
                className='text-xl font-semibold underline text-[#6047EC]'
                onClick={() => handleAddReadingTime(reading_time)}>
                Mark as read
                </button>

            </div>

        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.array.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired
}
export default Blog;