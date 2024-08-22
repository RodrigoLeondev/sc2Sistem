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
        <img src='https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/350534868_594942142730765_7192120902252500438_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oeKoyJx5BI0Q7kNvgEQVN5S&_nc_ht=scontent.fmex5-1.fna&oh=00_AYAccRnBDf8Of5RdEsHgW8oUnLhzNGJB1inLNoN80xU36g&oe=66CC5EC8' 
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