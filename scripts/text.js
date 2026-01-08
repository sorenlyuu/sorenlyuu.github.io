const texts = {
    "LABEL_SOREN": "__@ SOR__EN *!!*",
    "LABEL_INFO": `~ ${function() {
        return (new Date(new Date().getFullYear(), 0, 23).getTime() <= new Date().getTime() ? new Date().getFullYear()-2009 : new Date().getFullYear()-2009-1)
    }()}Years , He / Him ♡`,
    "LABEL_A": "✦ About Me !!",
    "TEXT_A": `My birthday is Janurary 23rd, I LOVE cats and sneps!! I've learnt JS, TS, Java, Python, Lua and abit of C# and C++, Currently learning web development!`,
    "LABEL_B": "♡ Interests !!",
    "LABEL_C": "✎ Fandoms !!",
    "TEXT_B": "Programming, Music, Astronomy, Botany, Arts & Development, Gambling /j",
    "TEXT_C": "Hoyoverse, Lackadaisy, FNAF, Brawl Stars, White Cat Legend (RC大理寺日志), Furries, etc!!",
    "LABEL_HEART_HEADER": "♪ *Lin__ks !!__*",
    "LABEL_SOCIAL_A": "[Github](https://github.com/sorenlyuu)",
    "LABEL_SOCIAL_B": "[Discord](https://discord.com/users/1021040148126904400)",
    "LABEL_SOCIAL_C": "[Genshin](https://enka.network/u/657422394)",
    "LABEL_SOCIAL_D": "[Reddit](https://www.reddit.com/user/ssvenlux/)",
    "LABEL_SOCIAL_E": "[E621](https://tenor.com/view/the-rock-sus-the-rock-meme-the-rock-sus-meme-gif-23972805)",
    "LABEL_SOCIAL_F": "[Tiktok](https://www.tiktok.com/@ssvenlux)",
    "LABEL_UJEBFDI": "oops... still wip...",
    "LABEL_UDHADKI": "oops... still wip..."
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