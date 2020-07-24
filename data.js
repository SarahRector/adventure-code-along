const creature = {
    id: 'creature',
    title: 'The Creature from the Murky Pond',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/creature-from-the-black-lagoon-zapista-zapista.jpg',
    description: `
        Today is the first day of your socially distanced vacation!  You've been waiting for months to spend more time alone, but at a lake! You let yourself into your cabin that you were told was thouroughly cleaned and go ahead and wipe everything down with Clorox wipes again.  You wash a wine glass three times, pour yourself some wine and head out to the deck with the chair that you brought from home.  The sun is just setting, the pond is beautiful. You are just unwinding when you notice something that looks like a giant fin, coming towards you from across the pond.... What do you do?
    `,
    choices: [{
        id: 'ignore',
        description: 'Ignore the fin and pretend you dont see it',
        result: `
            You ignore what you saw, prefering to bury your head in the sand like you father does about the state of our country. The fin creeps closer and a giant floppy monster steps out of the pond to make sure you are registered to vote at your current address.  You are not, so you lose 15 hp but you allow the creature to register you and offer it a glass of wine so they reward you with 20 pieces of gold. 
        `,
        hp: -15,
        gold: 20
    }, {
        id: 'poke',
        description: 'Walk down to the pond and poke it with a stick',
        result: `
            You stumble down to the pond, pick up a branch and prod at the fin with a stick. A gilled, slimy creature emerges from the muck, slowly stretching to it's towering height and says, "ow! Really? Poking with a stick? Who raised you anyway?" and swims off. You miss out on making friends with a new species and feel bad so you donate 30 pieces of gold to a charity that you don't take the time to research.
        `,
        hp: 0,
        gold: -30
    }, {
        id: 'invite',
        description: 'Investigate and invite',
        result: `
            You walk down to the pond and investigate from a safe distance of 6-10 feet. A creature emerges and says "oh hi, I'm Steve". "Hi Steve" you reply. You ask Steve how long he's been quarantiening in the pond and when he replies that it's been three weeks, you offer him a facemask and a glass of wine and the two of you sit on your deck and chat about comic books you've recently read.  You make a friend! Which makes you feel slightly better about things and you gain 25 mental health hp.
        `,
        hp: 25,
        gold: 0
    }]
};

const space = {
    id: 'space',
    title: 'Space Jam 5000',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/space-image.jpg',
    description: `
        You have been selected to play on the first intergalactic space roller derby team! You could not be more excited and you spend weeks making sure you pack all of your best space-boutfits along with all of your gear. You meet up with your team and board the space-craft that will take you to your first bout with your new team, the Earth-Rollers. When you land, you notice that the gravity is different and you feel heavier, like youre being pressed into the planets surface. You have 30 minutes with your new team to get ready, what do you do?
    `,
    choices: [{
        id: 'eat',
        description: 'Sample the local space food',
        result: `
            You're on a new planet!! There's no way that you're not eating all of the food you can get your hands on. You and your teammate, Sci-Fi Curious, head off to look at several food stalls that are selling things you've never seen before. You settle on a bowl of shiny purple orbs with a shiny gold sauce on them. As you eat them you realize that they're much chewier than you expected and you start to feel light headed. You look down and realize that your feet have swelled to three times their normal size. Your skates don't fit! You traveled all this way and now you can't even play! You lose 10 hp for making your feet bigger and 15 pieces of gold for the space-snack.
        `,
        hp: -10,
        gold: -15
    }, {
        id: 'wheels',
        description: 'Change your wheels',
        result: `
            This gravity has got you real confused! How are you supposed to skate like this?!?! Did you even bring the right wheels??? You spend 47 minutes changing wheels and testing them, changing your wheels and testing them. All of your work and stress pays off and by the time the first whistle blows you feel like you've really dialed it in. You score 25 points in the first jam and gain 30 hp!
        `,
        hp: 30,
        gold: 0
    }, {
        id: 'merch',
        description: 'You set up the merch table',
        result: `
            Everyone on your team is freaking out, as per usual. Poundstooth is eating tums and deep breathing, Halley Tosis is chatting up the other teams jammers, ManaTease is alternatley stretching and pacing back and forth. You feel like you have your stuff together so you decide to set up the merch table early.  Thanks to your thoughtfulness, your team makes 50 gold pieces befor the bout even starts! You'll all get those matching denim vests after all!
        `,
        hp: 0,
        gold: 50
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'https://placekitten.com/300/200',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    creature, 
    treasure,
    space
];

export default quests;