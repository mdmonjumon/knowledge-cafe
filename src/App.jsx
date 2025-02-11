import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  const handleAddReadingTime = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);

  }

  return (
    <>

      <Header></Header>
      <div className='md:flex mt-8'>
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blogs>

        <Bookmarks
          readingTime={readingTime}
          bookmarks={bookmarks}
        ></Bookmarks>
      </div>

    </>
  )
}

export default App
