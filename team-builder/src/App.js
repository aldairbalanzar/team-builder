import React, { useState } from 'react';
import AppForm from './AppForm';
import MemberList from './MemberList';
import './App.css';

function App() {
  const [member, setMember] = useState(
    {
      firstName: '',
      lastName: '', 
      email: '',
      role: ''
    }
  );

  const addNewMember = member => {
    const newMember = {
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      role: member.role
    };
    setMember([...member, newMember]);
  }

  const [memberList] = useState([]);

  const submitForm = e => {
    memberList.push(member);
    setMember({
        firstName: '', 
        lastName: '',
        email: '',
        role: ''
    })
    e.preventDefault();
}

const handleChanges =  e => {
  console.log(member);
  setMember({
      ...member,
  [e.target.name]: e.target.value
  })
}

  return (
    <div className="App">
      <AppForm addNewMember={addNewMember} submitForm={submitForm} member={member} handleChanges={handleChanges}/>
      <MemberList memberList={memberList}/>
    </div>
  );
}

export default App;
