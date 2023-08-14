import c from './Login.module.scss';

export const Login = () => {
   return (
      <>
         <div className={c.content}>
            <h1>Торговая площадка общежития</h1>
            <div>
               <h2>Авторизация | Регистрация</h2>
               <button
                  className={`${c.content__login_btn} ${c.second__button}`}
               >
                  Войти с помощью Google
               </button>
            </div>
         </div>
      </>
   );
};
