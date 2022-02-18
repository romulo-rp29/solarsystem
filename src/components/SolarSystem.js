import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map((planet) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
