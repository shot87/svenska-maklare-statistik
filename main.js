// Real estate agency data from Sweden
const realEstateData = [
    { 
        rank: 1, 
        name: 'Fastighetsbyrån', 
        domain: 'fastighetsbyran.com', 
        revenue: 6000, 
        rating: 10,
        color: '#e63946',
        description: 'Sveriges största mäklarföretag, ägt av Swedbank. Har cirka 270 kontor och 1 700 anställda över hela landet. Hanterar ungefär 25% av alla bostadstransaktioner i Sverige.'
    },
    { 
        rank: 2, 
        name: 'Svensk Fastighetsförmedling', 
        domain: 'svenskfast.se', 
        revenue: 4500, 
        rating: 9,
        color: '#1d3557',
        description: 'En av de äldsta och största kedjorna i Sverige med rikstäckande närvaro.'
    },
    { 
        rank: 3, 
        name: 'Länsförsäkringar Fastighetsförmedling', 
        domain: 'lansfast.se', 
        revenue: 3000, 
        rating: 8,
        color: '#457b9d',
        description: 'Ansluten till Länsförsäkringar försäkringsbolag, erbjuder kombinerade fastighets- och försäkringstjänster.'
    },
    { 
        rank: 4, 
        name: 'Notar', 
        domain: 'notar.se', 
        revenue: 2600, 
        rating: 7,
        color: '#a8dadc',
        description: 'Grundades 1997, med cirka 179 anställda. Har en stark närvaro särskilt i storstadsområden.'
    },
    { 
        rank: 5, 
        name: 'Bjurfors', 
        domain: 'bjurfors.se', 
        revenue: 2000, 
        rating: 7,
        color: '#f1faee',
        description: 'Grundat 1965, specialiserar sig på högkvalitativa fastigheter särskilt i Sveriges större städer.'
    },
    { 
        rank: 6, 
        name: 'Husman Hagberg', 
        domain: 'husmanhagberg.se', 
        revenue: 1700, 
        rating: 6,
        color: '#219ebc',
        description: 'Etablerad mäklarbyrå med stark närvaro i flera regioner i Sverige.'
    },
    { 
        rank: 7, 
        name: 'Erik Olsson', 
        domain: 'erikolsson.se', 
        revenue: 1500, 
        rating: 6,
        color: '#023047',
        description: 'Välkänd mäklarbyrå med fokus på kvalitativ service.'
    },
    { 
        rank: 8, 
        name: 'ERA Fastighetsförmedling', 
        domain: 'erasweden.com', 
        revenue: 1100, 
        rating: 5,
        color: '#fb8500',
        description: 'Del av det internationella ERA-nätverket med franchisekontor runt om i Sverige.'
    },
    { 
        rank: 9, 
        name: 'Hemverket', 
        domain: 'hemverket.se', 
        revenue: 900, 
        rating: 5,
        color: '#8ecae6',
        description: 'Modern mäklarbyrå med fokus på digitala tjänster.'
    },
    { 
        rank: 10, 
        name: 'Skandiamäklarna', 
        domain: 'skandiamaklarna.se', 
        revenue: 800, 
        rating: 4,
        color: '#ffb703',
        description: 'Etablerad mäklarkedja med god täckning i landet.'
    },
    { 
        rank: 11, 
        name: 'Mäklarhuset', 
        domain: 'maklarhuset.se', 
        revenue: 700, 
        rating: 4,
        color: '#7209b7',
        description: 'Rikstäckande kedja med franchisekontor över hela Sverige.'
    },
    { 
        rank: 12, 
        name: 'Mäklarringen', 
        domain: 'maklarringen.se', 
        revenue: 500, 
        rating: 3,
        color: '#3a86ff',
        description: 'Mäklarkedja med fokus på personlig service och lokalkännedom.'
    }
];

