/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Card from './components/Card'

function App() {

const free ={
  title:"FREE",
  price:"0",
  user:"Single User",
  userEnabler:true,
  storage:"5GB Storage",
  storageEnabler:true,
  publicProjects:"Unlimited Public Projects",
  publicProjectsEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler:true,
  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:false,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:false,
  subdomain:"Free Subdomain",
  subdomainEnabler:false,
  reports:"Monthly Status Reports",
  reportsEnabler:false
}
const plus ={
  title:"PLUS",
  price:"9",
  user:"50 Users",
  userEnabler:true,
  storage:"5GB Storage",
  storageEnabler:true,
  publicProjects:"Unlimited Public Projects",
  publicProjectsEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler:true,
  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,
  subdomain:"Free Subdomain",
  subdomainEnabler:true,
  reports:"Monthly Status Reports",
  reportsEnabler:false
}
const pro ={
  title:"PRO",
  price:"49",
  user:"Unlimited Users",
  userEnabler:true,
  storage:"150GB Storage",
  storageEnabler:true,
  publicProjects:"Unlimited Public Projects",
  publicProjectsEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler:true,
  privateProjects:"Unlimited Private Projects",
  privateProjectsEnabler:true,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,
  subdomianPrefix:"Unlimited",
  subdomain:"Free Subdomain",
  subdomainEnabler:true,
  reports:"Monthly Status Reports",
  reportsEnabler:true
}

  return (<section className="pricing py-5">
    <div className="container">
      <div className="row">
        <Card type={free}/>
        <Card type={plus}/>
        <Card type={pro}/>
      </div>
    </div>
  </section>);
}

export default App;
