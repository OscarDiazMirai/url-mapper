import * as XLSX from 'xlsx';

// Handle file reported from screaming frog
export const handleReportFile = (event) => {
    // Catch first file
    const file = event.target.files[0];
    // Reading file with FileReader instance
    const reader = new FileReader();

    // exe when file is loaded
    reader.onload = function (e) {
        // Converts the binary data in the file to a byte array
        const data = new Uint8Array(e.target.result);
        // read the contents of the binary file and convert it into an Excel workbook
        const workbook = XLSX.read(data, { type: 'array' });

        // Access first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert to JSON
        // Converts the Excel sheet to an array of arrays
        // {header:1} indicates that each row is returned as an array, not as a key-value object.
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        jsonDataFiltered(jsonData);

        // Export file with filtered data
        /* const data2D = jsonDataFiltered(jsonData).map(url => [url]);
        const workSheet = XLSX.utils.aoa_to_sheet(data2D);

        const workBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workBook, workSheet, "URLs");

        XLSX.writeFile(workBook, "urls.xlsx"); */
    };
    // start reading file
    reader.readAsArrayBuffer(file);



}

// Filter JSON data from reported file
const jsonDataFiltered = (jsonData) => {
    // Regex to check if has number, .filetype...
    const regex = /\d|\?|(\.[a-z]{2,5})$/i;

    // Filter valid urls
    const validRowsURls = jsonData.filter(row => row.includes(200) && row.includes("Indexable"));
    // console.log(validRowsURls)

    // Filter without .filetype, contains numbers...
    const cleanUrls = validRowsURls.map(row => row[0])
        .filter(url => !regex.test(url));

    // console.log(cleanUrls);
    return cleanUrls;
};