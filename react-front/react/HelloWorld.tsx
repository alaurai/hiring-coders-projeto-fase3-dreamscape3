import React, { useState, useEffect } from 'react';
import { useProduct } from 'vtex.product-context';
// import { useCssHandles } from 'vtex.css-handles';

// const CSS_HANDLES = ['container', 'price', 'message']




const HelloWorld: StorefrontFunctionComponent = () => {
    const [pontos, setPontos] = useState<number>(0);
    const produto = useProduct();

    useEffect(() => {
        setPontos(produto?.product?.priceRange.sellingPrice.highPrice || 0);
    }, [produto])



    return (
        <>
            {pontos ? <div>{Math.floor(pontos)} pontos</div> : null}
        </>

    )
}

export default HelloWorld;