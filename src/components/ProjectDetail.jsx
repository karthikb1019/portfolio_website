import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import Swal from 'sweetalert2';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft} from "lucide-react";

// Static projects data - export it so it can be imported in Portofolio.jsx
export const PROJECTS_DATA = [
  {
    id: 1,
    Title: "Supply Chain Data Automation using n8n, Supabase & Quadratic AI",
    Description: "This project automates end-to-end supply chain reporting by integrating Gmail-triggered sales files with n8n workflows, storing data in Supabase PostgreSQL, and generating AI-powered KPIs using Quadratic AI.",
    Img: ["https://i.ibb.co/RkZyWrjv/Road-Accident-Analysis.png",
          "https://i.ibb.co/0pDvgHMB/Bike-Sales-Analysis.png",
          "https://i.ibb.co/XZrgf3Sz/Snowflake-Datapipeline.png"
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["n8n", "Supabase", "Quadratic AI","Google Cloud OAuth","Open Exchange Rates"],
    Features: [
                "Gmail Label Trigger for daily sales data",
                "CSV parsing and schema mapping using n8n",
                "Automated inserts into Supabase PostgreSQL (Star Schema)",
                <>
                  AI-driven prompts in Quadratic AI for :
                  <br />• dim_date table generation
                  <br />• Exchange rate extraction via OpenExchangeRates API
                  <br />• KPI calculations for supply chain insights
                </>,
                "No-code and low-code driven pipeline"
    ]
  },
  {
     id: 2,
    Title: "BLINKIT-ANALYSIS",
    Description: "Blinkit Grocery Sales Dashboard built using Excel, Power Query, and PivotTables to analyze 8.5K+ records. It provides dynamic insights on product categories, fat content, outlet types, and location tiers. Enables strategic decision-making through KPIs, slicers, and visual trends across the retail landscape.",
    Img: ["https://i.ibb.co/RkZyWrjv/Road-Accident-Analysis.png",
          "https://i.ibb.co/0pDvgHMB/Bike-Sales-Analysis.png",
          "https://i.ibb.co/XZrgf3Sz/Snowflake-Datapipeline.png"
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: [""],
    Features: [

    ]
  },
    {
    id: 3,
    Title: "Snowflake Data Pipeline",
    Description: "This document provides an overview of the ETL (Extract, Transform, Load) process implemented using Snowflake, a cloud-based data warehousing platform. The process involves loading data from a CSV file into a Snowflake table, cleaning the data using SQL queries, creating new tables in a separate database for cleaned data, and building a data model for analytics.",
    Img: ["https://i.ibb.co/XZrgf3Sz/Snowflake-Datapipeline.png",
          "https://i.ibb.co/XZrgf3Sz/Snowflake-Datapipeline.png",
          "https://i.ibb.co/XZrgf3Sz/Snowflake-Datapipeline.png"
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/Snowflake_DataPipeline.git",
    TechStack: ["Jupyter Notebook", "SQL", "Snowflake", "Python", "CSV"],
    Features: [
                "Clone the repository: git clone https://github.com/ajmahato/Snowflake_DataPipeline.git cd Snowflake_DataPipeline",
                "Create snowflake setup Use the Initial_DB.sql file in Initial_DB folder to setup the snowflake by creating the database and the required tables",
                "Load data to the tables Load the data to the tables from the csv file.",
                "Usage Use the ETL_with_Python.py Python script to load data from a CSV file into a Snowflake table. Update the script with your Snowflake credentials and CSV file path.",
                "Create final DB Execute the Final_DB.sql file to create the final database and the required tables.",
                "Clean data and move it to new database Execute Data_Cleaning.sql file available in final_DB folder to clean the data in Snowflake. Modify the clean_data.sql file as needed for your cleaning requirements.",
                "Create data model Execute the Final_combined_table.sql file to create the data model where we join all the tables for faster queries."
              ]
  },
  {
    id: 4,
    Title: "Bike Sale Analysis Dashboard",
    Description: "The Bike Sale Analysis Dashboard offers a comprehensive view of bike sales data, encompassing insights into customer demographics, purchase behavior, and regional trends. The dashboard is organized into multiple sheets, each focusing on a distinct aspect of the data.",
    Img: ["https://i.ibb.co/0pDvgHMB/Bike-Sales-Analysis.png",
          "https://i.ibb.co/0pDvgHMB/Bike-Sales-Analysis.png",
          "https://i.ibb.co/0pDvgHMB/Bike-Sales-Analysis.png"
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/Bike-Sales-Analysis.git",
    TechStack: ["Excel", "PivotTables", "Charts", "Dashboarding"],
    Features: [
        "Customer Demographics : The Customer Demographics sheet delves into the demographics of bike purchasers, presenting insights into age, gender, marital status, income, education, occupation, and home ownership. Key findings include the predominance of male, middle-aged purchasers with bachelor's degrees or higher. Additionally, most purchasers are homeowners with a commute distance of less than 1 mile.",
        "Purchase Behavior : The Purchase Behavior sheet sheds light on the behavior of bike purchasers, covering popular bike types, average bike prices, and preferred purchase methods. Noteworthy findings include the popularity of mountain bikes, an average bike price of ₹35,000, and in-store purchases being more prevalent than online.",
        "Regional Trends : The Regional Trends sheet explores regional variations in bike sales, revealing Europe as the region with the highest sales, followed by North America and Asia. Additionally, the average bike price differs across regions, with Europe having the highest prices and Asia the lowest.",
        "Dashboard Details : Marital Status - A pie chart depicting the distribution of bike purchasers by marital status, with the majority being married. | Average Income per Purchase - A bar chart showing the average income of bike purchasers by gender, indicating that male purchasers have a higher average income.| Distance vs Purchase - A scatter plot illustrating the relationship between commute distance and bike purchase, indicating that purchasers with shorter commutes are more likely to buy a bike. | Region - A table displaying the number of bike purchasers by region, highlighting Europe as the leader. | Age vs Purchase - A line chart demonstrating the relationship between age and bike purchase, with the middle age group (31-54 years old) being the most likely to buy a bike.",
        "Additional Insights : The most popular bike type is mountain bikes, likely due to their versatility. The average bike price of ₹35,000 suggests biking is accessible to a wide range of people. In-store purchases are more popular, indicating a preference for trying out bikes before buying. Europe leads in bike sales, influenced by climate, cycling infrastructure, and a biking culture.",
        "Conclusion: The Bike Sale Analysis Dashboard serves as a valuable tool for understanding bike sales data, offering actionable insights for retailers, manufacturers, and policymakers to formulate strategies for promoting bike sales and fostering a biking culture.",
        
    ]
  },
    {
    id: 5,
    Title: "Road Accident Analysis Dashboard",
    Description: "The objective of this project is to create an Excel dashboard for analyzing road accident data to identify trends and patterns.",
    Img: ["https://i.ibb.co/RkZyWrjv/Road-Accident-Analysis.png",
          "https://i.ibb.co/RkZyWrjv/Road-Accident-Analysis.png",
          "hhttps://i.ibb.co/RkZyWrjv/Road-Accident-Analysis.png"
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/Road-Accident-Analysis-Dashboard.git",
    TechStack: ["Excel", "PivotTables", "Charts"],
    Features: [
                 <>
                  <strong>Methodology:</strong> The following steps were taken to create the dashboard:
                  <br />1. Data Cleaning and Preprocessing
                  <br />• Duplicate rows were removed
                  <br />• Errors in the data were corrected
                  <br />• Data was converted to a consistent format

                  <br />2. Data Analysis
                  <br />• Excel pivot tables and charts were utilized for data analysis.
                  <br />• Identification of trends and patterns, such as common accident types, dangerous times of day, and accident-prone locations.

                  <br />3. Dashboard Creation
                  <br />• Excel charts and tables were used to create the dashboard.
                  <br />• The dashboard includes various visualizations to present data in different ways.
                 </>,
                 <>
                  <strong>Results:</strong> The dashboard provides insights into road accident data, including:
                  <br />• The most common accident types are single-vehicle, followed by two-vehicle and three-vehicle accidents.
                  <br />• The most dangerous time of day for accidents is between 4 pm and 7 pm.
                  <br />• Accident-prone locations include urban areas and single-carriageways.
                  <br />• The primary cause of accidents is driver error.
                 </>,
                 <>
                  <strong>Conclusion:</strong> The dashboard serves as a valuable tool for analyzing road accident data, enabling the identification of trends and patterns. The information can be utilized to develop strategies for reducing accidents and enhancing road safety.
                 </>,
    ]
  },
  {
    id: 6,
    Title: "Airbnb NYC Tableau Dashboard",
    Description: "This project involves creating an interactive Tableau dashboard to analyze and visualize Airbnb data in New York City. The dataset includes various attributes such as host names, neighborhood groups, room types, pricing, and reviews. The goal of this dashboard is to provide insights into Airbnb trends across different neighborhoods in NYC.",
    Img: ["https://i.ibb.co/sn8h20H/Airbnb-Dashboard.png",
          "https://i.ibb.co/N26mBjsQ/Airbnb-Data-Source.png",
          "https://i.ibb.co/nqvfTgHT/Bar-Chart-Average-price-in-Neighbourhoods-1.png",
          "https://i.ibb.co/RTpftNv8/Bar-Chart-for-Top-10-Hosts.png ",
          "https://i.ibb.co/Vpx5sQzX/Bar-Chart-for-Total-Bookings-by-neighbourhood-group.png",
          "https://i.ibb.co/mrVBcXxV/Bar-Chart-for-Total-Bookings-in-Neighbourhood.png",
          "https://i.ibb.co/XkrBJxHW/Bar-Chart-Total-reviews-by-year.png",
          "https://i.ibb.co/KzxvWBVw/Calender-for-Average-reviews-per-month.png",
          "https://i.ibb.co/r212VwL0/Density-Map-for-Avg-Price-in-Neighbourhoods.png",
          "https://i.ibb.co/tPhnLx9X/Pie-Chart-For-Total-Neighbourhoods.png",
          "https://i.ibb.co/1YhKfhsH/Tree-Chart-for-Average-price-by-Neighbourhood.png",
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack:  ["Tableau", "Excel", "CSV"],
    Features: [
                "Total Bookings by Neighborhood Group and Room Type: A bar chart that breaks down total bookings by neighborhood and room type, allowing users to see which areas and types of accommodations are most popular.",
                "Top 10 Hosts by Total Reviews: A bar chart highlighting the top 10 hosts in NYC based on the number of reviews. This helps identify the most active and potentially most reliable hosts.",
                "Average Price by Neighborhood Group: A tree map visualizing the average price across different neighborhood groups. This feature helps in comparing pricing trends across NYC.",
                "Average Reviews per Month by Room Type and Neighborhood Group: A heat map showing the average number of reviews per month, segmented by room type and neighborhood group. This feature provides insights into the popularity of various room types in different neighborhoods.",
                "Total Reviews by Year: A bar chart that depicts the number of reviews accumulated each year, helping users to understand the growth or decline in Airbnb usage over time.",
                "Average Price in Neighborhoods: A density map illustrating the distribution of average prices across different neighborhoods in NYC.",
                "Pie Chart: Total Neighborhoods by Neighborhood Group: A pie chart illustrating the total neighbourhoods by their different neighbourhood groups in NYC.",
                "No-code and low-code driven pipeline",
                <>
                <strong>Technical Details:</strong>
                <br />• 1. Data Source:The dataset consists of 48,895 rows and 20 fields, including details such as id, Name, Host Id, Host Name, Neighbourhood Group, Neighbourhood, Latitude, Longitude, RoomType, and Price.
                <br />• 2. Dashboard Creation: Leveraged Tableau’s robust data visualization tools to create a comprehensive dashboard that is both informative and visually appealing.
                </>,
                <>
                <strong>Stakeholders:</strong>
                <br />• Airbnb Hosts: Gain insights into the pricing trends and the popularity of different neighborhoods to optimize their listings.
                <br />• Travelers: Identify the best neighborhoods and accommodation types based on popularity and pricing.
                <br />• Real Estate Analysts: Understand trends in short-term rental pricing across NYC.
                <br />• Policy Makers: Analyze the impact of Airbnb on local housing markets.
                </>,
                <>
                <strong>Achievements:</strong>
                <br />• Created a user-friendly interactive dashboard that consolidates key Airbnb metrics.
                <br />• Provided actionable insights for various stakeholders, helping them make data-driven decisions.
                <br />• Enhanced my skills in data visualization using Tableau, focusing on creating informative and visually appealing dashboards.
                </>,
                <>
                <strong>Key Insights:</strong>
                <br />• Manhattan emerged as the most expensive neighborhood, with an average price of $196.88, whereas Bronx had the lowest average price at $87.50.
                <br />• Brooklyn and Manhattan dominate the market in terms of the number of neighborhoods and listings.
                <br />• June saw the highest number of total bookings, indicating a peak season for Airbnb in NYC.
                </>,
                <>
                <strong>Conclusion:</strong>
                <br />• This project demonstrates the power of Tableau in transforming raw data into meaningful insights. The interactive dashboard created can serve as a tool for hosts, travelers, and analysts to better understand the Airbnb landscape in NYC.
                </>
    ]
},
    {
    id: 7,
    Title: "Amazon Sales Dashboard using Tableau",
    Description: "This project involves creating an interactive Tableau dashboard to analyze Amazon sales in India. The dataset used contains detailed information on sales channels, courier statuses, product categories, sizes, and geographical distribution of sales. The dashboard provides insights that are crucial for decision-making in sales strategy, marketing, and inventory management.",
    Img: ["https://i.ibb.co/hwgzqtq/Amazon-Sales-Dashboard.png",
          "https://i.ibb.co/d0XGTRCC/Amazon-Sales-Data-Source.png ",
          "https://i.ibb.co/2YNCZDHz/Area-Chart-for-Amount-by-Week-Category.png ",
          "https://i.ibb.co/QFkRPGj2/Bar-Chart-for-Quantity-Category.png",
          "https://i.ibb.co/tPTg4nff/Bar-Chart-for-Quantity-by-Size-Category.png",
          "https://i.ibb.co/YT41PjGN/Bar-Chart-for-Quantity-by-Status-Category.png",
          "https://i.ibb.co/99xD721K/Bar-Chart-for-Top-10-States-by-Quantity.png", 
          "https://i.ibb.co/PGXytL9d/Map-for-Quantity-by-State.png",
          "https://i.ibb.co/0RLbCvGj/Pie-Chart-for-Quantity-by-Courier-Status.png",
          "https://i.ibb.co/FLCKzqxx/Table-for-B2-B-Sales-Quantity.png ",
          "https://i.ibb.co/hRW7ZnTT/Table-for-Quantity-by-Sales-channel-Category.png",

    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "CSV"],
    Features: [
                 <>
                  <strong>Key Visualizations: </strong> 
                  <br />1. Stacked Bar Chart - Quantity by Week and Category
                  <br />• This chart visualizes the quantity of items sold each week, segmented by product category. It highlights sales trends over time, helping identify peak sales periods and underperforming categories.
                  
                  <br />2. Line Chart - Amount by Week and Category
                  <br />• The Line Chart tracks the revenue generated each week, segmented by category. It provides a clear view of revenue trends, allowing for easy comparison across different time periods and categories.
                  
                  <br />3. Bar Chart - Quantity by Size and Category
                  <br />• This chart breaks down sales by product size and category. It is particularly useful for understanding which product sizes are most popular within each category, aiding inventory management and marketing efforts.
                  
                  <br />4. Horizontal Bar Chart - Top 10 States by Quantity and Category
                  <br />•  This chart lists the top 10 states in India by the number of items sold, segmented by shipping service level (Expedited vs. Standard). It provides insights into regional sales performance and logistics efficiency.

                  <br />5. Map Visualization - Quantity by State
                  <br />•  The Map Visualization shows the geographical distribution of sales across different states in India. This visualization is crucial for regional marketing strategies and understanding market penetration.

                  <br />6. Pie Chart - Quantity by Courier Status and Category
                  <br />•  This Pie Chart visualizes the status of shipped items (e.g., shipped, unshipped, canceled), segmented by category. It helps in monitoring the efficiency of the supply chain and customer satisfaction. 

                  <br />7. Highlight Tables - Sales Channel and B2B Sales

                  <br />•  These highlight tables provide a detailed view of sales by channel (Amazon vs. Non-Amazon) and B2B sales, offering insights into the distribution of sales across different channels.
                 </>,
                 <>
                  <strong>Project Purpose</strong> 
                  <br />• The primary purpose of this dashboard is to provide a powerful tool for sales strategists, marketing teams, and data analysts to make data-driven decisions. By visualizing sales data in a dynamic and interactive manner, stakeholders can quickly identify trends, optimize inventory, and tailor marketing strategies to regional preferences.
                 </>,
                 <>
                  <strong>Stakeholders</strong> 
                  <br />• Sales Teams: Utilize insights for better sales forecasting and resource allocation.
                  <br />• Marketing Teams: Leverage regional data for targeted marketing efforts.
                  <br />• Logistics Managers: Monitor shipping efficiency and courier performance.
                  <br />• Business Analysts: Analyze sales trends and provide actionable insights to management.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Enhanced Decision-Making: Enabled faster and more informed decisions by providing a holistic view of sales data.
                  <br />• Improved Sales Strategy: Identified top-performing regions and categories, optimizing sales and marketing efforts.
                  <br />• Supply Chain Efficiency: Monitored courier performance and identified potential bottlenecks in the supply chain.
                 </>,
                 <>
                  <strong>How to Use</strong> 
                  <br />• Clone the repository and open the .twbx file in Tableau to interact with the dashboard.
                  <br />• Use the filters and interactive elements to explore different aspects of the data.
                  <br />• Analyze specific regions, categories, and sales channels to derive actionable insights.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br />This Tableau dashboard is a versatile tool for anyone involved in sales and marketing at Amazon. The insights derived from the dashboard can significantly influence business strategies, ensuring data-driven decisions that align with market demands.
                 </>,
    ]
  },
    {
    id: 8,
    Title: "HR Analytics Dashboard Project",
    Description: "This HR Analytics project focuses on analyzing employee attrition in an organization. The objective is to identify key factors influencing employee turnover, including age, job role, department, education, gender, and marital status. The insights gained from this analysis can help HR departments develop targeted strategies to improve employee retention.",
    Img: ["https://i.ibb.co/N2b6FB8N/HR-Analytics-Dashboard.png",
          "https://i.ibb.co/JwHcTTh6/Attrition-by-Age-group-Worksheet.png ",
          "https://i.ibb.co/Rp47hLrX/Attrition-by-Job-Worksheet.png ",
          "https://i.ibb.co/hRGTZ8W4/Dept-Wise-Attrition-Worksheet.png",
          "https://i.ibb.co/jkspHFdn/Education-by-Attrition-Worksheet.png ",
          "https://i.ibb.co/67r9CXcx/Gender-Worksheet.png ",
          "https://i.ibb.co/V0cNMRRr/HR-Analytics-Data-Worksheet.png",
          "https://i.ibb.co/20nJB1wZ/KPI-Worksheet.png ",
          "https://i.ibb.co/TDbQyNDf/Marital-Status-Worksheet.png ",
          "https://i.ibb.co/5h1fymZ5/Rating-Worksheet.png",
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Python", "Pandas", "Excel", "Power BI", "Data Analysis"],
    Features: [
                "Total Employee Analysis: Breakdown of total employees by various categories such as gender, education, and department.",
                "Attrition Analysis: Detailed analysis of employee attrition rates by job role, age group, marital status, and education level.",
                "KPI Dashboard: A high-level overview of key metrics such as total employees, attrition count, average age, and job satisfaction ratings.",
                "Interactive Visualizations: The project features various interactive charts and graphs to explore the data in-depth.",
                <>
                  <strong>Project Purpose</strong> 
                  <br />• The HR Analytics project is designed to provide actionable insights into employee attrition, allowing HR professionals to identify trends, potential issues, and areas for improvement. The stakeholders of this project include HR managers, department heads, and organizational leadership, who can leverage this data to enhance employee retention strategies.
                 </>,
                 <>
                  <strong>Achievements and Insights</strong> 
                  <br />• Attrition Analysis: Identified the age group 25-34 as having the highest attrition rate.
                  <br />• Department Analysis: R&D department showed the highest attrition, indicating a need for targeted retention strategies.
                  <br />• Education Insights: Bachelor’s degree holders have the highest attrition, suggesting potential dissatisfaction or better opportunities elsewhere.
                  <br />• Gender Distribution: The analysis revealed a 60-40 male-to-female employee ratio, which may require diversity initiatives.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br />This HR Analytics project successfully highlights the critical factors contributing to employee attrition within the organization. The interactive visualizations and detailed analysis enable stakeholders to make informed decisions aimed at reducing turnover and improving overall employee satisfaction.
                 </>,
    ]
  },
    {
    id: 9,
    Title: "Bank Loan Report - Excel Dashboard Project",
    Description: "The Bank Loan Report is an Excel-based project designed to provide a comprehensive analysis of loan performance within the financial domain. This project incorporates dynamic dashboards, pivot tables, and interactive elements, offering stakeholders critical insights into loan trends, risk management, and overall operational efficiency.",
    Img: ["https://i.ibb.co/d47msBHS/Bank-Loan-Overview.png",
          "https://i.ibb.co/s7H2KLd/Bank-Loan-Summary.png",   
          "https://i.ibb.co/M5RkJwHn/Bank-Loan-Data-Sheet.png",
          "https://i.ibb.co/wrBWJtQV/Bank-Loan-Design-Sheet.png",
          
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Excel", "Pivot Tables", "Charts", "Data Validation", "Slicers"],
    Features: [
                <>
                  <strong>Dashboard Design</strong> 
                  <strong>Summary Dashboard</strong> 
                  <br />• Total Loan Applications: Displays the count of loan applications within the specified period.
                  <br />• Total Funded Amount: Highlights the total amount funded across all loans.
                  <br />• Average Interest Rate and DTI: Provides a summary of the average interest rate and Debt-to-Income ratio.
                  <br />• Loan Application Breakdown: Includes visualizations for loan applications by month, state, employment length, purpose, and homeownership status.
                  <strong>Overview Dashboard</strong>
                  <br />• Detailed Metrics: Further breakdown of loan applications by various categories.
                  <br />• Geographical Analysis: A map visualization showing loan distribution across different states.
                  <br />• Term Analysis: Insights into loan terms and their distribution.
                 </>,
                 <>
                  <strong>Analysis and Insights</strong> 
                  <br />• Good vs. Bad Loans: The project provides a clear distinction between good and bad loans, with metrics to highlight their impact on the overall portfolio.
                  <br />• Monthly Trends: Analysis of monthly trends in loan applications, interest rates, and funded amounts.
                  <br />• Education Insights: Bachelor’s degree holders have the highest attrition, suggesting potential dissatisfaction or better opportunities elsewhere.
                  <br />• Geographical Insights: Understanding the regional distribution of loan applications helps in targeted decision-making.
                 </>,
                 <>
                  <strong>Key Achievements</strong> 
                  <br />• Interactive Dashboards: Developed interactive dashboards that update in real-time with changes in data, providing instant insights.
                  <br />• Comprehensive Data Analysis: Delivered a full-spectrum analysis of loan performance, helping to identify risks and opportunities in the loan portfolio.
                  <br />• Stakeholder Impact: This project is beneficial for financial analysts, loan officers, and senior management who need to make data-driven decisions based on loan performance metrics.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Financial Analysts: To evaluate loan performance and risk factors.
                  <br />• Loan Officers: To identify trends and anomalies in loan applications.
                  <br />• Senior Management: To make strategic decisions based on comprehensive loan data insights.
                 </>,
                 <>
                  <strong>Conclusion</strong> 
                  <br />• The Bank Loan Report project successfully demonstrates the power of Excel in managing and analyzing large datasets within the financial domain. By leveraging Excel's advanced features, this project provides valuable insights into loan performance, helping stakeholders to make informed decisions.
                 </>,
    ]
  },
    {
    id: 10,
    Title: "Credit Card Complaints Dashboard",
    Description: "The Credit Card Complaints Dashboard is a comprehensive Tableau project that visualizes data related to customer complaints. This dashboard is designed to provide key insights into the nature and distribution of complaints, helping stakeholders make data-driven decisions to improve customer service.",
    Img: ["https://i.ibb.co/x8MVNHfk/Credit-Card-Dashboard.png",
          "https://i.ibb.co/mVMyzWhJ/Area-Graph-Complaints-Sparkline.png",
          "https://i.ibb.co/5WcKXntx/Area-Graph-for-Weekly-Trend.png",
          "https://i.ibb.co/qMqQdx0j/Area-Graph-In-Progress-Sparkline.png",
          "https://i.ibb.co/MD1s3w5w/Bar-Graph-for-Top-Issues.png",
          "https://i.ibb.co/5WnZZDT5/CC-Complaints-Density-Map.png",
          "https://i.ibb.co/39CDJQks/Credit-Card-Data-Source.png",
          "https://i.ibb.co/3y2S5q6B/Table-for-Company-Response.png",
        ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "Data Visualization", "Data Cleaning"],
    Features: [
                "Dynamic Visualization: Interactive area graphs, bar charts, and maps that update based on user selections.",
                "KPI Monitoring: Displays critical metrics such as total complaints, timely responses, and in-progress complaints.",
                "Geographical Analysis: Uses density maps to visualize the distribution of complaints across different states.",
                "Trend Analysis: Allows users to view complaint trends over different time periods (weekly, monthly, yearly).",
                "Export Functionality: Enables exporting the dashboard in various formats, including PDF, PowerPoint, and images.",
                <>
                  <strong>Insights & Impact</strong> 
                  <br />• Data-Driven Decisions: The dashboard highlights complaint trends and response times, helping to pinpoint areas that require immediate attention.
                  <br />• Stakeholders: Customer service managers, data analysts, and business strategists can use this tool to enhance service quality and operational efficiency.
                  <br />• Customization: The dashboard is tailored to specific business needs, ensuring that the most relevant data is easily accessible.
                 </>,
                 <>
                  <strong>Getting Started</strong> 
                  <br />• Download the Dataset: The data used for this project is available as an Excel file. Download it from [Data Source Link].
                  <br />• Open Tableau: Import the dataset into Tableau.
                  <br />• Follow the Instructions: The Tableau workbook includes all the steps and calculations used to create the dashboard. Explore each worksheet to understand the process.
                  <br />• Customize: Feel free to modify and adapt the dashboard to fit your specific needs.
                 </>,
                 <>
                  <strong>Conclusion</strong> 
                  <br />• This Tableau project is a valuable tool for visualizing and analyzing credit card complaints data. It’s designed to be both user-friendly and powerful, providing the insights needed to improve customer service and business strategy.
                 </>,
    ]
  },
    {
    id: 11,
    Title: "Netflix Data Visualization Dashboard",
    Description: "This project provides a detailed analysis of Netflix’s content library using Tableau. It includes key visualizations that offer insights into various aspects of Netflix’s offerings, such as the distribution of movies and TV shows by year, genre, ratings, and geographical contribution.",
    Img: ["https://i.ibb.co/QFycLcFt/Netflix.png",
          "https://i.ibb.co/k2pMsZ9v/Area-Chart-for-Total-Movies-Shows.png",
          "https://i.ibb.co/mC2RmVzc/Bar-Chart-for-Ratings.png",
          "https://i.ibb.co/Mk3LhkJP/Bar-Chart-for-Top-10-Genre.png",
          "https://i.ibb.co/MkMpqRNh/Circles-For-movies-Tv-Shows-Distribution.png",
          "https://i.ibb.co/q33xc2pT/Map-For-Total-Movies-TV-Shows.png",
          "https://i.ibb.co/Y7SgqpfH/Netflix-Data-Source.png",
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "Data Visualization", "Data Analysis"],
    Features: [
                <>
                  <strong>Key Visualizations: </strong> 
                  <br />1. Total Movies & TV Shows by Year:
                  <br />• An area chart that visualizes the growth of Netflix’s content from 2008 to 2020.
                  
                  <br />2. Top 10 Genres:
                  <br />• A bar chart showing the top 10 genres on Netflix, highlighting popular categories like documentaries and stand-up comedy.
                  
                  <br />3. Ratings Distribution:
                  <br />• A bar chart displaying the distribution of Netflix content by rating. 'TV-MA' and 'TV-14' are shown as the most common ratings.
                  
                  <br />4. Movies & TV Shows Distribution:
                  <br />• A circle plot comparing the number of movies versus TV shows in Netflix’s library.

                  <br />5. Geographical Distribution:
                  <br />•  A map visualization showing the distribution of Netflix content across different countries.
                 </>,
                 <>
                  <strong>Insights & Analysis</strong> 
                  <br />• Content Growth: The dashboard reveals significant content growth starting from 2015.
                  <br />• Genre Popularity: Documentaries and stand-up comedy are among the top genres on Netflix.
                  <br />• Geographical Reach: The United States leads in content production, followed by India and the UK.
                  <br />• Audience Demographics: The ratings distribution shows Netflix’s broad audience appeal, with a focus on 'TV-MA' and 'TV-14' content.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Content Strategists: Utilize these insights to guide future content acquisition strategies.
                  <br />• Product Managers: Leverage the dashboard to improve user engagement and retention.
                  <br />• Data Analysts: Use the dashboard for further analysis and reporting.
                 </>,
                 <>
                  <strong>Achievements</strong> 
                  <br />• Interactive Visualization: Created a user-friendly dashboard that offers a comprehensive overview of Netflix's content trends.
                  <br />• Actionable Insights: Enabled data-driven decision-making for content strategy and audience targeting.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br />This project demonstrates the power of data visualization in uncovering trends and insights within large datasets. By analyzing Netflix’s content library, the dashboard provides valuable information that can be used to enhance content strategies and improve user engagement.
                 </>,
    ]
  },
    {
    id: 12,
    Title: "Healthcare Data Analysis - Heart Failure Prediction Dashboard",
    Description: "This Tableau project is centered around visualizing and analyzing heart failure data. The goal is to explore factors that influence survival rates among patients with heart failure, using various data visualization techniques. The dashboard enables healthcare professionals to make informed decisions by providing insights into the impact of different medical conditions on patient outcomes.",
    Img: ["https://i.ibb.co/YBvXqCjz/Health-Care-Dashboard.png",
          "https://i.ibb.co/pj0N1ybD/Bar-Chart-for-Age-Sex.png",
          "https://i.ibb.co/gLDHWZvd/Bar-Chart-for-Age-Time.png",
          "https://i.ibb.co/N2PwgQf4/Bar-Chart-for-Age.png",
          "https://i.ibb.co/Ng556fTH/Bar-Chart-for-Creatinine-Phosphokinase.png",
          "https://i.ibb.co/twhWRwrp/Bar-Chart-for-Ejection-Fraction.png",
          "https://i.ibb.co/XhpCjrk/Bar-Chart-for-Platelets.png",
          "https://i.ibb.co/RGfnLbXK/Bar-Chart-for-Serum-Creatinine.png",
          "https://i.ibb.co/G4Yzs3KT/Bar-Chart-for-Serum-Sodium.png",
          "https://i.ibb.co/Pk5qqNh/Bar-Chart-for-Time.png",
          "https://i.ibb.co/Wvt0jn1Q/Health-Care-Data-Source.png",
          "https://i.ibb.co/354Msj9q/Pie-Chart-for-Anemia.png",
          "https://i.ibb.co/5JjNr2H/Pie-Chart-for-Diabetes.png",
          "https://i.ibb.co/QF84CkbF/Pie-Chart-for-Sex.png",
          "https://i.ibb.co/hR624kzp/Pie-Chart-for-Smoking.png",
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "Data Analysis", "Healthcare Data"],
    Features: [
                <>
                  <strong>Key Visualizations: </strong> 
                  <br />1. Donut Charts - Survival Status by Categorical Variables
                  <br />• The dashboard includes five donut charts that illustrate the survival status (survived or died) based on key categorical variables such as anemia, high blood pressure, diabetes, sex, and smoking status. These visualizations help in understanding the impact of these factors on patient survival.
                  
                  <br />2. Histograms - Survival Status by Continuous Variables
                  <br />• Histograms visualize continuous variables like age, serum creatinine, serum sodium, ejection fraction, platelets, and creatinine phosphokinase, comparing the distribution of these variables among patients who survived versus those who did not.
                  
                  <br />3. Box and Scatter Plots - Relationship between Variables
                  <br />• Box plots and scatter plots are used to analyze the relationship between different variables such as age, sex, and survival status. These plots are crucial for understanding trends and correlations in the data.
                  
                  <br />4. KPIs - Key Performance Indicators
                  <br />• The dashboard also highlights key metrics such as the total number of individuals, total deaths, total males, total females, and the average age of patients. These KPIs provide a quick overview of the dataset's essential statistics.
                 </>,
                 <>
                  <strong>Project Purpose</strong> 
                  <br />• The primary objective of this project is to provide a data-driven approach to understanding the factors that contribute to survival in heart failure patients. This dashboard is designed to assist healthcare professionals, researchers, and policymakers in identifying critical health metrics and trends that could lead to improved patient outcomes.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Healthcare Providers: Use insights to optimize patient care and tailor treatment plans.
                  <br />• Researchers: Analyze data to identify patterns and correlations that can inform future studies.
                  <br />• Policy Makers: Leverage data to develop public health strategies aimed at preventing heart failure.
                 </>,
                 <>
                  <strong>How to Use</strong> 
                  <br />• Clone the repository and open the .twbx file in Tableau to interact with the dashboard.
                  <br />• Use the filters and interactive elements to explore different aspects of the data.
                  <br />• Analyze specific variables and their impact on survival rates to derive actionable insights.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br />This Tableau dashboard serves as a vital tool for anyone involved in healthcare data analysis, offering a clear and interactive way to explore heart failure data. The insights derived can significantly impact patient treatment plans and health outcomes.
                 </>,
    ]
  },
    {
    id: 13,
    Title: "Amazon Prime Video Data Dashboard using Tableau",
    Description: "This project involves the creation of an interactive Tableau dashboard designed to analyze and visualize data from nearly 10,000 Amazon Prime Video titles, including both movies and TV shows. The goal of this dashboard is to provide actionable insights that can aid in strategic decision-making for content acquisition, marketing, and data analysis.",
    Img: ["https://i.ibb.co/XkLyfW88/Amazonpime-Dashboard.png",
          "https://i.ibb.co/YHHV8HN/Amazonprime-Data-Source.png",
          "https://i.ibb.co/fd8jhfYp/Area-Graph-shows-by-release-year.png",
          "https://i.ibb.co/HfwKsF4P/Bar-Graph-Top-10-genre.png",
          "https://i.ibb.co/pv3y76J7/Country-Map-for-Total-Shows.png",
          "https://i.ibb.co/0j6KMFpH/Pie-Chart-Shows-by-type.png",
          "https://i.ibb.co/chwSQDrz/Top-Ratings-Chart.png",     
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack:["Tableau", "Excel", "Data Cleaning", "Data Visualization"],
    Features: [
               <>
                  <strong>Key Visualizations: </strong> 
                  <br />1.  Radial Bar Chart - Top Ratings
                  <br />• The Radial Bar Chart displays the top ratings among Amazon Prime Video content. This visualization allows users to quickly compare the most common ratings across the platform, providing an understanding of content quality and distribution.
                  
                  <br />2. Donut Chart - Shows by Type
                  <br />• This Donut Chart breaks down the content into Movies and TV Shows, offering insights into the balance of content types on Amazon Prime Video. It is essential for understanding the diversity of offerings on the platform.
                  
                  <br />3. Area Chart - Shows by Release Year and Type
                  <br />• The Area Chart tracks the release trends over the years, segmented by Movies and TV Shows. This visualization highlights the growth in content over time, revealing shifts in viewer preferences and production focus.
                  
                  <br />4. Horizontal Bar Chart - Top 10 Genres
                  <br />• The Horizontal Bar Chart showcases the top 10 genres on Amazon Prime Video. This chart is crucial for content strategists looking to identify the most popular content categories, guiding future acquisition strategies.

                  <br />5. Map Visualization - Total Shows by Country 
                  <br />•  This Map Visualization presents the geographical distribution of Amazon Prime Video titles. It provides insights into regional content availability, which is vital for targeted marketing and regional content strategy.

                  <br />6. Detailed Text Sheets - Title Information
                  <br />•  The dashboard includes text sheets that provide detailed information on selected titles. These sheets offer data on the title, cast, genre, release year, and more, enhancing the user experience by providing context and background for each piece of content.
                 </>,
                 <>
                  <strong>Project Purpose</strong> 
                  <br />• The primary purpose of this dashboard is to serve content strategists, marketing teams, and data analysts by providing a visual analysis tool that facilitates data-driven decisions. The insights derived from this dashboard can influence content acquisition strategies, marketing campaigns, and overall content development.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Content Acquisition Teams: Utilize insights to guide content licensing and production decisions.
                  <br />• Marketing Teams: Leverage regional data to target marketing efforts effectively.
                  <br />• Data Analysts and Scientists: Analyze trends and patterns in viewer behavior for better forecasting.
                  <br />• Business Intelligence Teams: Support strategic decision-making in content management.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Increased Efficiency: Streamlined the process of content analysis, reducing the time required by 50%.
                  <br />• Data-Driven Insights: Provided actionable data that can reduce decision-making time by 40%, leading to more informed and effective strategies.
                  <br />• Content Strategy Enhancement: Identified key trends and popular genres, guiding the acquisition and development of new content.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br />This Tableau dashboard is a comprehensive tool that allows users to explore Amazon Prime Video’s vast content library with ease. Whether for business strategy, content acquisition, or marketing, the insights provided by this dashboard enable stakeholders to make informed, data-driven decisions.
                 </>,
    ]
  },
  {
    id: 14,
    Title: "Trip Advisor Hotel Analysis Dashboard",
    Description: "The Trip Advisor Hotel Analysis Dashboard is a comprehensive tool designed to provide insights into hotel data from Las Vegas. This Tableau dashboard analyzes various aspects of hotel performance, guest demographics, and service offerings. It serves as an essential resource for hotel managers, travel agencies, and marketing teams, enabling them to make data-driven decisions that enhance guest satisfaction, optimize services, and improve overall hotel performance.",
    Img: ["https://i.ibb.co/npGQT0D/Trip-Advisor-Dashboard.png",
          "https://i.ibb.co/rR8st8y7/Bar-graph-for-Total-hotels-by-stars.png",
          "https://i.ibb.co/5WL6gs8r/Bar-graph-for-Total-users-by-continent.png",
          "https://i.ibb.co/MDn8pxkT/Circle-chart-for-users-by-period-of-Stay.png",
          "https://i.ibb.co/x8cWfzPt/Data-Source.png",
          "https://i.ibb.co/1J9TrV2X/Square-chart-for-Top-10-hotels-by-total-rooms.png",
          "https://i.ibb.co/1GnMDVkx/Square-chart-for-Total-hotels-by-additional-services.png",
          "https://i.ibb.co/Z1HdjQ5s/Square-chart-for-Traveler-type.png",
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "Data Analysis", "Hotel Analytics"],
    Features: [
                <>
                  <strong>Key Visualizations: </strong> 
                  <br />1.Total Hotels by Stars:
                  <br />• This bar chart displays the distribution of hotels based on their star ratings, providing a clear overview of the range of hotel options available in Las Vegas, from luxury to budget accommodations. The insights help stakeholders understand the market positioning of hotels and identify gaps in service levels, enabling them to optimize their offerings to meet market demands.
                  
                  <br />2. Total Users by Continent:
                  <br />• This bar chart shows the number of users from different continents, offering insights into the geographical distribution of guests. Understanding the origin of guests allows stakeholders to create targeted marketing campaigns and tailor services that cater to specific regions, enhancing guest satisfaction and market reach.
                  
                  <br />3. Users by Period of Stay:
                  <br />• This circle chart visualizes the distribution of users based on their period of stay, highlighting seasonal trends in hotel occupancy. Identifying peak periods for hotel stays allows management to optimize staffing levels, promotional efforts, and service offerings, ensuring efficient operations and improved guest experiences during high-demand times.
                  
                  <br />4. Top 10 Hotels by Total Rooms:
                  <br />• This square chart identifies the top 10 hotels in Las Vegas based on the total number of rooms, providing insights into the size and capacity of the largest hotels in the area. Knowing which hotels have the largest capacity can inform decisions related to event planning, group bookings, and partnerships, making it easier to cater to large-scale events and group travel needs.

                  <br />5. Total Hotels by Additional Services:
                  <br />•  This square chart categorizes hotels based on the additional services they offer, such as free Wi-Fi, exercise rooms, clubs, and basketball courts. By identifying which services are most commonly offered and valued by guests, this visualization aids in service differentiation and the enhancement of guest experiences.

                  <br />6. Traveler Type:
                  <br />•  This square chart provides insights into the types of travelers staying at the hotels, categorized as Couples, Families, Friends, Business, or Solo travelers. Knowing the predominant traveler types allows hotels to customize their offerings, such as family packages, business amenities, or solo traveler perks, ensuring that the services provided meet the specific needs of their guests.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Hotel Managers: To optimize services offered based on guest preferences and feedback.
                  <br />• Travel Agencies: To tailor travel packages to meet the demands of various traveler types and market segments.
                  <br />• Marketing Teams: To focus on regions with higher user concentration and adjust strategies according to seasonal trends and guest demographics.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Enhanced Service Offering: By identifying popular additional services, the dashboard enables hotels to enhance guest satisfaction and differentiate their offerings.
                  <br />• Targeted Marketing: The dashboard helps in identifying key regions for focused marketing efforts based on the geographic distribution of users.
                  <br />• Seasonal Occupancy Insights: The analysis of guest stay periods provides valuable data for better resource allocation during peak seasons, leading to more efficient hotel management.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br /> The TripAdvisor Hotel Analysis Dashboard is a versatile tool that provides valuable insights into hotel performance, guest demographics, and service offerings in Las Vegas. By integrating various visualizations and interactive features, the dashboard enhances the ability of hotel managers, travel agencies, and marketing teams to make informed decisions, optimize services, and improve guest experiences. The project's success in visualizing hotel data and identifying critical areas for improvement makes it an invaluable resource for the hospitality industry, contributing to better hotel management and higher guest satisfaction.
                 </>,
    ]
  },
  {
    id: 15,
    Title: "Data Science Job Salaries Analysis Project",
    Description: " This project showcases my ability to leverage Tableau for creating an interactive and insightful dashboard that provides a deep dive into the salary trends of Data Science professionals across various regions, job titles, experience levels, and employment types.The primary objective of this project is to analyze and visualize the Data Science job salaries across different dimensions to uncover trends, disparities, and benchmarks. This dashboard is designed to assist HR professionals, recruiters, and Data Science enthusiasts in making informed decisions regarding salary expectations and offerings.",
    Img: ["https://i.ibb.co/B29LKsbd/Dashboard-Data-Science-job-salaries.png",
          "https://i.ibb.co/CKhXrdQ3/Bar-graph-for-Top-10-Employee-Residence.png",
          "https://i.ibb.co/zWbSc1c8/Data-Source.png",
          "https://i.ibb.co/KxtK0xXt/Donut-chart-by-Company-Size-and-Location.png",
          "https://i.ibb.co/Z41PTZ9/Donut-Chart-of-Employement-Type.png",
          "https://i.ibb.co/svvLJLq0/Dot-chart-by-Avg-Salary-in-usd-by-Experience-level-and-Employement-type.png",
          "https://i.ibb.co/0jBz36X6/Map-graph-for-Average-salary-by-country.png",
          "https://i.ibb.co/twncs95S/Table-chart-for-Avg-salary-by-job-title-and-experience-level.png",
          ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Tableau", "Excel", "Data Analysis", "Data Visualization"],
    Features: [
                <>
                  <strong>Key Visualizations: </strong> 
                  <br />1.Donut Charts: Company Size and Location:
                  <br />• This visualization illustrates the distribution of companies by size (Small, Medium, Large) and their geographical location. The insights derived indicate that the majority of companies hiring Data Science professionals are medium-sized, followed by large companies, suggesting that medium and large enterprises are more likely to invest in Data Science talent.
                  
                  <br />2. Donut Chart: Employment Type:
                  <br />• This chart displays the distribution of employment types (Full-time, Part-time, Freelance, Contract) within the Data Science field. The visualization shows that full-time positions dominate the Data Science job market, indicating a preference for long-term roles over short-term or freelance contracts.
                  
                  <br />3. Bar Chart: Top 10 Employee Residences:
                  <br />• This bar chart identifies the top 10 countries where Data Science professionals reside. The insights reveal that the United States leads significantly in the number of Data Science professionals, followed by the United Kingdom and India, reflecting the strong presence of Data Science roles in these regions.
                  
                  <br />4. Table: Average Salary by Job Title and Experience Level:
                  <br />• This table showcases the average salary distribution across various job titles and experience levels. The analysis highlights that senior and expert-level positions, such as AI Scientists and Big Data Engineers, command the highest salaries, emphasizing the importance of experience and specialization in achieving higher compensation.

                  <br />5. Map Visualization: Average Salary by Country:
                  <br />•  This map provides a global view of how salaries vary by country. The insights indicate that countries like the United States, Switzerland, and Australia offer the highest salaries for Data Science professionals, underscoring the high demand and value of Data Science expertise in these regions.

                  <br />6. Scatter Plot: Average Salary by Experience Level and Employment Type:
                  <br />•  This scatter plot explores the relationship between experience level, employment type, and salary. The visualization reveals that senior-level professionals, especially in full-time roles, earn significantly more than their entry-level or contract counterparts, highlighting the value of experience and stable employment in achieving higher earnings.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Recruiters and HR Professionals: To benchmark salaries and understand the global Data Science job market, enabling them to attract top talent.
                  <br />• Data Science Professionals: To gain insights into salary expectations based on experience, job title, and location, helping them make informed career decisions.
                  <br />• Companies: To make informed decisions on salary offerings, ensuring they remain competitive in attracting skilled Data Science professionals.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Geographic Influence: The U.S. not only leads in the number of Data Science professionals but also offers the highest average salaries, making it a crucial market for Data Science talent.
                  <br />• Experience Matters: Senior-level roles significantly influence salary, with experts earning the most across all job titles and employment types.
                  <br />• Employment Types: Full-time roles are preferred and offer higher salaries compared to part-time, freelance, or contract roles.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br /> The Data Science Job Salaries Analysis Dashboard is a powerful tool that provides valuable insights into salary trends across various dimensions in the Data Science field. By integrating various visualizations and interactive features, the dashboard enhances the ability of recruiters, HR professionals, and Data Science professionals to make informed decisions that align with market trends and career goals. The project's success in visualizing salary data and identifying critical areas for salary benchmarking makes it an invaluable resource for the rapidly growing field of Data Science.
                 </>,
    ]
  },
  {
    id: 16,
    Title: "Sales Dashboard Project",
    Description: "The Sales Dashboard Project is designed to provide real-time insights into sales performance, customer behavior, and product profitability. Built using Excel, this dashboard enables stakeholders to make informed decisions based on comprehensive data analysis. The project is tailored to meet the needs of Sales Teams, Business Analysts, and Executives.",
    Img: ["https://i.ibb.co/bM8frzCt/Sales-Dashboard.png ",
          "https://i.ibb.co/4wSfxZ7L/Data-Sorce.png",
          "https://i.ibb.co/1f69vfvQ/Pivot-Sheet.png",
          "https://i.ibb.co/C3nYCrwg/Sunburst-sheet.png", 
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Excel", "Power Query", "Pivot Tables", "Charts", "Data Analysis"],
    Features: [
               <>
                  <strong>Key Visualizations: </strong> 
                  <br />1. Sunburst Chart:
                  <br />• This visualization is designed to showcase the distribution of sales across different product categories and over several years. The sunburst chart highlights how sales are spread among various categories, allowing stakeholders to see both the overall distribution and the trends over time. By providing a clear visual representation of these patterns, it aids in identifying which product categories have consistently performed well and which have shown significant changes over the years.
                  
                  <br />2. Stacked Column Chart:
                  <br />• This chart visualizes sales and profit percentages over the months, providing a clear view of monthly sales trends and profitability. By stacking sales and profit data in one chart, stakeholders can easily compare how each month contributes to the overall performance. This visualization is essential for identifying seasonal trends, understanding monthly fluctuations, and planning future sales and marketing strategies accordingly.
                  
                  <br />3. Tree Map:
                  <br />• The tree map highlights the distribution of sales across different customer segments, offering a visual representation of which segments are the most profitable. By showing the size and color of each segment in proportion to its contribution to total sales, this visualization helps stakeholders quickly identify which customer groups are driving the most revenue and which might need more attention or targeted marketing efforts.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Sales Teams: To monitor and analyze sales performance.
                  <br />• Business Analysts: To gain insights into sales trends.
                  <br />• Executives: To make informed business decisions.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Real-Time Updates: The dashboard automatically updates with new data.
                  <br />• Business Intelligence: Provides insights into sales trends and customer behavior.
                  <br />• Stakeholder Engagement: Tailored to meet the needs of various business roles.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br /> The Sales Dashboard project provides a powerful tool for monitoring and analyzing sales performance. By leveraging Excel’s capabilities, this project transforms raw sales data into actionable business intelligence, enabling stakeholders to make informed decisions that drive success.
                 </>,
    ]
  },
  {
    id: 17,
    Title: "Superstore Sales Analysis Project",
    Description: "The Superstore Sales Analysis Project involves a detailed examination of sales data from a fictional Superstore, carried out using Excel. The focus is on understanding key metrics such as total sales, profit, and quantity sold across different regions and product categories. This project includes the creation of an interactive dashboard that visualizes these metrics, providing insights to improve decision-making processes for managers and stakeholders.",
    Img: ["https://i.ibb.co/VYXz1Vgs/Dashboard.png ",
          "https://i.ibb.co/JR4F29wM/Data-source.png",
          "https://i.ibb.co/gbQjVcdN/Pivot-Sheet-1.png",
          "https://i.ibb.co/4gsZRb3Z/Pivot-sheet-2.png", 
    ],
    Link: "https://drive.google.com/file/d/152NZkMbfqHAP4U0se5ecLNUUCftXH4iK/view?usp=sharing",
    Github: "https://github.com/karthikb1019/supply-chain-data-automation-n8n-supabase-ai.git",
    TechStack: ["Excel", "Power Query", "Pivot Charts", "Data Analysis", "Dashboard Design"],
    Features: [
                <>
                  <strong>Key Visualizations: </strong> 
                  <br />1.Sales and Profit Analysis:
                  <br />• This visualization is designed to aggregate and analyze sales and profit data across multiple dimensions such as region, product category, and customer segment.
                  
                  <br />2. Top 10 States by Sales:
                  <br />• This chart identifies the top states contributing to sales, highlighting key regions driving revenue. Understanding the geographical distribution of sales performance allows stakeholders to focus their regional sales strategies on high-performing areas while identifying potential regions for growth.
                  
                  <br />3. Segment Contribution Analysis:
                  <br />• This visualization analyzes the contribution of different customer segments (Consumer, Corporate, Home Office) to the total sales and profit. By examining these segments, stakeholders can identify the most profitable customer groups and tailor marketing efforts to enhance engagement and sales in less active segments.
                  
                  <br />4. Month-over-Month Profit Change:
                  <br />• This analysis tracks profit trends on a monthly basis across different years. By identifying seasonal trends and key periods of profitability, stakeholders can plan sales promotions, optimize inventory management, and anticipate demand fluctuations, ultimately leading to improved profitability.
                 </>,
                 <>
                  <strong>Project Purpose</strong> 
                  <br />• The primary purpose of this project is to provide a comprehensive understanding of the Superstore’s sales performance over several years. The insights derived from this analysis assist managers and stakeholders in making informed decisions regarding sales strategies, marketing campaigns, and inventory management.
                 </>,
                 <>
                  <strong>Project Stakeholders</strong> 
                  <br />• Sales Managers: Utilize the insights to optimize sales strategies and improve customer targeting.
                  <br />• Marketing Teams: Leverage the data to refine marketing campaigns and promotions.
                  <br />• Executives: Gain a high-level overview of the Superstore’s financial performance to support strategic planning and decision-making.
                 </>,
                 <>
                  <strong>Achievements and Metrics</strong> 
                  <br />• Enhanced Decision-Making: The project provided actionable insights that can inform sales strategies, marketing campaigns, and inventory management.
                  <br />• Interactive Dashboard: Developed a user-friendly dashboard that allows stakeholders to interact with the data, making it easier to derive insights and make informed decisions.
                  <br />• Comprehensive Analysis: Utilized Excel’s advanced features to perform a thorough analysis, ensuring data accuracy and generating meaningful visualizations.
                 </>,
                 <>
                  <strong>Conclusion:</strong> 
                  <br /> The Superstore Sales Analysis Project offers a powerful tool for understanding and optimizing sales performance. By leveraging Excel’s advanced data analysis and visualization capabilities, this project transforms raw data into actionable insights, enabling stakeholders to make informed decisions that drive business success.
                 </>,
    ]
  },
  // Add more projects as needed
];

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const GITHUB_PROFILE = {
  username: "KarthikSuman",
  url: "https://github.com/karthikb1019/",
  description: "View all my projects on GitHub"
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Total Technologies</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Key Features</div>
        </div>
      </div>
    </div>
  );
};

const GitHubProfileCard = () => (
  <a 
    href={GITHUB_PROFILE.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 p-4 mb-8"
  >
    <div className="flex items-center gap-4">
      <Github className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
          {GITHUB_PROFILE.username}
        </h3>
        <p className="text-sm text-gray-400">
          {GITHUB_PROFILE.description}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors ml-auto" />
    </div>
  </a>
);

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'Maaf, source code untuk proyek ini bersifat privat.',
      confirmButtonText: 'Mengerti',
      confirmButtonColor: '#3085d6',
      background: '#030014',
      color: '#ffffff'
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find project from static data instead of localStorage
    const selectedProject = PROJECTS_DATA.find((p) => String(p.id) === id);
    
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
    >
      <ChevronRight className="text-white w-5 h-5" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
    >
      <ChevronLeft className="text-white w-5 h-5" />
    </button>
  );
};

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate">{project.Title}</span>
            </div>
          </div>

          {/* Add the GitHub Profile Card here */}
          <GitHubProfileCard />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* Action buttons */}
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Live Demo</span>
                </a>

                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                  onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Github</span>
                </a>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-gray-400 opacity-50">No technologies added.</p>
                )}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Slider
                      dots={true}
                      infinite={true}
                      speed={500}
                      slidesToShow={1}
                      slidesToScroll={1}
                      arrows={true}
                      autoplay={false}
                      nextArrow={<NextArrow />}
                      prevArrow={<PrevArrow />}
                  >
                    {Array.isArray(project.Img) ? (
                      project.Img.map((imgUrl, index) => (
                        <div key={index}>
                          <img
                            src={imgUrl}
                            alt={`${project.Title} ${index + 1}`}
                            className="w-full h-auto object-cover rounded-2xl"
                          />
                        </div>
                      ))
                    ) : (
                      <img
                        src={project.Img}
                        alt={project.Title}
                        className="w-full h-auto object-cover rounded-2xl"
                      />
                    )}
                  </Slider>
                </div>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />
              </div>

              {/* Fitur Utama */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Key Features
                </h3>
                {project.Features.length > 0 ? (
                  <ul className="list-none space-y-2">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 opacity-50">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
