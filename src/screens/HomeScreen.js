import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
//import Paginate from '../components/Paginate'
//import ProductCarousel from '../components/ProductCarousel'
//import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
 
  const dispatch = useDispatch()

  const productList= useSelector(state => state.productList)
  const { products , loading , error} = productList

  useEffect(() => {
    dispatch( listProducts()) 
  }, [dispatch])




  return (
    <>
     
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
         
        </>
      )}
    </>
  )
}


export default HomeScreen
