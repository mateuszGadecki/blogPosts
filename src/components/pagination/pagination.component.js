import { useState } from 'react';
import {
  StyledPaginationButton,
  StyledPaginationItem,
  StyledPaginationList,
  StyledPaginationWrapper,
} from './pagination.style';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const [activeId, setActiveId] = useState(currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateHandler = (number) => {
    paginate(number);
    setActiveId(activeId !== number ? number : null);
  };

  return (
    <StyledPaginationWrapper>
      <StyledPaginationList>
        {pageNumbers.map((number) => (
          <StyledPaginationItem key={number}>
            <StyledPaginationButton
              type="button"
              onClick={() => paginateHandler(number)}
              active={activeId === number}
            >
              {number}
            </StyledPaginationButton>
          </StyledPaginationItem>
        ))}
      </StyledPaginationList>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
