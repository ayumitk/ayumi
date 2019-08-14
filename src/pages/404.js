import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import { Container } from '../styles/StyledComponents';

class NotFoundPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <Container>
          <SEO title="404: Not Found" lang={intl.locale} />
          <h1 style={{ padding: '5rem 0' }}>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Layout>
    );
  }
}

export default NotFoundPage;
