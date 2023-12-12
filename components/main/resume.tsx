'use client';

import React from 'react';
import { Document, Page } from 'react-pdf';

const ResumePage = () => {
  const pdfUrl = '/public/resume.pdf';

  return (
    <div>
      <h1> Resume Page</h1>
      <Document file={pdfUrl}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
};

export default ResumePage;
