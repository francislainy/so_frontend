import FilterTag from "../FilterTag/FilterTag";

function FilterTagList() {
    return <div className="FilterTagList" style={styles.FilterTagList}>
        <FilterTag title="Interesting" isSelected={true}/>
        <FilterTag title="Bountied" isSelected={false}/>
        <FilterTag title="Hot" isSelected={false}/>
        <FilterTag title="Week" isSelected={false}/>
        <FilterTag title="Month" isSelected={false}/>
    </div>;
}

const styles = {
    FilterTagList: {
        display: "flex",
        flexDirection: "row"
    }
}

export default FilterTagList;
