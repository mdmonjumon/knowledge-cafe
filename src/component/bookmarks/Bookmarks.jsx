import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 pl-5 pt-6 space-y-6">

            <div className="py-5 bg-[#6047EC1A] rounded-lg border-2 border-[#6047EC]">
                <h2 className="text-center text-2xl text-[#6047EC] font-bold">Spent time on read: {readingTime} min</h2>
            </div>

            <div className="p-6 space-y-4 bg-[#1111110D] rounded-lg">
                <h2 className="text-2xl font-black">Bookmarked Blogs: {bookmarks.length} </h2>
                {
                    bookmarks.map((bookmark, i) => <Bookmark
                        bookmark={bookmark}
                        key={i}
                    ></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;