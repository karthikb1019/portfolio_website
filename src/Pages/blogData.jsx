export const blogArticles = [
 {
  id: "automating-supply-chain-data",
  title: "Automating Supply Chain Data Analysis Using n8n, Supabase & Quadratic AI",
  img: [
    "https://i.ibb.co/pjS3GYCL/p1.png",
    "https://i.ibb.co/G4TVkY1W/p2.png",
    "https://i.ibb.co/KxjjCmPC/p3.png",
    "https://i.ibb.co/rKcRd6GS/p4.png",
    "https://i.ibb.co/DHRBhCQY/p5.png",
    "https://i.ibb.co/KxCRDbzY/p6.png",
    "https://i.ibb.co/8LnjQ0Jt/p7.png",
    "https://i.ibb.co/3ysTypnR/p8.png",
    "https://i.ibb.co/rKcRd6GS/p4.png",
    "https://i.ibb.co/3y5fx806/p10.png",
    "https://i.ibb.co/TMG9z6T4/p11.png",
    "https://i.ibb.co/M5WSR2yt/p12.png",
    "https://i.ibb.co/XxZNsR8F/p13.png",
    "https://i.ibb.co/qYw50TPB/p14.png",
    "https://i.ibb.co/Ng2TPGsf/p15.png"
  ],
  date: "July 16, 2025",
  tags: ["Automation", "n8n", "Supabase", "Quadratic AI", "Data Engineering"],
  summary: "How I built a fully hands-free supply chain reporting system using Gmail, n8n, Supabase, and AI.",
  content: `

This project demonstrates how I automated an end-to-end supply chain analytics workflow using **n8n**, **Supabase**, and **Quadratic AI**. From ingesting emails and parsing files to storing data and generating KPIs with prompts — this is a fully hands-free reporting system.

![Zoom image will be displayed](https://i.ibb.co/pjS3GYCL/p1.png)

---

### 📩 Step 1: Trigger from Gmail Sales Email

Every morning, the sales team receives an email labeled “Daily Sales” with attached order and aggregation files. The n8n workflow is triggered by this label.

![Parsed CSV File 1](https://i.ibb.co/KxjjCmPC/p3.png)  
![Parsed CSV File 2](https://i.ibb.co/G4TVkY1W/p2.png)

---

### 📂 Step 2: Extracting Data from CSV Attachments

Once the trigger fires, n8n downloads the attachments and parses two files:

- \`file_aggregate.csv\` (57 rows)
- \`file_order_line.csv\` (109 rows)

These are loaded into the corresponding fact tables.

![Parsed CSV File 1](https://i.ibb.co/rKcRd6GS/p4.png)  
![Parsed CSV File 2](https://i.ibb.co/DHRBhCQY/p5.png)

---

### 🧱 Step 3: Database Schema Setup in Supabase

We designed a clean **Star Schema** with 2 fact tables and 3 dimension tables using Supabase’s PostgreSQL environment.

**Tables:**

- \`fact_aggregate\`, \`fact_order_line\`
- \`dim_product\`, \`dim_customer\`, \`dim_date\`
- \`fact_summary\` for unified KPI tracking

![Schema 1](https://i.ibb.co/KxCRDbzY/p6.png)  
![Schema 2](https://i.ibb.co/8LnjQ0Jt/p7.png)  
![Schema 3](https://i.ibb.co/3ysTypnR/p8.png)
---

### 📤 Step 4: Loading Data into Supabase via n8n

n8n inserts data from each parsed CSV into respective Supabase tables. Schema mapping was performed in real time, ensuring clean column-to-column mapping.

![Schema Mapping](https://i.ibb.co/rKcRd6GS/p4.png)

---

### 🔐 Step 5: Gmail OAuth Setup with Google Cloud

To use the Gmail Trigger in n8n, I created a Google OAuth Client ID, authenticated via Google Cloud Console, and authorized access using scopes.

![OAuth Setup](https://i.ibb.co/3y5fx806/p10.png)

---

### 🌍 Step 6: API Setup in Supabase

With Supabase connection string and service role API key, I authenticated from n8n to the cloud PostgreSQL. This allowed programmatic inserts into all the fact/dim tables.

![Supabase API](https://i.ibb.co/TMG9z6T4/p11.png)

---

### 🤖 Step 7: Connect to Quadratic AI for Prompt-Driven Analytics

I linked the Supabase tables into Quadratic AI — an AI-powered spreadsheet tool where Python + AI logic can be applied to generate reports, dimension tables, KPIs, and more.

![Quadratic AI](https://i.ibb.co/M5WSR2yt/p12.png)

---

### 🧠 Step 8: AI-Prompt Generated Tables

Using just plain English prompts, I created:

- \`dim_date\` (generated with date ranges using Pandas behind-the-scenes)
- \`exchange_rate_table\` (real-time FX rates from Open Exchange Rates API)

**Prompt used:**

> Create an exchange rate table for USD to INR from March 1st to March 10th.

![Exchange Rates Table](https://i.ibb.co/XxZNsR8F/p13.png)

---

### 💱 Step 9: Connecting to Open Exchange Rates API

I used my API key and GET request in prompt format to pull exchange rates automatically into Quadratic, which helps convert and normalize international pricing.

![Exchange Rates API](https://i.ibb.co/qYw50TPB/p14.png)

---

### 📊 Step 10: Merging & KPI Visualization

All fact and dimension tables were joined using prompt-based logic to create \`fact_summary\`. From here, we calculated key Supply Chain KPIs like:

- ✅ Total Order Lines  
- ✅ Line Fill Rate  
- ✅ Volume Fill Rate  
- ✅ Top 5 Customers (Global & India)  

![KPIs Dashboard](https://i.ibb.co/Ng2TPGsf/p15.png)

---

### ⚙️ Tech Stack

#### 🧠 Automation & Orchestration:
- **n8n** — Designed and executed no-code ETL workflows with Gmail triggers and CSV parsers.
- **Google Cloud OAuth** — Used for secure Gmail API integration.

#### 🗄️ Database & Backend:
- **Supabase (PostgreSQL)** — Designed star schema (fact & dimension tables), API-connected inserts.
- **Supabase API Keys** — Enabled automated connections via session pooler tokens.

#### 📊 AI-Enhanced Analytics:
- **Quadratic AI** — Prompt-based spreadsheet analytics with Python/Pandas backend.
- **Prompt Engineering** — Created \`dim_date\`, \`exchange_rate\`, and \`summary\` tables using AI prompts.

#### 🌐 External Integrations:
- **OpenExchangeRates API** — Pulled real-time FX data to normalize multi-country pricing.
- **OAuth 2.0 Authentication** — Secured integration across cloud and local apps.

#### 🧩 Supporting Tools:
- **CSV File Parsers** — Extracted daily emailed reports for fact-aggregate & order-line data.
- **Gmail Label Filters** — Triggered automation on incoming “Daily Sales” emails.

![Tech Stack]

---

### 🎥 Watch the Project Demo

Watch the complete walkthrough of my Supply Chain Data Automation using n8n, Supabase, and Quadratic AI in action:

👉 [Watch the video](https://www.loom.com/share/5d5d07df8b1448b29904cd15b839599d?sid=234542a8-8af0-4dc4-98a0-5bdb904a379f)

![Video Thumbnail]

---

### 🧾 Final Thoughts

This project turned a manual, daily Excel + email workflow into a fully automated supply chain analytics pipeline. With simple prompts and no-code integrations, we eliminated:

- Manual data pulls
- Error-prone Excel entry
- Repetitive reporting tasks

I plan to extend this pipeline by integrating **Streamlit dashboards** and **Slack alerts** next.

![Conclusion]

---

### 🧑‍💻 Want to Build Something Similar?

💬 Message me if you’d like help setting up your own AI + Data Automation workflows using **n8n**, **Supabase**, and **Quadratic**.  
**Let’s automate your data life!**
`
},

  {
  id: "automating-excel-data-cleaning",
  title: "From Messy to Model-Ready: Automating Excel Data Cleaning with AI Agents",
  img: ["https://i.ibb.co/cKJbFffH/m1.png",
        "https://i.ibb.co/4Z1mrvd4/m2.png",
        "https://i.ibb.co/HDgS3fCM/m3.png",
  ],
  date: "July 11, 2025",
  tags: ["Excel", "AI", "Data Cleaning", "Agents", "Automation"],
  summary: "How I automated Excel data cleaning using AI agents powered by language models and Python.",
  content: `

![Hero Image](https://i.ibb.co/cKJbFffH/m1.png)

---

### 🧩 My Journey: From Spreadsheet Struggles to Smarter AI Cleaning

I still remember a late‑night crunch from early in my career. I was staring at an Excel sheet full of client survey data — thousands of rows riddled with typos, inconsistent formats, stray spaces, incorrect date formats, and duplicate entries.

After hours of cleanup with formulas and filters, I realized: this wasn't analysis — it was manual labor disguised as expertise.

Fast forward to today. As a data engineer, I’ve embraced scalable pipelines and AI tooling. I wondered: Can we bring that same intelligence into the humble spreadsheet?

Enter **AI agents** — autonomous assistants built with tools like **LangChain** or **Copilot Studio**. I set out to build a mini‑agent that could:

- Ingest messy Excel files  
- Detect and fix duplicates, typos, formatting issues  
- Output a clean, model‑ready dataset  

Imagine telling an agent:  
“Clean column A date formats, unify misspelled ‘California’, drop duplicates in rows 12–37.”

And it just works.

---

### 📉 Understanding the Problem: Why Excel Data Cleaning Is a Nightmare

Excel is ubiquitous. But with it comes messy, inconsistent data — a productivity killer. Here are common issues:

- Duplicates
- Mixed date formats
- Inconsistent naming
- Stray spaces and typos

![Problem Image](https://i.ibb.co/4Z1mrvd4/m2.png)

---

### 🤖 Why AI Agents Are the Game-Changer

What if you could just say:  
“Remove extra spaces from column C, convert all state names to full form, drop duplicate IDs.”

**AI agents** make this possible by combining:

- Language understanding  
- Context awareness (e.g., “Calif.” → “California”)  
- Pattern recognition  
- Adaptive logic  

You describe the intent. The agent does the cleaning.

![Architecture Image](https://i.ibb.co/HDgS3fCM/m3.png)
---

### 🧠 How AI Agents Automate Excel Data Cleaning

Instead of fixing data reactively, define your rules up front and let the agent run.

**Key capabilities:**

- Understand cleaning intent via prompts  
- Apply Pandas-based logic  
- Repeat across new files effortlessly  

---

### 🏗️ Architecture Overview

1. **📥 Input**: Messy Excel file  
2. **⚙️ Preprocessing**: Load as Pandas DataFrame  
3. **🧠 AI Agent Inference**: Prompt-based logic such as:

\`\`\`python
df['Date'] = pd.to_datetime(df['Date'], errors='coerce')  
df = df.drop_duplicates(subset='ID')  
df['City'].fillna(df['City'].mode()[0], inplace=True)
\`\`\`

4. **🧹 Postprocessing**: Save clean output as Excel or CSV

---

### 💡 Real-World Use Case

You get Excel files from 12 branches every week.  
Date formats vary. City names differ. Duplicates exist.

A one-time agent setup can:

- Unify dates  
- Normalize names  
- Remove duplicates  
- Auto-summarize issues  

---

### 📊 Results: Before vs. After Cleaning with AI Agent

**🔍 Before Cleaning:**

- Rows: 3,278  
- Missing Values: 434 (City, Date, Email)  
- Duplicates: 112 rows  
- Inconsistent Formats: 7 variations in date formatting  
- Text Issues: Mixed casing, trailing spaces, emoji in notes  

**✅ After Cleaning with AI Agent:**

- Missing Values: Reduced from 434 → 12  
- Duplicates: Removed all 112 duplicate rows  
- Date Format: Standardized to YYYY-MM-DD  
- City Names: Unified to full form (e.g., “California”)  
- Noise Removal: Stripped emojis, corrected casing, validated email syntax  

---

### ⚠️ Limitations & Challenges

- **Over-cleaning**: Sometimes removes valid rows  
- **Ambiguity**: “GA” → Gambia or Georgia?  
- **Domain Knowledge**: Needs clear instructions  
- **Large Files**: May need chunked processing  

📌 **Tip**: Always add a preview step before saving changes.

---

### 📌 Conclusion: From Excel Chaos to AI-Driven Clarity

This isn’t just automation. It’s a **mindset shift**.

Let your spreadsheets work **for you**.

By combining Excel with AI agents, I reduced hours of work to minutes — with better consistency and fewer errors.


---

### 🗣 Call to Action

📬 Tried something similar? I’d love to hear your approach.  
🛠 Want to build your own agent? DM me — happy to help.  
👀 Follow me for more on **data, cloud, and automation**.
`
}

];