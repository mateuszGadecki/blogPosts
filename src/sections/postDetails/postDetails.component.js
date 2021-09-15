import { useState } from 'react';
import {
  StyledPostDetailsWrapper,
  StyledPostDetailsBox,
  StyledPostDetailsTitle,
  StyledPostDetailsUser,
  StyledPostDetailsText,
  StyledPostDetailsComments,
  StyledPostDetailsCommentsList,
  StyledPostDetailsComment,
  StyledDivider,
  StyledDividerIcon,
} from './postDetails.style';
import { StyledCenter } from '../../utils/styledComponents/center.style';
import Pagination from '../../components/pagination/pagination.component';
import { paginationHandler } from '../../components/pagination/paginationHandler';
import DividerIcon from '../../images/blog.svg';

const ContactBox = ({ content: { title, user, body, comments } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(3);
  const [animation, setAnimation] = useState(null);

  const renderComments = () => {
    return paginationHandler(comments, currentPage, commentsPerPage).map(
      (el) => (
        <StyledPostDetailsComment key={el.id}>
          <StyledPostDetailsUser>
            User: <b>{el.email}</b>
          </StyledPostDetailsUser>
          <StyledPostDetailsUser>
            Title: <b>{el.name}</b>
          </StyledPostDetailsUser>
          <StyledPostDetailsText left>{el.body}</StyledPostDetailsText>
        </StyledPostDetailsComment>
      )
    );
  };

  const paginate = (pageNumber) => {
    currentPage > pageNumber ? setAnimation('prev') : setAnimation('next');
    setTimeout(() => {
      setAnimation(null);
    }, 500);
    setCurrentPage(pageNumber);
  };

  return (
    <StyledCenter>
      <StyledPostDetailsWrapper>
        <StyledPostDetailsBox>
          <StyledPostDetailsTitle>{title}</StyledPostDetailsTitle>
          <StyledPostDetailsUser>
            User: <b>{user}</b>
          </StyledPostDetailsUser>
          <StyledPostDetailsText>{body}</StyledPostDetailsText>
        </StyledPostDetailsBox>
        <StyledDivider>
          <StyledDividerIcon src={DividerIcon} />
        </StyledDivider>
        <StyledPostDetailsComments>
          <StyledPostDetailsTitle>Comments</StyledPostDetailsTitle>
          <StyledPostDetailsCommentsList animation={animation}>
            {renderComments()}
          </StyledPostDetailsCommentsList>
        </StyledPostDetailsComments>
        <Pagination
          itemsPerPage={commentsPerPage}
          totalItems={comments.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </StyledPostDetailsWrapper>
    </StyledCenter>
  );
};

export default ContactBox;
