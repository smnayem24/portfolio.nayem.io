class ProjectModal {
    constructor() {
        this.modalContainer = document.querySelector('.modal-container');
        this.bindEvents();
    }

    bindEvents() {
        // Project button clicks
        document.querySelectorAll('.project-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = e.target.closest('.project-card').dataset.project;
                this.openProject(projectId);
                e.stopPropagation(); // Prevent event bubbling
            });
        });

        // Close modal events
        document.addEventListener('click', (e) => {
            if (e.target.matches('.close-modal') || e.target === this.modalContainer) {
                this.closeModal();
            }
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    openProject(projectId) {
        const projectData = projectsData[projectId];
        if (!projectData) {
            console.error('Project data not found:', projectId);
            return;
        }

        const modalContent = `
            <div class="project-modal">
                <button class="close-modal">&times;</button>
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${projectData.title}</h2>
                        <div class="project-meta">
                            <span><i class="fas fa-calendar"></i> ${projectData.date}</span>
                            <span><i class="fas fa-code-branch"></i> ${projectData.category}</span>
                            <span><i class="fas fa-tag"></i> ${projectData.tags.join(', ')}</span>
                        </div>
                    </div>
                    
                    <div class="project-gallery">
                        ${projectData.images.map(img => `
                            <img src="${img.url}" alt="${img.caption}" onerror="this.src='images/projects/placeholder.jpg'">
                        `).join('')}
                    </div>

                    <div class="project-info">
                        <h3>Project Overview</h3>
                        <p>${projectData.overview}</p>
                        
                        <h3>Key Features</h3>
                        <ul>
                            ${projectData.features.map(feature => `
                                <li>${feature}</li>
                            `).join('')}
                        </ul>
                        
                        <h3>Technologies Used</h3>
                        <ul>
                            ${projectData.technologies.map(tech => `
                                <li>${tech}</li>
                            `).join('')}
                        </ul>
                        
                        <h3>Technical Details</h3>
                        <p>${projectData.technical_details}</p>
                    </div>
                </div>
            </div>
        `;

        this.modalContainer.innerHTML = modalContent;
        this.modalContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize the modal handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectModal();
});
