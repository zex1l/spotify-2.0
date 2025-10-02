import { HomePage } from '@/pages/home/home';
import { Layout, Leftbar } from '@/widgets';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout leftbar={<Leftbar/>} rightbar={<div>rightbar</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
