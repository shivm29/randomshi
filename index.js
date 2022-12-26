
console.log('hello!');

let image = document.getElementById('image');
let button = document.getElementById('next');
let caption = document.getElementById('caption');

const lines = [
    {
        content: "I hope you know CPR, because you just took my breath away!"
    },
    {
        content: "So, aside from taking my breath away, what do you do for a living?"
    },
    {
        content: "I ought to complain to Spotify for you not being named this week’s hottest single."
    },
    {
        content: "Your eyes are like the ocean; I could swim in them all day."
    },
    {
        content: "When I look in your eyes, I see a very kind soul."
    },
    {
        content: " If you were a vegetable, you’d be a ‘cute-cumber.’"
    },
    {
        content: "Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you."
    },
    {
        content: "I never believed in love at first sight, but that was before I saw you."
    },
    {
        content: "I didn’t know what I wanted in a woman until I saw you."
    },
    {
        content: "I was wondering if you could tell me: If you’re here, who’s running Heaven?"
    },
    {
        content: " No wonder the sky is gray (or dark, if at night)—all the color is in your eyes."
    },
    {
        content: "You’ve got everything I’ve been searching for, and believe me—I’ve been looking a long time."
    },
    {
        content: "You’re like a fine wine. The more of you I drink in, the better I feel."
    },
    {
        content: "You’ve got everything I’ve been searching for, and believe me—I’ve been looking a long time."
    },
    {
        content: "You’ve got a lot of beautiful curves, but your smile is absolutely my favorite."
    },
    {
        content: "Are you as beautiful on the inside as you are on the outside?"
    },
    {
        content: "If being sexy was a crime, you’d be guilty as charged."
    },
    {
        content: "I was wondering if you’re an artist because you were so good at drawing me in."
    },
    {
        content: "It says in the Bible to only think about what’s pure and lovely… So I’ve been thinking about you all day long."
    },
    {
        content: "Do you have a map? I just got lost in your eyes."
    },
    {
        content: "I’d like to take you to the movies, but they don’t let you bring in your own snacks."
    },
    {
        content: " You know what you would look really beautiful in? My arms."
    },
    {
        content: " I would never play hide and seek with you because someone like you is impossible to find."
    },
    {
        content: "Are you a magician? It’s the strangest thing, but every time I look at you, everyone else disappears."
    },
    {
        content: "I think there’s something wrong with my phone. Could you try calling it to see if it works?"
    },
    {
        content: "Are you a magician? It’s the strangest thing, but every time I look at you, everyone else disappears."
    },
    {
        content: "Hi, I just wanted to thank you for the gift. (pause) I’ve been wearing this smile ever since you gave it to me."
    },
    {
        content: "Are you an electrician? Because you’re definitely lighting up my day/night!"
    },
    {
        content: "I’ve heard it said that kissing is the ‘language of love.’ Would you care to have a conversation with me about it sometime?"
    },
    {
        content: "I always thought happiness started with an ‘h,’ but it turns out mine starts with ‘u.’"
    },
    {
        content: "I believe in following my dreams. Can I have your Instagram?"
    },
    {
        content: " Do you know what the Little Mermaid and I have in common? We both want to be part of your world."
    },
    {
        content: "  If you were a song, you’d be the best track on the album."
    },
    {
        content: " On a scale of 1 to America, how free are you tonight?"
    },
    {
        content: " You know, I always thought that Disneyland was the ‘happiest place on Earth,’ but that was before I got a chance to stand here next to you."
    },
    {
        content: "If you were a Transformer, you’d be ‘Optimus Fine.’"
    },
    {
        content: "If you were a taser, you’d be set to ‘stun.’"
    },
    {
        content: " Is your name Google? Because you have everything I’m searching for."
    },
    {
        content: "  Do you ever get tired from running through my thoughts all night?"
    },
    {
        content: " You know, they say that love is when you don’t want to sleep because reality is better than your dreams. And after seeing you, I don’t think I ever want to sleep again."
    },
   
]

console.log(lines[1].content)

caption.innerHTML = lines[Math.floor(Math.random()*40)].content;
image.innerHTML = `<img src='images/${Math.floor(Math.random()*68)}.jpg' />`

button.onclick = () => {
    let i = Math.floor(Math.random()*66);
    let c = Math.floor(Math.random()*40);
    console.log(i)
    image.innerHTML = `<img src='images/${i}.jpg' />`
    caption.innerHTML = lines[c].content;
}
