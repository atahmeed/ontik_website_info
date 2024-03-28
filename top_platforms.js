const cssStyles = `
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 8px;
      border: 1px solid #dddddd;
    }
    thead {
      background-color: #0062ff;
      color: #ffffff;
    }
    tbody tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = cssStyles;
  document.head.appendChild(styleSheet);

  // Data for table rows
  const platforms = [
  {
    name: "Crunchbase",
    website: "http://www.crunchbase.com/",
    description: "Crunchbase provides business information on companies."
  },
  {
    name: "Clutch",
    website: "http://www.clutch.co/",
    description: "Ratings and reviews platform for business services."
  },
  {
    name: "DesignRush",
    website: "http://www.designrush.com/",
    description: "Finds best design and marketing agencies."
  },
  {
    name: "Software Suggest",
    website: "http://www.softwaresuggest.com/",
    description: "Discovery platform for software solutions."
  },
  {
    name: "Sortlist",
    website: "http://www.sortlist.com/",
    description: "Connects businesses with marketing and advertising agencies."
  },
  {
    name: "GoodFirms",
    website: "http://www.goodfirms.co/",
    description: "Research and review platform for IT companies."
  },
  {
    name: "Glassdoor",
    website: "http://www.glassdoor.com/",
    description: "Job and recruiting site with company reviews."
  },
  {
    name: "G2",
    website: "http://www.g2.com/",
    description: "Peer-to-peer review site for software purchasing decisions."
  },
  {
    name: "TopFirms",
    website: "http://www.topfirms.com/",
    description: "Lists top service providers across industries."
  },
  {
    name: "Apollo.io",
    website: "http://www.apollo.io/",
    description: "Sales intelligence platform for business data."
  },
  {
    name: "ZoomInfo",
    website: "http://www.zoominfo.com/",
    description: "Offers a database of business contacts and company info."
  },
  {
    name: "Toptal",
    website: "http://www.toptal.com/",
    description: "Global network of top freelance talent."
  },
  {
    name: "Trustpilot",
    website: "http://www.trustpilot.com/",
    description: "Consumer review platform for rating companies."
  },
  {
    name: "Capterra",
    website: "http://www.capterra.com/",
    description: "Helps find and compare software solutions."
  },
  {
    name: "Lusha",
    website: "http://www.lusha.com/",
    description: "Data intelligence platform for contact information."
  },
  {
    name: "Tracxn",
    website: "http://www.tracxn.com/",
    description: "Research platform for insights on startups and private companies."
  },
  {
    name: "6sense",
    website: "http://www.6sense.com/company/",
    description: "AI-driven platform for identifying prospective customers."
  },
  {
    name: "Unstop",
    website: "http://www.unstop.com/",
    description: "Offers marketing and sales automation tools."
  },
{
    name: "Indeed",
    website: "http://www.indeed.com/",
    description: "Job search engine for various industries."
  },
  {
    name: "Comparably",
    website: "http://www.comparably.com/",
    description: "Provides data on company cultures and salaries."
  },
  {
    name: "TechBehemoths",
    website: "http://www.techbehemoths.com/company/",
    description: "Showcases tech companies and service providers."
  },
  {
    name: "Outsource Accelerator",
    website: "http://www.outsourceaccelerator.com/",
    description: "Resources on outsourcing to the Philippines."
  },
  {
    name: "Selected Firms",
    website: "http://www.selectedfirms.co/",
    description: "Directory of top service providers across industries."
  },
  {
    name: "WebsitesCrawl",
    website: "http://www.websitescrawl.com/",
    description: "Web crawling and data extraction service."
  },
  {
    name: "Vendasta",
    website: "http://partners.vendasta.com/businesses/accounts/AG-CJ2VXZV5CT/details",
    description: "Digital marketing solutions for agencies and businesses."
  },
  {
    name: "Top Developers",
    website: "http://www.topdevelopers.co/listing-packages",
    description: "Directory service for leading development firms."
  },
  {
    name: "MakeAnAppLike",
    website: "http://companies.makeanapplike.com/",
    description: "Insights and resources on app development."
  },
  {
    name: "Bizcommunity",
    website: "http://www.bizcommunity.com/",
    description: "Platform for industry news and networking in Africa."
  },
  {
    name: "SoftwareWorld",
    website: "http://www.softwareworld.co/",
    description: "Rates and reviews software solutions and IT companies."
  },
  {
    name: "SelfGrowth",
    website: "http://www.selfgrowth.com/",
    description: "Online resource for self-improvement and personal growth."
  },
  {
    name: "IndiaMART",
    website: "http://www.indiamart.com/",
    description: "India's largest online B2B marketplace."
  },
  {
    name: "YellowPages",
    website: "http://www.yellowpages.com/",
    description: "Directory service with business listings and contacts."
  },
  {
    name: "AppFutura",
    website: "http://www.appfutura.com/",
    description: "Connects businesses with mobile app development companies."
  }
  ];


  function createTable() {
    const container = document.getElementById('table-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Header row
    const headerRow = document.createElement('tr');
    const headers = ["Platform Name", "Website", "Description"];
    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    thead.appendChild(headerRow);

    // Adding rows from the platforms array
    platforms.forEach(platform => {
      const row = document.createElement('tr');
      Object.values(platform).forEach(text => {
        const cell = document.createElement('td');
        if (text.startsWith('http')) {
          const link = document.createElement('a');
          link.href = text;
          link.textContent = text;
          cell.appendChild(link);
        } else {
          cell.textContent = text;
        }
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
  }

  // Call createTable function when the page loads
  window.onload = createTable;
