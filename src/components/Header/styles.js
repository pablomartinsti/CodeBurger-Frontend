import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 10px;
  }
`
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    display: block;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: row;
    min-width: 100%;
    position: absolute;
    height: 250px;
    background: black;
    color: white;
    top: 72px;
    justify-content: center;
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
  @media (max-width: 600px) {
    border: 0.5px solid white;
  }
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
  @media (max-width: 600px) {
    color: white;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
  cursor: pointer;
`
