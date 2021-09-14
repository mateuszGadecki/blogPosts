import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../store/blogDataSlice';
import { StyledBlogListWrapper } from './blogList.style';

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <StyledBlogListWrapper></StyledBlogListWrapper>;
};

export default BlogList;
