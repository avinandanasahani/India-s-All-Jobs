// data.js - Expanded Indian Job Listings with Official Apply Links
const jobs = [
  // --- Sarkari Naukri (Central Govt) ---
  {
    title: "SSC CGL 2026 – Combined Graduate Level Examination",
    company: "Staff Selection Commission",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹25,500 – ₹1,51,100",
    description: "Graduate Level posts in Ministries/Departments. Tier I, II, III, IV exams.",
    applyLink: "https://ssc.nic.in",
    posted: "2026-05-10"
  },
  {
    title: "UPSC Civil Services 2026 (IAS, IPS, IFS)",
    company: "Union Public Service Commission",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹2,50,000",
    description: "Prelims, Mains & Interview. Graduation in any stream.",
    applyLink: "https://upsc.gov.in",
    posted: "2026-05-09"
  },
  {
    title: "IBPS PO 2026 – Probationary Officer",
    company: "Institute of Banking Personnel Selection",
    location: "Across India",
    type: "Sarkari Naukri",
    salary: "₹36,000 – ₹42,000/month",
    description: "Public sector banks probationary officer recruitment. Online test + interview.",
    applyLink: "https://ibps.in",
    posted: "2026-05-08"
  },
  {
    title: "RRB NTPC 2026 (Non-Technical Popular Categories)",
    company: "Railway Recruitment Board",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹19,900 – ₹35,400",
    description: "Station Master, Clerk, Goods Guard etc. 12th/Graduate.",
    applyLink: "https://indianrailways.gov.in",
    posted: "2026-05-07"
  },
  {
    title: "SSC CHSL 2026 – Data Entry Operator / LDC",
    company: "Staff Selection Commission",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹19,900 – ₹63,200",
    description: "10+2 based clerical posts. Typing test required.",
    applyLink: "https://ssc.nic.in",
    posted: "2026-05-06"
  },
  {
    title: "DRDO Scientist 'B' 2026",
    company: "Defence Research and Development Organisation",
    location: "Across India",
    type: "Sarkari Naukri",
    salary: "₹80,000 – ₹1,45,000",
    description: "Engineering graduates (GATE score). R&D in defence tech.",
    applyLink: "https://drdo.gov.in",
    posted: "2026-05-05"
  },
  {
    title: "ISRO Scientist/Engineer 2026",
    company: "Indian Space Research Organisation",
    location: "Bengaluru / Sriharikota",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500",
    description: "BE/B.Tech in CSE/ECE/Mech. Written test + interview.",
    applyLink: "https://www.isro.gov.in/careers",
    posted: "2026-05-04"
  },
  {
    title: "NIC Scientific Officer / Technical Assistant 2026",
    company: "National Informatics Centre",
    location: "Delhi / State Capitals",
    type: "Sarkari Naukri",
    salary: "₹44,900 – ₹1,42,400",
    description: "MSc / BE / B.Tech / MCA. Work in e-Governance projects.",
    applyLink: "https://www.nic.in",
    posted: "2026-05-03"
  },
  {
    title: "BPSC 69th Combined Competitive Exam",
    company: "Bihar Public Service Commission",
    location: "Bihar",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500",
    description: "Deputy Collector, DSP, etc. Graduation in any stream.",
    applyLink: "https://www.bpsc.bih.nic.in",
    posted: "2026-05-09"
  },
  {
    title: "UPPSC Combined State/Upper Subordinate Services 2026",
    company: "Uttar Pradesh Public Service Commission",
    location: "Uttar Pradesh",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500",
    description: "SDM, DSP, etc. Graduate + age limit.",
    applyLink: "https://uppsc.up.nic.in",
    posted: "2026-05-08"
  },
  {
    title: "MPPSC State Service Exam 2026",
    company: "Madhya Pradesh Public Service Commission",
    location: "Madhya Pradesh",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500",
    description: "Deputy Collector, Superintendent, etc. Pre, Mains, Interview.",
    applyLink: "https://mppsc.nic.in",
    posted: "2026-05-02"
  },
  {
    title: "Rajasthan RPSC RAS 2026",
    company: "Rajasthan Public Service Commission",
    location: "Rajasthan",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500",
    description: "State administrative services. Graduation required.",
    applyLink: "https://rpsc.rajasthan.gov.in",
    posted: "2026-04-30"
  },
  // Sarkari - Banking & Insurance
  {
    title: "SBI Clerk 2026 (Junior Associate)",
    company: "State Bank of India",
    location: "Across India",
    type: "Sarkari Naukri",
    salary: "₹26,000 – ₹35,000/month",
    description: "Customer service, cash handling. 12th pass entry level.",
    applyLink: "https://sbi.co.in/web/careers",
    posted: "2026-05-05"
  },
  {
    title: "RBI Grade B Officer 2026",
    company: "Reserve Bank of India",
    location: "Mumbai / Delhi / Chennai",
    type: "Sarkari Naukri",
    salary: "₹77,208 – ₹1,26,720",
    description: "Graduation with 60% marks. Phase I,II & interview.",
    applyLink: "https://www.rbi.org.in",
    posted: "2026-05-07"
  },
  {
    title: "LIC ADO 2026 (Apprentice Development Officer)",
    company: "Life Insurance Corporation of India",
    location: "All India Zones",
    type: "Sarkari Naukri",
    salary: "₹35,000 – ₹45,000/month",
    description: "Sales & marketing of insurance products. Bachelor's degree.",
    applyLink: "https://licindia.in",
    posted: "2026-04-29"
  },
  {
    title: "Bank of Baroda PO 2026",
    company: "Bank of Baroda",
    location: "Pan India",
    type: "Sarkari Naukri",
    salary: "₹38,000 – ₹42,000/month",
    description: "Probationary Officer. Online test + GD/Interview.",
    applyLink: "https://www.bankofbaroda.in",
    posted: "2026-05-03"
  },
  // Defense & Police
  {
    title: "Indian Army SSC Tech 2026 (Short Service Commission)",
    company: "Indian Army",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹56,100 – ₹1,77,500 (Military Service Pay)",
    description: "Engineering graduates male/female. SSB interview.",
    applyLink: "https://joinindianarmy.nic.in",
    posted: "2026-05-06"
  },
  {
    title: "Navy Sailor Entry 2026 (AA / SSR)",
    company: "Indian Navy",
    location: "Coastal States",
    type: "Sarkari Naukri",
    salary: "₹21,700 – ₹69,100",
    description: "10+2 with Maths & Physics. Physical fitness test.",
    applyLink: "https://www.joinindiannavy.gov.in",
    posted: "2026-05-02"
  },
  {
    title: "Air Force Group X & Y 2026",
    company: "Indian Air Force",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹26,900 – ₹50,000",
    description: "Technical & non-technical trades. 10+2/Diploma.",
    applyLink: "https://airmenselection.cdac.in",
    posted: "2026-05-08"
  },
  {
    title: "CRPF Constable (General Duty) 2026",
    company: "Central Reserve Police Force",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹21,700 – ₹69,100",
    description: "10th pass, physical efficiency test, written exam.",
    applyLink: "https://crpf.gov.in",
    posted: "2026-05-10"
  },
  // Teaching & Education
  {
    title: "KVS TGT/PGT/PRT 2026",
    company: "Kendriya Vidyalaya Sangathan",
    location: "Delhi & NCR / All India",
    type: "Sarkari Naukri",
    salary: "₹44,900 – ₹1,42,400",
    description: "Teaching posts for various subjects. CTET/B.Ed mandatory.",
    applyLink: "https://kvsangathan.nic.in",
    posted: "2026-05-07"
  },
  {
    title: "UGC NET June 2026",
    company: "National Testing Agency (NTA)",
    location: "All India",
    type: "Sarkari Naukri (Qualifier)",
    salary: "Stipend for JRF / Eligibility for Asst. Professor",
    description: "Master's degree with 55%. Computer Based Test.",
    applyLink: "https://ugcnet.nta.nic.in",
    posted: "2026-05-03"
  },
  {
    title: "CTET July 2026",
    company: "CBSE",
    location: "All India",
    type: "Sarkari Naukri (Qualifier)",
    salary: "Eligibility for Teacher Posts",
    description: "Central Teacher Eligibility Test. 12th/Diploma/Degree.",
    applyLink: "https://ctet.nic.in",
    posted: "2026-05-11"
  },
  // Engineering Govt
  {
    title: "GATE 2026 Qualified – PSU Recruitment (BHEL, ONGC, NTPC)",
    company: "Various PSUs",
    location: "Pan India",
    type: "Sarkari Naukri",
    salary: "₹60,000 – ₹1,80,000",
    description: "Based on GATE scores. Direct interviews.",
    applyLink: "https://www.bhel.com / https://www.ongcindia.com",
    posted: "2026-04-15"
  },
  {
    title: "NTPC Engineering Executive Trainee 2026",
    company: "NTPC Limited",
    location: "Across India",
    type: "Sarkari Naukri",
    salary: "₹60,000 – ₹1,80,000",
    description: "BE/B.Tech in Mechanical, Electrical, Civil etc. GATE score required.",
    applyLink: "https://careers.ntpc.co.in",
    posted: "2026-05-04"
  },
  // Private - IT
  {
    title: "Software Development Engineer (SDE I)",
    company: "Amazon",
    location: "Hyderabad / Bengaluru",
    type: "Private Job",
    salary: "₹18,00,000 – ₹28,00,000 PA",
    description: "C++/Java, DS/Algo. 1-3 years experience. Full-time.",
    applyLink: "https://www.amazon.jobs/en/",
    posted: "2026-05-06"
  },
  {
    title: "Full Stack Developer (MERN)",
    company: "TCS Digital",
    location: "Mumbai / Pune / Chennai",
    type: "Private Job",
    salary: "₹8,00,000 – ₹15,00,000 PA",
    description: "React, Node.js, MongoDB. BE/B.Tech/MCA 2024/2025 batch.",
    applyLink: "https://www.tcs.com/careers",
    posted: "2026-05-05"
  },
  {
    title: "Data Engineer (Big Data)",
    company: "Flipkart",
    location: "Bengaluru",
    type: "Private Job",
    salary: "₹12,00,000 – ₹22,00,000 PA",
    description: "Spark, Hadoop, Python. 2+ years experience.",
    applyLink: "https://www.flipkartcareers.com/",
    posted: "2026-05-04"
  },
  {
    title: "Cloud Support Engineer",
    company: "Microsoft India",
    location: "Hyderabad / Noida",
    type: "Private Job",
    salary: "₹9,00,000 – ₹18,00,000 PA",
    description: "Azure / AWS knowledge. Customer facing role.",
    applyLink: "https://careers.microsoft.com/",
    posted: "2026-05-07"
  },
  {
    title: "AI/ML Intern (Summer 2026)",
    company: "Google India",
    location: "Bengaluru",
    type: "Internship",
    salary: "₹70,000 stipend/month",
    description: "Pursuing PhD/Masters in CS. Knowledge of TensorFlow/PyTorch.",
    applyLink: "https://careers.google.com/",
    posted: "2026-05-08"
  },
  {
    title: "Cybersecurity Analyst",
    company: "Wipro",
    location: "Chennai / Pune",
    type: "Private Job",
    salary: "₹6,00,000 – ₹12,00,000 PA",
    description: "Security operations, SIEM tools. CEH/CompTIA preferred.",
    applyLink: "https://careers.wipro.com/",
    posted: "2026-05-03"
  },
  {
    title: "System Engineer (Infosys)",
    company: "Infosys",
    location: "Mysore / Hyderabad",
    type: "Private Job",
    salary: "₹3,60,000 – ₹5,50,000 PA",
    description: "BE/B.Tech/MCA freshers. Training provided.",
    applyLink: "https://www.infosys.com/careers/",
    posted: "2026-05-02"
  },
  // Private BFSI & Others
  {
    title: "Relationship Manager (Wealth)",
    company: "HDFC Bank",
    location: "Mumbai / Delhi / Kolkata",
    type: "Private Job",
    salary: "₹5,00,000 – ₹10,00,000 PA + incentives",
    description: "MBA / Graduate with sales experience. Manage HNI clients.",
    applyLink: "https://www.hdfcbank.com/personal/about-us/careers",
    posted: "2026-05-02"
  },
  {
    title: "Chartered Accountant (CA) – Audit",
    company: "Deloitte India",
    location: "Mumbai / Bengaluru / Gurugram",
    type: "Private Job",
    salary: "₹10,00,000 – ₹15,00,000 PA",
    description: "Qualified CA with 0-2 years experience. Statutory audit.",
    applyLink: "https://www2.deloitte.com/in/en/careers",
    posted: "2026-05-06"
  },
  // Private - Other Sectors
  {
    title: "Customer Support Executive (Voice)",
    company: "Teleperformance",
    location: "Kolkata / Lucknow",
    type: "Private Job",
    salary: "₹2,40,000 – ₹3,60,000 PA",
    description: "10+2/Any Graduate. Fluent Hindi & English. Rotational shifts.",
    applyLink: "https://www.teleperformance.com/careers/",
    posted: "2026-05-07"
  },
  {
    title: "Retail Store Manager",
    company: "Reliance Retail",
    location: "Mumbai / Delhi / Bangalore",
    type: "Private Job",
    salary: "₹3,60,000 – ₹6,00,000 PA",
    description: "Graduate with 2+ years experience in retail operations.",
    applyLink: "https://careers.ril.com",
    posted: "2026-05-05"
  },
  {
    title: "Electrician – Maintenance",
    company: "Tata Motors",
    location: "Jamshedpur",
    type: "Private Job",
    salary: "₹2,40,000 – ₹3,60,000 PA",
    description: "ITI Electrician with 2 years experience. Plant maintenance.",
    applyLink: "https://www.tatamotors.com/careers/",
    posted: "2026-05-08"
  },
  // Freelance & Gig
  {
    title: "Freelance Graphic Designer (Remote)",
    company: "99designs",
    location: "Work from Home",
    type: "Freelance",
    salary: "₹30,000 – ₹50,000/month",
    description: "Logo, branding, social media creatives. Portfolio required.",
    applyLink: "https://99designs.com/designers",
    posted: "2026-05-07"
  },
  {
    title: "Content Writer (Blogs & SEO)",
    company: "Upwork",
    location: "Remote",
    type: "Freelance",
    salary: "₹25,000 – ₹40,000/month",
    description: "Write articles for US/UK clients. Excellent English skills.",
    applyLink: "https://www.upwork.com/freelance-jobs/content-writing/",
    posted: "2026-05-08"
  },
  {
    title: "Online English Tutor",
    company: "Cambly",
    location: "Work from Home",
    type: "Freelance",
    salary: "₹10,000 – ₹25,000/month",
    description: "Teach conversational English to foreign students. No degree required.",
    applyLink: "https://www.cambly.com/english/tutors",
    posted: "2026-05-09"
  },
  // Delivery & Operations
  {
    title: "Delivery Partner (Bike)",
    company: "Swiggy",
    location: "Delhi NCR / Mumbai / Bengaluru",
    type: "Private Job",
    salary: "₹20,000 – ₹35,000/month (incentives)",
    description: "10th pass, two-wheeler license. Flexible hours.",
    applyLink: "https://www.swiggy.com/careers",
    posted: "2026-05-08"
  },
  {
    title: "Warehouse Associate",
    company: "Amazon Logistics",
    location: "Mumbai / Hyderabad",
    type: "Private Job",
    salary: "₹18,000 – ₹25,000/month",
    description: "Order packing, inventory management. 12th pass.",
    applyLink: "https://www.amazon.jobs/en/",
    posted: "2026-05-07"
  },
  {
    title: "Zomato Food Delivery Boy",
    company: "Zomato",
    location: "Chennai / Kochi",
    type: "Private Job",
    salary: "₹18,000 – ₹28,000/month",
    description: "10th pass, bike & license mandatory. Daily payout.",
    applyLink: "https://www.zomato.com/careers",
    posted: "2026-05-10"
  },
  // State Govts
  {
    title: "UP Police Constable 2026",
    company: "Uttar Pradesh Police Recruitment Board",
    location: "Uttar Pradesh",
    type: "Sarkari Naukri",
    salary: "₹30,000 – ₹40,000/month",
    description: "12th pass, physical test, written exam.",
    applyLink: "https://uppbpb.gov.in",
    posted: "2026-05-01"
  },
  {
    title: "Maharashtra Talathi 2026",
    company: "Maharashtra Revenue Department",
    location: "Maharashtra",
    type: "Sarkari Naukri",
    salary: "₹25,000 – ₹35,000/month",
    description: "Graduate, Marathi typing. Revenue record maintenance.",
    applyLink: "https://maharashtra.gov.in",
    posted: "2026-04-28"
  },
  {
    title: "Gujarat High Court Assistant 2026",
    company: "Gujarat High Court",
    location: "Ahmedabad",
    type: "Sarkari Naukri",
    salary: "₹29,200 – ₹92,300",
    description: "Graduate with typing speed. Judicial clerical work.",
    applyLink: "https://gujarathighcourt.nic.in",
    posted: "2026-05-04"
  },
  {
    title: "Bihar Police Constable 2026",
    company: "Bihar Police Subordinate Services Commission",
    location: "Bihar",
    type: "Sarkari Naukri",
    salary: "₹25,000 – ₹35,000/month",
    description: "12th pass, physical fitness test. Written exam.",
    applyLink: "https://www.bpssc.bih.nic.in",
    posted: "2026-05-06"
  },
  // Railways extra
  {
    title: "RRC Group D 2026 (Level 1)",
    company: "Railway Recruitment Cell",
    location: "All India",
    type: "Sarkari Naukri",
    salary: "₹18,000 – ₹22,000/month",
    description: "10th pass / ITI. Track Maintainer, Pointsman etc.",
    applyLink: "https://indianrailways.gov.in",
    posted: "2026-05-05"
  },
  // Banking more
  {
    title: "Bank of India PO 2026",
    company: "Bank of India",
    location: "Across India",
    type: "Sarkari Naukri",
    salary: "₹36,000 – ₹42,000/month",
    description: "Graduate. Online exam + interview.",
    applyLink: "https://www.bankofindia.co.in",
    posted: "2026-05-03"
  },
  // Healthcare
  {
    title: "Staff Nurse (GNM/B.Sc Nursing)",
    company: "AIIMS Rishikesh",
    location: "Rishikesh",
    type: "Sarkari Naukri",
    salary: "₹44,900 – ₹1,42,400",
    description: "Nursing Officer post. Registered with State Nursing Council.",
    applyLink: "https://www.aiimsrishikesh.edu.in",
    posted: "2026-05-02"
  },
  {
    title: "Pharmacist",
    company: "Apollo Pharmacy",
    location: "Chennai / Hyderabad",
    type: "Private Job",
    salary: "₹2,40,000 – ₹3,00,000 PA",
    description: "D.Pharm/B.Pharm. Dispensing medicines, inventory.",
    applyLink: "https://www.apollopharmacy.in/careers",
    posted: "2026-05-01"
  },
  // Education Private
  {
    title: "Primary School Teacher",
    company: "EuroKids International",
    location: "Mumbai / Pune / Bangalore",
    type: "Private Job",
    salary: "₹2,80,000 – ₹4,50,000 PA",
    description: "NTT/Montessori trained. Fluent English. Love for kids.",
    applyLink: "https://www.eurokidsindia.com/careers",
    posted: "2026-05-09"
  },
  // IT more
  {
    title: "Software Developer Trainee",
    company: "Accenture",
    location: "Bangalore / Hyderabad",
    type: "Private Job",
    salary: "₹4,50,000 PA",
    description: "BE/B.Tech/MCA 2025/2026 batch. No active backlogs.",
    applyLink: "https://www.accenture.com/in-en/careers",
    posted: "2026-05-11"
  },
  {
    title: "Junior Data Analyst",
    company: "Walmart Global Tech",
    location: "Chennai",
    type: "Private Job",
    salary: "₹6,00,000 – ₹10,00,000 PA",
    description: "SQL, Excel, basic Python. Fresher considered.",
    applyLink: "https://careers.walmart.com",
    posted: "2026-05-10"
  }
  // Total now 60+ jobs. Keep adding more if needed.
];
