var channelData = [];
const chNames = ['Fp1','Fp2','AFz','F7', 'F3', 'Fz','F4', 'F8',
                'C3', 'Cz', 'C4', 'CPz', 'T7', 'T8', 'TP9', 'TP10', 
                'P7', 'P3', 'Pz', 'P4', 'P8', 'POz', 'O1','O2'];
var chartDatasets = [];
var eegChart = Object();


async function readFile() {
  let recordingPath = localStorage.getItem('recordingPath');
  let recData = localStorage.getItem('recordData');
  let response = await fetch(recordingPath, {mode: 'no-cors'});
  let data = await response.arrayBuffer();
  let metadata = {
    type: 'application/x-zip-compressed'
  }
  let file = new File([data], 'test1.zip', metadata);
  
  var read_zip = new JSZip();
  try {
    const zipData = await read_zip.loadAsync(file);
    zipData.forEach((relativePath, zipEntry) => {
      if (zipEntry.name.includes(".eeg")) {
        zipEntry.async('uint8array').then((content) => {
          const buffer = content.buffer;
          const dView = new DataView(buffer);
          // call parsing function
          parseDataView(dView);
        });
      } 
      /*
      else {
        zipEntry.async('string').then((content) => {
          // TODO: write info to a table below plot.
          //console.log(content);
        });
      }
      */
    });
    writeRecData(recData);
  } catch (error) {
    console.error('Error reading zip file:', error);
  }
}

function parseDataView(dataView) {
  try {
    const len = dataView.byteLength;
    const nr_samples = len/96;
    const nr_channels = 24;
    const nr_bytes = 4;
    // take every nth byte; nth = 1; take every byte, nth = 2; take every 2nd byte
    const nth = 5;
    var allChData = [];
    var j = 0;
    for (i = 0; i < nr_channels; i ++) {
      var chData = [];
      for (j = 0; j < nr_samples/nth; j ++) {
        chData.push(dataView.getFloat32(i*nr_bytes+j*nr_channels*nr_bytes*nth, true));
      }
      // filter the data (notch & bandpass)
      //chData = filterData(chData);
      // add offset to all data so it can be seen on the same plot
      chData = offsetData(chData, i);
      allChData.push(chData);
    }
  } catch (err) {
    alert(err);
  }
  channelData = allChData;
  chartDatasets = generateChartDict(allChData);
}

function filterData(data) {
  var y = [0, 0, 0, 0];
  var y_res = 0;
  var filteredData = [];
  for (i = 3; i < data.length; i++) {
    y[3] = y[2];
    y[2] = y[1];
    y[1] = y[0];
    y[0] = (data[i]-3*data[i-1]+3*data[i-2]-data[i-3]+3.061*y[1]-2.935*y[2]+0.939*y[3])/1.065;
    filteredData.push(y[0]);
  }
  return filteredData;
}

function writeRecData(recData) {
  var divTitle = document.getElementById("recTitle");
  var divRecData = document.getElementById("recData");
  var data = recData.split(',');
  var recString = "Year of Birth: " + data[1] + ", Sex : " + data[2] +
                  ", Handedness: " + data[3] + ", Head Size: " + data[4] +
                  "cm";
  console.log(data);
  divTitle.innerHTML = "Recording " + data[0];
  divRecData.innerHTML = recString;
}

function offsetData(data, offset) {
  var first = data[0];
  for (k = 0; k < data.length; k++) {
    data[k] = data[k] - first - offset*210;
  }
  //console.log(data);
  return data;
}

function generateChartDict(data) {
  var dict = [];
  var strokeColor;
  for (i = 0; i < chNames.length; i++) {/*
    if (i % 2 === 0) {
      strokeColor = 'rgba(200, 200, 200, 1)';
    } else {
      strokeColor = 'rgba(100, 100, 100, 1)';
    }*/
    dict.push({label: chNames[i],
              data: data[i], 
              pointRadius: 0, 
              borderWidth: 1,
              /*borderColor: strokeColor,*/
              hoverBorderWidth:0,
              hoverBackgroundColor: 'rgba(0,0,0,0)'
            })
  }
  const ctx = document.getElementById('myChart');

  const x = [];
  for (i = 0; i < channelData[0].length; i++) {
    // create x axis values
    let a = i*0.01;
    a = Math.round(a * 100) / 100;
    x.push(a);
  }
  eegChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: x,
        datasets: dict
    },
    options: {
      animation: false,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            title: function(context) {
              return '';
            },
            label: function(context) {
              console.log(context.dataset.label);
              return context.dataset.label.toString(); 
            }
          },
          enabled: true
        },
        legend: {
          labels: {
            padding: 9.2
          },
          align: 'start',
          position: 'left',
        }/*,
        decimation: {
          enabled: false,
          algorithm: 'lttb'
        }*/
      },
      scales: {
        x: {
          text: 'text',
          border: {
            display: true
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            callback: function(val, index) {
              return index % 5 === 0 ? this.getLabelForValue(val)+' s' : '';
            }
          },
          grid: {
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
          },
          min: 0,
          max: 10,
        },
        y: {
          ticks: {
            display: false,
          },
          
          min: -4950,
          max: 100,
          beginAtZero: false
        }
      }
    }
  });
  window.addEventListener('keydown', (e) => {
    scroller(e, eegChart);
  });
}


function toMainPage() {
  localStorage.removeItem("recordingPath");
  window.location.replace("index.html");
}

function scroller(keydown, chart) {
  
  if ((keydown.key == 'ArrowRight') && (chart.options.scales.x.max < chart.data.labels.length-1)) {
    chart.options.scales.x.min += 2.5;
    chart.options.scales.x.max += 2.5;
  } else if ((keydown.key == 'ArrowLeft') && (chart.options.scales.x.min > 0)) {
    chart.options.scales.x.min -= 2.5;
    chart.options.scales.x.max -= 2.5;
  }
  chart.update();
}

function scrollChart(direction) {
  
  if ((direction == 'right') && (eegChart.options.scales.x.max < eegChart.data.labels.length-1)) {
    eegChart.options.scales.x.min += 2.5;
    eegChart.options.scales.x.max += 2.5;
  } else if ((direction == 'left') && (eegChart.options.scales.x.min > 0)) {
    eegChart.options.scales.x.min -= 2.5;
    eegChart.options.scales.x.max -= 2.5;
  }
  eegChart.update();
}


readFile();


