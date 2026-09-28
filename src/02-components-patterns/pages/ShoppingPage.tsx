import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";

import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} className="bg-dark">
                    <ProductImage img={product.img} className="custom-image" />
                    <ProductTitle title={product.title} className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
                </ProductCard>

                {/* ProductCardHOCProps */}
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage