import './App.css';
import FilterTagList from "./components/FilterTagList/FilterTagList";
import PostList from "./components/PostList/PostList";

function App() {
    return (
        <div className="App">
            <FilterTagList/>
            <PostList/>
        </div>
    );
}

export default App;
