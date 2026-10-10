import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import NewsHeader from './NewsHeader';
import { SiteContext } from '../context/SiteContext';
import moment from 'moment';

const UpdateTab = ({ post }) => {
    return (
        <Link className='cursor-pointer' to={`/int-cov-front/blog/${post._id}`}>
            <div className='date-container'>
                * {moment(post.createdAt).format('YY/MM/DD [at] LT')}
            </div>
            <div className='summary-container'>
                {post.summary}
            </div>
        </Link>
    );
};

const UpdatesSidebar = () => {
    let context = useContext(SiteContext);
    const [ updates, setUpdates ] = useState([]);

    useEffect(() => {
        axios.get(context.back + "/posts/top/posts").then((res) => {
            setUpdates(res.data.Posts);
        });
    }, []);

    return (
        <div className='side'>
            <NewsHeader text={'News'}/>
            {updates.map((value, key) => {
                return (
                    <div key={key} style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <UpdateTab post={value}/>
                        {
                            (updates.length - 1 != key) &&
                            <hr style={{ borderTop: '2px solid white', marginTop: '6px' }}/>
                        }
                    </div>
                );
            })}
        </div>
    )
};

export default UpdatesSidebar;