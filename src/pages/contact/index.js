import React, { Component } from 'react';
import { injectIntl, FormattedMessage, navigate } from 'gatsby-plugin-intl';
import Layout from '../../components/Layout';

import {
  Container, Input, Label, Textarea, Button,
} from '../../styles/StyledComponents';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class Index extends Component {
  state = {
    isValidated: false,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  }

  render() {
    return (
      <Layout>
        <Container>
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* eslint-disable-next-line */}
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label htmlFor="bot-field">
                Don’t fill this out:
                <input name="bot-field" id="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <Label htmlFor="name">
              <FormattedMessage id="contact.name" />
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                id="name"
                required
              />
            </Label>

            <Label htmlFor="email">
              <FormattedMessage id="contact.email" />
              <Input
                type="email"
                name="email"
                onChange={this.handleChange}
                id="email"
                required
              />
            </Label>

            <Label htmlFor="message">
              <FormattedMessage id="contact.message" />
              <Textarea
                rows="5"
                name="message"
                onChange={this.handleChange}
                id="message"
                required
              />
            </Label>

            <div style={{ textAlign: 'center' }}>
              <Button type="submit" style={{ textTransform: 'uppercase', width: '200px' }}>
                <FormattedMessage id="contact.send" />
              </Button>
            </div>

          </form>
        </Container>
      </Layout>
    );
  }
}

export default injectIntl(Index);
