import React from "react";

import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    justify-content: center;

    background-color: #dcdcdc;

    border-radius: 15px;
    padding: 20px;
`

const H1 = styled.h1`
    text-align: center;
`
const H2 = styled.h1`
    text-align: center;
`

const Warning = styled.h2`
    color: red;
    font-size: 14px;
    text-align: center;
`

interface iComponent {
    email: string;
    nome: string;
    pontos: number;
}
const ComponentFinal = (props: iComponent) => {
    if (props.email != '' && props.nome != 'null null') {
        return <div>
            <H1> Olá {props.nome}</H1>
            <H2> Você tem {props.pontos} pontos de Cashback</H2>
            <Warning>Os seus pontos podem cair até em 10 minutos</Warning>
        </div>
    }
    else {
        return <H1>Usuário Deslogado</H1>
    }
}

const PontosProfile: StorefrontFunctionComponent = () => {
    const [nome, setNome] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [pontos, setPontos] = React.useState<number>(0);

    React.useEffect(() => {
        usuarioLogado();
    }, [pontos])

    async function usuarioLogado() {

        if (window.localStorage) {
            let chaveLocal = JSON.parse(localStorage.getItem('orderform') || '{}')
            let emailF = chaveLocal.clientProfileData.email
            setNome(`${chaveLocal.clientProfileData.firstName} ${chaveLocal.clientProfileData.lastName}`)
            if (emailF !== null) {
                setEmail(emailF);
                capturaPontos(emailF);
                return true
            }
            return
        }
        return
    }

    function capturaPontos(email: string) {
        fetch(`/api/oms/pvt/orders?q=${email}`, {
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
                setPontos(resultado);
                return resultado;
            })


    }

    return <>
        <Main>
            <ComponentFinal email={email} pontos={pontos} nome={nome} />
        </Main>
    </>
}

export default PontosProfile;