import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import Person from '../../assets/user.svg'
import Cart from '../../assets/carrinho.svg'
import {
  Container,
  Hamburger,
  ContainerLeft,
  ContainerRight,
  Line,
  PageLink,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const [menuOpen, setMenuOpen] = useState(false)
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>

      <ContainerRight menuOpen={menuOpen}>
        <PageLink onClick={() => push('/carrinho')}>
          <img onClick={closeMenu} src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img onClick={closeMenu} src={Person} alt="usuario" />
        </PageLink>
        <ContainerText>
          <p>Olá {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
export default Header
