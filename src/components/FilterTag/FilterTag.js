import './FilterTag.css'

function FilterTag(props) {

    return (
        <div className="FilterTag" onClick={() => props.handleClick(props.item)}>
            {props.isSelected ? <div className="FilterTag" style={styles.Active}>
                <p>{props.title}</p>
            </div> : <div className="FilterTag" style={styles.Inactive}>
                <p>{props.title}</p>
            </div>
            }
        </div>
    );
}

const styles = {
    Active: {
        background: 'grey'
    },
    Inactive: {
        background: 'white'
    }

}

export default FilterTag;
