import Post from './Post';
import classes from './PostsList.module.css'

function PostsList(){
    return(
        <ul className={classes.posts}>
            <Post author="Maxmilian" body="React.js is Awesome!"/>
            <Post author="Manuel" body="Check out the every course"/>
        </ul>
    );
}

export default PostsList;