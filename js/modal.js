const modal = {
    init() {
        this.overlay = document.querySelector('.modal-overlay');
        this.window = document.querySelector('.modal-window');
        this.bindEvents();
    },

    bindEvents() {
        document.querySelectorAll('.project-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = e.target.closest('.project-card').dataset.project;
                this.show(projectId);
            });
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('.modal-overlay') || e.target.matches('.close-button')) {
                this.hide();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hide();
        });
    },

    show(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        this.window.innerHTML = `
            <button class="close-button">&times;</button>
            <div class="project-details">
                <h2>${project.title}</h2>
                <div class="project-content">
                    <p>${project.overview}</p>
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        this.overlay.style.display = 'block';
        this.window.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },

    hide() {
        this.overlay.style.display = 'none';
        this.window.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => modal.init());
