

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard
                product={product}
                className="bg-dark"
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
                        <>
                            <ProductImage img={product.img} className="custom-image" />
                            <ProductTitle title={product.title} className="text-white" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>

                            {
                                (!isMaxCountReached && <button onClick={() => increaseBy(2)}>2</button>)
                            }

                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }

            </ProductCard>

        </div >
    )
}

export default ShoppingPage;