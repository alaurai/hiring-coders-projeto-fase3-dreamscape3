import React from 'react';

// interface iLogged {
//     logado: boolean
// }

// const Logged = (props: iLogged) => {
//     if (props.logado) {
//         return <h2> Logged</h2>
//     }
//     else {
//         return (<h1>
//             Logout
//         </h1>)
//     }

// }


const PontosProfile: StorefrontFunctionComponent = () => {

    // const [email, setEmail] = React.useState<string>('');
    // const [pontos, setPontos] = React.useState<number>(0);


    // function testaLogado() {
    //     if (!usuarioLogado())
    //         return <h1> Usuário Desconectado</h1>
    //     return <h1>{email}</h1>
    // }
    // const [pontos, setPontos] = useState<number>(0);
    // let chaveLocal: string = ''
    // if (localStorage.length > 0) {
    //     chaveLocal = localStorage ? `${localStorage.getItem('orderform')}` : ''
    // }
    // setEmail(JSON.parse(chaveLocal).clientProfileData.email);


    // function capturaPontos(email: string) {
    //     fetch(`/api/oms/pvt/orders?q=${email}`, {
    //         method: 'GET',
    //         headers: {
    //             "x-vtex-api-appKey": "vtexappkey-dreamscape-ABLEUO",
    //             "x-vtex-api-appToken": "YAGYLLIIVKKVIKGIQISGDEMORBPMCBKSWBKUXTSDAKYZJQUNEETOBLOGSHRDDWGCFZBHLOGCFNQCCVKCSOUYSBYSYDOGUESZWZBVCCHYJMMRUJICQTPDFOMWUBBDLMAC"

    //         }
    //     })
    //         .then(response => response.json())
    //         .then(dados => {
    //             let arrayValores = dados.list
    //             let arrayFinal = arrayValores.map((elemento: { totalValue: number; }) => {
    //                 return parseInt(`${elemento?.totalValue}`.slice(0, -2))
    //             })

    //             let resultado = arrayFinal.reduce((acumulador: number, elemento: number) => {
    //                 return acumulador + elemento;
    //             }, 0);
    //             console.log(resultado);
    //         })



    // }

    // function usuarioLogado() {

    //     if (window.localStorage) {
    //         let chaveLocal = JSON.parse(localStorage.getItem('orderform') || '{}')
    //         let emailF = chaveLocal.clientProfileData.email
    //         if (emailF !== null) {
    //             setEmail(emailF);
    //             console.log(email);
    //             return true
    //         }
    //         // email
    //         return
    //     }
    //     return
    // }



    return (
        <>
            <h1>Teste</h1>
            {/* {usuarioLogado()} */}
        </>

    )
}



export default PontosProfile;