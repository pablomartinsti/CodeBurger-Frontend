import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  max-width: 800px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0px 20px;
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  @media (max-width: 600px) {
    display: none;
  }

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0px 20px;
  padding: 10px;
  align-items: center;

  @media (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 330px;
  }
  img {
    border-radius: 10px;
    width: 120px;
    height: 120px;
  }

  p {
    font-size: 16px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p {
      margin-top: 5px;
    }
  }
  .trash {
    width: 30px;
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
