import React, {useState} from "react";
import {PropTypes} from 'prop-types';


const LoginForm = (onSubmit) => {
    const [inputs, setInputs] = useState({})
    const submitDisabled = inputs.username && inputs.password ? false : true;

    const onChangeHandler = ({target: {name, value}}) => {
        setInputs(state => ({...state, [name]:value }), [])
    }

    return (
        <div>
            <input value={inputs.username || ''} name='username' type='text' onChange={onChangeHandler} id='username-input' />
            <input value={inputs.password || ''} name='password' type='password' onChange={onChangeHandler} id='password-input' />
            <button disabled={submitDisabled} onClick={()=>onSubmit(inputs.username, inputs.password )} id='login-button'>Submit</button>
        </div>
    )
}
LoginForm.propTypes = {
    onSubmit: PropTypes.object
}

export default LoginForm