# 🔄 Excel URL Comparator & Redirect Generator

A browser-based tool that compares two Excel files containing URLs, identifies matches and differences, and generates a new list of URLs for redirection and filtering purposes.

## ✨ Features

- ✅ Upload two Excel files (.xlsx)
- 🔍 Compare URL lists between both files
- 📌 Identify:
  - Matching URLs
  - URLs unique to each file
- 🔄 Generate new URLs for redirection purposes
- 📥 Export results to a new Excel file with structured data

## 📂 Use Cases

- SEO and content migration audits
- Redirect planning for domain or path changes
- URL filtering for indexing or crawling purposes
- Data hygiene and deduplication

## 🚀 How It Works

1. Upload two Excel files containing URL data.
2. The tool parses and extracts URLs from both files.
3. It compares the lists to:
   - Find exact matches
   - Find URLs only present in File A or File B
4. It generates a new structured file including:
   - Matches
   - Unique URLs
   - Suggested redirect paths (if applicable)

## 🧰 Technologies Used

- JavaScript (Vanilla or React)
- [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) – for Excel file parsing and export
- FileReader API – to handle file input from the browser

## 📦 Output Structure

The exported Excel will include:

- **Matched URLs** – URLs found in both files
- **Only in File A** – URLs unique to the first file
- **Only in File B** – URLs unique to the second file
- **Redirect Suggestions** – Custom column for new redirect targets

## 📌 Status

🔧 In development – Core logic and file comparison features are being implemented.  
Planned enhancements:
- Column selection for flexible input
- Regex filtering
- UI refinements and progress feedback

## 📝 License

This project is licensed under the MIT License.

---

