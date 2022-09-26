import { useState } from 'react'

const HookForm = (props) => {

    return (
        <>
          <form>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' />
            </div>
            <div>
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' />
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' />
            </div>
          </form>
        </>
    )
}

export default HookForm