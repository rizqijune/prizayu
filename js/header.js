function adjustNav() {
    const announcement = document.getElementById('announcement');
    const nav = document.getElementById('navigation');
    const brd = document.getElementById('breadcrumbs');
    const postMargin = document.querySelector('main');

    if (!announcement) return;

    const announcementHeight = announcement.offsetHeight;
    const navHeight = nav.offsetHeight;
    nav.style.top = `${announcementHeight}px`;

    const brdHeight = brd ? brd.offsetHeight : 0;
    if (brd) {
        brd.style.top = `${announcementHeight + navHeight}px`;
    }

    postMargin.style.marginTop = `${announcementHeight + navHeight + brdHeight - 50}px`;
}

function dismissAnnouncement() {
    const announcement = document.getElementById('announcement');
    const nav = document.getElementById('navigation');
    const brd = document.getElementById('breadcrumbs');
    const postMargin = document.querySelector('main');

    if (announcement) {
        announcement.style.display = 'none';
        nav.style.top = '0';
        if (brd) brd.style.top = '4rem';
        
        // Reset post margin
        postMargin.style.marginTop = '2rem';
    }
}

window.onload = adjustNav;
window.onresize = adjustNav;
