const project_list = [
    {
        title: 'ddg Advanced Search',
        description: 'A simple front-end wrapper for DuckDuckGo search engine to search with finer details.',
        demo_link: 'https://amritpandeyy.github.io/ddg-advanced-search/',
        source_link: 'https://github.com/amritpandeyy/ddg-advanced-search'
    },
    {
        title: 'flavoured.css',
        description: 'Opinionated, Light-Weight and Cross-Browser stylesheet to make your webpage look better than nothing.',
        demo_link: 'https://amritpandeyy.github.io/flavoured.css/',
        source_link: 'https://github.com/amritpandeyy/flavoured.css'
    },
    {
        title: 'CiphyBot',
        description: 'A Simple discord bot that greets, logs and help mods deal with users.',
        source_link: 'https://github.com/amritpandeyy/CiphyBot'
    }
]

const generateProjectCard = (proj_details) => {
    let project_card = document.createElement('div');
    project_card.className = 'project-card';

    let project_title = document.createElement('div');
    project_title.className = 'project-title';
    project_title.textContent = proj_details.title;

    let project_description = document.createElement('div');
    project_description.className = 'project-description';
    project_description.textContent = proj_details.description;

    let project_action_buttons = document.createElement('div');
    project_action_buttons.className = 'project-action-buttons';

    if (proj_details.demo_link) {
        let demo_action_button = document.createElement('a');
        demo_action_button.className = 'action-button';
        demo_action_button.textContent = 'demo'
        demo_action_button.href = proj_details.demo_link;
        demo_action_button.target = '_blank';
        project_action_buttons.appendChild(demo_action_button);
    }
    
    let source_action_button = document.createElement('a');
    source_action_button.className = 'action-button';
    source_action_button.textContent = 'source';
    source_action_button.href = proj_details.source_link;
    source_action_button.target = '_blank';
    project_action_buttons.appendChild(source_action_button);

    project_card.appendChild(project_title);
    project_card.appendChild(project_description);
    project_card.appendChild(project_action_buttons);

    return project_card;
}

const show_menu_btn = document.getElementById('show-menu-btn');
const hide_menu_btn = document.getElementById('hide-menu-btn');

const main_nav = document.querySelector('.main-nav');

const project_group = document.querySelector('.project-group');
const open_license_box = document.querySelector('.open-license-box');
const license_modal_window = document.querySelector('.overlay');
const close_modal_window_button = document.querySelector('.close-modal-window-button');
const nav_items = document.querySelector('.nav_items');

show_menu_btn.addEventListener('click', (e) => { openNav() })
hide_menu_btn.addEventListener('click', (e) => { closeNav() })

project_list.forEach(project => {
    project_group.appendChild(generateProjectCard(project));
});

const openNav = () => {
    main_nav.style.right = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

const closeNav = () => {
    main_nav.style.right = '-250px';
    document.body.style.backgroundColor = 'white';
}

open_license_box.addEventListener('click', (e) => {
    e.preventDefault();
    license_modal_window.style.display = 'block';

})

close_modal_window_button.addEventListener('click', (e) => {
    e.preventDefault();
    license_modal_window.style.display = 'none';
})