import React from 'react'
import SignUpForm from './../components/sign-up-form.jsx'

class Register extends React.Component {
  render() {
    return (
      <div style={{background: 'rgba(0, 0, 0, .2)', minHeight: '100vh', paddingTop: '50px' }}>
        <SignUpForm />
      </div>
    )
  }
}

export default Register