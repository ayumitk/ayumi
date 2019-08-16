import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container } from '../../styles/StyledComponents';

class Thanks extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <>
          <SEO title="Thank You" lang={intl.locale} />
          <Container style={{ textAlign: 'center', paddingTop: '10rem' }}>
            <h1>Thank you!</h1>
            <p><FormattedMessage id="contact.thanks" /></p>
          </Container>
        </>
      </Layout>
    );
  }
}

export default injectIntl(Thanks);
