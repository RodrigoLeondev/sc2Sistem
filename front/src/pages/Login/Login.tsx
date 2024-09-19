import InputPassword from '../../components/inputs/inputPassword'
import InputEmail from '../../components/inputs/inputEmail'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setEmail(value);
  
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValidEmail) {
        setError(true);
        setHelperText('Por favor ingresa una dirección de correo electrónico válida');
      } else {
        setError(false);
        setHelperText('');
      }
    };
  return (
    <>
    <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgnku7svi0DCelqQjYiFqnjlJCnxYuv6dsQ&s' 
        style={{ width: '200px', height: 'auto' }} 
        />
        <h1>Inicia Sesión</h1>
        <div>
            <InputEmail
                    label="Correo Electrónico"
                    value={email}
                    onChange={handleEmailChange}
                    error={error}
                    helperText={helperText} />
            <InputPassword />
        </div>
    </div>
    </>
  )
}