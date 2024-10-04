import HomeModal from "./home-page-modal/home-page-modal";

export class HomeEvents {
    openModal(modalCompanent: React.Dispatch<React.SetStateAction<React.ReactNode>>) {
        modalCompanent(<HomeModal stateModal = {modalCompanent}/>)
    }

    closeModal(stateModal: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        console.log("fdsgdg");
        stateModal(null);
    }

    sendRequest(responseState: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        responseState(<div><h1>Заявка отправлена</h1></div>);
    }
    handleOverlayClick(e: React.MouseEvent, stateModal: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        const modal = document.querySelector('.modal');
        if (modal && !modal.contains(e.target as Node)) {
            this.closeModal(stateModal);
        }
    }
  }