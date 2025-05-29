import React, { useState } from 'react';
import {getSignedUrl, uploadFileToSignedUrl} from './api/api.js';

function App() {
  const [username, setUsername] = useState('');
  const OnFileSelect = (e) => {
    const file = e.target.files[0]
    const content_type = file.type
    const key = `${username}/${file.name}`;

    getSignedUrl({key, content_type}).then((response) => {
      console.log(response.signedUrl);
      uploadFileToSignedUrl(response.signedUrl, file, content_type, null, null)
    })
    
  }
  return (
    <div>
      <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} 
      />
      <input type="file" accept=".pdf" placeholder="Enter your name" onChange={OnFileSelect} />
    </div>
  );
}

export default App;
