export default scrollTo = (sectionName) => {
    const section = document.getElementById(sectionName);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
};