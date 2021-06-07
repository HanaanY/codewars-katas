// 6 kyu kata
// https://www.codewars.com/kata/56a32dd6e4f4748cc3000006

function mean(town, strng) {
  const dataMap = parseData(strng);
  if (!hasTown(town, dataMap)) {
    return -1
  }
  const rainfallArr = dataMap.get(town);
  return rainfallArr.reduce((a, b) => a + b, 0) / rainfallArr.length;
}
function variance(town, strng) {
  const dataMap = parseData(strng);
  if (!hasTown(town, dataMap)){
    return -1
  }
  const townMean = mean(town, strng);
  const rainfallArr = dataMap.get(town);
  return rainfallArr.map(x => Math.pow(x - townMean, 2)). reduce((a, b) => a + b, 0) / rainfallArr.length;
}

function hasTown(town, dataMap) {
  return dataMap.has(town);
}

function parseData (dataStr){
  const recordsArr = dataStr.split("\n");
  const dataMap = new Map();
  recordsArr.forEach( record => {
    let [city, rainDataStr] =  record.split(":");
    let rainDataRecords = rainDataStr.split(",");
    const monthlyRainDataArr = [];
    rainDataRecords.map( rdr => {
      let [, rainfall] = rdr.split(" ");
      monthlyRainDataArr.push(Number(rainfall));
    });
    dataMap.set(city, monthlyRainDataArr);
  });
  return dataMap;
}

module.exports = {
  mean,
  variance,
  parseData,
}