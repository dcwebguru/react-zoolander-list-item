import React from 'react';
import { Link } from 'react-router';

export default class ActorPreview extends React.Component {
  render() {
    return (
      <Link to={`/actor/${this.props.id}`}>
        <div className="actor-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}