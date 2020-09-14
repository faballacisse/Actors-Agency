//My datas
const actors = [
  {
    category: 'male',
    name: 'magnus jensen',
    picture: 'https://randomuser.me/api/portraits/men/29.jpg'
  },
  {
    category: 'male',
    name: 'richard bradley',
    picture: 'https://randomuser.me/api/portraits/men/95.jpg'
  },
  {
    category: 'male',
    name: 'eduardo martin',
    picture: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    category: 'female',
    name: 'norah faure',
    picture: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    category: 'female',
    name: 'rose clarke',
    picture: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    category: 'female',
    name: 'adeline mathieu',
    picture: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    category: 'baby',
    name: 'joe edwards',
    picture: 'https://randomuser.me/api/portraits/lego/5.jpg'
  },
  {
    category: 'baby',
    name: 'bob kelley',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
  },
  {
    category: 'baby',
    name: 'john doe',
    picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
  }
];

//Step 1 complete
// for each element of the array Actors
for (const actor of actors) {
  // Create a constant newCard wich is the clone of the 
  // first element with the class "d-none"
  const newCard = $(".d-none").eq(0).clone();
  // searching for the .card-title and assigning the text of the actor.name
  newCard.find(".card-title").text(actor.name);
  // searchs for the image and change the source to the actor picture url
  newCard.find("img").attr("src", actor.picture);
  // we are adding the category in the class of the new card (the clone)
  newCard.addClass(actor.category);
  // it's removing the class d-none in the cloned card 
  newCard.removeClass("d-none");
  // we insert the cloned card to the list of the .card-columns
  $(".card-columns").append(newCard);
  // closing the eloop
}

// hide all the not "males"
// hide all + show male
$(".card").slideUp(1000);
$(".male").slideDown(1000);
// using the not
//$(".card:not(.male)").hide(1000);

/*
const inputs = document.querySelectorAll(".btn");
for (const input of inputs) {
  input.addEventListener("click", function () {
    console.log(this.querySelector("input").value);
    // Hide ALL the card
    // Show the one that have the corresponding class name.
    // Change the <select> of the category to the right value. 
  })
}
*/
$(".btn").on("click", function (event) {
  const selectCat = $(this).find("input").val();
  console.log(selectCat);
  $(".card").slideUp(1000); // hide
  $("." + selectCat).slideDown(1000); // only the selectedCat
  $("#inputCategories").val(selectCat);
})

// generate the <option>
for (const actor of actors) {
  const clonedOption = $("#inputActors option").eq(0).clone();
  $("#inputActors").append(clonedOption);
  clonedOption.html(actor.name);
  clonedOption.val(actor.name)
}

$(".card").on("click", function () {
  $(".card").removeClass("bg-primary text-white");
  $(this).addClass("bg-primary text-white");
})

$('form').on('submit', function (event) {
  event.preventDefault();
  const actorValue = $('#inputActors').val();
  // replace the form with the message
  $('form').html('Sorry but the actor ' + actorValue + ' is not available');
})