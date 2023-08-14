import c from './Home.module.scss';
import { Header } from '../../components/layout/Header/Header.tsx';
import { List } from '../../components/Advertisement/List/List.tsx';

export const Home = () => {
   return (
      <>
         <main>
            <Header />
            <div className={c.home__body}>
               <List />
            </div>
         </main>
      </>
   );
};
