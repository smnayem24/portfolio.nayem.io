const projectsData = {
    project1: {
        title: "FPGA Encryption System",
        date: "2023",
        category: "FPGA",
        tags: ["Hardware Security", "Cryptography", "RTL"],
        images: [
            {
                url: "images/projects/placeholder.jpg",
                caption: "System Architecture"
            }
        ],
        overview: "A high-performance encryption system implemented on FPGA platform...",
        features: [
            "Multi-standard encryption support (AES, DES, 3DES)",
            "Real-time data processing at 10Gbps",
            "Low latency hardware implementation"
        ],
        technologies: ["Verilog HDL", "Xilinx Vivado", "Hardware Security Modules"],
        technical_details: "The system achieves a throughput of 10Gbps with a latency of just 100ns."
    }
    // ... add other projects similarly
};

// Update the showProjectDetails function
function showProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const content = `
        <div class="project-details">
            <h2>${project.title}</h2>
            <div class="project-content">
                <div class="project-meta">
                    <span><i class="fas fa-calendar"></i> ${project.date}</span>
                    <span><i class="fas fa-tag"></i> ${project.category}</span>
                </div>
                <div class="project-description">
                    <h3>Overview</h3>
                    <p>${project.overview}</p>
                    
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                    
                    <h3>Technologies</h3>
                    <p>${project.technologies.join(', ')}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.open(content);
}
