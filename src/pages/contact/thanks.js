import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import { Container } from '../../styles/StyledComponents';

class Thanks extends Component {
  render() {
    return (
      <Layout>
        <Container style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h1>Thank you!</h1>
          <p><FormattedMessage id="contact.thanks" /></p>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(Thanks);
