import c from './_aditem.module.scss';

type AdItemProps = {
   title: string;
   description: string;
};

const AdItem = ({ title, description }: AdItemProps) => {
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
               <button className={c.second__button}>
                  Перейти к объявлению
               </button>
            </div>
         </div>
      </>
   );
};

export default AdItem;
