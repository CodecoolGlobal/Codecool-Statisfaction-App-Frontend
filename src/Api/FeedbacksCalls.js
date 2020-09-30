export async function GetFeedbacks() {
  //TODO
  return [
    {
      id: 1,
      title: "This is the first feedback, dunno what to do with it",
      date: "2020-09-30",
      user: "anonymus",
      votes: 3,
    },
    {
      id: 2,
      title: "A meaningless second message",
      date: "2020-08-10",
      user: "iszimate",
      votes: 2,
    },
    {
      id: 3,
      title:
        "A large comment with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id",
      date: "2020-04-10",
      user: "Lorem Ipsum",
      votes: 1,
    },
  ];
}

export async function Vote(vote) {
  /* TODO
  vote = {
      id: id,
      votes: incremented vote count
  }
  */
  return;
}
