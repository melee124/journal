export function Entry(words) {
  this.entryWords = words;
};

Entry.prototype.entryLength = function() {
  var entryArray = this.entryWords.split(" ");
  return entryArray.length;
}

// Entry.prototype.entryConsonants = function() {
//   var vowelsArray = ["a", "e", "i", "o", "u"];
//   var entryArray = this.entryWords.split("");
//
// }
