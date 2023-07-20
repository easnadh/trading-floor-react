const AdForm = () => {
   return (
      <>
         <form className='ad-form'>
            <h2>Категория</h2>
            <p>
               Выбрать категорию <select></select>
            </p>
            <h2>Параметры</h2>
            <p>
               Название объявления <input />
            </p>
            <p>
               Вид объявления <select></select>
            </p>
            <p>
               Описание объявления <input />
            </p>
         </form>
      </>
   );
};

export default AdForm;
