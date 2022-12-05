const songs = [
  {
    id: 0,
    name: "As The Night Turns Blue",
    year: "2020",
    imageURL: "images/as_the_night_turns_blue-cover.jpg",
    lyrics:  "I don’t feel like dying, I just feel like crying. Melancholy lifestyle, Metaphorical long mile. The sun has set and at last the birds flew, As the night turns blue. My fleeting mind is sighing, My greeting face is smiling. Spinning around meanwhile, Orbit garden sundial. The tiles crack in a discoloured hue, As the night turns blue. The papers keep on lying, The mindless keep on buying. Put your darling on trial, Down the softly lit aisle. My barbwire crown keeps thoughts in like glue, As the night turns blue. Electric cords are frying, Micro-waves are flying. Throw them in a pile, In a monitored file. Eyes turn red as sleep is overdue, As the night turns blue."
  },
  {
    id: 1,
    name: "All This Noise",
    year: "2020",
    imageURL: "images/all_this_noise-cover.jpg",
    lyrics: "It gets a little crazy here in this world. I get claustrophobic being just one girl. Satellites are swarming overhead. Boats and trains tumble past my bed. Planes carry millions of lives led, straight into the lake. It’s more than I can take. Valley of the sinners, land of no winners, someone fly me out of here. All this noise drives me further than my mind is full. All this noise makes me wish for dreams that make me a fool. The sea’s a little greener here in this place; green of envy, the currents pick up the pace. Beholders of the dreams untold, Valleys of wonderers to scared to hold the fairytale they’re being sold. Stories they’re believing, eyes begin deceiving."
  },
  {
    id: 2,
    name: "Anymore",
    year: "2020",
    imageURL: "images/anymore-cover.jpg",
    lyrics: "I’ve been hurt in my life too many times to count, seen things too vile for any sane mind not to doubt. Bad dreams are all it leaves me now, carrying to everyone I meet a shadow from the stars. I’ve been caught in debris after running from a bomb, saw the spiritual casualties that washed up on the rocks. Lie to me - that’s what they all do best, and that’s the sugar coated tip of the iceberg I repress. Cutting up my life like a magazine. Pasting all the parts together that don’t make me scream. They aren’t my problem anymore. They aren’t my problem since I walked out that door. I don’t talk about it to save me from the hurt. I’ve got so much love now, sifted from the dirt."
  },
  {
    id: 3,
    name: "Her",
    year: "2020",
    imageURL: "images/her-cover.jpeg",
    lyrics: "Liked by everyone, but she is loved by no one. Surrounded by distractions, she will always sleep alone. She’s got an icy glare like the prick of a thorn, mesmerising the weak behind her devil horns. I see them cry but never speak, but its kind of funny to see them fall so easy. Never wants to know you 'less she wants something from you, but hey, what can I do. She puts up a smile but I’ll always see through. Liked by everyone, but she is loved by no one. She’s the queen right now, but no one knows where she’s going. They don’t even know about the people worth knowing, but i guess that it’s fair ‘cause I don’t see them either when I see you. I used to cry when the facts were bleak, but its kinds of funny, how sad you made me honey."
  },
  {
    id: 4,
    name: "Dead Leaf Echo",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "Baby, oh, having big damn heart just gets too damn hard. I was so broken and hid out on my own little planet amongst the stars. Sailing away, oh! Where love is liquor and art is meth - right here in my pretty head. All I ever wanted was to see life in red. I wanna forget it all, but when I do there’s nothing left but to fall. I’m a dead-leaf-echo of what I used to be, when you were you, baby, and I was me. Baby, oh, wanting to be a better me is making me go insane, and no matter how hard I try, it seems there’s no pinning down a girl like me. Sweet controversy, no! You cannot fix a girl like me. Why can’t I even want myself? I’ve disappeared inside myself."
  },
  {
    id: 5,
    name: "Warm Skin",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "I tilted my head back ‘til the water soaked my hair clips. It seems that even the rain wants to kiss my lips. I’m just lying here watching the sky fall, feelings all the things there are to be felt, thinking all the things there are to be thought. I tilted my head back ‘til the waves were upside down. They seem like the dark clouds that swim behind my eyes. I’m just lying here watching the sky fall, feelings all the things there are to be felt, thinking of the things that aren’t to be thought. When you talk to me, I tell myself to look you in the eye, but I can’t help but look down when I get shy. I’m just sitting there, leaning against the wall, listening to the things that I’m meant to be, ignoring all the things that you want from me. I know you think I'm dumb, ‘cause I’m smart but I’m not going to “smart school”, but money can’t buy freedom and you don’t see why it can’t buy love."
  },
  {
    id: 6,
    name: "Currently Gone",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "I thought about it when he asked for my number, but how could I dip my toes in the water? I don’t want the salt, I just want the sugar. So I sit on the shore, watching, just watching. Why am I so unsure of this, when all the signs have drawn to yes? I can’t breathe 'cause I fear that when you look at me, I won’t be there. You can try your best to change the world but you can only change how you see it. When I think too much, you tell me not to worry. The future, what a bore. What am I here for? And after all this time, I'm leaving you behind. A piece of your heart will live on in my puzzled mind."
  },
  {
    id: 7,
    name: "Around Town",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "How does it take just two eyes of brown to crush me like a lemon ‘til my heart hits the ground. My highschool heart looks so stupid, now - isn't it funny how these thngs turn around? It’s been a while since someone held on me that way. You like my art and my music, what can I say? He said you’re killing it, and though he’s not the first one, I said you’re killing me, but the words didn’t leave my mouth. Please don't forget me, otherwise I'll lose myself again. Biggest heart in town and it stops when I see you driving around town. How did it take just two eyes of blue to look me in the eye and turn me into someone new? Do you care for me because you really want to? Or is it only 'cause you’re paid to? How is it, darling, that you gone and got the most popular car to exist, oh my god? The way i pay attention to the teeny-tiny things gets the bestest of me comes back to clip my wings."
  },
  {
    id: 8,
    name: "Misinformation",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "How can I trust anyone when I’ve just got done stitching up my last wounds? How did I know good from wrong when my ****** ran off with another man? What should I look like? What should I wear? Who can I relate to? Who should I fear? Misinformation. How can I trust a man when I’ve seen only the worstest from my friends? How can I trust far lands hen they’re run by xenophobic men? If I’m just a child, then I must be dumb, dumb. So my dreams are too wild? Well, it's better than having none."
  },
  {
    id: 9,
    name: "Strawberry & Sorrow Pie",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "I can be one way and I can be another. Sifting in the flour or mixing in the butter. God, you're a drag with your little name tag. Put me in a box with a ribbon on top and I'll tear that sh*t right off. Just a teenage mess with a soft heart. Don't you know, you're a diamond and I'm in the rough? Take another slice of my Strawberry and Sorrow Pie. I could have been yours, but you're not my flavour, baby. Give a little glare 'cause I'm a shady little lady. Ducking from the bad on my little Lilypad. Show me a smile, don't be afraid of me. All I want is the world to be happy."
  },
  {
    id: 10,
    name: "Here's My Heart",
    year: "2021",
    imageURL: "images/heres_my_heart-cover.jpg",
    lyrics: "There have been a lot of times I didn’t do what I wanted to. I kept myself in line because I’m good 'n true. But they don’t know what’s in my mind, or more importantly, what’s in my heart. But there’s no wrong in looking, I don’t have to keep my eyes apart. Why’d the universe make you for me, if love’s not in our stars and I don’t believe in destiny? Why’d the universe make me for everyone, when I don’t have no scene to paint my foreground on? Here’s my heart, come on and take it - promise you won't break it. I’d like to pay a little homage in this song just for you. There’s a different kind of care you gave in all I went through. Just like you, I'm not generally the type to be understood, but I know my heart's full of good. Take it or leave it, as you would."
  },
  {
    id: 11,
    name: "The Mediator",
    year: "2022",
    imageURL: "images/the_mediator-cover.jpg",
    lyrics: "They say that “nothing lasts forever”, but that’s just because they’re scared that it’s true. Why would you set yourself up for disappointment, when you could claim that you knew it all along? So, apparently “nothing good is free”, and I’d agree if I hadn’t spent so much energy. Carb coins of crystal spent on my happiness. Protein pennies spent on your deadbeat friendship. I-N-F-P, my brain and my heart got a hold on me. Eyes blue, skies white, silver birch haze and I’m blonde again, it’s nice to know that nothing’s really changed. He sang that “nothing really matters”, and I listened harder than I thought I could do. Why would I be so dsperate for a point, when definition is limiting and the world is yours?"
  },
  {
    id: 12,
    name: "Girlhood",
    year: "2022",
    imageURL: "images/girlhood-cover.jpg",
    lyrics: "I know that you and me really wanna be seventeen (forever) but we got shit to do and the growing pains that we’re getting through (together) Are making us wiser, just try to hide her down (but she’ll keep sneaking in my dreams). What’s this thing with being afraid to get older (when we’re not even twenty). That’s the thing ‘bout being a girl, we’re all so intelligent, so misunderstood. Let’s just have fun, caught up in our Girlhood. I know all too damn well that there aren’t any words you can say to me (to make it better). Don’t let me forget I have a right to be in love with the world (if i wanna). I can’t cry, you just make me tired and I leave (kindness has no in between). What’s this thing with being afraid to drop it down (to drop my stupid guard down)."
  }
];

