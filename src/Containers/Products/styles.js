import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh -72px);
`

export const ProductsImg = styled.img`
  width: 100%;
  margin-top: 70px;
`
export const Hamburger = styled.div`
  display: flex;
  justify-content: end;

  .hamburger {
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
      padding: 10px;
    }
  }
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: 400px;
    background: black;
    justify-content: center;
    padding: 20px;
  }
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 760px) {
  }
`
