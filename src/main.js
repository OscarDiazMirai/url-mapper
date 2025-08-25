import './style.css'
import { handleScreamingFrogFile, handleAuditFile, handleMatchesInBothFiles } from './core';


document.addEventListener("DOMContentLoaded", () => {
  const inputScreamingFrogFile = document.getElementById("sf_file");
  const inputAuditFile = document.getElementById("audit_file");
  // inputsf_file.addEventListener('change', handleReportFile, false);

  // Declare top scope variables
  let urlsFromScreamingFrogFile = null;
  let urlFromAuditFile = null;


  if (inputScreamingFrogFile) {
    inputScreamingFrogFile.addEventListener('change', async function (event) {
      urlsFromScreamingFrogFile = await handleScreamingFrogFile(event);
      inputScreamingFrogFile.classList.remove("file_over");
      inputScreamingFrogFile.classList.add('file_loaded');
      // Remove attr in input2 when file in input1 is loaded
      inputAuditFile.removeAttribute('disabled');
      // console.log(urlsFromScreamingFrogFile);
    });
    /* ondrag over */
    inputScreamingFrogFile.ondragover = () => inputScreamingFrogFile.classList.add("file_over");
    /* ondrag leave */
    inputScreamingFrogFile.ondragleave = () => inputScreamingFrogFile.classList.remove("file_over");
  } else {
    console.error("input sf_file undefined")
  }

  if (inputAuditFile) {
    inputAuditFile.addEventListener('change', async function (event) {
      urlFromAuditFile = await handleAuditFile(event);
      inputAuditFile.classList.remove("file_over");
      inputAuditFile.classList.add('file_loaded');
      // Remove attr in input2 when file in input1 is loaded
      inputAuditFile.removeAttribute('disabled')
      // console.log(urlFromAuditFile);
      
      // Compare both files to download file with results
      if (urlsFromScreamingFrogFile && urlFromAuditFile) {
        handleMatchesInBothFiles(urlsFromScreamingFrogFile, urlFromAuditFile);
      } else {
        console.warn("One of the files has not yet been uploaded.");
      }

    });
    /* ondrag over */
    inputAuditFile.ondragover = () => inputAuditFile.classList.add("file_over");
    /* ondrag leave */
    inputAuditFile.ondragleave = () => inputAuditFile.classList.remove("file_over");
  } else {
    console.error("input audit_file undefined")
  }

});