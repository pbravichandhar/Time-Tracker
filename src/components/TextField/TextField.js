import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import FilledInput from '@material-ui/core/FilledInput'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import './TextField.css'

function PrimaryTextField ({
  value,
  onChange,
  label,
  isPassword,
  onBlur,
  error,
  helperText
}) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='width'>
      <FormControl fullWidth variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
        <OutlinedInput
          error={error}
          id='outlined-adornment-password'
          type={showPassword ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          endAdornment={
            isPassword ? (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
          labelWidth={70}
        />
        {error && <FormHelperText id="my-helper-text" error>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  )
}

export default PrimaryTextField
