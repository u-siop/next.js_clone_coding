import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css'

function PostsList(){
    const [ enterBody, setEnteredBody ] = useState('');
    const [ enterAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    return(
        <>
        <Modal>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>
            <ul className={classes.posts}>
                <Post author={enterAuthor} body={enterBody}/>
                <Post author="Manuel" body="Check out the every course"/>
            </ul>
        </>
    );
}

export default PostsList;