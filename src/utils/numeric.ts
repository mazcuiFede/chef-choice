export const average = (array) => array.reduce((a, b) => a + b) / array.length;
// Function to generate unique random numbers
export function generateUniqueNumbers(min, max, quantity) {
  if (max - min + 1 < quantity) {
    throw new Error(
      'It is not possible to generate the requested quantity of numbers',
    );
  }

  const numbers = [];
  while (numbers.length < quantity) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
