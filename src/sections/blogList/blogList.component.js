import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/blogDataSlice';
import { selectPosts } from '../../store/store';
import { StyledCenter } from '../../utils/styledComponents/center.style';
import { Loader } from '../../utils/styledComponents/loader.style';
import {
  StyledBlogListWrapper,
  StyledBlogList,
  StyledBlogPost,
  StyledBlogPostTitle,
  StyledBlogPostUser,
  StyledBlogPostBody,
  StyledBlogPostButton,
} from './blogList.style';

const BlogList = () => {
  const dispatch = useDispatch();
  const { postsList, status } = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const truncate = (text) => {
    const ending = '...';
    return text.length > 100 && `${text.substring(0, 100)}${ending}`;
  };

  const renderBlogList = () => {
    return postsList.map((el) => (
      <StyledBlogPost key={el.id}>
        <StyledBlogPostTitle>{el.title}</StyledBlogPostTitle>
        <StyledBlogPostUser>User: {el.user}</StyledBlogPostUser>
        <StyledBlogPostBody>{truncate(el.body)}</StyledBlogPostBody>
        <StyledBlogPostButton>Read more</StyledBlogPostButton>
      </StyledBlogPost>
    ));
  };

  return (
    <StyledCenter>
      <StyledBlogListWrapper>
        {status !== 'success' ? (
          <Loader />
        ) : (
          <StyledBlogList>{renderBlogList()}</StyledBlogList>
        )}
      </StyledBlogListWrapper>
    </StyledCenter>
  );
};

export default BlogList;
