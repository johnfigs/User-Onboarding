import './App.css';
import {useState, useEffect} from 'react';

import UserForm from './UserForm';
import User from './User';

import schema from './formSchema'

import { reach } from 'yup'
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '', 
  terms: '',
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  // states //
  const [users, setUsers] = useState(initialUsers); //array of user objects
  const [formValues, setFormValues] = useState(initialFormValues); //object
  const [formErrors, setFormErrors] = useState(initialFormErrors); //object
  const [disabled, setDisabled] = useState(initialDisabled); //boolean

  // helpers //
  //getUsers

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      let resUsers = res.data.data;

      //add "name" field which combines first name and last name.
      for (let i = 0; i < resUsers.length; i++) {
        resUsers[i].name = resUsers[i].first_name + ' ' + resUsers[i].last_name;
      }

      setUsers(resUsers)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res);
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>
      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
