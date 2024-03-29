import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container, PageTitle } from '../../styles/StyledComponents';

import WorkRoll from '../../components/WorkRoll';

class WorkPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <>
          <SEO title="Work" lang={intl.locale} />
          <Container>
            <PageTitle>Work</PageTitle>
            <WorkRoll />
          </Container>
        </>
      </Layout>
    );
  }
}

export default injectIntl(WorkPage);
