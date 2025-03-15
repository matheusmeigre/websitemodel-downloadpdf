import { useState } from 'react'

function Login() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !password) {
      setErrorMessage('Preencha todos os campos')
      return
    }

    if (password.length < 6) {
      setErrorMessage('A senha precisa ter no mínimo 6 caracteres')
      return
    }

    if (name.length < 3) {
      setErrorMessage('O nome precisa ter no mínimo 3 caracteres')
      return
    }

    if (name === 'admin' && password === '123456') {
      setSuccessMessage('Login realizado com sucesso')
      setErrorMessage('')
      handleNavigate()
      return
    } else {
      setErrorMessage('Usuário ou senha inválidos')
      return
    }
  }

  const handleNavigate = () => {
    localStorage.setItem('name', name)
    localStorage.setItem('password', password)
    setTimeout(() => {
        window.location.href = '/home'
    }, 1000)
  }
  console.log(name, password)

  return (
    <>
    <div id='container'>
      <div id='box-form'>
        <h1>Login</h1>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form action="">
          <input type="text" name="name" id="username" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
          <input type="password" name="password" id="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button onClick={handleSubmit} id='btn-login'>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login
