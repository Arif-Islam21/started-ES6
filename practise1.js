const friends = ["rahim", "karim", "jasima", "saddam", "moklesh"];
let evenFriend = [];

for (const friend of friends) {
  const friendChar = (friendName) => {
    if (friendName.length % 2 === 0) {
      evenFriend.push(friendName);
    }
    // console.log(friendName.length);
  };
  friendChar(friend);
  //   console.log(friend);
}
console.log(evenFriend);
