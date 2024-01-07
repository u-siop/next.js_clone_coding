import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css'

function PostsList(){
    const [ modalIsVisible, setModalIsVisible ] = useState(true);
    const [ enterBody, setEnteredBody ] = useState('');
    const [ enterAuthor, setEnteredAuthor ] = useState('');

    function hideModalHandler(){
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (modalIsVisible){
        modalContent = <Modal onClose={hideModalHandler}>
        <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
        />
    </Modal>
    }

    return(
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enterAuthor} body={enterBody}/>
                <Post author="Manuel" body="Check out the every course"/>
            </ul>
        </>
    );
}

export default PostsList;