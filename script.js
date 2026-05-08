// script.js
const jobsContainer = document.getElementById('jobsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationFilter = document.getElementById('locationFilter');
const typeFilter = document.getElementById('typeFilter');
const resultCountSpan = document.getElementById('resultCount');

function displayJobs() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedLocation = locationFilter.value;
  const selectedType = typeFilter.value;

  const filteredJobs = jobs.filter(job => {
    const matchSearch = searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm);
    const matchLocation = selectedLocation === '' ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchType = selectedType === '' ||
      job.type === selectedType;
    return matchSearch && matchLocation && matchType;
  });

  resultCountSpan.textContent = filteredJobs.length;
  jobsContainer.innerHTML = '';

  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = '<div class="no-jobs">😔 No vacancies found. Please adjust filters.</div>';
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-company">🏢 ${job.company}</div>
      <div class="job-detail">
        <span class="detail-item">📍 ${job.location}</span>
        <span class="detail-item">📋 ${job.type}</span>
      </div>
      <div class="salary">💰 ${job.salary}</div>
      <div class="job-desc">${job.description}</div>
      <div class="job-detail">
        <span class="detail-item">📅 Posted: ${job.posted}</span>
      </div>
      <a href="${job.applyLink}" target="_blank" rel="noopener noreferrer" class="apply-btn">Apply Now → Official Site</a>
    `;
    jobsContainer.appendChild(card);
  });
}

searchBtn.addEventListener('click', displayJobs);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') displayJobs();
});
locationFilter.addEventListener('change', displayJobs);
typeFilter.addEventListener('change', displayJobs);

// Initial load
displayJobs();

// For navigation and category buttons
function filterByType(type) {
  const typeSelect = document.getElementById('typeFilter');
  if (typeSelect) {
    typeSelect.value = type;
    displayJobs();
  }
}

// Quick search from hero
function quickSearch() {
  const heroInput = document.getElementById('heroSearchInput');
  const mainInput = document.getElementById('searchInput');
  if (heroInput && mainInput) {
    mainInput.value = heroInput.value;
    displayJobs();
  }
}
