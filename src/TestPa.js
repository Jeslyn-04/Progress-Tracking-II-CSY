import React, { useState } from 'react';
import Child from './TestSt';
function Parent() {
 const [message, setMessage] = useState('');
 const handleMessage = (newMessage) => {
 setMessage(newMessage);
 };
 return (
 <div>
 <h1>Parent Component</h1>
 <p>Message from Child: {message}</p>
 <Child onMessageSend={handleMessage} />
 </div>
 );
}
export default Parent;
