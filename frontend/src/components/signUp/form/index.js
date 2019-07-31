import { FormGroup, InputGroup, Button } from '@blueprintjs/core'

const form = () => {
  return (
    <div className='sign-up'>
      <FormGroup label='Email' labelFor='input-email' labelInfo='(required)'>
        <InputGroup id='input-email' placeholder='Email address' type='email' />
      </FormGroup>
      <FormGroup
        label='Username'
        labelFor='input-username'
        labelInfo='(required)'
      >
        <InputGroup id='input-username' placeholder='Username' />
      </FormGroup>
      <FormGroup
        label='Password'
        labelFor='input-password'
        labelInfo='(required)'
      >
        <InputGroup id='input-password' placeholder='Password' type='password' />
      </FormGroup>
      <FormGroup
        label='Password confirmation'
        labelFor='input-password-confirmation'
        labelInfo='(required)'
      >
        <InputGroup
          id='input-password-confirmation'
          placeholder='Password confirmation'
          type='password'
        />
      </FormGroup>
      <FormGroup>
        <Button intent="primary" text="Submit" />
      </FormGroup>
    </div>
  )
}

export default form
