import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CrearEventosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1644px;
  height: 1080px;
  padding: 50px 104px;
`

export const H1 = styled.h1`
  display: flex;
  flex-direction: row;
  width: 141px;
  height: 34px;
  margin-left: 35px;
  font: normal normal 900 28px/34px Roboto;
  letter-spacing: 0px;
  color: #5e5e5e;
  opacity: 1;

`

export const AddEvent = styled.div`
  display: flex;
  padding: 40px 35px 40px;
  margin-top: 28px;
  justify-content: space-between;
  width: 1447px;
  height: 130px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 1px #11111112;
  border: 1px solid #ececec;
  opacity: 1;

`

export const H2 = styled.h2`
  font: normal normal 900 32px/38px Roboto;
  letter-spacing: 0px;
  color: #2A56C6;
  opacity: 1;
`


export const FormRegistro = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 47px 33px;
  margin-top: 9px;
  width: 1447px;
  height: 795px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #11111112;
  border: 1px solid #ECECEC;
  border-radius: 0px 0px 12px 12px;
  opacity: 1;
`

export const FormRegistroH2= styled.h2`
  font: normal normal medium 24px/29px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;


`


export const NombreEvento = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  width: 883px;
  height: 68px;
  font: normal normal bold 14px/17px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;

`

export const InputName = styled.input`
  width: 883px;
  height: 48px;
  background: #F6F6F6;
  padding-left: 16px;
  border-radius: 12px; 
  font: normal normal normal 16px/19px Roboto;
  color: #5E5E5E;
  opacity: 0.4;
`

export const DateEvento = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 44px;
  width: 883px;
  height: 68px;

`

export const FechaEvento = styled.div`
  font: normal normal bold 14px/17px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;
`

export const HoraEvento = styled.div`
  margin-left: 47px;
  font: normal normal bold 14px/17px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;

`
export const InputHora = styled.input`
  width: 418px;
  height: 48px;
  padding-left: 16px ;
  background: #F6F6F6 0% 0% no-repeat padding-box;
  border-radius: 12px;
  font: normal normal normal 16px/19px Lato;
  color: #5E5E5E;
  opacity: 0.4;

`

export const InputFecha = styled.input`
  width: 418px;
  height: 48px;
  padding-left: 16px;
  background: #F6F6F6 0% 0% no-repeat padding-box;
  border-radius: 12px;
  font: normal normal normal 16px/19px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 0.4;
`

export const CanalEvento = styled.div`
  width: 465px;
  height: 150px;
  margin-top: 52px;
  opacity: 1;
  font: normal normal bold 14px/17px Roboto;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;
`

export const InputCanal = styled.input`
  padding-bottom: 95px;
  padding-left: 16px;
  width: 465px;
  height: 130px;
  background: #F6F6F6 0% 0% no-repeat padding-box;
  border-radius: 12px;
  font: normal normal normal 16px/19px Roboto;
  color: #5E5E5E;
  opacity: 0.4;
`
export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 166px;
  margin-left: 925.34px;
  width: 410PX;
  height: 48px;

`

export const BtnCancel = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 193px;
  height: 48px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  font: normal normal bold 16px/19px Lato;
  letter-spacing: 0px;
  color: #5E5E5E;
  border: 2px solid #5E5E5E;
  border-radius: 10px;

`

export const BtnSave = styled.button`
  width: 193px;
  height: 48px;
  background: #039BE5 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #11111133;
  opacity: 1;
  border-radius: 10px;
  font: normal normal bold 16px/19px Lato;
  letter-spacing: 0px;
  color: #FFFFFF;

`