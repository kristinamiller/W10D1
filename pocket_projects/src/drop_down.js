
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  let dogArray = [];
  Object.keys(dogs).forEach((dog) => {
    let dogA = document.createElement("a");
    dogA.innerHTML = dog;
    dogA.href = dogs[dog];
    let dogLi = document.createElement("li");
    dogLi.classList.add("dog-link");
    dogLi.classList.add("hidden");
    dogLi.append(dogA);
    dogArray.push(dogLi);
  });
  return dogArray;
}

function attachDogLinks(){
  let dogLinks = dogLinkCreator();
  let list = document.getElementsByClassName("drop-down-dog-list")[0];
  dogLinks.forEach((link) => {
    list.append(link);
  });
}

function handleEnter(e){
  let nav = e.currentTarget;
  Array.from(nav.getElementsByClassName("dog-link")).forEach((child) => {
    child.classList.remove('hidden');
  }); 
}

function handleLeave(e){
  let nav = e.currentTarget;
  Array.from(nav.getElementsByClassName("dog-link")).forEach((child) => {
    child.classList.add('hidden');
  }); 
}

attachDogLinks();

list = document.getElementsByClassName("drop-down-dog-nav")[0];
list.addEventListener("mouseenter", (e) => {
  handleEnter(e);
});
list.addEventListener("mouseleave", (e) => {
  handleLeave(e);
})