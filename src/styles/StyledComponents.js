import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  column-gap: ${props => props.colGap}rem;
  row-gap: ${props => props.colGap}rem;
  @media (max-width: 991.98px) {
    grid-template-columns: ${props => ((props.col > 2) ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)')};
  }
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 565.98px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWith};
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
  @media (max-width: 1199.98px) {
    margin: 0 4%;
  }
`;

const Input = styled.input`
  width: 100%;
  display:block;
  padding: .375rem .75rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

const Label = styled.label`
  margin-bottom: 1.5rem;
  display: block;
  span{
    display: inline-block;
    margin-bottom: .5rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  display:block;
  padding: .375rem .75rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

const Button = styled.button`
  background: ${props => props.theme.color.pink};
  padding: 1rem 2rem;
  display: inline-block;
  color: #FFF;
  text-decoration: none;
  &:hover{
    opacity: 0.9;
    text-decoration: none;
    color: #FFF;
  }
`;

const BlogRollGrid = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 565.98px) {
    grid-template-columns: 1fr;
  }
  article{
    box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    background: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover{
      box-shadow: rgba(39, 44, 49, 0.2) 8px 14px 38px, rgba(39, 44, 49, 0.1) 1px 3px 8px;
    }
    a{
      display:block;
      &:hover{
        text-decoration: none;
      }
    }
    p{
      margin-top: 0.5rem;
      font-size: 1.5rem;
      &.date{
        color: ${props => props.theme.color.gray};
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
    .blog-roll-grid__inner{
      padding: 2rem 2rem 4rem 2rem;
    }
    .blog-roll-grid__image{
      line-height:0;
    }
  }
`;

const PageTitle = styled.h1`
  padding: 5rem 0;
  @media (max-width: 565.98px) {
    padding: 3rem 0;
  }
`;


export {
  Grid, Container, Input, Label, Textarea, Button, BlogRollGrid, PageTitle,
};
