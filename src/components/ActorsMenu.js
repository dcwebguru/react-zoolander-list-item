import React from 'react';
import { Link } from 'react-router';

export default class ActorsMenu extends React.Component {
  render() {
    return (
      <nav className="actors-menu">
        {this.props.actors.map(menuActor => {
          return <Link key={menuActor.id} to={`/actor/${menuActor.id}`} activeClassName="active">
            {menuActor.name}
          </Link>;
        })}
      </nav>
    );
  }
}