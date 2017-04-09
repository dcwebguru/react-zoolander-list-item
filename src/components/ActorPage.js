import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ActorsMenu from './ActorsMenu';
import actors from '../data/actors';

export default class ActorPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const actor = actors.filter((actor) => actor.id === id)[0];
    if (!actor) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${actor.cover})` };
    return (
      <div className="actor-full">
        <ActorsMenu actors={actors}/>
        <div className="actor">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${actor.image}`}/>
            <h2 className="name">{actor.name}</h2>
          </div>

        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}