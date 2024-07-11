import { useLoaderData } from "react-router-dom";
import placeHolder from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const {  cover_image, title, tags,body_html } = blog;
    return (
        <div>
            <div

                className=" mx-auto group 
            hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={cover_image || placeHolder} />
                <div className="py-10">
                    {
                        tags.map(tag => (
                            <a
                                key={tag}
                                rel="noopener noreferrer"
                                href='#'
                                className="px-3 mt-10">

                                #{tag}
                            </a>
                        ))
                    }
                </div>
                <div className="p-4 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                   <Markdown rehypePlugins={[rehypeRaw]}>{ body_html }</Markdown>
                    
                </div>
            </div>
        </div>
    );
};

export default Content;