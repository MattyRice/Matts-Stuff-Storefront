import React  from "react";
import {Grid} from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'

// const products = [
//     { id:1, name: 'Shirts', description: 'Crewneck', price: '$15'},
//     { id:2, name: 'Pants', description: 'Jeans', price: '$25'},
// ]

const Products = ({products, onAddToCart}) => {
    const classes = useStyles()

    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
                  <Product product={product} onAddToCart={() => onAddToCart(product.id, 1)}/>
              </Grid> 
            ))}
        </Grid>
    </main>
    );
}

export default Products;