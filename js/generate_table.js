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
    },
    {
      "record": "EEG00011",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00012",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00013",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00014",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00015",
      "year_of_birth": 1958,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00016",
      "year_of_birth": 1942,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00017",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00018",
      "year_of_birth": 1963,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00019",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00020",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00021",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00022",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00023",
      "year_of_birth": 1925,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00024",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00025",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00026",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00027",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00028",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00029",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00030",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 62.5
    },
    {
      "record": "EEG00031",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00032",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00033",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00034",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00035",
      "year_of_birth": 1959,
      "sex": "M",
      "handedness": "R",
      "head_size": 62
    },
    {
      "record": "EEG00036",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00037",
      "year_of_birth": 1956,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00038",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00039",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00040",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00041",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00042",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00043",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00044",
      "year_of_birth": 1938,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00045",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00046",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00047",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00048",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00049",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00050",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00051",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00052",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00053",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00054",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00055",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 52
    },
    {
      "record": "EEG00056",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00057",
      "year_of_birth": 1955,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00058",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00059",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00060",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00061",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00062",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00063",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00064",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00065",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00066",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00067",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00068",
      "year_of_birth": 1933,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00069",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00070",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00071",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00072",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00073",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00074",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00075",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00076",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00077",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00078",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00079",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 59.5
    },
    {
      "record": "EEG00080",
      "year_of_birth": 1926,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00081",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00082",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00083",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00084",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00085",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00086",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00087",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00088",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00089",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00090",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00091",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00092",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 52.5
    },
    {
      "record": "EEG00093",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00094",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00095",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00096",
      "year_of_birth": 1926,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00097",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00098",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00099",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00100",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00101",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00102",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00103",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00104",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00105",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00106",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00107",
      "year_of_birth": 1926,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00108",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00109",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 52.5
    },
    {
      "record": "EEG00110",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00111",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "A",
      "head_size": 55.5
    },
    {
      "record": "EEG00112",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00113",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00114",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00115",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 52.5
    },
    {
      "record": "EEG00116",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00117",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00118",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00119",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00120",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 52
    },
    {
      "record": "EEG00121",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00122",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "L",
      "head_size": 55
    },
    {
      "record": "EEG00123",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00124",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00125",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00126",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00127",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00128",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00129",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00130",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00131",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00132",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00133",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00134",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00135",
      "year_of_birth": 1950,
      "sex": "M",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00136",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "L",
      "head_size": 56
    },
    {
      "record": "EEG00137",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00138",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "L",
      "head_size": 56
    },
    {
      "record": "EEG00139",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00140",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00141",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00142",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00143",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00144",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00145",
      "year_of_birth": 1962,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00146",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "A",
      "head_size": 59
    },
    {
      "record": "EEG00147",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00148",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00149",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00150",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00151",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00152",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00153",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00154",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00155",
      "year_of_birth": 1929,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00156",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00157",
      "year_of_birth": 1953,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00158",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00159",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00160",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00161",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00162",
      "year_of_birth": 1961,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00163",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00164",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00165",
      "year_of_birth": 1931,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00166",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00167",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00168",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00169",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00170",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00171",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00172",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00173",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00174",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00175",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "A",
      "head_size": 56.5
    },
    {
      "record": "EEG00176",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00177",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00178",
      "year_of_birth": 1942,
      "sex": "M",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00179",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00180",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00181",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00182",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00183",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "A",
      "head_size": 59
    },
    {
      "record": "EEG00184",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00185",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00186",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00187",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00188",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00189",
      "year_of_birth": 1955,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00190",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00191",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00192",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00193",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00194",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00195",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00196",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00197",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00198",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00199",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00200",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00201",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00202",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00203",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00204",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00205",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00206",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00207",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00208",
      "year_of_birth": 1934,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00209",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00210",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00211",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00212",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00213",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00214",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00215",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00216",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00217",
      "year_of_birth": 1955,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00218",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00219",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 51
    },
    {
      "record": "EEG00220",
      "year_of_birth": 1956,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00221",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00222",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00223",
      "year_of_birth": 1949,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00224",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00225",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00226",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00227",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00228",
      "year_of_birth": 1938,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00229",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00230",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "L",
      "head_size": 56
    },
    {
      "record": "EEG00231",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00232",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00233",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00234",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00235",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00236",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00237",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00238",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00239",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00240",
      "year_of_birth": 1962,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00241",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00242",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00243",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00244",
      "year_of_birth": 1942,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00245",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00246",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00247",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00248",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00249",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 52.5
    },
    {
      "record": "EEG00250",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00251",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00252",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00253",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00254",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00255",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00256",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00257",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00258",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00259",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00260",
      "year_of_birth": 1928,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00261",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00262",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00263",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00264",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00265",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00266",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00267",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00268",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00269",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00270",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00271",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00272",
      "year_of_birth": 1931,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00273",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00274",
      "year_of_birth": 1938,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00275",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00276",
      "year_of_birth": 1926,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00277",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 51
    },
    {
      "record": "EEG00278",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00279",
      "year_of_birth": 1956,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00280",
      "year_of_birth": 1922,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00281",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00282",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00283",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 53.5
    },
    {
      "record": "EEG00284",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00285",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00286",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00287",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00288",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00289",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00290",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00291",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "L",
      "head_size": 57
    },
    {
      "record": "EEG00292",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00293",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00294",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00295",
      "year_of_birth": 1939,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00296",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00297",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00298",
      "year_of_birth": 1938,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00299",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00300",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00301",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00302",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00303",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00304",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00305",
      "year_of_birth": 1939,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00306",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00307",
      "year_of_birth": 1953,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00308",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00309",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00310",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00311",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00312",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00313",
      "year_of_birth": 1949,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00314",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00315",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00316",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00317",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00318",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00319",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00320",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00321",
      "year_of_birth": 1933,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00322",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00323",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00324",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00325",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00326",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00327",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00328",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00329",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00330",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00331",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00332",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00333",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "L",
      "head_size": 58
    },
    {
      "record": "EEG00334",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00335",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00336",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00337",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00338",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00339",
      "year_of_birth": 1942,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00340",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00341",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00342",
      "year_of_birth": 1929,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00343",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00344",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00345",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00346",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00347",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00348",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00349",
      "year_of_birth": 1958,
      "sex": "M",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00350",
      "year_of_birth": 1955,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00351",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00352",
      "year_of_birth": 1949,
      "sex": "M",
      "handedness": "R",
      "head_size": 60.5
    },
    {
      "record": "EEG00353",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00354",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00355",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00356",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00357",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00358",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00359",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00360",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00361",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00362",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00363",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00364",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00365",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00366",
      "year_of_birth": 1949,
      "sex": "M",
      "handedness": "R",
      "head_size": 60.5
    },
    {
      "record": "EEG00367",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00368",
      "year_of_birth": 1955,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00369",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00370",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00371",
      "year_of_birth": 1958,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00372",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00373",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00374",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00375",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00376",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00377",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00378",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00379",
      "year_of_birth": 1940,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00380",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00381",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00382",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00383",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00384",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00385",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00386",
      "year_of_birth": 1943,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00387",
      "year_of_birth": 1956,
      "sex": "M",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00388",
      "year_of_birth": 1935,
      "sex": "F",
      "handedness": "L",
      "head_size": 55.5
    },
    {
      "record": "EEG00389",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00390",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00391",
      "year_of_birth": 1949,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00392",
      "year_of_birth": 1946,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00393",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00394",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00395",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00396",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00397",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00398",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00399",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00400",
      "year_of_birth": 1935,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00401",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00402",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00403",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00404",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "L",
      "head_size": 55
    },
    {
      "record": "EEG00405",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00406",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00407",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00408",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00409",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00410",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00411",
      "year_of_birth": 1956,
      "sex": "M",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00412",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00413",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00414",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00415",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00416",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 52.5
    },
    {
      "record": "EEG00417",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00418",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00419",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00420",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00421",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00422",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00423",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00424",
      "year_of_birth": 1937,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00425",
      "year_of_birth": 1961,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00426",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00427",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00428",
      "year_of_birth": 1952,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00429",
      "year_of_birth": 1950,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00430",
      "year_of_birth": 1956,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00431",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00432",
      "year_of_birth": 1957,
      "sex": "F",
      "handedness": "L",
      "head_size": 55
    },
    {
      "record": "EEG00433",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00434",
      "year_of_birth": 1955,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00435",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 59.5
    },
    {
      "record": "EEG00436",
      "year_of_birth": 1944,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00437",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00438",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00439",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00440",
      "year_of_birth": 1922,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00441",
      "year_of_birth": 1932,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00442",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00443",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00444",
      "year_of_birth": 1943,
      "sex": "F",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00445",
      "year_of_birth": 1922,
      "sex": "F",
      "handedness": "R",
      "head_size": 53.5
    },
    {
      "record": "EEG00446",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00447",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 55.5
    },
    {
      "record": "EEG00448",
      "year_of_birth": 1937,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00449",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00450",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00451",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00452",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54.5
    },
    {
      "record": "EEG00453",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 60.5
    },
    {
      "record": "EEG00454",
      "year_of_birth": 1938,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00455",
      "year_of_birth": 1947,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00456",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00457",
      "year_of_birth": 1941,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00458",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00459",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00460",
      "year_of_birth": 1947,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00461",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00462",
      "year_of_birth": 1934,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00463",
      "year_of_birth": 1939,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00464",
      "year_of_birth": 1933,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00465",
      "year_of_birth": 1955,
      "sex": "M",
      "handedness": "R",
      "head_size": 61
    },
    {
      "record": "EEG00466",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00467",
      "year_of_birth": 1941,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00468",
      "year_of_birth": 1951,
      "sex": "F",
      "handedness": "L",
      "head_size": 56
    },
    {
      "record": "EEG00469",
      "year_of_birth": 1940,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00470",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00471",
      "year_of_birth": 1939,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00472",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00473",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00474",
      "year_of_birth": 1946,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00475",
      "year_of_birth": 1945,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00476",
      "year_of_birth": 1952,
      "sex": "M",
      "handedness": "R",
      "head_size": 60
    },
    {
      "record": "EEG00477",
      "year_of_birth": 1954,
      "sex": "M",
      "handedness": "R",
      "head_size": 59.5
    },
    {
      "record": "EEG00478",
      "year_of_birth": 1931,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00479",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00480",
      "year_of_birth": 1932,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00481",
      "year_of_birth": 1929,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00482",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "R",
      "head_size": 54
    },
    {
      "record": "EEG00483",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00484",
      "year_of_birth": 1959,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00485",
      "year_of_birth": 1954,
      "sex": "F",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00486",
      "year_of_birth": 1953,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00487",
      "year_of_birth": 1944,
      "sex": "F",
      "handedness": "R",
      "head_size": 59
    },
    {
      "record": "EEG00488",
      "year_of_birth": 1926,
      "sex": "F",
      "handedness": "R",
      "head_size": 55
    },
    {
      "record": "EEG00489",
      "year_of_birth": 1942,
      "sex": "M",
      "handedness": "R",
      "head_size": 57.5
    },
    {
      "record": "EEG00490",
      "year_of_birth": 1948,
      "sex": "F",
      "handedness": "R",
      "head_size": 57
    },
    {
      "record": "EEG00491",
      "year_of_birth": 1948,
      "sex": "M",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00492",
      "year_of_birth": 1939,
      "sex": "M",
      "handedness": "R",
      "head_size": 61.5
    },
    {
      "record": "EEG00493",
      "year_of_birth": 1956,
      "sex": "M",
      "handedness": "R",
      "head_size": 58
    },
    {
      "record": "EEG00494",
      "year_of_birth": 1936,
      "sex": "F",
      "handedness": "R",
      "head_size": 53
    },
    {
      "record": "EEG00495",
      "year_of_birth": "N/A",
      "sex": "N/A",
      "handedness": "N/A",
      "head_size": "N/A"
    },
    {
      "record": "EEG00496",
      "year_of_birth": 1932,
      "sex": "M",
      "handedness": "R",
      "head_size": 58.5
    },
    {
      "record": "EEG00497",
      "year_of_birth": 1945,
      "sex": "F",
      "handedness": "A",
      "head_size": 55.5
    },
    {
      "record": "EEG00498",
      "year_of_birth": 1942,
      "sex": "F",
      "handedness": "R",
      "head_size": 56
    },
    {
      "record": "EEG00499",
      "year_of_birth": 1950,
      "sex": "M",
      "handedness": "R",
      "head_size": 56.5
    },
    {
      "record": "EEG00500",
      "year_of_birth": 1949,
      "sex": "M",
      "handedness": "R",
      "head_size": 57
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

