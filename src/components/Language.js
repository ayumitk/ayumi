import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  border-left: solid 1px #CCC;
  line-height: 1;
  @media (max-width: 767.98px) {
    text-align:center;
    padding: 1.5rem;
  }
`;

const Button = styled.button`
  background: transparent;
  color: ${props => props.theme.color.gray};
  font-size: 1.6rem;
  padding: 0;
  text-transform: uppercase;
  margin-left:1rem;
  line-height: 1;
  &:not(.active):hover{
    background: ${props => props.theme.color.pink};
    color: ${props => props.theme.color.black};
    text-decoration: underline;
  }
  &.active{
    font-weight: 700;
    color: ${props => props.theme.color.black};
    cursor: default;
    @media (max-width: 767.98px) {
      color: #FFF;
    }
  }
`;

const Language = () => (
  <LanguageContainer>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => languages.map(language => (
        <Button
          type="button"
          key={language}
          onClick={() => changeLocale(language)}
          className={currentLocale === language ? 'active' : ''}
        >
          {language}
        </Button>
      ))
        }
    </IntlContextConsumer>
  </LanguageContainer>
);

export default Language;
