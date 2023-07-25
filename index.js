const projects = [
    {
        name: "Javascript blog in html and css",
        preview_img_path: "files/img/js-blog-preview.png",
        directory: "js-blog"
    }
];

const projects_container = document.getElementById('projects-container');

projects.forEach(project => {
    const div = `
        <div>
            <h3>${project.name}</h2>
            <img src="./${project.preview_img_path}" alt="${project.name}" class="project-preview" />
            <a href="${project.directory}/index.html">See it here</a>
        </div>
    `;
    projects_container.innerHTML += div;
});