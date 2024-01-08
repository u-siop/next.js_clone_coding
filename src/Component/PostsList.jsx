import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css'
import { useState } from 'react';

function PostsList({isPosting, onStopPosting}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        // setPosts([postData, ...posts])      // postData : new post data, ...posts : exist data
        setPosts((exisitingPosts) => [postData, ...exisitingPosts]);    // technicalliy better way to update
    }

    // let modalContent;
    //
    // if(modalContent){
    //     modalContent =(
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }

    return(
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                {posts.map((post) => <Post author={post.author} body={post.body} />)}
            </ul>
        </>
    );
} 

export default PostsList;