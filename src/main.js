import './style.css'
import { handleReportFile } from './core'
document.addEventListener("DOMContentLoaded", () => {
  const inputFile1 = document.getElementById("file1");
  const inputFile2 = document.getElementById("file2");
  // inputFile1.addEventListener('change', handleReportFile, false);
  if (inputFile1) {
    inputFile1.addEventListener('change', async function (event) {
      const cleanUrlsFile1 = await handleReportFile(event);
      // Remove attr in input2 when file in input1 is loaded
      inputFile2.removeAttribute('disabled')
      console.log(cleanUrlsFile1);
    })
  }



});