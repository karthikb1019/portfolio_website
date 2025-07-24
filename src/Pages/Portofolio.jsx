import React, { useEffect, useState, useCallback } from "react";
// Import the static projects data from ProjectDetail
import { PROJECTS_DATA } from "../components/ProjectDetail";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Briefcase } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      // Use the static PROJECTS_DATA instead of fetching from Firebase
      setProjects(PROJECTS_DATA);
      
      // For certificates, you can either:
      // 1. Create a static array similar to PROJECTS_DATA, or
      // 2. Keep the existing Firebase fetch for certificates only
      // Option 1: Use static certificates data
      const staticCertificates = [
        {
          Img: "/AWS Certified DevOps Engineer - Professional certificate (1)_page-0001.jpg"
        },
        {
          Img: "/Tableau Desktop Specialist certificate_page-0001.jpg"
        },
        {
          Img: "/Tableau_desktop_speacialist _certification_page-0001.jpg"
        },
        {
          Img: "/Karthik suman Bathini SQl Fundamentals_page-0001.jpg"
        },
        {
          Img: "/sql_basic certificate_page-0001.jpg"
        },
        {
          Img: "/sql_intermediate certificate_page-0001.jpg"
        },
        {
          Img: "/Karthik_certification_HL7_page-0001.jpg"
        },
        {
          Img: "/karthik_HL7_FHIR_Certification_page-0001.jpg"
        },
        {
          Img: "AI_DataModelling_page-0001.jpg"
        },
        {
          Img: "CloudEngineering_page-0001.jpg"
        },
        {
          Img: "/Tata-data vizualization-certification_page-0001.jpg"
        },
        {
          Img: "DataAnalytics_page-0001.jpg"
        },
        {
          Img: "DataScience_Python_page-0001.jpg"
        },
        {
          Img: "CyberSecurity_page-0001.jpg"
        },
        {
          Img: "SAP_cybersecurity_page-0001.jpg"
        },
        {
          Img: "SDS certificate  Amazon_page-0001.jpg"
        },
        
        // Add more certificates as needed
      ];
      
      setCertificates(staticCertificates);
      
      // Store in localStorage (optional, but keeps compatibility with ProjectDetail.jsx)
      localStorage.setItem("projects", JSON.stringify(PROJECTS_DATA));
      localStorage.setItem("certificates", JSON.stringify(staticCertificates));
    } catch (error) {
      console.error("Error setting up data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and experiences. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Briefcase className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Experience"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    className="h-full flex"
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <div className="w-full flex flex-col">
                      <CardProject
                        Img={project.Img}
                        Title={project.Title}
                        Description={project.Description}
                        Link={project.Link}
                        id={project.id}
                        className="flex-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
              {/* Experience Card 1 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                    <img
                      src="mphi.png"  // your actual path
                      alt="MPHI Logo"
                      className="absolute top-4 right-4 w-15 h-12 object-contain"
                    />
                  <div className="absolute top-4 left-4">
                </div>
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Nov 2024 – Present</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">Data Operations Engineer</h2>
                <p className="text-slate-400 font-semibold mb-2">Michigan Public Health Institute (MPHI), Michigan, United States</p>
                <p className="text-slate-300 text-sm">
                  Projects: TANF-Birth Linkage | Kotelchuck Index | HL7 ADT Modernization | EHR Interoperability.
                  <br />
                  <br />
                  Skills: Python (Programming Language) · R (Programming Language) · Extract, Transform, Load (ETL) · Microsoft Excel · Tableau · Microsoft Power BI · REDCap · Big Data · Oracle Database · PL/SQL · HL7 Standards · Fast Healthcare Interoperability Resources (FHIR) · FoxPro · SQL Server Management Studio · Data Management · Data Engineering · Data Analytics · Data Visualization · Data Science
                </p>
                  <br />
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li>Supporting data modernization and analytics for the Division for Vital Records & Health Statistics (DVRHS)</li>
                  <li>Converted legacy FoxPro and SAS scripts into R to compute public health metrics like the Kotelchuck and Kessner Index, streamlining birth adequacy analysis.</li>
                  <li>Cleaned and transformed 80K+ TANF paternity records from CPR .dbf files using R, dplyr, and stringr, standardizing CASE_ID formats and ensuring audit-readiness.</li>
                  <li>Generated monthly/yearly paternity reports by BXMONTH and BXYEAR, identifying 1,700+ unmatched cases and improving linkage accuracy across 2024–2025 datasets.</li>
                  <li>Merged multi-year CPR datasets, filtered by BXYEAR, and validated trends in birth counts using longitudinal analysis.</li>
                  <li>Simulated HL7 v2 ADT^A31 messages for birth and death reporting using 7Edit, Mirth Connect, and HL7 Inspector.</li>
                  <li>Mapped segments like MSH, PID, OBX, Z-segments to DVRHS schemas for integration with SMART on FHIR architecture.</li>
                  <li>Produced pipe-delimited and Excel reports aligned with CDC/NCHS submission standards, maintaining PHI/PII compliance and public health data governance protocols.</li>
                  <li>Developed custom record linkage algorithms joining TANF and Birth datasets via CASE_ID, SSN, and name fields, achieving a 96% match rate.</li>
                  <li>Automated end-to-end ETL pipelines with R and Tidyverse to generate standard-compliant outputs for state and federal use.</li>
                  <li>Applied data imputation, deduplication, and type conversion to transform legacy structures into consistent, analyzable formats.</li>
                  <li>Conducted Excel-based forensic audits and pivot analysis on claims data, aligning results with MMIS, enrollment, and sanction data.</li>
                  <li>Conducted Excel-based forensic audits and pivot analysis on claims data, aligning results with MMIS, enrollment, and sanction data.</li>

                </ul>
              </div>

              {/* Experience Card 2 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                  <img
                      src="onpassive.png"  // your actual path
                      alt="Onpassive Logo"
                      className="absolute top-4 right-4 w-18 h-16 object-contain"
                    />
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Sep 2023 – Present</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">Angel Investor</h2>
                <p className="text-slate-400 font-semibold mb-2">ONPASSIVE - Freelance, Dubai, United Arab Emirates</p>
                <p className="text-slate-300 text-sm">
                  Angel Investor | ONPASSIVE Ecosystem 
                  <br />
                  <br />
                  As an early-stage angel investor, I specialize in supporting high-impact startups at the intersection of AI, data engineering, and no-code automation. My investment focus includes companies like ONPASSIVE, which are pioneering global SaaS ecosystems, autonomous business solutions, and AI-driven tools.
                </p>
                  <br />
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li> Seed-Stage Capital & Strategic Mentorship: Backed founders in scaling AI-powered platforms, contributing both capital and product-market fit guidance.</li>
                  <li>Impact-Driven Innovation: Focused on data-driven startups solving enterprise pain points in public health, fintech, and supply chain with measurable ROI.</li>
                  <li>Current Interests: AI Agents | LLM Chatbots | No-Code Platforms | Cloud Data Engineering | Generative AI | Healthcare Analytics | Automation-as-a-Service | VC Syndicates</li>
                </ul>
              </div>

              {/* Experience Card 3 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                  <img
                      src="osu.svg"  // your actual path
                      alt="OSU Logo"
                      className="absolute top-4 right-4 w-15 h-12 object-contain"
                    />
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Sep 2024 – Dec 2024</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">Cloud Engineer</h2>
                <p className="text-slate-400 font-semibold mb-2">Stillwater, Oklahoma, United States</p>
                  <br />
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li> Migrated 80 TB of critical research data to Amazon S3, ensuring data integrity and accessibility.</li>
                  <li> Implemented lifecycle policies for S3 buckets to optimize storage costs and maintain efficient data retention.</li>
                  <li> Configured fine-grained access controls for S3 buckets, enabling secure and shared access to PDB files and research data among multiple researchers.</li>
                  <li> Designed and deployed a front-end web application on AWS, visualizing molecular interactions using HEALPix libraries for 3D visualization.</li>
                  <li> Configured Amazon CloudFront for content delivery, reducing latency and improving user experience for global researchers.</li>
                  <li> Set up an Amazon RDS database to store molecular data, enabling seamless integration with the web application.</li>
                  <li> Launched and configured Amazon EC2 instances with Linux operating systems to emulate supercomputer capabilities for advanced molecular computations.</li>
                  <li> Installed and configured essential packages such as Python, C#, and related coding environments for research applications.</li>
                  <li> Supported researchers by optimizing instances with enhanced networking and Elastic Fabric Adapter (EFA) for low-latency, high-throughput performance.</li>
                  <li> Integrated HEALPix libraries into the computational environment to support spherical mapping and data visualization of molecular interactions.</li>
                  <li> Facilitated secure remote access for researchers through AWS Systems Manager and VPN configurations.</li>
                  <li> Set up AWS CloudWatch and CloudTrail for real-time monitoring and logging of system performance and user activity.</li>
                  <li> Implemented cost optimization tools and created dashboards using AWS Cost Explorer to track and manage resource utilization.</li>
                  <li> Automated system updates and patches using AWS Systems Manager for consistent and secure infrastructure maintenance.</li>
                  <li> Utilized AWS Elastic Load Balancer (ELB) and Auto Scaling Groups to ensure high availability and scalability of the hosted applications.</li>
                </ul>
              </div>

              {/* Experience Card 4 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                  <img
                      src="osu.svg"  // your actual path
                      alt="OSU Logo"
                      className="absolute top-4 right-4 w-15 h-12 object-contain"
                    />
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Aug 2022 – May 2024</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">Graduate Research Assistant</h2>
                <p className="text-slate-400 font-semibold mb-2">Stillwater, Oklahoma, United States</p>
                <p className="text-slate-300 text-sm">
                  Project: SHIM Builder – AI-Powered Molecular Interaction Mapping using HEALPix
                  <br />
                  <br />
                  Skills: Azure Databricks · Big Data · Python (Programming Language) · healpy · healpix · NumPy · pandas
                </p>
                  <br />
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li> Developed a cutting-edge computational chemistry tool to simulate and visualize molecular interaction energies using HEALPix and spherical harmonics.</li>
                  <br />
                  <p className="text-slate-300 text-sm">
                  Key Achievements & Contributions:
                  </p>
                  <br />
                  <li>Designed and implemented SHIM Builder — a Python-based simulation engine that computes orientation-dependent interaction energies between molecular pairs using Gaussian Hartree-Fock methods.</li>
                  <li>Built an interactive 3D dashboard using Dash and Plotly, enabling real-time visualization of HEALPix grids with resolution scaling (12–768 points) for atomic interactions.</li>
                  <li>Analyzed molecular orientation effects by fixing one molecule and rotating the other across spherical coordinates (phi, theta), highlighting directional bonding patterns (e.g., hydrogen bonding in water-acetone).</li>
                  <li>Generated dynamic energy heatmaps on spherical surfaces, allowing researchers to intuitively interpret favorable vs. unfavorable molecular interaction regions.</li>
                  <li>Reduced computational complexity by transforming dense multi-atomic systems into simplified pairwise models using spherical harmonic sampling.</li>
                  <p className="text-slate-300 text-sm">
                  Impact:
                  </p>
                  <li>Enabled scalable and visual molecular modeling for long-timescale simulations and large molecular systems.</li>
                  <li>Contributed to fundamental research in computational chemistry with applications in drug discovery, material science, and energy modeling.</li>
                  <li>Presented research outcomes in academic settings and collaborated directly with Dr. Christopher Fennell, a leading expert in molecular physics.</li>
                  <li>Current Interests: AI Agents | LLM Chatbots | No-Code Platforms | Cloud Data Engineering | Generative AI | Healthcare Analytics | Automation-as-a-Service | VC Syndicates</li>
                </ul>
              </div>

              {/* Experience Card 5 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                  <img
                      src="amazon.svg"  // your actual path
                      alt="Amazon Logo"
                      className="absolute top-4 right-4 w-15 h-12 object-contain"
                    />
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Sep 2018 – Mar 2022</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">ML Data Associate</h2>
                <p className="text-slate-400 font-semibold mb-2">Amazon, India</p>
                <p className="text-slate-300 text-sm">
                  Skills: Python (Programming Language) · Data Engineering · DevOps · Azure Data Lake · Tableau · Extract, Transform, Load (ETL) · Azure Data Factory · Business Analysis · Amazon Web Services (AWS) · AWS Glue · Apache Spark · Azure Databricks · R (Programming Language) · AWS Lambda · Amazon Redshift · Azure Cosmos DB · Analytical Skills · Microsoft Power BI · MySQL · Hive · Apache Kafka · Hadoop · Google Cloud Platform (GCP)
                  <br />
                  <br />
                </p>
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li>Orchestrated scalable data pipelines processing 10 GB daily using AWS Glue, Lambda, EMR, and Redshift for Amazon Go stores.</li>
                  <li>Integrated tailgating and customer data efficiently through broadcast joins, enabling real-time analytics and actionable insights.</li>
                  <li>Automated JSON-to-Parquet transformations seamlessly with Python, reducing storage costs by 30% and enhancing processing workflows.</li>
                  <li>Implemented real-time data streaming pipelines using Amazon Kinesis and batch automation via AWS CDK for system reliability.</li>
                  <li>Achieved 99.9% uptime and 50% faster processing speeds by optimizing pipelines with Infrastructure as Code and AWS automation.</li>
                  <li>Leveraged Apache Spark, PySpark, and Hadoop frameworks for ETL optimizations, reducing data processing time and boosting query speed.</li>
                </ul>
              </div>

              {/* Experience Card 6 */}
              <div className="bg-[#0e0e1b] rounded-xl p-6 border border-slate-700">
                <div className="bg-[#0e0e1b] rounded-xl p-6  border-slate-700 relative">
                  <img
                      src="thamsar.png"  // your actual path
                      alt="TTHS Logo"
                      className="absolute top-4 right-4 w-18 h-16 object-contain"
                    />
                </div>
                <h3 className="text-yellow-400 font-bold text-lg mb-1">Feb 2016 – Aug 2016</h3>
                <h2 className="text-white text-2xl font-semibold mb-1">Intern Data Analyst</h2>
                <p className="text-slate-400 font-semibold mb-2">Thamsar Tele Health Services, Hyderabad, Telangana, India</p>
                <p className="text-slate-300 text-sm">
                  Skills: Statistics · NumPy · pandas · R · Oracle Database · VLOOKUP · otlp · OLAP
                </p>
                  <br />
                <ul className="list-disc pl-5 mt-2 text-slate-300 text-sm space-y-1">
                  <li>Designed and implemented a robust SQL Server database architecture to securely store patient health data.</li>
                  <li>Implemented database management systems (DBMS) principles for efficient data storage and retrieval.</li>
                  <li>Developed data definition language (DDL) scripts to create encrypted tables, views, and stored procedures for data access control.</li>
                  <li>Utilized normalization techniques to ensure data integrity and consistency.</li>
                  <li>Developed ETL pipelines using Informatica PowerCenter to extract patient data from electronic health record (EHR) systems.</li>
                  <li>Implemented data manipulation language (DML) techniques for data transformation and standardization.</li>
                  <li>Utilized change data capture (CDC) mechanisms to capture incremental changes and automate data migration tasks.</li>
                  <li>Integrated data from diverse sources such as Amazon S3 and Snowflake using ETL tools.</li>
                  <li>Utilized SQL queries with joins, subqueries, and views for comprehensive data analysis</li>
                  <li>Conducted statistical analysis using R Programming to analyze patient demographics and treatment efficacy.</li>
                  <li>Developed interactive dashboards and reports using Tableau and Power BI for data visualization and interpretation.</li>
                  <li>Created dashboards and reports for data reporting using SQL Server Reporting Services (SSRS) and Oracle BI.</li>
                  <li>Enforced data governance policies to ensure compliance with regulatory standards.</li>
                  <li>Conducted data profiling and quality assurance checks to maintain data accuracy and reliability.</li>
                  <li>Optimized ETL processes and query optimization techniques for enhanced performance.</li>
                  <li>Implemented indexing strategies and batch processing for efficient data handling.</li>
                  <li>Monitored and maintained database performance, utilizing CI/CD pipelines for automated deployment, and testing of enhancements.</li>
                  <li>Established ETL architecture best practices and workflow automation to streamline data processing tasks.</li>  
                </ul>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}