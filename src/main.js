import './style.css'
import { handleReportFile } from './core'
document.addEventListener("DOMContentLoaded", () => {
  const inputFile1 = document.getElementById("file1");
  
  inputFile1.addEventListener('change', handleReportFile, false);


});