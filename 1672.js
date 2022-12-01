/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let customer,
    customerWealth,
    richestCustomerWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    customer = accounts[i];
    customerWealth = customer.reduce((sum, n) => sum + n, 0);
    richestCustomerWealth =
      customerWealth > richestCustomerWealth
        ? customerWealth
        : richestCustomerWealth;
  }

  return richestCustomerWealth;
};
