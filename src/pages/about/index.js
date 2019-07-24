import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>About Me</h1>
          <p>Under Construction</p>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
