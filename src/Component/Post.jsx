// const names = ['Maximilian', 'Manuel'];
function Post(props){
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return(
        <div>
            <p>{props.author}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;