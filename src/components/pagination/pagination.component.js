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
        {pageNumbers.map((number, index) => {
          return (
            <StyledPaginationItem key={number}>
              <StyledPaginationButton
                type="button"
                onClick={() => paginateHandler(number)}
                active={activeId === number}
                hidden={
                  pageNumbers.length > 6 &&
                  index !== 0 &&
                  index !== pageNumbers.length - 1 &&
                  (currentPage > index
                    ? currentPage - index >= 4
                    : index - currentPage >= 2)
                    ? true
                    : false
                }
                dotsBefore={
                  pageNumbers.length > 6 &&
                  index !== 0 &&
                  index !== pageNumbers.length - 1 &&
                  currentPage > index &&
                  currentPage - index === 3
                    ? true
                    : false
                }
                dotsAfter={
                  pageNumbers.length > 6 &&
                  index !== 0 &&
                  index !== pageNumbers.length - 1 &&
                  index > currentPage &&
                  index - currentPage === 1
                    ? true
                    : false
                }
              >
                {number}
              </StyledPaginationButton>
            </StyledPaginationItem>
          );
        })}
      </StyledPaginationList>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
