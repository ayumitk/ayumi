import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { Container, PageTitle } from '../styles/StyledComponents';

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SEO title="404: Not Found" />
          <PageTitle>Not Found</PageTitle>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;
