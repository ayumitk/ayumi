import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableOfContents = styled.div`
  padding: 2rem;
  margin: 1.5rem 0 3rem 0;
  border: solid 1px rgba(33, 37, 41, 0.2);
  display: inline-block;
  font-size: 1.6rem;
  ul {
    list-style: none;
    margin: 0;
    li {
      margin: 0.5rem 0;
      > ul {
        padding-left: 1.5rem;
      }
    }
  }
  > ul {
    padding: 0;
  }
`;

class TableOfContents extends Component {
  render() {
    const { toc } = this.props;

    return (
      <StyledTableOfContents>
        <p>目次</p>
        <div dangerouslySetInnerHTML={{ __html: toc }} />
      </StyledTableOfContents>
    );
  }
}

TableOfContents.propTypes = {
  toc: PropTypes.string.isRequired,
};

export default TableOfContents;
