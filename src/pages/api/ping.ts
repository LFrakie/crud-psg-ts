// import { NextApiRequest, NextApiResponse } from "next";
// import { conn } from '../../utils/database';


// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const response = await conn.query("SELECT NOW()");

//   console.log(response);
  
//   return res.json({ message: "pong" });
// };

import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({message: "pong"});
}




// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
