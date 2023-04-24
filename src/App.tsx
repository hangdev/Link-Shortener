import NavHeader from './components/common/NavHeader';
import MainPage from './components/MainPage/Index.tsx';
import Footer from './components/common/Footer.tsx';

const App : React.FC = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavHeader/>
        <MainPage/>
        <Footer/>
      </div>
    </>
  )
}

export default App
