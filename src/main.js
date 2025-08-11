import './style.css'
import { handleReportFile, handleAuditFile } from './core';


document.addEventListener("DOMContentLoaded", () => {
  const inputFile1 = document.getElementById("file1");
  const inputFile2 = document.getElementById("file2");
  // inputFile1.addEventListener('change', handleReportFile, false);
  if (inputFile1) {
    inputFile1.addEventListener('change', async function (event) {
      const cleanUrlsFile1 = await handleReportFile(event);
      inputFile1.classList.remove("file_over");
      inputFile1.classList.add('file_loaded');
      // Remove attr in input2 when file in input1 is loaded
      inputFile2.removeAttribute('disabled');
      console.log(cleanUrlsFile1);
    });
    /* ondrag over */
    inputFile1.ondragover = ()=>inputFile1.classList.add("file_over");
    /* ondrag leave */
    inputFile1.ondragleave = ()=>inputFile1.classList.remove("file_over");
  } else {
    console.error("input file1 undefined")
  }

  if (inputFile2) {
    inputFile2.addEventListener('change', async function (event) {
      const cleanUrlsFile2 = await handleAuditFile(event);
      inputFile2.classList.remove("file_over");
      inputFile2.classList.add('file_loaded');
      // Remove attr in input2 when file in input1 is loaded
      inputFile2.removeAttribute('disabled')
      console.log(cleanUrlsFile2);
    });
    /* ondrag over */
    inputFile2.ondragover = ()=>inputFile2.classList.add("file_over");
    /* ondrag leave */
    inputFile2.ondragleave = ()=>inputFile2.classList.remove("file_over");
  } else {
    console.error("input file2 undefined")
  }



});