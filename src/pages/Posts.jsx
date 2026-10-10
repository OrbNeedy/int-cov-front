import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import SectionHeader from '../components/SectionHeader';
import './Common.css';
import { Link } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext';

const Posts = () => {
  let context = useContext(SiteContext);
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    axios.get(context.back + "/posts").then((res) => {
      setPosts(res.data.Posts);
    });
  }, []);

  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '100%' }}>
        <SectionHeader text={'Blog'}/>
        {posts.map((value, key) => {
          return(
            <div className='content-container' key={key}>
              <Link to={`/int-cov-front/blog/${value._id}`}>
                <div className='title-container'>
                  {value.title}
                </div>
                <div style={{ padding: '8px' }}>
                  {value.summary}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Posts;