import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from './store/store';
import { getPosts } from './store/blogDataSlice';
import HomePage from './routes/home/home.component';
import ContactPage from './routes/contact/contact.component';
import BlogPage from './routes/blog/blog.compontent';
import PostPage from './routes/post/post.component';

const App = () => {
  const dispatch = useDispatch();
  const { postsList } = useSelector(selectPosts);

  useEffect(() => {
    !postsList && dispatch(getPosts());
  }, [dispatch, postsList]);

  const generatePostRoutes = () => {
    return postsList.map((el) => (
      <Route key={el.id} path={`/blog/post/${el.id}`} exact>
        <PostPage content={el} />
      </Route>
    ));
  };

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/blog" exact>
        <BlogPage />
      </Route>
      {postsList && generatePostRoutes()}
    </Switch>
  );
};

export default App;