// Populate the table
function populateTable() {
    const tableBody = document.querySelector('#rankingTable tbody');
    
    realEstateData.forEach(agency => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${agency.rank}</td>
            <td>${agency.name}</td>
            <td><a href="https://${agency.domain}" target="_blank">${agency.domain}</a></td>
            <td>${agency.revenue}</td>
            <td>${agency.rating}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Create Bar Chart for Revenue
function createRevenueChart() {
    const ctx = document.getElementById('revenueBarChart').getContext('2d');
    
    const labels = realEstateData.map(agency => agency.name);
    const data = realEstateData.map(agency => agency.revenue);
    const backgroundColor = realEstateData.map(agency => agency.color);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Omsättning (MSEK)',
                data: data,
                backgroundColor: backgroundColor,
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Miljoner SEK'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw} MSEK`;
                        }
                    }
                }
            }
        }
    });
}

// Create Radar Chart for Rating
function createRatingChart() {
    const ctx = document.getElementById('ratingRadarChart').getContext('2d');
    
    const labels = realEstateData.map(agency => agency.name);
    const data = realEstateData.map(agency => agency.rating);
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Betyg',
                data: data,
                backgroundColor: 'rgba(29, 91, 121, 0.2)',
                borderColor: 'rgba(29, 91, 121, 1)',
                pointBackgroundColor: 'rgba(29, 91, 121, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(29, 91, 121, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });
}

// Create Pie Chart for Market Share
function createMarketShareChart() {
    const ctx = document.getElementById('marketSharePieChart').getContext('2d');
    
    const labels = realEstateData.map(agency => agency.name);
    const data = realEstateData.map(agency => agency.revenue);
    const backgroundColor = realEstateData.map(agency => agency.color);
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColor,
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${percentage}% (${value} MSEK)`;
                        }
                    }
                }
            }
        }
    });
}

// Create company profile cards
function createCompanyProfiles() {
    const container = document.querySelector('.profiles-container');
    
    realEstateData.forEach(agency => {
        // Calculate star rating (scaled from 1-10 to 1-5)
        const starRating = Math.round(agency.rating / 2);
        
        // Create stars HTML
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= starRating) {
                starsHtml += '<span class="star"><i class="fas fa-star"></i></span>';
            } else {
                starsHtml += '<span class="star"><i class="far fa-star"></i></span>';
            }
        }
        
        // Calculate market share
        const totalRevenue = realEstateData.reduce((sum, agency) => sum + agency.revenue, 0);
        const marketShare = ((agency.revenue / totalRevenue) * 100).toFixed(1);
        
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.innerHTML = `
            <div class="profile-header" style="background-color: #a8dadc">
                <h3>${agency.name}</h3>
                <div class="profile-rank" style="color: #3a86ff">${agency.rank}</div>
            </div>
            <div class="profile-body">
                <p>${agency.description}</p>
                <div class="profile-rating">
                    <span>Betyg:</span>
                    <div class="stars">
                        ${starsHtml}
                    </div>
                </div>
                <div class="profile-stats">
                    <div class="stat">
                        <div class="stat-value">${agency.revenue}</div>
                        <div class="stat-label">MSEK</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${marketShare}%</div>
                        <div class="stat-label">Marknadsandel</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${agency.rating}/10</div>
                        <div class="stat-label">Poäng</div>
                    </div>
                </div>
            </div>
            <div class="profile-footer">
                <a href="https://${agency.domain}" target="_blank">Besök hemsida <i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Toggle between different charts
function setupChartToggles() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const chartViews = document.querySelectorAll('.chart-view');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and chart views
            toggleBtns.forEach(b => b.classList.remove('active'));
            chartViews.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding chart view
            btn.classList.add('active');
            const chartId = btn.getAttribute('data-chart');
            document.getElementById(chartId).classList.add('active');
        });
    });
}

// Setup accordion for methodology section
function setupAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    createRevenueChart();
    createRatingChart();
    createMarketShareChart();
    createCompanyProfiles();
    setupChartToggles();
    setupAccordions();
});