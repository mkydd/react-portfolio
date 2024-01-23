import React from 'react';

function PdfDownloadComponent() {
  
  return (
    <div>
      <a href="/resume/kydd_resume.pdf" download="michael-kydd-resume">
        <button type='download'>DOWNLOAD CV</button>
      </a>
    </div>
  );
};
export default PdfDownloadComponent;
