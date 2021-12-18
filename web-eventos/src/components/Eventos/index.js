import React from 'react'
import { EventosContainer,H1,AddEvent,H2,AddBtn,AddBtnLink,ListEvento,Registro,CardEvento,CardItem1,CardImg,CardItem2 } from './EventosElements'
import img from '../../images/img.png'

const Eventos = () => {
  return (
    <>
      <EventosContainer>
        <H1>Bienvenido</H1>
        <AddEvent>
          <H2>Eventos</H2>
          <AddBtn>
            <AddBtnLink to="/Crear"> Nuevo Evento</AddBtnLink>
          </AddBtn>
        </AddEvent>
        <Registro>
        <CardEvento>
          <CardItem1>Evento Principal</CardItem1>
          <CardImg src= {img}/>
          <CardItem2>75˚ en Caracas, Venezuela</CardItem2>
        </CardEvento>
        <ListEvento>

        </ListEvento>
        </Registro>
      </EventosContainer>      
    </>
  )
}

export default Eventos
