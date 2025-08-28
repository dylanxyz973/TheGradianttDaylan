document.addEventListener('DOMContentLoaded', () => {
    const roles = ["student", "developer", "designer", "artist"];
    let index = 0;

    const roleElement = document.getElementById("changing-role");
    if (!roleElement) return;

    setInterval(() => {
        index = (index + 1) % roles.length;
        roleElement.textContent = roles[index];
    }, 2000);
});
