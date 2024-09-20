import {useState} from 'react';

const Teste = () => {

  const [name, setName] = useState('Marcelo');
    
  const handleChangeName = () => {
    setName(prev => prev === 'Marcelo' ? 'Jhonny' : 'Marcelo');
  }

  const changeUser = () => {
    handleChangeName();
  }

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export {Teste};