import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from './postsSlice'

const Posts = () => {
  // const posts = useSelector((state) => state.posts.entities);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect (() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts Components</h2>
      <h4>{posts.status}</h4>

        {posts.status === 'loading' ? (<h6>Loading</h6>) : posts.status === 'failed' ? (<h6>Error in Loading</h6>) :
          (
            <ul>
              {posts.entities.map(item => (
                <li key={item.id} className="list-inline">
                  <span>{item.id}</span>:
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )
        }

    </div>
  )
}

export default Posts;

// ({posts.entities.map(item => (<p>{item.title}</p>))})
// <div>{posts.status === 'loading' ? 'Loading: {{posts.status}}' : 'Loaded: {{posts.status}}'}</div>