const result = document.getElementById('result');
showAllSongs();



// NOTIFS bar

const notifs = document.getElementById('notifications');


// RUNNING SEARCH FUNCTION

// this variable will become true if we find a song
let songIsFound;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.onclick = function() {
  filterSearchWord();
};

function filterSearchWord() {
  // get the search word from the search box input
  let searchString = searchInput.value;
  // Checking if nothing's been typed in
  if (searchString == "") {
    notifs.innerHTML = `
    <div class="alert">Please enter a song title</div>
    `;
  }
  else {
    runSearch(searchString);
  }
}

function runSearch(string) {
  // song is not found by default, only turns on if there's a match
  songIsFound = false;
  let songsFoundNumber = 0;
  // clear songs from page before searching for one
  result.innerHTML = "";

  for (let i = 0; i < songs.length; i++) {
    // lowercase string is the user search, changed to lower case
    let lowercaseSearchString = string.toLowerCase();
    // turn each iteration of an song name into a variable, that is lower case
    let lowercaseSongName = songs[i].name.toLowerCase();
    // declare a variable called match, it will become true if the
    // song name includes anything within the search term
    let match = lowercaseSongName.includes(lowercaseSearchString);
    if (match == true) {
      songsFoundNumber++;
      // Removes no results message
      songIsFound = true;
      // Returns whatever song matches the search string
      generateSong(i);
      if (songsFoundNumber == 1) {
      notifs.innerHTML = `
      <div class="alert">Your search: <strong>"${string}"</strong> returned 1 result</div>
      `;
    } else if (songsFoundNumber > 1) {
    notifs.innerHTML = `
    <div class="alert">Your search: <strong>"${string}"</strong> returned ${songsFoundNumber} results</div>
    `;
      }
    }
  }
}



