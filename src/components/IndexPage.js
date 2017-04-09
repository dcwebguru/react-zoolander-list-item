import React from 'react';
import ActorPreview from './ActorPreview';
import actors from '../data/actors';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="actors-selector">
          {actors.map(actorData => <ActorPreview key={actorData.id} {...actorData} />)}
        </div>
      </div>
    );
  }
}