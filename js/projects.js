const projects = [
    {
        title: "NVR and CCTV Deployment for PT Supravisi Rama Optik Manufacturing",
        during: "October 2025 – Present",
        description: "Designed and implemented a comprehensive CCTV and NVR system to enhance surveillance and maintain the security of the factory area.",
        skill_set: "Network Infrastructure & Security Defense",
        type: "image",
        media_url: "media/img/hik.png",
        project_for: "Self-Driven Project"
    },
    {
        title: "Building a Free Firewall Using pfSense",
        during: "October 2025",
        description: "Developed and configured a pfSense-based firewall to strengthen network security within a personal security lab environment.",
        skill_set: "Network & Cybersecurity Defense",
        type: "image",
        media_url: "media/img/fw.jpg",
        project_for: "Self-Driven Project"
    },
    {
        title: "Automated DSPC Machine File Maintenance System",
        during: "September 2025",
        description: "An automated solution to maintain and update DSPC machine files (RxML, Engraving, SurfacingFiles, and PromapperSDF) whenever the production line is idle. This system ensures consistent file management, reduces downtime, and improves production efficiency.",
        skill_set: "Automation with PowerShell Scripting",
        type: "image",
        media_url: "media/img/dspc.jpg",
        project_for: "IT & Production Engineering Project"

    },
    {
        title: "Development of a Mini Lab Network for a Small Office/Home Office (SOHO)",
        during : "August 2025 - present",
        description: "Honing Practical Skills: It provides a platform to apply theoretical knowledge and build hands-on expertise in networking., Validating Theories: It allows for the testing and validation of networking concepts in a controlled environment., Business Development: It supports preparation for freelance work in the networking field by building a relevant portfolio and skill set.",
        skill_set : "Network Engineering and Netwrok Security",
        type: "image",
        media_url: "media/img/labself.jpg",
        project_for: "Self Project"
    },
    {
        title: "Local Server for Development and Trial-and-Error Projects",
        during : "August 2025 - present",
        description: "Skill Development: It provides a hands-on platform to improve technical skills in server configuration and management., Diverse Implementations: It allows for the practical implementation of various server types, including web servers, file servers, DNS servers, and more, Web Development Environment: It serves as a dedicated space to develop, test, and host web programs and applications..",
        skill_set : "Server Administration",
        type: "video",
        media_url: "media/video/localserver.mp4",
        project_for: "Self Project"
    },
    {
        title: "Deployment: Provisioning of New Systems with Windows 11 for Intune Activation and Direct Registration to Azure ",
        during : "April - July 2025",
        description: "Optimizing the IT installation process, ensuring every device has an identical configuration, guaranteeing automatic updates for security, and reducing manual installation time.",
        skill_set : "System Administration and System Defense",
        type: "image",
        media_url: "media/img/windows11.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Installation of CC10 Machines for the HCMC Laboratory Project",
        during : "December 2024", 
        description: "Transmitting local data to the RxCNC server to be read by the next process, increasing the accuracy of lens measurements for lux products, and making it easier for users to make final decisions before moving to the next process and dispatch session.",
        skill_set : "Network Engineering",
        type: "image",
        media_url: "media/img/CC10project.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Configuration of Laser Machines for the Production Site to the RxCNC Server",
        during : "October 2024",
        description: "Ensuring a more precise and softer surface for lenses, transferring local data to the RxCNC server for management and transfer to Hercules (ERP Production), making it easier for users to decide on product quality, and simplifying remote access and system monitoring for the machine vendor team.",
        skill_set : "Network Engineering",
        type: "image",
        media_url: "media/img/laserproject.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Deployment of End-User Data to New Systems for the HR Division and Regional Team",
        during : "June - November 2024",
        description: "Enabling users to easily monitor monthly payments, track holidays, permits, and absences; allowing the HR team to easily track employee work status; saving user data and integrating it with regional data; and testing the application's procedures, security, and operational functions for users.",
        skill_set : "Application Support and Testing",
        type: "image",
        media_url: "media/img/MPD.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Remote Edging Ecosystem for Customer Service",
        during : "August 2023 – Present",
        description: "Improved Customer Service Performance: Enables faster turnaround times for customer inquiries and orders, Increased Process Efficiency: Reduces the time required to complete orders before delivery to customers, Enhanced Measurement Accuracy: Ensures more precise measurements from optical stores, Centralized Data Collection: Gathers comprehensive data on various lenses and frames.",
        skill_set : "System Engineering",
        type: "image",
        media_url: "media/img/fcsekosistem.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Front Management System for Warehouse Operations",
        during : "November 2023",
        description: "Reduced Communication Conflicts: Minimizes misunderstandings and conflicts between the production and shipment teams, Effective Product Monitoring: Tracks all incoming products from customers into the facility, Enhanced Quality Control: Filters and verifies the quality of frames provided by customers, Daily Output Data: Collects and organizes daily data on all outgoing products.",
        skill_set : "Network and Infrastructure Engineering",
        type: "image",
        media_url: "media/img/fmrelayouting.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Streamlined Shipment Process (QC to Logistics)",
        during : "December 2023",
        description: "Improved Team Communication: Facilitates easier communication among the dispatch, QC, and laboratory teams regarding product quality and issues, More Efficient Data Management: Allows for a more streamlined and effective way to obtain product data, Integrated Workflow: Creates a seamless workflow where the QC team rechecks products with the lab team before sending them to logistics for invoicing and warranty documentation.",
        skill_set : "Network and Infrastructure Engineering",
        type: "image",
        media_url: "media/img/dispatchrelayout.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Expansion of the Edging Room for Quality Improvement",
        during : "March 2024",
        description: "Higher Product Quality: Ensures a higher standard of product quality before delivery to customers,Process Flexibility: Provides more flexibility for future process adjustments and improvements, Optimized Workflow: Creates a shorter, more efficient workflow, Increased Employee Productivity: Boosts the overall productivity of employees.",
        skill_set : "Network and Infrastructure Engineering",
        type: "image",
        media_url: "media/img/edgingrelayout.jpg",
        project_for: "PT Supravisi Rama Optik Manufacturing (Essilor Group)"
    },
    {
        title: "Shortened Business Process: From Store to Company",
        during : "June 2025",
        description: "Product and Customer Order Tracking: A system to accurately record all products required by customers, Subscriber Management: A database to manage company subscribers, Real-time Data Sync: Ensuring that all data is updated and accessible in real-time, E-invoicing: Generating electronic invoices for customer reporting and records.",
        skill_set : "Django Web Proggramming",
        type: "video",
        media_url: "media/video/salesreport.mp4",
        project_for: "Self Project"
    },
    {
        title: "Web Scraping Job Vacancy Data from Jobstreet",
        during : "may 2025",
        description: "Rapid Data Collection: Quickly retrieve job information from the latest to the oldest listings, Data Classification and Management: Organize and categorize the collected data for easier analysis, Comprehensive Data Set: Gather and manage a broad range of data from Jobstreet, including job titles, company names, locations, and other relevant details.",
        skill_set : "Python Developement",
        type: "video",
        media_url: "media/video/takedatajobst.mp4",
        project_for: "Self Project"
    },
    {
        title: "eb Scraping for Image Text Extraction",
        during : "May 2025",
        description: "web scraping to extract text from images (e.g., JPEG, PNG). The main goal is to improve efficiency by automating the process of transcribing data, thereby eliminating the need for manual data entry. ",
        skill_set : "AI engineering & Web Scrapping",
        type: "video",
        media_url: "media/video/scrapetxt.mp4",
        project_for: "Upwork Project"
    },
    {
        title: "Automated Data Visualization and Reporting for Result Analysis",
        during : "march 2025",
        description: "Efficiency and Time Savings: Automates manual tasks to save time and boost productivity, High Accuracy: Reduces human error with an automated process, Better Analysis: Presents data in easy-to-understand visualizations, leading to faster and more informed decisions..",
        skill_set : "AI engineering",
        type: "video",
        media_url: "media/video/analystdata.mp4",
        project_for: "Upwork Project"
    },
    {
        title: "Web-Based Efficiency Solution for Courier and Logistics Management",
        during : "June 2025",
        description: "Courier Fund Management: Created a system that simplifies the collection of personal funds used by couriers during deliveries, Financial Analysis: Enabled administrators and managers to more easily analyze financial data related to the delivery process, Automated Labeling: Implemented an automated system to generate and print labels based on specific delivery locations.",
        skill_set : "Full-Stack Development & Business Process Automation",
        type: "video",
        media_url: "media/video/labelingmanage.mp4",
        project_for: "PT Flexof Indonesia"
    }
];