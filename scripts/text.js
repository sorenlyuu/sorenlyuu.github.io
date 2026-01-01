const texts = {
    "LABEL_SOREN": "__@ SOR__EN *!!*",
    "LABEL_INFO": "~ 16Years , He / Him ♡",
    "LABEL_A": "✦ About Me !!",
    "TEXT_A": "My birthday is Janurary 23rd, I LOVE cats and sneps!! I've learnt JS, TS, Java, Python, Lua and abit of C# and C++, Currently learning web development!",
    "LABEL_B": "♥ Interests !!",
    "LABEL_C": "✎ Links !!",
    "TEXT_B": "Programming, Music, Astronomy, Botany, Arts & Development, Gambling /j",
    "TEXT_C":
    "[Discord](https://discord.com/users/1021040148126904400) | [Genshin](https://enka.network/u/657422394)\n[Github](https://github.com/sorenlyuu) | [E621](https://tenor.com/view/the-rock-sus-the-rock-meme-the-rock-sus-meme-gif-23972805)"
}

function parse(text) {
    if (!text) return ""
    return text
        // kill html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // ***bold + italic***
        .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
        // **bold**
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        // *italic*
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        // __underline__
        .replace(/__(.+?)__/g, "<u>$1</u>")
        // ~~strikethrough~~
        .replace(/~~(.+?)~~/g, "<s>$1</s>")
        // [hyper](links)
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        // \n new line
        .replace(/\n/g, "<br>")
}

function loadTexts() {
    for (const id in texts) {
        const element = document.getElementById(id)
        if (element) {
            element.innerHTML = parse(texts[id])
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadTexts()
})