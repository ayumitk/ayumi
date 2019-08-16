import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const WorkGrid = styled.div`
  display:grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 565.98px) {
    grid-template-columns: 1fr;
  }
`;

class WorkRoll extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    const apiKey = process.env.GATSBY_BEHANCE_KEY;
    const userID = process.env.GATSBY_BEHANCE_USER_ID;
    const behanceUserAPI = `https://www.behance.net/v2/users/${userID}/projects?api_key=${apiKey}`;

    // console.log(behanceUserAPI);

    jsonp(behanceUserAPI, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        // console.log(data.projects);
        this.setState({
          projects: data.projects,
        });
      }
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <WorkGrid>
        {projects.map(project => (
          <div key={project.id}>
            <Link to={`/work/${project.id}/`}>
              <img src={project.covers[404]} alt="project cover" />
              <p>{project.name}</p>
            </Link>
            <ul style={{ fontSize: '1.6rem', display: 'flex' }}>
              {project.fields.map(field => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        ))}
      </WorkGrid>
    );
  }
}

export default WorkRoll;
