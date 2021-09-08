import nc from 'next-connect';
import Product from '../../../models/Products';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

// .post((req, res) => {
//   res.json({ hello: "world" });
// })
// .put(async (req, res) => {
//   res.end("async/await is also supported!");
// })
// .patch(async (req, res) => {
//   throw new Error("Throws me around! Error can be caught and handled.");
// });

export default handler;
