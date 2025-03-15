import { useState } from 'react'

function Login() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !password) {
      alert('Preencha todos os campos')
      return
    }

    if (password.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres')
      return
    }

    if (name.length < 3) {
      alert('O nome precisa ter no mínimo 3 caracteres')
      return
    }

    if (name === 'admin' && password === '123456') {
      alert('Login realizado com sucesso')
      handleNavigate()
      return
    } else {
      alert('Usuário ou senha inválidos')
      return
    }
  }

  const handleNavigate = () => {
    window.location.href = '/home'
  }
  console.log(name, password)

  return (
    <>
    <div id='container'>
      <div id='box-form'>
        <h1>Login</h1>
        <form action="">
          <input type="text" name="name" id="username" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
          <input type="password" name="password" id="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login
