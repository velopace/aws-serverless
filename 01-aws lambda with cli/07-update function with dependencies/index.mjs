export const handler = async (event) => {
  const total = event.num1 * event.num2;
  const response = {
      statusCode: 200,
      body: `The total of ${event.num1} and ${event.num2} is ${total}`,
  };
  return response;
};