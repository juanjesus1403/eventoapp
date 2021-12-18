import React from 'react'
import { useState,useEffect } from 'react'
import { crearEvento } from '../../services/CrearEventoService'
import { CrearEventosContainer,H1,AddEvent,H2,FormRegistro,FormRegistroH2,NombreEvento,InputName,DateEvento,FechaEvento,HoraEvento,InputFecha,InputHora,CanalEvento,InputCanal,Btns,BtnCancel,BtnSave } from './CrearEventosElements'





const CrearEventos = () => {

  const [value, setValue] = useState({
    name:"",
    date: "",
    time:"",
    channel:"",
  })


  const actualizarInput = (e) =>{
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const manejarSubmit = async (e) =>{
    e.preventDefault()
    let response = await crearEvento({...value})
    console.log(response)
    alert("Evento Creado!!")

  }



  return (
    <>
      <CrearEventosContainer>
        <H1>Bienvenido</H1>
        <AddEvent>
          <H2>Añadir Evento</H2>
        </AddEvent>
        <FormRegistro onSubmit={(e)=>{manejarSubmit(e)}}>
          <FormRegistroH2>Información general del Evento</FormRegistroH2>
          <NombreEvento>
            <label>Nombre del evento</label>
            <InputName 
              type="text" 
              name ="name" 
              placeholder="Escriba aquí nombre del evento"
              value={value.name}
              onChange={(e)=>{actualizarInput(e)}} 
            />
          </NombreEvento>
          <DateEvento>
            <FechaEvento>
            <label >Fecha del evento</label>
            <InputFecha 
              type= "date" 
              name="date"
              value={value.date}
              onChange={(e)=>{actualizarInput(e)}}
            />
            </FechaEvento>
            <HoraEvento>
            <label>Hora de evento</label>
            <InputHora 
              type= "time" 
              name ="time"
              value={value.time}
              onChange={(e)=>{actualizarInput(e)}}
            />
            </HoraEvento>
          </DateEvento>
          <CanalEvento>
            <label>Canal</label>
            <InputCanal 
              type= "text" 
              name ="channel" 
              placeholder='Ejemplo: Skype,Zoom,etc'
              value={value.channel}
              onChange={(e)=>{actualizarInput(e)}}
            /> 
          </CanalEvento>
          <Btns>
            <BtnCancel to = "/">Cancelar</BtnCancel>
            <BtnSave type="submit">Guardar</BtnSave>

          </Btns>


  
        </FormRegistro>
      </CrearEventosContainer>      
    </>
  )
}

export default CrearEventos
