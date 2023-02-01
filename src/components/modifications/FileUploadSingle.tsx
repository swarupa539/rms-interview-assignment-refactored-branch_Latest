import { ChangeEvent, useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState<File>();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUploadClick = () => {
    if (!file) {
      return;
    }
    // if (file) {
    //   return (
    //     <div>
    //       <h2>File Details:</h2>
    //       <p>File Name: `${file.name}`</p>
    //       <p>File Type: `${file.type}`</p>
    //     </div>
    //   );
    // }
    // else{
    //   return (
    //     <div>
    //       <br />
    //       <h4>Choose before Pressing the Upload button</h4>
    //     </div>
    //   );
    // }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`,
      },})
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept='.xlsx,.xls'/>      
      <button type='submit' onClick={handleUploadClick}>File Upload</button>
      <div>{file && `${file.name}`}</div> 
      <div>{file && `${file.type}`}</div>
      {/* <div>File Name: {file && `${file.name}`}</div> 
      <div>File Type:{file && `${file.type}`}</div> */}
    </div>
  );
}

export default FileUploadSingle;