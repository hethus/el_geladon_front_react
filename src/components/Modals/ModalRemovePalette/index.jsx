import "./style.css";
import toast from "react-hot-toast";

const ModalRemovePalette = ({ closeModal, palette, getPalettes }) => {
  const handleRemovePalette = async() => {
    const response = await fetch(`http://localhost:8000/paletas/excluir-paleta/${palette._id}`, {
      method: "DELETE",
      mode: "cors",
    })

    if(response.status !== 200) {
      return toast.error("Erro ao excluir paleta");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta excluída com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir a Paleta {palette.sabor}?</h3>
        <div className="modalRemove-actions">
          <button onClick={closeModal} className="cancelButton">Não</button>
          <button className="sucessButton" onClick={handleRemovePalette}>Sim!</button>
        </div>
      </div>
    </div>
  )
}

export default ModalRemovePalette;