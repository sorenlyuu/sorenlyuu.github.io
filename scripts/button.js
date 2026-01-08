function WDUJIWGUYFDGVYEUI(to) {
    console.log(to)
    document.querySelectorAll('[id^="containerPg_"]').forEach(child => {
        child.style.display = "none"
    })
    const newContainer = document.getElementById(`containerPg_${to}`)
    if (newContainer) {
        newContainer.style.display = "flex"
        sessionStorage.setItem("cur", to)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    WDUJIWGUYFDGVYEUI(sessionStorage.getItem("cur") || "home")
})