// FILTERING THE SONGS BY YEAR OF RELEASE

const filterButton = document.getElementById('year-filter-button');

filterButton.onclick = function() {
  filterYear();
};

function filterYear() {
  result.innerHTML = "";
  // Grab the checkboxes
  // Grabs everything inside of the query selector brackets
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");

// Declare an array to contain all the checked years
const selectedYears = [];

  for (let i = 0; i < checkedBoxes.length; i++) {
    // Logging with .value will grab the value set for the checkbox in the html
    // console.log(checkedBoxes[i].value);

    // checkedBoxes[i].value represents whatever the user clicked on
    selectedYears.push(checkedBoxes[i].value);
  }
  // because selectedYears is an array, we can use .length
  // This will just tell you that all songs are showing if you select nothing before clicking 'Filter'
  if (selectedYears.length == 0) {
    showAllSongs();
    console.log("You didn't select anything.");
    notifs.innerHTML = `
    <div class="alert">Showing all songs</div>
    `;
  } else {
    notifs.innerHTML = `
      <div class="alert">Showing years: ${selectedYears}</div>
    `;
    for (let i = 0; i < selectedYears.length; i++) {
      if (selectedYears[i] == "2020") {
        // loop through the songs array and compare the year that the user chose against the user of each song.
        for (let i = 0; i < songs.length; i++) {
          // for when the user selects 2020
          if (songs[i].year == "2020") {
            generateSong(i);
          } //end of if statement
        } // end of for loop
      }
    } //end of for loop


    for (let i = 0; i < selectedYears.length; i++) {
      if (selectedYears[i] == "2021") {
        // loop through the songs array and compare the year that the user chose against the user of each song.
        for (let i = 0; i < songs.length; i++) {
          // for when the user selects 2021
          if (songs[i].year == "2021") {
            generateSong(i);
          } //end of if statement
        } // end of for loop
      }
    } //end of for loop

    for (let i = 0; i < selectedYears.length; i++) {
      if (selectedYears[i] == "2022") {
        // loop through the songs array and compare the year that the user chose against the user of each song.
        for (let i = 0; i < songs.length; i++) {
          // for when the user selects 2022
          if (songs[i].year == "2022") {
            generateSong(i);
          } //end of if statement
        } // end of for loop
      }
    } //end of for loop


  } //end of the else bracket
} //end of filterYear function

