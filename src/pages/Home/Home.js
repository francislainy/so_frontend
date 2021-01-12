import FilterTagList from "../../components/FilterTagList/FilterTagList";
import PostList from "../../components/PostList/PostList";
import {useState} from "react";

function Home() {

    const [activeListItem, setActiveListItem] = useState({});

    const activeItem = (item) => {
        setActiveListItem(item)
    }

    return (
        <div className="Home">
            <FilterTagList
                tagItemId={activeListItem.id}
                activeListItem={activeListItem}
                activeItem={activeItem}
            />
            <PostList
                tagItemId={activeListItem.id}
            />
        </div>
    );
}

export default Home;
