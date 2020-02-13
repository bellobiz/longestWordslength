const string = (str) => {
    /** convert string to array **/
    const stringArray = str.split(" ");
    /** iterator variable: Map each item in the array **/
    const longestWordLength = word => word.length;
    const words = stringArray.map(longestWordLength);
    /** sort items in ascending order **/
    const sortWords = words.sort((a, b) => a - b);
    /** find the last item or element in array **/
    const longestword = sortWords[sortWords.length-1];
    console.log(longestword);
};

/** output **/
const findLongestWordLength = () => {
  string("The quick brown fox jumped over the lazy dog");
  string("May the force be with you");
  string("Google do a barrel roll");
  string("What is the average airspeed velocity of an unladen swallow");
  string("What if we try a super-long word such as otorhinolaryngology");
};

findLongestWordLength();