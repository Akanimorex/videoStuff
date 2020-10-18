import React from 'react';
import avatar from '../img/avatar.png';
const Chat =()=>{

return (
    <div className="chat-message">
        <div className="d-flex">
            <div><img src={avatar} className="chat-avatar-img" alt="avatar"/></div>
            <div className="pl-2"><p className="font-weight-bold">Orange Tooth</p><figcaption><p>whats up</p></figcaption></div>
        </div>
        
    </div>
)
}

export default Chat;