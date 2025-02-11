import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    return (
        <div className="p-5 bg-[#FFFFFF] rounded-lg">
            <h2 className="text-lg font-semibold"> {bookmark.title} </h2>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;
