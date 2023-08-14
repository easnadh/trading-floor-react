import c from './Item.module.scss';

type ItemProps = {
   title: string;
   description: string;
};

export const Item = ({ title, description }: ItemProps) => {
   return (
      <>
         <div className={c.ad}>
            <div className={c.ad__respond}>
               <img
                  className={c.ad__img}
                  src='src/assets/images/pic.png'
                  alt='photo'
               />
               <button>Откликнуться</button>
            </div>
            <div className={c.ad__data}>
               <div className={c.ad__info}>
                  <div className={c.ad__title}>{title}</div>
                  <div className={c.ad__author}>Пауэр</div>
                  <div className={c.ad__description}>{description}</div>

                  <div className={c.ad__tags}>
                     <div className={c.ad__tag}>Электроника</div>
                     <div className={c.ad__tag}>Продажа</div>
                     <div className={c.ad__tag}>Обмен</div>
                  </div>
               </div>
               <button className='second__button'>Перейти к объявлению</button>
            </div>
         </div>
      </>
   );
};
