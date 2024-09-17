import React from 'react';

function PdfDownloadComponent() {
  
  return (
    <div className='cv-download-button-wrapper'>
      <a href="/resume/mkydd_resume.pdf" download="michael-kydd-resume">
        <button type='download' className='cv-download-button'>DOWNLOAD CV</button>
      </a>
    </div>
  );
};
export default PdfDownloadComponent;
