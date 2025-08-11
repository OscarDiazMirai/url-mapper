import * as XLSX from 'xlsx';
import {jsonDataFilteredFromScreamingFrog, urlsFromJsonDataFiltered} from './utils'

/* HANDLE FILE REPORTED FROM SCREAMING FROG */
export const handleReportFile = (event) => {
    return new Promise((resolve, reject) => {
        // Catch first file
        const file = event.target.files[0];
        // Reading file with FileReader instance
        const reader = new FileReader();

        // exe when file is loaded
        reader.onload = function (e) {
            try {
                // Converts the binary data in the file to a byte array
                const data = new Uint8Array(e.target.result);
                // read the contents of the binary file and convert it into an Excel workbook
                const workbook = XLSX.read(data, { type: 'array' });
                // Access first sheet
                const workSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[workSheetName];
                // Convert to JSON
                // Converts the Excel sheet to an array of arrays
                // {header:1} indicates that each row is returned as an array, not as a key-value object.
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                // console.warn(jsonData)

                // Filtered data
                const cleanUrls = jsonDataFilteredFromScreamingFrog(jsonData);
                resolve(cleanUrls);
            } catch (error) {
                reject(error);
            }

            // Download file with filtered data
            /* const data2D = jsonDataFiltered(jsonData).map(url => [url]);
            const workSheet = XLSX.utils.aoa_to_sheet(data2D);

            const workBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workBook, workSheet, "URLs");

            XLSX.writeFile(workBook, "urls.xlsx"); */

        };
        // start reading file
        reader.readAsArrayBuffer(file);
    });
};


/* HANDLE FILE REPORTED FROM AUDIT FILE */
export const handleAuditFile = (event) => {
    return new Promise((resolve, reject) => {
        // Catch first file
        const file = event.target.files[0];
        // Reading file with FileReader instance
        const reader = new FileReader();

        // exe when file is loaded
        reader.onload = function (e) {
            try {
                // Converts the binary data in the file to a byte array
                const data = new Uint8Array(e.target.result);
                // read the contents of the binary file and convert it into an Excel workbook
                const workbook = XLSX.read(data, { type: 'array' });
                // Access first sheet
                const workSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[workSheetName];
                // Convert to JSON
                // Converts the Excel sheet to an array of arrays
                // {header:1} indicates that each row is returned as an array, not as a key-value object.
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Filtered data               
                const cleanUrls = urlsFromJsonDataFiltered(jsonData);
                resolve(cleanUrls);
            } catch (error) {
                reject(error);
            }

            // Download file with filtered data
            /* const data2D = jsonDataFiltered(jsonData).map(url => [url]);
            const workSheet = XLSX.utils.aoa_to_sheet(data2D);

            const workBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workBook, workSheet, "URLs");

            XLSX.writeFile(workBook, "urls.xlsx"); */

        };
        // start reading file
        reader.readAsArrayBuffer(file);
    });
};