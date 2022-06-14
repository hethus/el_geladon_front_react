import './style.css'
import { toast } from "react-hot-toast"
import editIcon from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/trash.svg'
import ModalRemovePalette from '../Modals/ModalRemovePalette'
import ModalEditPalette from '../Modals/ModalEditPalette'
import { useState } from 'react'

const Card = ({ palette, getPalettes }) => {
  const errorMessage = () => {
    toast.error("Em desenvolvimento ;-;")
  }

  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal)
  }

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal)
  }

  return (
    <>
    <div className='card-container'>
      <div className='card-header'>
        <p>{`R$${palette.preco.toFixed(2)}`}</p>
        <img src={palette.foto} alt={`Paleta sabor ${palette.sabor}`} />
      </div>
      <h3>{palette.sabor}</h3>
      <p>{palette.descricao}</p>
      <div className='card-body'>
        <img onClick={handleShowEditModal} src={editIcon} title="Editar" alt="Icone de edição" />
        <img onClick={handleShowRemoveModal} src={deleteIcon} title="Remover" alt="Icone de exclusão" />
      </div>
      <button onClick={errorMessage}>Adicionar</button>
    </div>
    {showRemoveModal && <ModalRemovePalette closeModal={handleShowRemoveModal} palette={palette} getPalettes={getPalettes}/>}

    {showEditModal && <ModalEditPalette closeModal={handleShowEditModal} palette={palette} getPalettes={getPalettes}/>}
    </>
  )
}

export default Card;