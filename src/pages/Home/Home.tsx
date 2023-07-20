import AdList from '../../components/Ad/AdList/AdList.tsx';
import c from './_home.module.scss';
import Header from '../../components/Header/Header.tsx';

const Home = () => {
   return (
      <>
         <main>
            <Header />
            <div className={c.home__body}>
               <AdList />
            </div>
         </main>
      </>
   );
};

export default Home;
