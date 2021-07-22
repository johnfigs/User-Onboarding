import React from 'react';

export default function UserForm(props){
    //deconstruct props
    const {
        values,
        submit,
        change, 
        disabled, 
        errors,
    } = props;

    //create onSubmit event
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    //create onChange event
    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        // let valueToUse
        // if (type === 'checkbox') {
        //   valueToUse2 = checked
        // } else {
        //   valueToUse2 = value
        // }
        change(name, valueToUse)
  }
    
    //return form container with onSubmit 
    return(
        <form className ='container form' onSubmit={onSubmit}>
            <div className='container form form-group submit'>
                <h2>Add a User</h2>

                {/* disabled button */}
                <button id='submitBtn' disabled={disabled}>submit</button>
                {/* render validation errors*/}

                <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                 </div>
            </div>

            {/* create form inputs*/}
            <div className='container form form-group inputs'>
                <h4>User Information</h4>
                {/*Text Inputs*/}
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
                <label>Agree to terms and conditions
                    <input
                        type='checkbox'
                        name='terms'
                        onChange={onChange}
                        checked={values.terms}
                    />
                </label>           
            </div>
        </form>
    )
}