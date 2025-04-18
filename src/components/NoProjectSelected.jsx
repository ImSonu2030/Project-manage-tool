import noProjectImg from "../assets/no-projects.png";
import Addbutton from "./Addbutton.jsx"
export default function NoProjectSelected({onAddProject}){
    return (
        <div className="w-2/3 flex flex-col items-center justify-center gap-2">
            <img src={noProjectImg} alt="Images showing task board" className="w-20"/>
            <h1 className="font-medium text-lg ">No Project Selected</h1>
            <div>
                Select a Project or add <Addbutton style={{padding:"2px 5px",margin:"0px 5px",border:"1px solid #00000055",borderRadius:"3px"}} onClickOpenForm={onAddProject}>New Project</Addbutton>
            </div>
        </div>
    );
} 