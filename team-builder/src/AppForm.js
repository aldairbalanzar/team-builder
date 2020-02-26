import React, { useState } from 'react';

function AppForm(props) {
    console.log(props);

    return(
        <div>
            <form onSubmit={props.submitForm}>
                <label>
                    First Name:
                        <input 
                        name='firstName' 
                        type="text"
                        placeholder="your first name" 
                        onChange={props.handleChanges}
                        value={props.member.firstName}
                        />
                </label>
                <label>
                    Last Name
                        <input 
                         name='lastName'
                         type="text"
                         placeholder="your last name" 
                         onChange={props.handleChanges}
                         value={props.member.lastName}
                         />
                </label>
                <label>
                    Email:
                    <input
                     name='email'
                     type="text" 
                     placeholder="your email" 
                     onChange={props.handleChanges}
                     value={props.member.email}
                     />
                </label>
                <label>
                    Role:
                    <input
                     name='role' 
                     type="text" 
                     placeholder="your role"
                     onChange={props.handleChanges}
                     value={props.member.role}
                     />
                </label>
                <button type='submit'>Add member</button>
            </form>
        </div>
    )
}

export default AppForm;