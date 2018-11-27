import React from 'react'
import SignUpForm from './../components/sign-up-form.jsx'

class Register extends React.Component {
  render() {
    return (
      <div style={{border: '1px solid #999', width: '400px', margin: '80px auto'}}>
        <SignUpForm />
      </div>
    )
  }
}

export default Register