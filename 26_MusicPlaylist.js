// 26 Music Playlist

// Activity

/*
1. Remove the first and last elements.
2. Add one new element to end of the array.
3. Add two new elements to the beginning of the array.
*/

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping",
];

const shiftedElement = musicPlaylist.shift();
const poppedElement = musicPlaylist.pop();

musicPlaylist[8] = "Escape – This is the added song";

console.log(musicPlaylist);
