import React, { useState } from 'react'

const Formulario: StorefrontFunctionComponent = () => {
  const [nome, setNome] = useState('')
  const [lastName, setLastName] = useState('')
  const [city, setCity] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [pontos, setPontos] = useState(0)
  const [senha, setSenha] = useState('')

  function criaUsuario(event: any) {
    const data = {
      nome,
      lastname: lastName,
      city,
      company,
      email,
      pontos,
      password: senha,
    }

    event.preventDefault()
    fetch('/api/dataentities/FM/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log('success', response))
      .catch((err) => console.log(err))
  }

  // function getData(event: any) {

  //     event.preventDefault();

  //     fetch('api/dataentities/FM/documents/a8bc1d59-0327-11ed-835d-162f652378d7?_fields=_all', {
  //         method: 'GET',
  //         headers: {
  //             "Content-Type": "application/json",

  //         }
  //     }).then(response => response.json())
  //         .then(data => console.log(data)
  //         )
  //         .catch(err => console.log(err))
  // }
  // function putData(event: any) {

  //     event.preventDefault();

  //     fetch('api/dataentities/FM/documents/a8bc1d59-0327-11ed-835d-162f652378d7', {
  //         method: 'PUT',
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             nome: 'Luan',
  //             lastname: 'Lima',
  //             city: 'João Pessoa',
  //             company: 'Hospital Universitário'

  //         })
  //     }).then(() => console.log('success')
  //     )
  //         .catch(err => console.log(err))
  // }

  function getForEmail(event: any) {
    event.preventDefault()

    // fetch('https://davidson01--dreamscape.vtexcommercestable.com.br/api/dataentities/CL/documents', {
    //     method: 'POST',
    //     headers: {
    //         'X-VTEX-API-AppKey': 'vtexappkey-dreamscape-PZLDCC',
    //         'X-VTEX-API-AppToken': 'VRBBSLHJZQZFDGXIKPZXEJGLUHXEPGPXWFJVEFSTEBULTMLYOWMRYOWUPVGBJRYOLURRXIVQONXNATSFKFDMNZYVPXELUEBHCDYUBCHSGPLURXHFGGFRHRSMTCVMLEGT',
    //         "Content-Type": "application/json",
    //         "mode": 'no-cors'

    //     },
    //     body: JSON.stringify({

    //         "email": "Davidson@email.com",
    //         "firstName": "Davidson",
    //         "lastName": "Xavier",
    //         "phone": "+12025550195",
    //         "documentType": "CPF",
    //         "document": "45442424013",
    //         "isCorporate": false,
    //         "isNewsletterOptIn": false,
    //         "localeDefault": "en-US"

    //     })
    // }).then(response => response.json())
    //     .then(data => console.log(data)
    //     )
    //     .catch(err => console.log(err))
    fetch('/api/dataentities/FM/search?nome=Davidson&_fields=_all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <label>
        {' '}
        Nome: <input name="nome" onChange={(e) => setNome(e.target.value)} />
      </label>
      <label>
        {' '}
        LastName:{' '}
        <input name="lastname" onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        {' '}
        Cidade:{' '}
        <input name="cidade" onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        {' '}
        Empresa:{' '}
        <input name="empresa" onChange={(e) => setCompany(e.target.value)} />
      </label>
      <label>
        {' '}
        Email:
        <input name="email" onChange={(e) => setEmail(e.target.value)} />{' '}
      </label>
      <label>
        {' '}
        Pontos:{' '}
        <input
          name="pontos"
          onChange={(e) => setPontos(parseInt(e.target.value))}
        />
      </label>
      <label>
        {' '}
        Senha:{' '}
        <input
          name="senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>

      <button onClick={criaUsuario}>Submit</button>

      <button onClick={getForEmail}>getForEmail</button>
    </div>
  )
}

export default Formulario
