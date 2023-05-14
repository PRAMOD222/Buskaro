import routes from "../../models/routes"
import connectDb from "../../middlware/mongoos"

const handler = async (req, res)=> {
  let allroute = await routes.find()

  res.status(200).json({allroute})
}

export default connectDb(handler);