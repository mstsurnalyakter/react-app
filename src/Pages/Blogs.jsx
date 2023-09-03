import React, { useState } from 'react';
import blogsData from '../data';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + ' ...';
        } else {
            return str;
        }
    };
    return (
        <div>
            <h1>Blogs Page</h1>
            <section>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <article key={id}>
                            <h2>{title}</h2>
                            <p>{truncateString(body, 100)}</p>
                            <Link to={title} state={{ id, title, body }}>
                                Learn More
                            </Link>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Blogs;
