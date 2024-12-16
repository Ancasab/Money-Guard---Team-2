import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { registerSchema } from '../../schemas/schemas';

import AuthForm from '../../components/AuthForm/AuthForm';
import { registerThunk } from '../../redux/Auth/operations';

const initialValues = {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
};

const RegistrationPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = ({ username, email, password }, { resetForm }) => {


        dispatch(registerThunk({ username, email, password }))
            .unwrap()
            .then(data => {
                console.log('Răspuns primit:', data); // Debug: Log răspunsul complet
                const userName = data.user?.username || 'User'; // Accesează username
                toast.success(`Registration is success ${userName}, welcome!`);
            })
            .catch(() => {
                toast.error('Invalid credentials');
            });



        resetForm();
    };

    return <AuthForm type="register" title="Registration" onSubmit={handleSubmit} validationSchema={registerSchema} initialValues={initialValues} />;
};

export default RegistrationPage;
