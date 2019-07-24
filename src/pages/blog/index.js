import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>Blog</h1>
          <p>Under Construction</p>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(BlogPage);
