import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React,{Link} from 'react';

function App() {
  return (


<BrowserRouter>
    <div className="App">
     <Nav />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/postpage"  element={<Layout/>}>
               <Route index element={<PostPage/>}/>
               <Route path=":id"  element={<Post/>}/>
          </Route>
          <Route path="*" element={<Nopage/>}></Route>
        </Routes>
      </header>
    </div>
        </BrowserRouter>








    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //      Welcome to Wtsapp Clone
    //     </p>
    //     <a
    //       className="App-link"
    //       href="#"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       >WtsappClone
    //     </a>
    //     <Nav />
    //   </header>

        
    // </div>
  );
}

export default App;
