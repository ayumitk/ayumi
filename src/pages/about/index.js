import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container } from '../../styles/StyledComponents';

class AboutPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <div>
          <SEO title="About Me" lang={intl.locale} />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>About Me</h1>
            <p>Under Construction</p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
