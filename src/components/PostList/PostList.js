import PostItem from '../PostItem/PostItem'

const data = [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" }
];

function PostList() {
    return (
        <ul>
            {data.map((item) => <PostItem key={item.id} value={item.name}/>)}
        </ul>
    );
}

export default PostList;
