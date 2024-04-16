function showContent(section) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(section);
    selectedContent.style.display = 'block';
}

document.documentElement.style.setProperty('--main-bg-color', '#e74c3c');