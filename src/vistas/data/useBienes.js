import { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContex";


export const useBienes=()=> {
    const {token}=useContext(AuthContext);
    const [data, setData] = useState(null);

    const apiRequest = async () => {
        
        const response = await fetch("http://127.0.0.1:8080/api/bienes", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    
        if (response.ok) {
            const a = await response.json();
            
             a.forEach(element => {
                addbbienrow(element);});
        } else if (response.status === 401) {
            alert("No autorizado. Por favor, inicia sesión.");
        } else {
            alert("Error al cargar los datos de bienes");
        }    
    }
    return apiRequest;
}

