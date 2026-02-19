const { useState, useEffect, useRef } = React;

function Nav({ page, setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>
          <span className="brand-icon" aria-hidden></span>
          <span style={{marginLeft:8,fontWeight:700}}>Welcome</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className={"nav-link " + (page==='home' ? 'active' : '')} href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>Home</a></li>
            <li className="nav-item"><a className={"nav-link " + (page==='about' ? 'active' : '')} href="#" onClick={(e)=>{e.preventDefault(); setPage('about');}}>About</a></li>
            <li className="nav-item"><a className={"nav-link " + (page==='dashboard' ? 'active' : '')} href="#" onClick={(e)=>{e.preventDefault(); setPage('dashboard');}}>Dashboard</a></li>
            <li className="nav-item"><a className={"nav-link " + (page==='story' ? 'active' : '')} href="#" onClick={(e)=>{e.preventDefault(); setPage('story');}}>Story</a></li>
            <li className="nav-item"><a className={"nav-link " + (page==='contact' ? 'active' : '')} href="#" onClick={(e)=>{e.preventDefault(); setPage('contact');}}>Contact</a></li>
            <li className="nav-item ms-lg-3"><button className="btn btn-primary btn-sm" onClick={()=>setPage('dashboard')}>Get Started</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home({ go }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title">Heart Disease Analysis</div>
            <p className="lead">Interactive visualizations and insights to explore heart disease data. Explore prevalence, risk factors, and trends using the dashboard.</p>
            <div style={{marginTop:20}}>
              <button className="btn btn-cta btn-lg me-3" onClick={() => go('dashboard')}>Get Started →</button>
              <a className="btn btn-outline-primary" href="#" onClick={(e)=>{e.preventDefault(); go('about')}}>Learn more</a>
            </div>
          </div>

          <div className="col-lg-6 text-end">
            <img className="hero-illustration" src="assets/heart.svg" alt="heart illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardComponent() {
  const containerRef = useRef(null);
  const vizRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const url = 'https://public.tableau.com/views/heartdiseaseanalysis_17713361060630/Dashboard2';
    const options = { hideTabs: false, width: '100%', height: '700px' };

    if (window.tableau && !vizRef.current) {
      vizRef.current = new window.tableau.Viz(container, url, options);
    }

    return () => {
      if (vizRef.current) {
        try { vizRef.current.dispose(); } catch (e) { console.warn(e); }
        vizRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <div className="section-title">Dashboard</div>
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div ref={containerRef} id="tableauViz" style={{ width: '100%', height: '780px' }}></div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about-block container">
      <div className="row align-items-center">
        <div className="col-md-6 text-col">
          <h3>What is Heart Disease</h3>
          <p>Heart disease (cardiovascular disease) refers to a range of conditions that affect the heart. These conditions may include coronary artery disease, heart rhythm problems, and structural heart disease.</p>
          <p>Risk factors include high blood pressure, high cholesterol, diabetes, obesity, sedentary lifestyle, and smoking. This dashboard helps explore contributions from demographic and behavioral factors.</p>
        </div>
        <div className="col-md-6 image-col">
          <img src="assets/heart.svg" alt="heart" style={{maxWidth:420}} />
        </div>
      </div>
    </section>
  );
}

function Story() {
  const [active, setActive] = useState(0);
  const topics = ['Gender vs Heart Disease','Effect of Physical Activity','Diabetes Affecting Heart Disease','Impact of Smoking and Alcohol','Diversity-wise Heart Disease count'];
  return (
    <section className="container">
      <div className="section-title">Heart Disease Story</div>
      <div className="story-topics">
        {topics.map((t,i) => (
          <div key={i} className={"story-topic " + (active===i? 'active':'')} onClick={()=>setActive(i)}>{t}</div>
        ))}
      </div>

      <div className="story-embed card mt-3 p-3">
        <div style={{minHeight:520}}>
          <iframe title="tableau-story" src="https://public.tableau.com/views/heartdiseaseanalysis_17713361060630/Dashboard2?:embed=y&:showVizHome=no&:toolbar=yes" style={{width:'100%',height:'600px',border:'none'}}></iframe>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card p-3">
          <h3>Get Started</h3>
          <ol>
            <li>Open the Dashboard page.</li>
            <li>Use filters and click marks to explore the data.</li>
            <li>Download the Tableau workbook from Tableau Public if available.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <div className="container">
        {page === 'home' && <Home go={setPage} />}
        {page === 'dashboard' && <DashboardComponent />}
        {page === 'about' && <About />}
        {page === 'story' && <Story />}
        {page === 'getstarted' && <GetStarted />}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
