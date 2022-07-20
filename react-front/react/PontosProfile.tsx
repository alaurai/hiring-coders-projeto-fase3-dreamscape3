// import React from "react";
import React from 'react';




const PontosProfile: StorefrontFunctionComponent = () => {

    if (localStorage) {
        console.log("sim")
    }

    // const [email, setEmail] = useState<string>('');
    // const [pontos, setPontos] = useState<number>(0);
    // let chaveLocal: string = ''
    // if (localStorage.length > 0) {
    //     chaveLocal = localStorage ? `${localStorage.getItem('orderform')}` : ''
    // }
    // setEmail(JSON.parse(chaveLocal).clientProfileData.email);


    function capturaPontos() {
        fetch(`/api/oms/pvt/orders?q=davidson.xavierti@gmail.com`, {
            method: 'GET',
            headers: {
                "x-vtex-api-appKey": "vtexappkey-dreamscape-ABLEUO",
                "x-vtex-api-appToken": "YAGYLLIIVKKVIKGIQISGDEMORBPMCBKSWBKUXTSDAKYZJQUNEETOBLOGSHRDDWGCFZBHLOGCFNQCCVKCSOUYSBYSYDOGUESZWZBVCCHYJMMRUJICQTPDFOMWUBBDLMAC"

            }
        })
            .then(response => response.json())
            .then(dados => {
                let arrayValores = dados.list
                let arrayFinal = arrayValores.map((elemento: { totalValue: number; }) => {
                    return parseInt(`${elemento?.totalValue}`.slice(0, -2))
                })

                let resultado = arrayFinal.reduce((acumulador: number, elemento: number) => {
                    return acumulador + elemento;
                }, 0);
                console.log(resultado);
            })



    }





    return (
        <>
            {/* <h1>{pontos}</h1> */}
            <button onClick={capturaPontos}>Click me</button>
        </>

    )
}

export default PontosProfile;