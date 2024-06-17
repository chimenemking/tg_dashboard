import { Button } from "@/components/ui/button"

interface Inputprops{
}

const AddProductPage: React.FC<Inputprops>=({
}) =>{
    return(
        <>
         <div className="p-4 ">
            <form action="" className= "">
               <div className="grid grid-cols-2 justify-between gap-2">
               <input className="p-6 mb-4 border outline-none  rounded-md " type="text" placeholder="title" name="title" required/>
            <select className="p-6 mb-4 border outline-none rounded-md" name="cat" id="cat">
            <option value="general">Choose a category</option>
                <option value="">Kitchen</option>
                <option value="">Phone</option>
                <option value="">Computer</option>
                <option value="">Interior</option>
            </select>
            <input className="p-6 mb-4 border outline-none rounded-md" type="number" placeholder="price" name="price"/>
            <input className="p-6 mb-4 border outline-none rounded-md" type="number" placeholder="stock" name="stock"/>
            <input className="p-6 mb-4 border outline-none rounded-md" type="text" placeholder="color" name="color"/>
            <input className="p-6 mb-4 border outline-none rounded-md" type="text" placeholder="size" name="size"/>
               </div>
            <textarea 
            className="w-full border outline-none rounded-md"
            name="desc"
            id="desc"
            rows={16}
            placeholder="Description">
            </textarea>
            <Button className="w-full text-sm  text-gray-100 hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500 ">Submit</Button>
            </form>
        </div>
        </>
    )
}

export default AddProductPage