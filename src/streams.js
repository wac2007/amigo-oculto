const fs = require('fs');
const csv = require('fast-csv');
const { FILE_PATH } = require('./constants');

function buildFileStream(filePath) {
  return fs.createReadStream(filePath);
}

function buildCSVStream(lineReader, finishReader) {
  return csv({
    delimiter: ';'
  })
  .on("data", lineReader)
  .on("end", finishReader);
}

function startStream(lineReader, finishReader) {
  const fileStream = buildFileStream(FILE_PATH);
  const csvStream = buildCSVStream(lineReader, finishReader);
  fileStream.pipe(csvStream);
}

module.exports = {
  startStream
}