import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    hr {
      display: none;
    }
  }
`
export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
`
export const Exit = styled.div`
  position: fixed;
  bottom: 30px;
  @media (max-width: 1200px) {
    position: static;
  }
`
export const Listlink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 8px;
`
