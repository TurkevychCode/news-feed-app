import {useLocation, useNavigate} from "react-router";
import {useContext, useEffect, useState} from "react";
import Header from "../header/Header";
import UsersContext from "../context/UserContext";

export default function InfoCart({logOut}) {
    const location = useLocation();
    const postId = location.state?.postId;
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const users = useContext(UsersContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const selectedPost = await response.json();
                setPost(selectedPost);
            } catch (error) {
                console.error('Error fetching post:', error.message);
            }
        };
        fetchData()
    }, [postId]);

    const handleDeletePost = async () => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            });
            navigate('/news-feed');
        } catch (error) {
            console.error('Error deleting post:', error.message);
        }
    };
    const handleComeback = () => {
        navigate("/news-feed");
    };

    const currentUser = users.find(user => user.id === post?.userId);

    return (
        <>
            <Header/>
            <div className='infoCart'>
                <div className='infoCart-block'>
                    {post && (
                        <div className='infoCart-block-text'>
                            <h2 className='infoCart-block-text-title'>{post.title}</h2>
                            <p className='infoCart-block-text-description'>{post.body}</p>
                        </div>
                    )}
                    {currentUser && (
                        <div className='infoCart-block-user'>
                            <h3>User Name: {currentUser.name}</h3>
                            <p>User Email: {currentUser.email}</p>
                            <p>User
                                address: {currentUser.address.city}, {currentUser.address.street} {currentUser.address.suite}</p>
                        </div>
                    )}
                    <div className='infoCart-block-button'>
                        <button className='infoCart-block-button-comebackButton' onClick={handleComeback}>Comeback</button>
                        <button className='infoCart-block-button-deleteButton' onClick={handleDeletePost}>Delete news
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}