import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Medal from './Medal';
import Flag from './Flag';
import athletes from '../data/athletes';

export default class AthletePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    return (
      <div className="athlete-full">
        <AthletesMenu athletes={athletes}/>
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${athlete.image}`}/>
            <h2 className="name">{athlete.name}</h2>
          </div>

        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}