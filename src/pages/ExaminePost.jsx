import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './Common.css';
import { useParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { SiteContext } from '../context/SiteContext';
import moment from 'moment';

const CommentContainer = ({comment}) => {
    //admin
    return(
        <div className='content-container'>
            <div className={comment.admin ? 'admin-container' : 'title-container'}>
                {comment.username} at {moment(comment.createdAt).format('YY/MM/DD LT')}
            </div>
            <div style={{ padding: '8px' }}>
                {comment.content}
            </div>
        </div>
    );
};

const ExaminePost = () => {
    let context = useContext(SiteContext);
    let { id } = useParams();

    const defaultPostValues = {
        title: "", 
        content: "", 
        summary: "", 
        featured: false, 
        createdAt: Date.now()
    }
    const [ posts, setPosts ] = useState(defaultPostValues);
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        axios.get(context.back + "/posts/" + id).then((res) => {
            console.log(res);
            setPosts(res.data.Post);
        });
        GetPostComments();
    }, []);

    async function GetPostComments() {
        axios.get(context.back + "/comments/post/" + id).then((res) => {
            setComments(res.data.Comments);
        });
    }

    const defaultValues = { 
        username: "", content: ""
    }
    const [ newComment, setNewComment ] = useState(defaultValues);

    async function PostComment(e) {
        e.preventDefault();

        const finalComment = { 
            username: newComment.username, 
            admin: false, 
            content: newComment.content, 
            post: id, 
            createdAt: Date.now()
        };

        axios.post(context.back + "/comments", { newComment: finalComment }).then(() => {
            GetPostComments();
        });
    }

    return (
        <div className='content-with-side'>
            <div className='content' style={{ width: '100%' }}>
                <SectionHeader text={'Blog'}/>
                <div className='content-container'>
                    <div className='title-container'>
                        {posts.title}
                    </div>
                    <div style={{ padding: '8px' }}>
                        {posts.content}
                    </div>
                </div>
                <SectionHeader text={'Comments'}/>
                <div className='new-comment-container'>
                    <form onSubmit={PostComment}>
                        <label style={{ color: '#4557E1' }}>
                            Username
                            <input
                            className='text-input'
                            type='text'
                            autoComplete='off'
                            placeholder='Name'
                            value={newComment.username}
                            onChange={(e) => { setNewComment({ 
                                    username: e.target.value, content: newComment.content 
                                }) 
                            }}
                            />
                        </label>
                        <label style={{ color: '#4557E1' }}>
                            Content 
                        </label>
                        <textarea
                        className='text-input-long'
                        type='text'
                        autoComplete='off'
                        placeholder='Content'
                        value={newComment.content}
                        onChange={(e) => { setNewComment({ 
                                username: newComment.username, content: e.target.value
                            }) 
                        }}
                        />
                        <input 
                        className='button-input'
                        type='submit'
                        value={'Comment'}
                        />
                    </form>
                </div>
                <div>
                    {comments.map((value, key) => {
                        return(
                            <CommentContainer comment={value} key={key}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExaminePost;