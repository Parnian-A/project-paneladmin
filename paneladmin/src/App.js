import 'antd/dist/antd.min.css'
import "./assets/css/main.css";
import { Layout } from 'antd';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "components/generic/Header";
import Footer from "components/generic/Footer";
import Dashboard from "components/generic/Dashboard";
import Sidebar from "components/generic/Sidebar";
import PersonRouter from "components/person/Router";
import PostRouter from "components/post/Router";




const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
       <Layout>
      <Header/>
      <Layout>
        <Sidebar/>
        <Content className='content' style={{minHeight : '90vh'}}>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/person/*' element={<PersonRouter/>} />
            <Route path='/post/*' element={<PostRouter/>} />
          </Routes>
        </Content>
      </Layout>
      <Footer/>
    </Layout>
    </Router>
    </div>
  );
}

export default App;
