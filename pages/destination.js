import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ContainerMain, ContainerWrapper, PlanetSection, PlanetNavbar, PlanetDescription } from '../styles/Destinations.style'
import {destinations} from '../data/data.json';
import Button from '../components/PlanetDescription/Button';

const Destination = () => {
  
  const [activePlanet, setActivePlanet] = useState('Moon');
  const [planetData, setPlanetData] = useState(destinations.filter(planet=>planet.name=== 'Moon')[0]);
  useEffect(()=>{
    setPlanetData(destinations.filter(planet=>planet.name=== activePlanet)[0]);
  }, [activePlanet])

  const handleOnClick = (planetName) =>{
    setActivePlanet(planetName);
  }
  return (

    <ContainerMain>
      <ContainerWrapper>
        <h5><span>01 </span>Pick your destination</h5>
        <PlanetSection>
          <div className='image-section'>
            <Image src={`${planetData.images.png}`} height={445} width={445}/>
          </div>
          <div className='text-section'>
            <PlanetNavbar>
              {destinations.map((planet, index)=><Button key={index} isActive={planet.name === activePlanet ? true : false}handleClick={()=>handleOnClick(planet.name)}>{planet.name}</Button>)}
            </PlanetNavbar>
            <PlanetDescription>
              <h2>{planetData.name}</h2>
              <p>{planetData.description}</p>
              <div className='distance-section'>
                <div>
                  <p className='subtitle_small'>AVG. Distance</p>
                  <p className='amount'>{planetData.distance}</p>
                </div>
                <div>
                  <p className='subtitle_small'>Est. travel time</p>
                  <p className='amount'>{planetData.travel}</p>
                </div>
              </div>
            </PlanetDescription>
          </div>
        </PlanetSection>
      </ContainerWrapper>

    </ContainerMain>
  )
}

export default Destination