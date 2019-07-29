import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

import BlogRoll from '../../components/BlogRoll';

import { Container } from '../../styles/StyledComponents';

class BlogPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Container>
          <h1>Blog</h1>
          <BlogRoll />
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(BlogPage);
