import "bootstrap/dist/css/bootstrap.min.css";
import AddPostForm from "./store/features/components/AddPostForm";
import PostList from "./store/features/post/PostList";

function App() {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
