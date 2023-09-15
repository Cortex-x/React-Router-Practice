let books = [
  {
    name: "The Great Gatsby",
    number: 21,
    amount: "$15.99",
    due: "1925-04-10",
  },
  {
    name: "To Kill a Mockingbird",
    number: 22,
    amount: "$12.49",
    due: "1960-07-11",
  },
  {
    name: "1984",
    number: 23,
    amount: "$14.95",
    due: "1949-06-08",
  },
  {
    name: "Pride and Prejudice",
    number: 24,
    amount: "$9.99",
    due: "1813-01-28",
  },
  {
    name: "The Catcher in the Rye",
    number: 25,
    amount: "$11.99",
    due: "1951-07-16",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    number: 26,
    amount: "$19.99",
    due: "1997-06-26",
  },
  {
    name: "Lord of the Rings: The Fellowship of the Ring",
    number: 27,
    amount: "$16.79",
    due: "1954-07-29",
  },
  {
    name: "The Hobbit",
    number: 28,
    amount: "$10.95",
    due: "1937-09-21",
  },
];

export const getBooks = () => {
  return books;
};
export const getBook = (bookNumber) => {
  return books.find((book) => book.number === bookNumber);
};

export const deletbook = (number) => {
  books = books.filter((book) => book.number !== number);
};
