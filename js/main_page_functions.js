const filePath = "https://master.djikmwh17bdyr.amplifyapp.com/eegRecordings/"
const selectedRows = new Array(500).fill(false);

function runFilter() {
    // reset selected rows
    selectedRows.fill(false);
    restyleTable();
    var table, tr, i, td, nMaxCol, nResult, rangeFilter;
    var td = [], filter = [], txtValue = [];
    var isDisplay = true;
    // get filter values
    var filters = document.getElementsByClassName("filters");
    for (i = 0; i < filters.length; i++) {
      if (filters[i].id == "range") {
        if (filters[i].value != '' || filters[i+1].value != '') {
          rangeFilter = filters[i].value+"-"+filters[i+1].value;
        } else {
          rangeFilter = '';
        }
        i++;
        filter.push(rangeFilter);
      } else {
        filter.push(filters[i].value.toUpperCase());
      }    
    }
    table = document.getElementById("mainTable");
    tr = table.getElementsByTagName("tr");
    //count table columns
    if (tr.length > 1) {
      td = tr[1].getElementsByTagName("td")
      nMaxCol = td.length;
    }
  
    for (i = 1; i < tr.length; i++) {
      isDisplay = true;
      for (j = 0; j < nMaxCol; j++) {
        td = tr[i].getElementsByTagName("td")[j];
        txtValue = td.textContent || td.innerText;
        // filter by range
        if (j == 1 || j == 4) {
          let range = filter[j].split('-');
          if (parseInt(txtValue) <= parseInt(range[0])) {
            isDisplay = false;
          } else if (parseInt(txtValue) >= parseInt(range[1])) {
            isDisplay = false;
          }
        } else {
          if (filter[j] != "") {
            nResult = txtValue.toUpperCase().indexOf(filter[j]);
            if (nResult <= -1) {
              isDisplay = false;
            }
          } 
        }     
      }
      if (isDisplay) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }    
  }
  
  function resetFilters() {
    //get filter values
    var filters = document.getElementsByClassName("filters");
    // reset filter values
    for (i = 0; i < filters.length; i++) {
      if (filters[i].type == "text") {
        //reset input values
        filters[i].value = null;
      } else {
        //reset select values
        filters[i].value = "";
      }
    }
    runFilter();
  }
  
  function toPlottingPage() {
    // get subject info to plotting page
    var table, tr, outputFileName;
    var recordData = [];
    table = document.getElementById("mainTable");
    tr = table.getElementsByTagName("tr"); 
    let fileIndices = getFileIndices();
    if (fileIndices.length != 1) {
      alert("You can plot only one EEG recording.");
      return;
    }
    for (i = 0; i < tr[1].getElementsByTagName("td").length; i++) {
      recordData.push(tr[fileIndices[0]].getElementsByTagName("td")[i].innerText);
    }
    outputFileName = filePath + tr[fileIndices[0]].getElementsByTagName("td")[0].innerText + ".zip";

    // a bit hackish but it provides the chart page with data
    localStorage.setItem('recordingPath', outputFileName);
    localStorage.setItem('recordData', recordData);
    window.location.replace("chart_page.html");
  }
  
  function downloadFiles() {
    let url = [];
    let fileNames = [];
    var table, tr, outputFileName;
    table = document.getElementById("mainTable");
    tr = table.getElementsByTagName("tr");    
    let fileIndices = getFileIndices();
    if (fileIndices.length <= 0) {
      alert("Please choose at least one file to download.");
      return;
    }
    //get the right url from the table
    for (i = 0; i < fileIndices.length; i++) {
      outputFileName = tr[fileIndices[i]].getElementsByTagName("td")[0].innerText + ".zip";
      fileNames.push(outputFileName);
      url.push(filePath + outputFileName);
    }
    zipFiles(url, fileNames);
  };

  async function zipFiles(url, fileName) {
    // create files from url
    let zip = JSZip();
    let files = [];
    alert(`Archiving ${url.length} files. This process will take some time.`);
    for (i = 0; i < url.length; i++) {
      let response = await fetch(url[i], {mode: 'no-cors'});
      let data = await response.blob();
      //console.log(data);
      let metadata = {
        type: 'application/x-zip-compressed'
      }
      console.log(fileName[i]);
      let file = new File([data], fileName[i], metadata);
      //console.log(file);
      files.push(file);
    }
    // zip freshly made File objects
    for (i = 0; i < files.length; i++) {
      zip.file(files[i].name, files[i]);
    }
    zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, "output.zip");
    });
  }
  
  async function readFile() {
    let response = await fetch('http://localhost:8081/eegRecordings/test1.zip', {mode: 'no-cors'});
    let data = await response.arrayBuffer();
    let metadata = {
      type: 'application/x-zip-compressed'
    }
    let file = new File([data], 'test1.zip', metadata);
    
    var read_zip = new JSZip();
    try {
      const zipData = await read_zip.loadAsync(file);
      zipData.forEach((relativePath, zipEntry) => {
        zipEntry.async('uint8array').then((content) => {
          const buffer = content.buffer;
          console.log(buffer);
          const dView = new DataView(buffer);
          // call parsing function
          parseDataView(dView);
        });
      });
    } catch (error) {
      console.error('Error reading zip file:', error);
    }
  }
  
  /*
  async function readCsv() {
    let response = await fetch('http://localhost:8081/eegRecordings/fairdata_meta.csv', {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'content-type': 'text/csv;charset=utf-8',
      }
    });
    if (resetFilters.status == 200) {
      console.log("hyia");
    } else {
      console.log("no hiya for you");
    }
  }*/
    
  function getFileIndices() {
    // get all indices that have true value (all selected recordings)
    const indices = selectedRows.reduce(
      (out, bool, index) => bool ? out.concat(index+1) : out, 
      []
    )
    return indices;
  }
    
  // toggle rows 
  function toggleRow(x) {
      selectedRows[x.rowIndex-1] = !selectedRows[x.rowIndex-1];
      restyleTable();
    }

  // re-style table
  function restyleTable() {
    //loop through rows and change background color of selected one
    const tr = document.getElementsByTagName("tr");
    let rowsSelected = 0
    for (let i = 1; i < tr.length; i++) {
      if (selectedRows[i-1] == true) {
        tr[i].style.backgroundColor = "lightgray";
        rowsSelected++;
      } else {
        tr[i].style.backgroundColor = "white";
      }
    }
    if (rowsSelected > 1) {
      document.querySelector("#btnDownload").disabled = false;
      document.querySelector("#btnPlotPage").disabled = true;
    } else if (rowsSelected <= 0) {
      document.querySelector("#btnDownload").disabled = true;
      document.querySelector("#btnPlotPage").disabled = true;
    } else if (rowsSelected == 1) {
      document.querySelector("#btnDownload").disabled = false;
      document.querySelector("#btnPlotPage").disabled = false;
    }
  }
