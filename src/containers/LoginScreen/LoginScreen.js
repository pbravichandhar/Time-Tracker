import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import PrimaryTextField from '../../components/TextField/TextField'
import './LoginScreen.css'
import { asyncLogin } from '../../reducers/authentication/action'

function LoginScreen (props) {
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,8}))$/
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [password, setPassword] = useState('')
  const onclick = () => {
    props.login(email,password)
  }
  return (
    <div>
      <div className='login'>
        <PrimaryTextField
          error={emailError ? true : false}
          helperText={emailError}
          value={email}
          onChange={e => setEmail(e.target.value)}
          label={'email'}
          onBlur={() => {
            if (_.isEmpty(email) || !emailPattern.test(email)) {
              setEmailError('Enter valid email')
            } else {
              setEmailError('')
            }
          }}
        />
      </div>
      <div className='login'>
        <PrimaryTextField
          error={passwordError ? true : false}
          helperText={passwordError}
          value={password}
          onChange={e => setPassword(e.target.value)}
          isPassword={true}
          label={'password'}
          onBlur={() => {
            if (password.length < 6) {
              setPasswordError('Enter valid password')
            } else {
              setPasswordError('')
            }
          }}
        />
      </div>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={onclick}
      >
        Submit
      </Button>
      {props.userDetail.data ? 'login successfull' : 'not done'}
    </div>
  )
}

// Get State from redux store
export const mapStateToProps = (state) => ({
  userDetail: state.auth.userDetail,
})

// Dispatch action via props
export const mapDispatchToProps = (dispatch) => ({
  login: (email,password) => dispatch(asyncLogin(email,password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

