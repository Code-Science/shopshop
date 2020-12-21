import { excuteQuery } from '../../lib/db';

const handler = async (req, res) => {
  const { customerEmail } = req.body;
  try {
    if (!customerEmail) {
      return res.status(400).json({
        message: 'Customer email address is required',
      });
    }
    const result = await excuteQuery({
      query: `SELECT * FROM customers, orders, order_details WHERE customers.email="${customerEmail}" && Orders.customer_id=customers.id && order_details.order_id=Orders.id;`,
    });

    return res.status(201).json(result);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export default handler;
