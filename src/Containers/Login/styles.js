import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
`
export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginImage = styled.div`
  img {
    height: 620px;
    width: 500px;
    @media (max-width: 1200px) {
      height: 625px;
      width: 500px;
    }
    @media (max-width: 930px) {
      width: 330px;
      margin-top: 30px;
      height: 626px;
    }
    @media (max-width: 760px) {
      display: none;
    }
  }
`
export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 25px 40px;
  }
  @media (max-width: 930px) {
    padding: 25px 25px;
  }

  img {
    @media (max-width: 1200px) {
      width: 300px;
      padding: 25px 40px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
  }
  @media (max-width: 930px) {
    margin-top: 30px;
  }
`
export const ImageLogo = styled.div`
  display: flex;
  justify-content: center;
`
export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-top: 28px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 390px;
  height: 38px;
  background: #fff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;

  @media (max-width: 930px) {
    width: 330px;
  }
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
