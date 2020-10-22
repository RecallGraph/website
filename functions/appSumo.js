const { MongoClient } = require("mongodb")

const { MONGO_DOMAIN, MONGO_DB, MONGO_USER, MONGO_PASSWORD } = process.env
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${MONGO_DB}?retryWrites=true&w=majority&poolSize=1`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function getCollection(collName = "appsumo_codes") {
  await client.connect()
  const db = await client.db(MONGO_DB)

  return db.collection(collName)
}

exports.handler = async function (event, context) {
  const params = JSON.parse(event.body)
  const { status, action, code } = params
  let result, coupon, collection, user

  switch (action) {
    case "getByCode":
      user = context.clientContext.user
      if (user) {
        collection = await getCollection()
        coupon = await collection.findOne({ code: user.user_metadata.appsumo_code })

        result = {
          statusCode: 200,
          body: JSON.stringify(coupon || {}),
        }
      } else {
        result = {
          statusCode: 401,
          body: "Unauthorized.",
        }
      }

      break

    case "getByCodeAndStatus":
      collection = await getCollection()
      coupon = await collection.findOne({ code, status })

      result = {
        statusCode: 200,
        body: JSON.stringify(coupon || {}),
      }

      break

    case "activate":
      user = context.clientContext.user
      if (user) {
        collection = await getCollection()
        const writeOpResult = await collection.updateOne(
          { code: user.user_metadata.appsumo_code },
          { $set: { status: "active", email: user.email } }
        )

        result = {
          statusCode: 200,
          body: JSON.stringify(writeOpResult.result),
        }
      } else {
        result = {
          statusCode: 401,
          body: "Unauthorized.",
        }
      }

      break

    default:
      result = {
        statusCode: 400,
        body: 'Incorrect "action" parameter.',
      }
  }

  client.close()

  return result
}
