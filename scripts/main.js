const project_list = [
    {
        title: 'ddg Advanced Search',
        description: 'A simple front wrapper for DuckDuckGo search engine to search with finer details.',
        demo_link: '#',
        source_link: '#'
    },
    {
        title: 'flavoured.css',
        description: 'A simple front wrapper for DuckDuckGo search engine to search with finer details.',
        demo_link: '#',
        source_link: '#'
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

    let demo_action_button = document.createElement('a');
    demo_action_button.className = 'action-button';
    demo_action_button.textContent = 'demo'
    demo_action_button.href = proj_details.demo_link;

    let source_action_button = document.createElement('a');
    source_action_button.className = 'action-button';
    source_action_button.textContent = 'source';
    source_action_button.href = proj_details.soure_link;

    project_action_buttons.appendChild(demo_action_button);
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

