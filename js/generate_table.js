// this only works for local server
//import eegRecData from '../eegRecordings/fairdata_meta.json' assert {type: 'json'};


document.addEventListener("DOMContentLoaded", function() {
  const eegRecData = [
    {
      "record": "EEG00001",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00002",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00003",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00004",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00005",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00006",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 60.5
    },
    {
      "record": "EEG00007",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00008",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00009",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00010",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    }
  ]
  const table = this.querySelector("tbody");
  
  let dataHtml = '';

  for (let i = 0; i < eegRecData.length; i++) {
    dataHtml += `
    <tr onclick="toggleRow(this)">
      <td>${eegRecData[i].record}</td>
      <td>${eegRecData[i].year_of_birth}</td>
      <td>${eegRecData[i].sex}</td>
      <td>${eegRecData[i].handedness}</td>
      <td>${eegRecData[i].head_size}</td>
    </tr>
    `
  }
  table.innerHTML = dataHtml;
});

