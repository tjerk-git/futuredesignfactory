document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add/remove cursor effects on interactive elements
    document.querySelectorAll('a, button, [role="button"], input[type="button"], input[type="submit"]').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
});
