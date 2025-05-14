const data = [
  {
    name: "John Doe",
    matricNo: 202240573,
  },
  {
    name: "Jane Smith",
    matricNo: 202240574,
  },
  {
    name: "Alice Johnson",
    matricNo: 202240575,
  },
  {
    name: "Bob Brown",
    matricNo: 202240576,
  },
  {
    name: "Charlie Davis",
    matricNo: 202240577,
  },
  {
    name: "Diana Evans",
    matricNo: 202240578,
  },
  {
    name: "Ethan Foster",
    matricNo: 202240579,
  },
  {
    name: "Fiona Green",
    matricNo: 202240580,
  },
  {
    name: "George Harris",
    matricNo: 202240581,
  },
  {
    name: "Hannah Ivers",
    matricNo: 202240582,
  },
  {
    name: "James Ivers",
    matricNo: 202240583,
  },
];

// const dataOutput = data.forEach(({name, matricNo}, index) => {
//   const testData = `<li>${name} - ${matricNo}</li>`;
// //   console.log(testData);
//     group1Output.innerHTML += testData;
// });
// // console.log(output);

// function getRandomName() {

//   const randomIndex = Math.floor(Math.random() * data.length);
//   const randomName = data[randomIndex].name;
//   return randomName;
// }

// const newArray = data.map(({name, matricNo}, index) => {
//   const randomIndex = Math.floor(Math.random() * data.length);
//   const randomName = data[randomIndex].name;
//   return randomName;

// });

// console.log(newArray);

//First completed code
function shuffleData(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const shuffledData = shuffleData(data);

console.log(shuffledData);

const mid = Math.ceil(shuffledData.length / 2);
const group1 = shuffledData.slice(0, mid);
const group2 = shuffledData.slice(mid);

const group1TableBody = document.querySelector(".group-a tbody");
const group2TableBody = document.querySelector(".group-b tbody");

// function displayGroup(group, tbody) {
//   group.forEach(({ name, matricNo }, index) => {
//     const row = `<tr>
//       <td>${index + 1}</td>
//       <td>${name}</td>
//       <td>${matricNo}</td>
//     </tr>`;
//     tbody.innerHTML += row;
//   });
// }

// displayGroup(group1, group1TableBody);
// displayGroup(group2, group2TableBody);

//Second implementation
document
  .getElementById("docxFile")
  .addEventListener("change", function (event) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayBuffer = reader.result;

      mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then((result) => {
          const text = result.value;
          const lines = text
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

          //Extract name & matricNo pairs
          const students = [];
          for (let i = 0; i < lines.length; i++) {
            const name = lines[i];
            const matric = lines[i + 1];
            const matricPattern = /^\d{4}\/\d{5}$/;

            if (matricPattern.test(matric)) {
              students.push({ name, matricNo: matric });
              i++;
            }
          }

          //Shuffle
          const shuffled = shuffleData(students);
          const mid = Math.ceil(shuffled.length / 2);
          const group1 = shuffled.slice(0, mid);
          const group2 = shuffled.slice(mid);

          //Display
          displayGroup(group1, document.querySelector(".group-a tbody"));
          displayGroup(group2, document.querySelector(".group-b tbody"));
        })
        .catch((err) => console.error("Mammoth failed:", err));
    };

    reader.readAsArrayBuffer(event.target.files[0]);
  });

function displayGroup(group, tableBody) {
  tableBody.innerHTML = "";
  group.forEach(({ name, matricNo }, i) => {
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${name}</td>
      <td>${matricNo}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
