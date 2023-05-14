export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle POST requests here
      const data  = req.body;
    //   console.log(req.body);
      res.status(200).json(req.body);
    } else if (req.method === 'GET') {
      // Handle GET requests here
      console.log(res.body)
      const  query  = req.body;
      console.log('Received query:', query);
      res.status(200).json({ message: query });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  