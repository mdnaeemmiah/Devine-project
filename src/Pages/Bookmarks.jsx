import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../UTils";
import BlogCard from "../Components/BlogCard";


const Bookmarks = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
            const storedBlogs = getBlogs()
            setBlogs(storedBlogs);
    },[])

    const handleDelete =id=>{
        deleteBlog(id);
        const storedBlogs = getBlogs()
            setBlogs(storedBlogs);
      }
    
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
         blogs.map(blog=><BlogCard handleDele={handleDelete} deletable={true}   key={blog.id} blog={blog}></BlogCard>)
        }
       
     </div>
    );
};

export default Bookmarks;