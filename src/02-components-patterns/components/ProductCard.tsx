

import styles from '../styles/styles.module.css'

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { createContext } from 'react';
import useProduct from '../hooks/useProduct';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext<ProductContextProps>({
    counter: 0,
    increaseBy: () => { },
    product: { id: '', title: '' },
})

const { Provider } = ProductContext;


export const ProductCard = ({ product }: ProductCardProps) => {


    const { counter, increaseBy } = useProduct();


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>

                <ProductImage img={product.img} />

                <ProductTitle title={product.title} />

                <ProductButtons />

            </div>
        </Provider>
    )
}


export default ProductCard;