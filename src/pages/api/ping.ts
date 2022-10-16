import { NextApiRequest, NextApiResponse } from "next";
import { conn } from '../../utils/database';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await conn.query("SELECT NOW()");

  console.log(response);
  
  return res.json({ message: "pong" });
};


// For tests

// import {NextApiRequest, NextApiResponse} from "next";

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   return res.json({message: "pong"});
// }

