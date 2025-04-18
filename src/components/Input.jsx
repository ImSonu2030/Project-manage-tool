export default function Input({ref,label,textarea,type,...props}) {
    const inputStyle = "border border-b-stone-500 p-2 rounded-tr-md rounded-br-md focus:outline-none focus:border-stone-700 transition-colors duration-150";
    return (
        <div className="flex flex-col gap-4 my-2">
        <label className="font-medium ">{label}</label>
        {textarea?<textarea ref={ref} className={inputStyle} {...props}/>:<input ref={ref} className={inputStyle} {...props} type={type}/>}
        </div>
    );
}