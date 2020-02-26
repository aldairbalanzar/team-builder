import React from 'react';

function MemberList({memberList}) {
    return(
        <div>
           {memberList.map(member => (
            <div>
                <h3>{member.firstName} {member.lastName}</h3>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
           ))}
        </div>
    )
}

export default MemberList;