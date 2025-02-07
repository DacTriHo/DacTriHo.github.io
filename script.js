function showSection(sectionId){
    // Hide Sections
    document.querySelectorAll('.section').forEach(section => {
        section.computedStyleMap.display = 'none';
    });

    // Show Sections
    document.getElementById(sectionId).style.display = 'block';
}