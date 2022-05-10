
const $burger = document.querySelector(".menu__icon");
const $menu = document.querySelector(".menu__body");
const $header = document.querySelector(".header");
const $logoF = document.querySelector(".logo_f");
const $logoS = document.querySelector(".logo_s");
const $curtain = document.querySelector(".curtain");
const $links = document.querySelectorAll(".menu__link");

$burger.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("static");
  $burger.classList.toggle("show-menu");
  $menu.classList.toggle("show-menu");
  $header.classList.toggle("show-menu");
  $logoF.classList.toggle("show-menu");
  $logoS.classList.toggle("show-menu");
  $curtain.classList.toggle("show-menu");
});

function hideMenu() {
  document.body.classList.remove("static");
  $burger.classList.remove("show-menu");
  $menu.classList.remove("show-menu");
  $header.classList.remove("show-menu");
  $logoF.classList.remove("show-menu");
  $logoS.classList.remove("show-menu");
  $curtain.classList.remove("show-menu");
}

$links.forEach((e) => {
  e.addEventListener("click", hideMenu);
});

$curtain.addEventListener("click", hideMenu);

const petsArray = [
  {
    animalID: 1,
    name: "Jennifer",
    img: "../../assets/images/our-friends/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 2,
    name: "Sophia",
    img: "../../assets/images/our-friends/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 3,
    name: "Woody",
    img: "../../assets/images/our-friends/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    animalID: 4,
    name: "Scarlett",
    img: "../../assets/images/our-friends/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 5,
    name: "Katrine",
    img: "../../assets/images/our-friends/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 6,
    name: "Timmy",
    img: "../../assets/images/our-friends/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    animalID: 7,
    name: "Freddie",
    img: "../../assets/images/our-friends/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 8,
    name: "Charly",
    img: "../../assets/images/our-friends/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    animalID: 9,
    name: "Ryzhik",
    img: "../../assets/images/our-friends/ryzhik.png",
    type: "Dog",
    breed: "Сur",
    description:
      "Puppy half-breed Ryzhik. The puppy is homely, contact, loves to be stroked and insists on being given more attention. Ryzhik is a ladies' man, he loves women's society and, in general, is close to people. He has undergone mild training for training and life in the city: he knows the simplest commands, walks in the city on a leash, and does almost all his work on the street.",
    age: "7 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 10,
    name: "Troy",
    img: "../../assets/images/our-friends/troy.png",
    type: "Dog",
    breed: "Сur",
    description:
      "Troy is a blind young dog. And it seems that he does not feel special, because he has long been accustomed to and lives by smells, hearing and feelings. And he has more than enough feelings) He is a gentle, playful, hugging friend. He wants one thing - only that someone is near! He was tired of being alone in the dark. He is very contact and affectionate, loves when his tummy is scratched and dreams of a family! Troy is now living in foster care and is already dreaming of leaving for his permanent home! How much can you wander! Help Troy find a home!",
    age: "4 years",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 11,
    name: "Bun",
    img: "../../assets/images/our-friends/bun.png",
    type: "Dog",
    breed: "Сur",
    description:
      "Short-legged puppy Bun. Very contact, loves to be stroked on a silk skin, and also kissed and squeezed. She got her nickname because even in the most difficult times, when there was practically nothing to eat, she ate her brothers and thus ate her sides more than theirs. When times started to improve, Bun fell in love with sleeping on the couch, cutting her nails, bathing with shampoo, and, of course, love for sweets did not go anywhere. Leader by nature.",
    age: "7 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 12,
    name: "Altai",
    img: "../../assets/images/our-friends/altai.png",
    type: "Cat",
    breed: "No breed",
    description:
      "Altai came to us with a serious chronic disease. The street is not in vain for cats. Despite everything, Altai is waiting for his family. Large, fluffy, calm and affectionate, with amazing charisma - he conquers immediately! He needs a man who will fall in love, and, of course, will be ready to monitor the health of an extraordinary cat.",
    age: "8 years",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 13,
    name: "Samson",
    img: "../../assets/images/our-friends/samson.png",
    type: "Cat",
    breed: "No breed",
    description:
      "Samson came to us before the new year, under the OSVV program. And he showed himself immediately in the most extraordinary way. He apparently realized that he did not want to go back to the street, so he must portray something so that he would be noticed and appreciated! And he did it. Affectionate, very sociable, climbs into hands, butts, ready to pose, work as a model if necessary. In general, Samson needs to go home. He is ready to be someone's friend, an eternal positive, a purring antidepressant!",
    age: "2 years",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    animalID: 14,
    name: "Bars",
    img: "../../assets/images/our-friends/bars.png",
    type: "Cat",
    breed: "No breed",
    description:
      "Bars came to us at the end of 2021 under the OSVV program. Together with their sister, they were still kittens. My sister was lucky, she was quickly noticed and she went home. And Bars still lives with us. He is a gentle, calm, slightly shy boy. He needs a little time to get used to and trust. Very handsome, with a chic fur coat and amber eyes.The guy was born around April 2021, healthy, vaccinated, neutered, tests for infections are negative, communicates well with other cats, not a bully, loves to play.",
    age: "1 year",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
];
