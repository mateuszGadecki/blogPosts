import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../store/store';
import { StyledCenter } from '../../utils/styledComponents/center.style';
import { Loader } from '../../utils/styledComponents/loader.style';
import Pagination from '../../components/pagination/pagination.component';
import {
  StyledBlogListPageWrapper,
  StyledBlogListWrapper,
  StyledBlogList,
  StyledBlogPost,
  StyledBlogPostTitle,
  StyledBlogPostUser,
  StyledBlogPostBody,
  StyledBlogPostButton,
} from './blogList.style';
import { paginationHandler } from '../../components/pagination/paginationHandler';

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { postsList, status } = useSelector(selectPosts);

  const truncate = (text) => {
    const ending = '...';
    return text.length > 100 && `${text.substring(0, 100)}${ending}`;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const renderBlogList = () => {
    return paginationHandler(postsList, currentPage, postsPerPage).map((el) => (
      <StyledBlogPost key={el.id}>
        <StyledBlogPostTitle>{el.title}</StyledBlogPostTitle>
        <StyledBlogPostUser>User: {el.user}</StyledBlogPostUser>
        <StyledBlogPostBody>{truncate(el.body)}</StyledBlogPostBody>
        <StyledBlogPostButton to={`/blog/post/${el.id}`}>
          Read more
        </StyledBlogPostButton>
      </StyledBlogPost>
    ));
  };

  return (
    <StyledCenter>
      <StyledBlogListPageWrapper>
        {status !== 'success' ? (
          <Loader />
        ) : (
          <StyledBlogListWrapper>
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={postsList.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <StyledBlogList>{renderBlogList()}</StyledBlogList>
          </StyledBlogListWrapper>
        )}
      </StyledBlogListPageWrapper>
    </StyledCenter>
  );
};

export default BlogList;
