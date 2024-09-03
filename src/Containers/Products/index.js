import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ProductsLogo from '../../assets/logo-produtos.svg'
import {
  Container,
  ProductsImg,
  Hamburger,
  CategoryButton,
  CategoryMenu,
  ProductsContainer
} from './styles'
import api from '../../services/api'
import { CardProduct, Header } from '../../components'
import formatCurrency from '../../Utils/formatCurrency'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [menuOpen, setMenuOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [produtcs, setProducts] = useState([])
  const [FilteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()

    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(produtcs)
    } else {
      const newFilteredProducts = produtcs.filter(
        produtc => produtc.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, produtcs])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCategoryClick = categoryId => {
    setActiveCategory(categoryId)
    setMenuOpen(false) // Fecha o menu ao clicar em uma categoria
  }

  return (
    <Container>
      <Header />
      <ProductsImg src={ProductsLogo} alt="logo dos Produtos" />
      <Hamburger>
        <div className="hamburger" onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </Hamburger>
      <CategoryMenu menuOpen={menuOpen}>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {FilteredProducts &&
          FilteredProducts.map(produtc => (
            <CardProduct key={produtc.id} produtc={produtc} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
