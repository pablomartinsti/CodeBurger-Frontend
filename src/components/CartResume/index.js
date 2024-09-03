import React, { useState, useEffect } from 'react'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../Utils/formatCurrency'
import { Container } from './styles'
import { Button } from '../Button'
import { toast } from 'react-toastify'
import api from '../../services/api'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { CartProducts, clearCart } = useCart() // Importa o clearCart do useCart

  useEffect(() => {
    const sumAllitems = CartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllitems)
  }, [CartProducts, deliveryTax])

  const submitOrder = async () => {
    // Verifica se o carrinho está vazio
    if (CartProducts.length === 0) {
      toast.error(
        'Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.'
      )
      return // Se o carrinho estiver vazio, não envia o pedido
    }

    const order = CartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      await toast.promise(api.post('orders', { products: order }), {
        pending: 'Realizando o seu pedido',
        success: 'Pedido realizado com sucesso',
        error: 'Falha ao tentar realizar o seu pedido, tente novamente'
      })

      // Esvazia o carrinho após a confirmação do pedido
      clearCart()
    } catch (error) {
      console.error('Erro ao finalizar o pedido:', error)
      // Lida com erros adicionais se necessário
    }
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button
        style={{ width: '100%', marginTop: 30, maxWidth: ' 800px' }}
        onClick={submitOrder}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
