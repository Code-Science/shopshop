import { excuteQuery } from '../../lib/db';

const handler = async (req, res) => {
  const { name, email, postcode, basket, order } = req.body;
  try {
    if (!name || !email || !order || !basket) {
      return res.status(400).json({
        message: '`name`, email and `order information` are all required',
      });
    }

    await excuteQuery({
      query: 'INSERT INTO customers (name, email, postcode) VALUES(?, ?, ?)',
      values: [name, email, postcode],
    }).then(async (response) => {
      const customerId = response.insertId; // newly generated primary id

      await excuteQuery({
        query: 'INSERT INTO orders (id, amount, customer_id) VALUES(?, ?, ?)',
        values: [order.paymentIntent_id, order.amount, customerId],
      }).then(async () => {
        basket.forEach(async (item) => {
          await excuteQuery({
            query:
              'INSERT INTO order_details (order_id, quantity, product_id) VALUES(?,?,?)',
            values: [order.paymentIntent_id, item.quantity, item.id],
          });
        });
      });
    });

    return res.status(201).json({ status: 'successful' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export default handler;
