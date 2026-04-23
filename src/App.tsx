import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import Home from './components/home/home';
import FeelGood from './components/pages/feelGood';
import Horror from './components/pages/genre2';
import Genre3 from './components/pages/genre3';
import Genre4 from './components/pages/genre4';
import Story from './components/story/story';
import Playing from './components/playing/playing';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>

    <Route path="genre1" element={<FeelGood/>}/>
      <Route path="genre1/:id" element={<Story/>}/>
      <Route path="genre1/:id/:name" element={<Playing/>}/>

    <Route path="genre2" element={<Horror/>}/>
      <Route path="genre2/:id" element={<Story/>}/>
      <Route path="genre2/:id/:name" element={<Playing/>}/>

    <Route path="genre3" element={<Genre3/>}/>
      <Route path="genre3/:id" element={<Story/>}/>
      <Route path="genre3/:id/:name" element={<Playing/>}/>
      
    <Route path="genre4" element={<Genre4/>}/>
      <Route path="genre4/:id" element={<Story/>}/>
      <Route path="genre4/:id/:name" element={<Playing/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default App;
