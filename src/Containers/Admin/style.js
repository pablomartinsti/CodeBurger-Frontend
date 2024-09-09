import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #efefef;
  justify-content: flex-start;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const Containeritems = styled.div`
  padding: 20px;
  width: 100%;
`
