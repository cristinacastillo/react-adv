

import styles from '../styles/styles.module.css'

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
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


export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {


    const { counter, increaseBy } = useProduct({ onChange, product, value });


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>

                {children ?? (
                    <>
                        <ProductImage img={product.img} />
                        <ProductTitle title={product.title} />
                        <ProductButtons />
                    </>
                )}

            </div>
        </Provider>
    )
}


export default ProductCard;