import React from 'react';
import PropTypes from 'prop-types';
import {getGithub} from '../../utils/api'

class ProfileGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        }
    }
    async componentDidMount() {
        const { username } = this.props
        const data = await getGithub(username)
        this.setState({
            repos: data
        });
    }
    render() {
        const { repos } = this.state;

        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            < a href = {
                              repo.html_url
                            }
                            className = "text-info"
                            rel = "noopener noreferrer"
                             target = "_blank" >
                                {repo.name}
                            </a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div className="col md-6">
                        <span className="badge badge-info mr-1">
                            Stars: {repo.stargazers_count}
                        </span>
                        <span className="badge badge-secondary mr-1">
                            Watchers: {repo.watchers_count}
                        </span>
                        <span className="badge badge-success">
                            Forks: {repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        ));
        return (
            <div ref="myRef">
                <hr />
                <h3 className="mb-4">Latest Github Repos</h3>
                {repoItems}
            </div>

        );
    }
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired
};

export default ProfileGithub;
