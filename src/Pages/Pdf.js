import React, { useState } from 'react';
import './PdfConverter.css';

const PdfConverter = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'converted.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className="pdf-converter">
      <h1 className="title">文件上传与转换</h1>
      <form onSubmit={handleSubmit}>
        <div className="file-input">
          <label htmlFor="upload-input">选择文件：</label>
          <input type="file" id="upload-input" onChange={handleFileChange} accept=".doc, .docx" />
        </div>
        <button type="submit" className="convert-button">上传并转换为PDF</button>
      </form>
    </div>
  );
};

export default PdfConverter;
