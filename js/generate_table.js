import eegRecData from '../eegRecordings/fairdata_meta.json' assert {type: 'json'};


document.addEventListener("DOMContentLoaded", function() {
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

