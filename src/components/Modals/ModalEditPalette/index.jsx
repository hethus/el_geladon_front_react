import './style.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ModalEditPalette = ({ closeModal, palette, getPalettes }) => {
  const [sabor, setSabor] = useState(palette.sabor);
  const [preco, setPreco] = useState(palette.preco);
  const [descricao, setDescricao] = useState(palette.descricao);
  const [foto, setFoto] = useState(palette.foto);

  const handleEditPalette = async () => {
    const editedPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await fetch(`http://localhost:8000/paletas/atualizar-paleta/${palette._id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedPalette),
    });

    if (response.status !== 200) {
      return toast.error('Falha ao atualizar a paleta :(');
    }

    closeModal();
    getPalettes();

    toast.success('Paleta atualizada com sucesso!');
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <div>
          <h3>Editar Paleta:</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input value={sabor} placeholder="Digite o sabor" onChange={(event) => setSabor(event.target.value)} name="sabor" />
        <input value={preco} placeholder="Digite o preço" onChange={(event) => setPreco(event.target.value)} name="preco" type="number"/>
        <input value={descricao} placeholder="Digite a descrição" onChange={(event) => setDescricao(event.target.value)} name="descricao" />
        <input value={foto} placeholder="Digite o link da foto"  onChange={(event) => setFoto(event.target.value)} name="foto" />
        <button onClick={handleEditPalette}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditPalette;