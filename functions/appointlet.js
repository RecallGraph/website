exports.handler = async function (event, context) {
  console.log({ event, context })

  return {
    statusCode: 200,
  }
}
