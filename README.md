#  Heart Disease Analysis Website

An interactive **Heart Disease Analysis platform** built using **HTML, CSS, and Flask**. This website provides detailed insights into heart disease trends, risk factors, and patient demographics with a **premium analytics dashboard**.

---

## Features

### Premium Analytics Dashboard
The dashboard is fully integrated into the website (no iframes) and includes:

- **Summary Cards**:
  - Total Patients
  - Heart Disease Positive %
  - Average Age
  - Average Cholesterol

- **Charts (Interactive with Chart.js)**:
  - **Bar Chart**: Gender vs Heart Disease
  - **Pie Chart**: Race-wise Heart Disease Distribution
  - **Line Chart**: Age vs Heart Disease Trend
  - **Horizontal Bar Chart**: Smoking & Alcohol Impact

- **Design Highlights**:
  - Dark Navy primary theme: `#0F172A`
  - Medical Green accent: `#10B981`
  - Soft Background: `#F1F5F9`
  - Glassmorphism cards with rounded corners (`15px`)
  - Soft shadows and smooth hover animations
  - Fully responsive with grid layout
  - Professional healthcare AI analytics look

---

##  How It Works

1. **HTML Section**:  
   The dashboard is embedded in the main page under `<section id="dashboard">`.

2. **Styling**:  
   Uses **CSS** for glassmorphism cards, grid layout, hover effects, and responsiveness.

3. **Charts**:  
   Built with **Chart.js CDN** using dummy JSON data for demonstration.  
   Charts are interactive, visually appealing, and update dynamically.

---

##  Running Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Heart-Disease-Analysis
Install Flask (if not already):

pip install flask
Run the app:

python app.py
Open your browser at http://localhost:5000 to view the website and dashboard.

📂 Project Structure
Heart-Disease-Analysis/
HDA/
├── assets/ # Images, icons, and other media
├── app.js # JavaScript for dashboard charts and interactivity
├── index.html # Main website page with integrated dashboard
├── README.md # Project documentation
├── styles.css # CSS styling for website and dashboard
└── Heart Disease Diagnostic.csv # Dataset used for analysis
<!-- Add your tableau dashboard -->

2. **Serve locally with Python** (recommended):  
   ```powershell
   cd "c:\Users\bhavy\Downloads\Heart-Disease-Diagnostic-Analysis-main\HDA"
   python -m http.server 8000

 tableau dashboard links :https://public.tableau.com/app/profile/alooru.venkata.naga.bhavya.sri/viz/heartdiseaseanalysis_17713361060630/Dashboard2
 video demo :https://drive.google.com/file/d/1E_9YD8ygylQ-Vb4GdzE4M13YFWFN0o9C/view?usp=drive_link