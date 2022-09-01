import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    //Con el useState seteamos el estado inicial de nuestro formulario
    const [formState, setFormState] = useState( initialForm );

    //Disparamos esta función en cuanto cambia el name del formulario y conservamos el estado de los otros campos
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    

    //Reseteamos el formulario
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        setFormState,
        onResetForm,
        onInputChange,
    }
}
