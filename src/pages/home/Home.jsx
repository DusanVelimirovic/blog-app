import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios";
import { useEffect, useState } from 'react';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
      console.log(res)
    };
    fetchPosts();
  }, []);


  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}  />
        <Sidebar />
    </div>

    </>
  )
}

export default Home