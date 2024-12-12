// script.js
const facts = [
    "Mike, a retired astronomer, has photographed 1,247 different stars from his backyard observatory over 15 years, including three supernovas!",
    "Emma, a baker in Portland, once created a wedding cake that took 72 hours to decorate and used exactly 2,468 hand-painted sugar flowers.",
    "James, a marine biologist, has documented 37 different species of seahorses during his diving expeditions, including one that was previously unknown to science.",
    "Maria, a butterfly enthusiast, has successfully grown a garden that attracts 28 different species of butterflies, transforming her urban backyard into a certified wildlife habitat.",
    "David, a vintage car collector, restored a 1957 Chevrolet using only original parts he sourced from 14 different countries.",
    "Lisa, a librarian, has read 4,382 books over 25 years and maintains a detailed digital catalog of every single one, complete with personal reviews.",
    "Tom, a storm chaser, has witnessed 183 tornadoes across Tornado Alley and helped develop a new mobile weather monitoring system.",
    "Sophie, a beekeeper, manages 50 hives that collectively produced 2,500 pounds of honey last season, setting a local record.",
    "Marcus, a train enthusiast, has traveled on 127 different historic steam locomotives across five continents.",
    "Patricia, a quilter, created a masterpiece using fabric pieces from her family's clothing spanning six generations.",
    "Carlos, a coffee roaster, can identify 43 distinct flavor notes in coffee and has developed 15 unique roasting profiles.",
    "Helen, a bird watcher, has spotted 721 different species in her lifetime and once waited 16 hours to photograph a rare albino hummingbird.",
    "Robert, a marathoner, has completed races on all seven continents, including one in Antarctica at -23°F.",
    "Jenny, a mycologist, has discovered three new species of mushrooms in her local forest and has photographed over 500 different fungi.",
    "Kevin, a LEGO master builder, created a scale model of his city using 127,432 bricks and spent 867 hours completing it.",
    "Anna, a violin maker, crafts instruments using wood from trees that are at least 200 years old, and each violin takes 3 months to complete.",
    "Paul, a cave explorer, has mapped 42 previously undocumented cave systems and discovered prehistoric art in three of them.",
    "Rachel, a paper artist, creates sculptures using only recycled books and has transformed over 1,000 unwanted books into artwork.",
    "George, a retired postal worker, walked exactly 112,343 miles during his 35-year career, equivalent to circling Earth 4.5 times.",
    "Diana, a seed saver, maintains a collection of 847 heirloom vegetable varieties, including a tomato species thought to be extinct."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');

// Function to get a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Event listener for button click
newFactBtn.addEventListener('click', () => {
    factDisplay.textContent = getRandomFact();
});

// Display initial fact when page loads
window.onload = () => {
    factDisplay.textContent = getRandomFact();
};
