import React from 'react';
import styled from 'styled-components';
import PizzaSuccess from './PizzaSuccess';


const backgroundImage = 'https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';


export default function PizzaForm(props){

    const { values, errors, change, submit, details, disabled } = props;

    const onChange = event => {
        console.log(event.target);
        const { name, value, type, checked } = event.target;

        const valToUse = type === 'checkbox' ? checked : value;

        change(name, valToUse);
    }

    const onSubmit = event => {
        event.preventDefault();

        submit();
    }


    return (
    <FormContainer>
        <h2>Build Your Own Pizza!</h2>
        <PizzaTron></PizzaTron>
        <ZaForm onSubmit={onSubmit}>
            <label>Choice of Size
                <select
                onChange={onChange}
                value={values.size}
                name='size'>
                    <option value=''>**Choose a Size**</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>

            <h3>Choice of Sauce</h3>
            <label>Traditional
                <input
                datacy='traditional'
                type='radio'
                name='sauce'
                value='traditional'
                checked={values.sauce === "traditional"}
                onChange={onChange} />
                </label>

            <label>White Sauce
                <input
                datacy='white'
                type='radio'
                name='sauce'
                value='white'
                checked={values.sauce === "white"}
                onChange={onChange} />
            </label>

            <h3>Add Toppings</h3>

            <label>Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange} />
            </label>

            <label>Extra Cheese
                <input
                type='checkbox'
                name='extraCheese'
                checked={values.extraCheese}
                onChange={onChange} />
            </label>

            <h3>Substitutions</h3>

            <label>Gluten-Free
                <input 
                type='checkbox'
                name='glutenFree'
                checked={values.glutenFree}
                onChange={onChange} />
                <span className='slider'></span> 
            </label>

            <h3>Anything to Add?</h3>

            <label>Special Instructions
                <input
                type='text'
                name='instructions'
                value={values.instructions}
                onChange={onChange}></input>
            </label>

            <label>Order Name
                <input 
                type='text'
                name='orderName'
                value={values.orderName}
                onChange={onChange}></input>
            </label>

            <button type='submit' disabled={disabled}>Add to Order</button>
        </ZaForm>
        {
            details === undefined ? '' : details.map(order => {
                return <PizzaSuccess details={order} />
            })
            }
        
    </FormContainer>
    )
}

const ZaForm = styled.form`
    width: 60%;
    padding: 2.5rem 0 2.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 0 0 10% 0;
    label, input {
        font-size: 1.6rem;
    }
    button {
        border: 1px solid black;
        border-radius: 25px;
        background-color: #FFFFFF;
        padding: 1.5rem;
        margin: 1% 0 1% 0;
    }
    h3 {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgb(100, 100, 100)
    }
`

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        margin-bottom: 0;
        padding: 1.5rem 0 1.5rem 0;
        width: 60%;
        text-align: center;
    }
`

const PizzaTron = styled.div`
    width: 60%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
`