// putting all the songs into a function rather than copy and pasting the entire things a bunch of times. It can just be called instead.
function showAllSongs() {
  for (let i = 0; i < songs.length; i++) {
    result.innerHTML += `
    <div class="song-profile">
    <div class="content-wrapper">
          <h4>${songs[i].name}</h4>
    </div>
          <img src="${songs[i].imageURL}">
          <a class="button modal-button" id="${songs[i].id}">Lyrics<i class="bi bi-arrow-right"></i></a>
    </div>
    `;
  }
}

// function to grab song(s) judjing by selected year and display in the result div
function generateSong(index) {
  result.innerHTML += `
  <div class="song-profile">
  <div class="content-wrapper">
        <h4>${songs[index].name}</h4>
  </div>
        <img src="${songs[index].imageURL}">
        <a class="button modal-button" id="${songs[index].id}">Lyrics<i class="bi bi-arrow-right"></i></a>
  </div>
  `;
}

function generateButtons() {
  for (let i = 0; i < modalButtonArray.length; i++) {
    modalButtonArray[i].onclick = function() {
      let currentButtonId = this.id;
      openLyricsModal(currentButtonId);
    };
  }
}

// LYRICS MODAL

const lyricsModal = document.getElementById('lyrics-modal');
const modalContent = document.getElementById('modal-content');
const modalLryics = document.getElementById('modal-lyrics');
const modalButtonArray = document.getElementsByClassName('modal-button');
const closeButton = document.getElementById('close-button');

generateButtons();

function openLyricsModal(id) {
  lyricsModal.classList.toggle("active");
  modalLryics.innerHTML = `
  <div class="lyrics">
  ${songs[id].lyrics}
  </div>
  `;
}

// for (let i = 0; i < modalButtonArray.length; i++) {
  modalButtonArray.onclick = function() {
    openLyricsModal();
  };
// }

closeButton.onclick = function() {
  closeLyricsModal();
};

function closeLyricsModal() {
  modalContent.classList.toggle("active");
  lyricsModal.classList.toggle("active");
}
