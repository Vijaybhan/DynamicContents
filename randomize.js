var data={ "notes": [
  {
    "title": "Human Being",
    "author": 'A.P.J. Abdul Kalam',
    "quote": "Real education enhances the dignity of a human being and increases his or her self-respect. If only the real sense of education could be realized by each individual and carried forward in every field of human activity, the world will be so much a better place to live in."
  },
   {
    "title": "Human Being",
    "author": 'Lou Holtz',
    "quote": "Nothing on this earth is standing still. It's either growing or it's dying. No matter if it's a tree or a human being."
  },
   {
    "title": "Law of Nature",
    "author": ' Napoleon Hill',
    "quote": "Remember that your dominating thoughts attract, through a definite law of nature, by the shortest and most convenient route, their physical counterpart. Be careful what your thoughts dwell upon."
  },
   {
    "title": "Law of Nature",
    "author": ' Fyodor Dostoyevsky',
    "quote": "Nature does not ask your permission, she has nothing to do with your wishes, and whether you like her laws or dislike them, you are bound to accept her as she is, and consequently all her conclusions."
  },
   {
    "title": "Life",
    "author": 'Dr, Seuss',
    "quote": "Don't cry because it's over, smile because it happened."
  },
   {
    "title": "Poetry",
    "author": 'Gulzar',
    "quote": "Tham ke rah jati hai jindgi, jab jam ke barsati hai purani yaaden."
  },
  {
    "title": "Poetry",
    "author": 'Gulzar',
    "quote": "Parakh se pare hai ye sakhsiyat meri, mai unhi ke liye hun jo samjhe kadra meri."
  }, 
  {
    "title": "Poetry",
    "author": 'Gulzar',
    "quote": "Jindgi sasti hai sahab jeene ke tareeke mahange hai..."
  }
{
    "title": "Life",
    "author": 'Mae West',
    "quote": "You only live once, but if you do it right, once is enough."
  }, 
  {
    "title": "Life",
    "author": 'Robert Frost',
    "quote": "In three words I can sum up everything I've learned about life: it goes on."
  }, 
  {
    "title": "Life Lessons",
    "author": 'Marilyn Monroe',
    "quote": "I've never fooled anyone. I've let people fool themselves. They didn't bother to find out who and what I was. Instead they would invent a character for me. I wouldn't argue with them. They were obviously loving somebody I wasn't."
  }, 



 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
