import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice";

const CounterView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts12);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    return (
      <div>
          {isLoading && <h3>Loading ...</h3>}
          {error && <h3>{error}</h3>}
          {posts && posts.map(post => <h3 key={post.id}>{post.id}</h3> )}
      </div>
    );
  };
  export default CounterView;