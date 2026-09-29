

import styles from '../styles/styles.module.css'

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandles } from '../interfaces/interfaces';
import { createContext, JSX } from 'react';
import useProduct from '../hooks/useProduct';
/* 
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons'; */

export const ProductContext = createContext<ProductContextProps>({
    counter: 0,
    increaseBy: () => { },
    product: { id: '', title: '' },
})

const { Provider } = ProductContext;


export interface Props {
    product: Product;
    /* children?: React.ReactElement | React.ReactElement[]; */
    children: (args: ProductCardHandles) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {


    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });


    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>

                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }

            </div>
        </Provider>
    )
}


export default ProductCard;