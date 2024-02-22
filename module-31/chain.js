// data access
const data = [{ id: 1, name: "abul", address: "kochu khet" }];
// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "Lenovo", price: 65000 },
    { id: 2, name: "Mac Book", price: 165000 },
  ],
};

// console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "Raaj",
  address: {
    street: {
      frist: "54/1 uttor side",
      second: "poribag er goli",
      third: "No dorai",
    },
    city: "dhaka",
  },
};

console.log(user.address.street.third);
