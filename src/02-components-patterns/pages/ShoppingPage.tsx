import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";


const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                    <ProductImage img={product.img} />
                    <ProductTitle title={product.title} />
                    <ProductButtons />
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