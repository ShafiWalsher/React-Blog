import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My New Blog', body: 'lorem ipsum.....', author: 'Sam', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum.....', author: 'David', id: 2},
        {title: 'React Web Application Tips', body: 'lorem ipsum.....', author: 'Sam', id: 3},
        {title: 'Responsive Web development Tips', body: 'lorem ipsum.....', author: 'SW', id: 4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs ={blogs} title="New Blogs" handleDelete = {handleDelete}/>
        </div>
    );
}
 
export default Home;