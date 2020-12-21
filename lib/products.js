import { excuteQuery } from './db';

export async function getAllProductIds() {
  let result;
  try {
    result = await excuteQuery({
      query: 'SELECT * FROM Products;',
    });
  } catch (error) {
    result = 'error';
  }

  return result.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
}
