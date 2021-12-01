import React from 'react'
import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim()!=='';
const isEmail = (value) => value.includes('@');
const ageLimit=(value) => Number(value)>0;


const Form = () => {

    const {
        value : firstNameValue,
        isValid : firstNameIsValid,
        hasError : firstNameHasError,
        valueChangeHandler : firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty)

    const {
        value : lastNameValue,
        isValid : lastNameIsValid,
        hasError : lastNameHasError,
        valueChangeHandler : lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useInput(isNotEmpty)

    const {
        value : emailValue,
        isValid : emailIsValid,
        hasError : emailHasError,
        valueChangeHandler : emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail)

    const {
        value : ageValue,
        isValid : ageIsValid,
        hasError : ageHasError,
        valueChangeHandler : ageChangeHandler,
        inputBlurHandler: ageBlurHandler,
        reset: resetAge,
    } = useInput(ageLimit)


    let formIsValid = false;

    if(firstNameIsValid && lastNameIsValid && emailIsValid && ageIsValid){
        formIsValid = true
    }
    
    const submitHandler =(event) =>{
        event.preventDefault();

        if (!formIsValid) {
            console.log('wrong bishh')
            return;
          }
      
          console.log('Submitted!');
          console.log(firstNameValue, lastNameValue, emailValue,ageValue);
      
          resetFirstName();
          resetLastName();
          resetEmail();
          resetAge();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="wrapper">
            <div className="inputs">
                <input 
                type="text" 
                placeholder="First Name" 
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                />
                    {firstNameHasError && <p>Please enter a first name.</p>}
                <input 
                type="text" 
                placeholder="Last Name"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                />
                    {lastNameHasError && <p>Please enter a last name.</p>}

                <input 
                type="text" 
                placeholder="EMail"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                />
                    {emailHasError && <p>Enter Valid Email</p>}

                <input 
                type="number" 
                placeholder="Age"
                value={ageValue}
                onChange={ageChangeHandler}
                onBlur={ageBlurHandler}
                />
                    {ageHasError && <p>Enter Valid age</p>}
            </div>
            </div>
            <div className="button">
                <button >Vote</button>
            </div>
        </form>
    )
}

export default Form
