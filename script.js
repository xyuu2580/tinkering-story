// Image data (with hidden meanings)
let elements = [
    { name: "A Mysterious Presence", img: "img/a mysterious presence.png", hiddenInfo: "This is a mysterious presence. Its body seems to be made of the galaxy, yet it has a strangely realistic hairstyle. It is believed to be a great being in the universe, from which strange creatures are born." },
    { name: "A Magical Horn", img: "img/a magical horn.png", hiddenInfo: "This is a horn that can transmit messages across the entire universe. It is said to have originally belonged to the elves, but somehow it drifted into space." },
    { name: "The Homeland of the Elves", img: "img/The homeland of the elves.png", hiddenInfo: "A distant land where the most united species, the elves, reside. Though they appear simple, their bond is unbreakable." },
    { name: "A Strange Creature", img: "img/a strange creature.png", hiddenInfo: "This is a peculiar creature, possibly connected to that great being? It possesses immense power, moves at incredible speed, and can ignite flames from parts of its body." },
    { name: "A Crescent Moon with Wings", img: "img/a crescent moon with wings.png", hiddenInfo: "Once shattered by a meteorite, parts of it underwent a magical transformation, sprouting wings and tendrils." },
    { name: "A Perfectly Ordinary Backpack", img: "img/a perfectly ordinary backpack.png", hiddenInfo: "Just a normal backpack... or maybe it's connected to something else?" },
    { name: "A Dinosaur-Bee-Dog", img: "img/a dinosaur-bee-dog.png", hiddenInfo: "This creature has a dinosaur’s face, a dog’s body, bee wings, and glowing tendrils. No one knows how it came into existence, but it is known for being mischievous." },
    { name: "A Planet Filled with Lines", img: "img/a planet filled with lines.png", hiddenInfo: "A planet entirely composed of lines. No one knows what secrets it holds." },
    { name: "A Mysterious-Looking Eye", img: "img/a mysterious-looking eye.png", hiddenInfo: "An eye that can foresee the future. It appears unpredictably across the universe, bringing unexpected changes to the nebulae it visits." },
    { name: "A Planet That Is Both a Full Moon and a Crescent Moon", img: "img/a planet that is both a full moon and a crescent moon at the same time.png", hiddenInfo: "A paradox of time and space—this moon simultaneously exists as both a full moon and a crescent moon." },
    { name: "A Mysterious Figure Holding a Torch", img: "img/a mysterious figure holding a torch.png", hiddenInfo: "A human holding a torch whose flame never extinguishes." },
    { name: "An Apple with Special Abilities", img: "img/an apple with special abilities.png", hiddenInfo: "An apple that, when eaten, displays an electrocardiogram of the consumer." },
    { name: "An Alien", img: "img/an alien.png", hiddenInfo: "An extraterrestrial being from an unknown civilization." },
    { name: "A Lollipop", img: "img/a lollipop.png", hiddenInfo: "A planet disguised as a lollipop. It has its own consciousness and, like a cosmic chameleon, can change its form." },
    { name: "A Fluffed-Up Cat", img: "img/a fluffed-up cat.png", hiddenInfo: "A cat with its fur standing on end—likely the pet of a powerful entity." },
    { name: "A Very Small Rocket", img: "img/a very small rocket.png", hiddenInfo: "A rocket so tiny it is the size of a cat’s eye. No one knows what kind of creature is inside." },
    { name: "An Evil Presence", img: "img/a evil presence.png", hiddenInfo: "An ancient evil being with a ghostly form and twelve massive tendrils. Strangely enough, its dream is to become a writer." },
    { name: "A Stomach Filled with Stars", img: "img/a stomach filled with stars.png", hiddenInfo: "A strange, abandoned stomach, possibly left behind by a defeated entity in a war. It is filled with stars and drifts through space in solitude." },
    { name: "A Fist", img: "img/a fist.png", hiddenInfo: "A fist brimming with power, embodying strength, determination, or destruction." },
    { name: "A Rabbit Being Caught", img: "img/a rabbit being caught.png", hiddenInfo: "A rabbit caught in the act—legend says consuming its meat grants incredible power." },
    { name: "A Planet Covered in Strange Plants", img: "img/a planet covered in strange plants.png", hiddenInfo: "A land that resembles a cosmic river, covered in peculiar plants. Only a few beings know that this land is actually alive, and the plants are its eyes." },
    { name: "A Fish", img: "img/a fish.png", hiddenInfo: "A shark that is considered a delicacy in the universe. If it encounters a starving being, it is likely to end up as food." },
    { name: "A Phone", img: "img/a phone.png", hiddenInfo: "A mobile device, seemingly used by an unknown entity to pass the time." }
];

let selected = [];
const container = document.getElementById("image-container");
const nextBtn = document.getElementById("next-btn");
const storyContainer = document.getElementById("story-container");
const selectedImagesContainer = document.getElementById("selected-images");
const userStoryInput = document.getElementById("user-story");
const submitBtn = document.getElementById("submit-btn");

// Create images and add click event
elements.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("image-box");
    
    let img = document.createElement("img");
    img.src = element.img;
    img.dataset.index = index;
    
    div.appendChild(img);
    container.appendChild(div);

    div.addEventListener("click", () => {
        toggleSelection(index, div);
    });
});

// Selection logic
function toggleSelection(index, div) {
    if (selected.includes(index)) {
        selected = selected.filter(i => i !== index);
        div.classList.remove("selected");
    } else {
        selected.push(index);
        div.classList.add("selected");
    }
}

// "Next" button logic
nextBtn.addEventListener("click", () => {
    if (selected.length === 0) {
        alert("Please select at least one element!");
        return;
    }

    container.innerHTML = "";
    selectedImagesContainer.innerHTML = "";

    selected.forEach(i => {
        let el = elements[i];
        let div = document.createElement("div");
        div.classList.add("image-box");
        let img = document.createElement("img");
        img.src = el.img;
        div.appendChild(img);
        let info = document.createElement("p");
        info.innerText = el.hiddenInfo;
        selectedImagesContainer.appendChild(div);
        selectedImagesContainer.appendChild(info);
    });

    storyContainer.style.display = "block";
});

// "Submit Story" button logic
submitBtn.addEventListener("click", () => {
    let userText = userStoryInput.value.trim();
    if (userText === "") {
        alert("Please write your story!");
        return;
    }

    let selectedElements = selected.map(i => elements[i]);
    localStorage.setItem("selectedElements", JSON.stringify(selectedElements));
    localStorage.setItem("userStory", userText);
    window.location.href = "story.html";
});
