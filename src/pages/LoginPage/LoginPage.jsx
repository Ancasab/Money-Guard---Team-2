// import AuthForm from 'components/AuthForm/AuthForm';
// import { useDispatch } from 'react-redux';
// import { loginSchema } from 'schemas/schemas';
// import { loginThunk } from 'redux/Auth/operations';
// import { toast } from 'react-toastify';
// import { useState } from 'react';

// const LoginPage = () => {
//     const dispatch = useDispatch();
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = (values, { resetForm }) => {
//         setIsLoading(true);
//         dispatch(loginThunk(values))
//             .unwrap()
//             .then(data => {
//                 toast.success(`Welcome ${data.user.username}!`);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 const errorMessage = error?.response?.data?.message || 'Invalid credentials';
//                 toast.error(errorMessage);
//                 setIsLoading(false);
//             });
//         resetForm();
//     };

//     const initialValues = {
//         password: '',
//         email: '',
//     };

//     return (
//         <AuthForm 
//             title="Login" 
//             initialValues={initialValues} 
//             onSubmit={handleSubmit} 
//             validationSchema={loginSchema}
//             isSubmitting={isLoading}
//         />
//     );
// };

// export default LoginPage;


import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux'
import { loginSchema } from 'schemas/schemas';
import { loginThunk } from 'redux/Auth/operations';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(loginThunk(values))
            .unwrap()
            .then(data => {
                toast.success(`Welcome ${data.user.username}!`);
            })
            .catch(() => {
                toast.error('Invalid credentials');
            });
        resetForm();
    };

    const initialValues = {
        password: '',
        email: '',
    };

    return <AuthForm title="Login" initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema} />;
};

export default LoginPage;
