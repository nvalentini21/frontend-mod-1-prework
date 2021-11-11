/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author
    this.content = content
    this.timeStamp = timeStamp
    this.likes = numberOfLikes
    this.comments = comments
  }
  addLike(){
    this.likes = (this.likes + 1)
  }
  addComment(content){
    this.comments.push(content)
  }
};
var firstTweet = new Tweet ("Nicole Valentini", "What's up world!? This is my first tweet ever.", "3:27 pm", 0, [])
console.log(firstTweet);

firstTweet.addLike();
console.log(firstTweet);

firstTweet.addComment("Welcome to Twitter, Nicole!");
console.log(firstTweet);

firstTweet.addComment("This tweet is so generic.");
console.log(firstTweet);
