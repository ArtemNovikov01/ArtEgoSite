import { TabsTypes } from "../shared/enums/tabs-types";
import RoutingPipe from "../shared/pipes/routing-pipe";
import HomeModal from "./home-page-modal/home-page-modal";

export class HomeEvents {
    openModal(modalCompanent: React.Dispatch<React.SetStateAction<React.ReactNode>>) {
        modalCompanent(<HomeModal stateModal = {modalCompanent}/>)
    }

    closeModal(stateModal: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        console.log("fdsgdg");
        stateModal(null);
    }

    handleOverlayClick(e: React.MouseEvent, stateModal: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        const modal = document.querySelector('.modal');
        if (modal && !modal.contains(e.target as Node)) {
            this.closeModal(stateModal);
        }
    }

    transitionHref(tabType: TabsTypes, stateComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>){
        if(tabType === TabsTypes.Home){
            stateComponent(null);
        }
        stateComponent(RoutingPipe(tabType))
    }
  }