import { CheckCircle2 } from "lucide-react";
// import marketingImg from "../assets/marketing2.jpg";
import cropImg from "../assets/cropImg.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div id="Workflow" className="mt-36">
        <h2 className="text-3xl sm:text-5xl text-black lg:text-6xl text-center mt-6 tracking wide">
        Maximize Your <span className="bg-gradient-to-r from-green-500 to-green-900 text-transparent bg-clip-text">Harvest</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-2/5 mt-12">
                <img className="rounded-lg border border-green-700 shadow-green-400" src={cropImg} alt="Market" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-black font-bold text-xl ">{item.title}</h5>
                            <p className="text-md text-black">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow