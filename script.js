function showSection(sectionId){
    let section = document.getElementById(sectionId);
    // Hide Sections
    document.querySelectorAll('.section').forEach(section => {
        section.computedStyleMap.display = 'none';
    });

    // Show Sections
    section.style.display = 'block';
}