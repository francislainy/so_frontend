function Post({match}) {
    return (
        <div className="App">
            Hi from post detail {match.params.id}
        </div>
    );
}

export default Post;
