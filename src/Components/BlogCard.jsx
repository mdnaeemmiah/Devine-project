import { Link } from "react-router-dom";
import placeHolder from '../assets/404.jpg'
import { MdDelete } from "react-icons/md";



const BlogCard = ({blog,deletable,handleDelete}) => {

    const {cover_image,title,description,published_timestamp,published_at,id} =blog;
    
 
    
    return (
        <div className="flex relative py-10">
            <Link 
            to={`/blog/${id}`}
            className="max-w-sm mx-auto group 
            transition 
            hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500"
                 src={cover_image || placeHolder} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{published_at}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deletable && <div
                onClick={()=>handleDelete(id)}
                className="absolute -top-5 -right-0 pt-10">
                    <MdDelete size={30}></MdDelete>
                    </div>
            }
        </div>
    );
};

export default BlogCard;