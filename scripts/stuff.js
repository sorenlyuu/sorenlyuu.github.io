function WDUJIWGUYFDGVYEUI(to) {
    const current = sessionStorage.getItem("cur") || "none"
    const pgBlur = document.getElementById("pgBlur")
    const dontBlur = [
        "containerPg_none",
        "containerPg_home",
        "containerPg_star"
    ]
    const button = document.getElementById(`BUTTON_${current.toUpperCase()}`)
    if (button) {
        button.style.scale = 1
    }
    if (to === current) {
        to = "none"
        sessionStorage.setItem("cur", "none")
    }
    if (to === "heart") {
        window.location.href = "/fandoms.html"
        return
    }
    document.querySelectorAll('[id^="containerPg_"]').forEach(child => {
        if (child.id !== `containerPg_${to}`) {
            child.style.opacity = 0
            setTimeout(() => {
                child.style.display = "none"
            }, 200)
        }
    })

    const newContainer = document.getElementById(`containerPg_${to}`)
    if (newContainer) {
        if (!dontBlur.includes(`containerPg_${to}`)) {
            pgBlur.style.opacity = 1
        } else {
            pgBlur.style.opacity = 0
        }
        const button = document.getElementById(`BUTTON_${to.toUpperCase()}`)
        if (button) {
            button.style.scale = 0.8
        }
        newContainer.style.display = "flex"
        requestAnimationFrame(() => {
            newContainer.style.opacity = 1
        })
    }
    sessionStorage.setItem("cur", to)
}

const image = document.getElementById('IMG_LYCAON_MINDSCAPE')
const wrapper = document.querySelector('.main')
wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const moveX = ((x - centerX) / centerX) * 5
    const moveY = ((y - centerY) / centerY) * 5
    image.style.transform = `translate(${moveX}px, ${moveY}px)`
})

wrapper.addEventListener('mouseleave', () => {
    image.style.transform = `translate(0px, 0px) scale(1)`
})

// Source - https://stackoverflow.com/a
// Posted by Michael Zaporozhets, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-11, License - CC BY-SA 4.0

function detectMob() {
    return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
}


document.addEventListener("DOMContentLoaded", () => {
    if (detectMob()) {
        alert('hi if ur on mobile id recommend using desktop site cauze i havent really scaled down to mobile yet')
    }
    WDUJIWGUYFDGVYEUI(sessionStorage.getItem("cur") || "none")
})