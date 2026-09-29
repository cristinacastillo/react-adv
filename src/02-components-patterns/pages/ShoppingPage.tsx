
import '../styles/custom-styles.css'

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

import { useShoppingCart } from "../hooks/useShoppingCart";




export const ShoppingPage = () => {

    const { products, shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (

                        <ProductCard
                            product={product}
                            className="bg-dark"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage img={product.img} className="custom-image" />
                            <ProductTitle title={product.title} className="text-white" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>

                    ))
                }

                <div className="shopping-cart">

                    {
                        Object.entries(shoppingCart).map(([key, product]) => (

                            < ProductCard
                                product={product}
                                className="bg-dark"
                                style={{ width: '100px' }}
                                key={key}
                                onChange={onProductCountChange}
                                value={product.count}
                            >
                                <ProductImage className="custom-image" />
                                <ProductButtons className="custom-buttons" style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} />
                            </ProductCard>

                        ))

                    }

                </div>


                {/* ProductCardHOCProps */}
                {/* <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard> */}

            </div>
        </div >
    )
}

export default ShoppingPage;