import React, {useState} from 'react';
import Header from "../header/Header";
import ModalWindow from "../modalWindow/modalWindow";
import {useNavigate} from "react-router";

export default function NewsFeed({logOut, postsData, users}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePostClick = (id) => {
        navigate(`/post/${id}/info`, {state: {postId: id}});
    };

    return (
        <div className='newsFeed'>
            <Header logOut={logOut}/>
            <div className='newsFeed-addNewsBlock'>
                <h2 className='newsFeed-addNewsBlock-title'>All posts</h2>
                <button onClick={openModal} className='newsFeed-addNewsBlock-button'>
                    <p className='newsFeed-addNewsBlock-button-text'>Add news</p></button>
            </div>
            <div className='newsFeed-block'>
                {
                    postsData.map((post, id) =>
                        <div className='newsFeed-block-blocks' key={id} onClick={() => handlePostClick(post.id)}>
                            <h5 className='newsFeed-block-blocks-title'>{post.title}</h5>
                            <div className='newsFeed-block-blocks-description'>
                                <p className='newsFeed-block-blocks-description-text'>{post.body}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {isModalOpen && <ModalWindow users={users} closeModal={closeModal}/>}
        </div>
    );
};

