import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);

  //use query, fetch only posts from user ("/?user=Dusan")
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data);
      console.log(res)
    };
    fetchPosts();
  }, [search]);


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