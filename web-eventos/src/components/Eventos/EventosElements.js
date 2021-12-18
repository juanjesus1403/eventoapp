import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EventosContainer = styled.div`
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


export const Registro = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 27px;
  width: 1447px;
`

export const CardEvento = styled.div`
  display: flex;
  flex-direction: column;
  width: 544.34px;
  height: 437.29px;
  padding: 16.25px 20.97px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 1px #0000001F;
  opacity: 1;

`

export const ListEvento = styled.div`
  display: flex;
  margin-left: 22.66px;
  width: 880px;
  height: 653px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 1px #00000029;
  border-radius: 0px 9px 9px 0px;
  opacity: 1;
  
`

export const CardImg = styled.img`
  width: 505px;
  height: 237px;
  margin-top: 22.65px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;

`


export const CardItem1 = styled.div`
  width: 107px;
  height: 18px;
  text-align: left;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;
`


export const CardItem2 = styled.div`
  width: 230px;
  height: 18px;
  margin-top: 99.93px;
  text-align: left;
  letter-spacing: 0px;
  color: #5E5E5E;
  opacity: 1;

`

export const AddBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 239px;
  height: 50px;
  margin-right: 53px;
  background: #0066FF 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
`

export const AddBtnLink = styled(Link)`
  width: 98px;
  height: 19px;
  text-align: left;
  color: #FFFFFF;
  opacity: 1;


`
