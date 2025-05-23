# random-student-grouper
# 🎲 Random Student Grouper

A mini JavaScript tool that randomly splits students into two unbiased groups from an uploaded `.docx` file using the [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm and [Mammoth.js](https://github.com/mwilliamson/mammoth.js). Built with HTML, CSS, and JavaScript — no backend needed.

---

## 📂 Features

- Upload a `.docx` file with student names and matric numbers
- Automatically parse the data into usable JSON
- Shuffle the list fairly and split into two groups
- Display each group in an HTML table

---

## ⚙️ How to Use

### 1. Prepare Your `.docx` File

Ensure your file is formatted with each student's **name** followed by their **matric number**, you can use [this sample google docs file:](https://docs.google.com/document/d/1lrSRX9Mh6q7P8c46YnU32-kzB9c0LiR6qr9ENzrBqRs/edit?usp=sharing)


---

### 2. Run the Project

1. Clone or download the repository:
   ```bash
   git clone https://github.com/matmaxgraphics/random-student-grouper.git
2. Open index.html in your browser.

3. Upload your .docx file using the file input.

4. View the two randomly grouped lists on the page.