export default function Addbutton({ children,onClickOpenForm,style,...props}) {
  return (
    <>
      <button
        onClick={onClickOpenForm()} 
        style={style}
        className="bg-stone-300 hover:bg-stone-50 font-medium text-stone-700 hover:text-stone-950 px-4 py-2 rounded-md transition-all duration-150"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
