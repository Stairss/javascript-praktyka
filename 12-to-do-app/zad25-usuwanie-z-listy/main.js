const removeTask = (e) => {
    // e.target.remove();
    // e.target.parentNode.remove();
    // e.target.style.textDecoration = "line-through";
    // e.target.parentNode.style.textDecoration = "line-through";
    // e.target.remove();
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();

}

document.querySelectorAll('li button[data-key]').forEach(item => item.addEventListener('click', removeTask));