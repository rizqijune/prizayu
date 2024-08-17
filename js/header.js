    function adjustNav() {
        const announcement = document.getElementById('announcement');
        const nav = document.getElementById('navigation');
        if (announcement) {
            nav.style.top = announcement.offsetHeight + 'px';
        }
    }

    // Dismiss the announcement and reset the nav position
    function dismissAnnouncement() {
        const announcement = document.getElementById('announcement');
        const nav = document.getElementById('navigation');
        if (announcement) {
            announcement.style.display = 'none';
            nav.style.top = '0';
        }
    }

    // Call adjustNavPosition on load and when the window is resized
    window.onload = adjustNav;
    window.onresize = adjustNav;