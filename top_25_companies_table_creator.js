const companies = [
    { name: "Ontik Technology", services: `<a href="https://www.ontiktechnology.com/team-augmentation">Team Augmentation</a>, <a href="https://www.ontiktechnology.com/mvp-partnership">MVP Partnership</a>, <a href="https://www.ontiktechnology.com/custom-software-development-service">Custom Software Development</a>, <a href="https://www.ontiktechnology.com/integrated-business-automation">Business Automation</a>`, sectors: "E-Commerce, Health & Fitness, Manufacturing, Logistics and Transportation, Agriculture, Entertainment, Sports" },
    { name: "Brainstation 23", services: "Enterprise & Customized web applications", sectors: "Financial services, Medical, eCommerce" },
    { name: "Tiger IT", services: "Managed Security", sectors: "Government Agency" },
    { name: "BJIT", services: "Custom Software Development, and Offshore IT Services", sectors: "Information Technology, Business Services, Telecommunications" },
    { name: "Enosis", services: "Mobile app development, Web Development, Application Testing, UX/UI Design", sectors: "Information Technology, Dental, Medical" },
    { name: "Cefalo", services: "Software Development and Integration", sectors: "Education, Telecommunications, NGO" },
    { name: "LeadSoft", services: "Custom Software Development, IT Staff Augmentation, Blockchain", sectors: "Financial Services, Information Technology" },
    { name: "Kazi IT", services: "Cloud Management, VoIP solutions", sectors: "Telecommunications" },
    { name: "South Tech", services: "UI/UX Solutions", sectors: "Healthcare, Telecommunications" },
    { name: "Riseup Labs", services: "AR/VR Development and Mobile App Development", sectors: "GPS, Navigation & GIS, Gaming" },
    { name: "Soft BD Limited", services: "CMS Solution", sectors: "Government Services, NGO" },
    { name: "Dream 71 Bangladesh", services: "Game Development", sectors: "E-Governance, Data Center Infrastructure, Enterprise Solution" },
    { name: "Kaz Software", services: "Software Development", sectors: "Finance & Accounting, International Business, Engineering" },
    { name: "Bondstein", services: "IoT, API Services, Contract Manufacturing", sectors: "Garments, Chemicals, Logistics, Pharmaceutical" },
    { name: "Nascenia", services: "Quality Assurance, Cyber Security", sectors: "Telecommunications, Healthcare, NGO, Entertainment" },
    { name: "Pridesys IT", services: "Enterprise solution", sectors: "Apparel, Trading, Insurance, Footwear" },
    { name: "Selise", services: "Software & UX, Consultancy", sectors: "Retail, Food, Engineering" },
    { name: "Bdtask", services: "Website Development, Mobile App Development, Blogging platform", sectors: "E-Commerce, Health, Hotel & Restaurant, Education" },
    { name: "Dynamic Solution Innovators", services: "Big Data & Data Science, UX Design, Embedded System Design, SQA", sectors: "Data Engineering, Office 365 App, Product" },
    { name: "Orange IT", services: "Network Infrastructure Development, Cybersecurity, Server Administration", sectors: "Telecommunications" },
    { name: "Workspace Infotech", services: "Virtual Assistance, CMS Management, Software Development", sectors: "E-commerce App" },
    { name: "Daffodil Software", services: "IT and Cloud Services, ERP Customization", sectors: "Education, Manufacture, Pharmaceuticals" },
    { name: "Logicstorm", services: "Web Development, App Development", sectors: "Education, Apparel, Transportation, and Logistics" },
    { name: "Astha IT", services: "Talent Outsourcing, Cloud Services", sectors: "Food and Beverage, Education, Talent Acquisition" },
    { name: "Vivasoft", services: "Staff Augmentation, End To End Development, MVP, Offshore Development", sectors: "Food, Health and Wellness, Banking" }
];



function createTable() {
    const table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '4');
    
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ["Company Name", "Key Services", "Key Sectors"];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        header.style.padding = '10px'; // Set cell padding here
        header.style.backgroundColor = '#2459d0'; // Set header background color here
        header.style.color = 'white'; // Set header text color here
        headerRow.appendChild(header);
        
        // const header = document.createElement('th');
        // header.textContent = headerText;
        // headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);

    companies.forEach(company => {
        const row = document.createElement('tr');
        const cellData = [company.name, company.services, company.sectors];
        cellData.forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            cell.style.padding = '8px'; // Apply cell padding for other cells
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('top-25-table-container').appendChild(table);
}

// Call createTable on window load
window.onload = createTable;
