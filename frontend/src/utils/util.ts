// export const isCreditCardValid = (cardNumber: string) => {
//   const cardRegex =
//     /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
//   return cardRegex.test(cardNumber.replace(/\s/g, ""));
// };

// export function validatePhoneNumber(phoneNumber: string): boolean {
//   const regex = /^[0-9]+$/;
//   return regex.test(phoneNumber);
// }

// export function validateTransferAmount(amount: string): boolean {
//   const regex = /^[0-9]+$/;
//   return regex.test(amount);
// }

// export function validateCharactersOnly(text: string): boolean {
//   const regex = /^[A-Za-z\s]+$/;
//   return regex.test(text);
// }

export function generateReference(): string {
  const today = new Date();
  const datePart = `${today.getFullYear()}${String(
    today.getMonth() + 1
  ).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;

  const sequenceNumber = String(Math.floor(Math.random() * 999) + 1).padStart(
    3,
    "0"
  );
  return `CUS${datePart}${sequenceNumber}`;
}
