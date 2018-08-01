
const Request = require('request');
const Boom = require('boom');

async function upload(
  req,
  reply
){
  return reply.act({
    role: "Soporte",
    cmd: "fetchAll",
    payload: null
  })
}


async function fetchDb(
  req,
  reply
){
  let payload = req.payload
  return reply.act({
    role: "Soporte",
    cmd: "fetchDb",
    payload: payload
  })
}

async function save(
  req,
  reply
){
  let payload = req.payload;
  console.log(payload)
  return reply.act({
    role: "Soporte",
    cmd: "save",
    payload: payload
  })
}
module.exports = {
  upload,
  save,
  fetchDb
}