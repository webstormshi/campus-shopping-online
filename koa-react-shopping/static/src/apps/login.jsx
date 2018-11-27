import React from 'react'
import SignInForm from './../components/sign-in-form.jsx'

class Login extends React.Component {
  render() {
    return (
      <div style={{background: 'rgba(0, 0, 0, .2)', minHeight: '100vh', paddingTop: '100px' }}>
        <SignInForm />
      </div>
    )
  }
}

export default Login