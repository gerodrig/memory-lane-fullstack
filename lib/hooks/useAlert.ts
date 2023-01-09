import { useState } from 'react';
import Swal from 'sweetalert2';


interface AlertOptions {
    title?: string;
    text?: string;
    icon?: AlertType;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    iconColor?: string;
    error?: boolean;
}

type AlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

export const useAlert = (props: AlertOptions) => {
    const [showAlert, setShowAlert] = useState(false);

    const alertSuccess = async () => {
        
        const result = await Swal.fire({
            ...props
        });

        if (result.value) {
            setShowAlert(true);
        }

    };

    const alertError = async () => {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
            confirmButtonColor: props.confirmButtonColor || '#d33',
        });
    };

    return { alertSuccess, alertError, showAlert };

};