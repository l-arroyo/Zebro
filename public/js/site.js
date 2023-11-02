function getLanguage() {
    var lang = localStorage.getItem('lang');
    return lang || "en";
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
}

function toggleDropdown(dropdownType)
{
    var dropdown = document.querySelector('.dropdown-menu.'+dropdownType);

    dropdown.classList.toggle('show');
}