import React, { Component } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { Container } from '../styles/StyledComponents';

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <SEO title="404: Not Found" />
          <h1 style={{ padding: '5rem 0' }}>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;
