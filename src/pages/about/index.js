import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container, PageTitle } from '../../styles/StyledComponents';

class AboutPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <>
          <SEO title="About Me" lang={intl.locale} />
          <Container>
            <PageTitle>About Me</PageTitle>
            <p>Under Construction</p>
          </Container>
        </>
      </Layout>
    );
  }
}

export default injectIntl(AboutPage);
