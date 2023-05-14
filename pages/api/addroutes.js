import routes from "../../models/routes"
import connectDb from "../../middlware/mongoos"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            let p = new routes({
                aroute: req.body[i].aroute,
                subroutes: req.body[i].subroutes
            })
            await p.save()
        }
        res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);