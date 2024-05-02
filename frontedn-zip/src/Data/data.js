import axios from "axios";

export const kanchipuramSilk =async () => {
    try{
        const {data} =await axios.get("http://localhost:5454/api/products?category=Kanchipuram%20silk")
        return data.content;
    }catch(error){
        console.log(error)
    }
} 

export const BanarasiSilk =async () => {
    try{
        const {data} =await axios.get("http://localhost:5454/api/products?category=Banarasi%20silk")
        return data.content;
    }catch(error){
        console.log(error)
    }
} 
export const SoftSilk =async () => {
    try{
        const {data} =await axios.get("http://localhost:5454/api/products?category=Soft%20silk")
        return data.content;
    }catch(error){
        console.log(error)
    }
}


export const Saree =async () => {
    try{
        const {data} =await axios.get("http://localhost:5454/api/products?category=saree")
        return data.content;
    }catch(error){
        console.log(error)
    }
} 
export const Pochampally =async () => {
    try{
        const {data} =await axios.get("http://localhost:5454/api/products?category=Pochampally")
        return data.content;
    }catch(error){
        console.log(error)
    }
} 