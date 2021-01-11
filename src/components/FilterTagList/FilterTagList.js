import FilterTag from "../FilterTag/FilterTag";
import {useState} from "react";
import PostList from "../PostList/PostList";

function FilterTagList() {

    const [activeListItem, setActiveListItem] = useState({
        "id": 1,
        "title": "Interesting",
    });
    const [show, setShow] = useState(false)
    // const [show, setShow] = useState(false)

    const [data] = useState([
        {id: 1, title: "Interesting"},
        {id: 2, title: "Bountied"},
        {id: 3, title: "Hot"},
        {id: 4, title: "Week"},
        {id: 5, title: "Month"},
    ])

    const handleClick = (item) => activeListItem === item ?
        activeEmpty() :
        activeWithItem(item);

    const activeEmpty = () => {
        setActiveListItem()
    }

    const activeWithItem = (item) => {
        setActiveListItem(item)
        setShow(true)
    }

    return <div>
        <div className="FilterTagList"
             style={styles.FilterTagList}>
            {
                data.map(i =>
                    <FilterTag
                        key={i.id}
                        item={i}
                        title={i.title}
                        handleClick={handleClick}
                        isSelected={activeListItem.id === i.id}
                    />)
            }
        </div>
        {/*{show ? <PostList/> : ""}*/}
        <PostList tagItemId={activeListItem.id}/>

    </div>;
}

const styles = {
    FilterTagList: {
        display: "flex",
        flexDirection: "row"
    }
}

export default FilterTagList;
