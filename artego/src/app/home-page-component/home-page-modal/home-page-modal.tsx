"use client";

import "./home-page-modal-styles.css"
import { HomeEvents } from "../home-page-events";
import { useState } from "react";

interface HomeModalProps {
    stateModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export default function HomeModal({ stateModal }: HomeModalProps)  {
    const homeEvents = new HomeEvents();

    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = () => {
        setShowMessage(true);
    };

    return (
        <div className="fixed-overlay" onClick={(e) => homeEvents.handleOverlayClick(e, stateModal)} >
            <div className="modal">
                <div className="modal-inner">
                {showMessage && (
                        <div className="message-response">
                            <h3 className="message-text">Заявка отправлена</h3>
                            <button 
                                className="contune-button" 
                                onClick={()=>homeEvents.closeModal(stateModal)}>Продолжить</button>
                        </div>
                    )}
                    <img onClick={()=>homeEvents.closeModal(stateModal)} className="close-modal" src="../images/Cross.png"/>
                    <h2>Заявка</h2>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Label</label>
                        <input type="text"/>
                    </div>
                    <button 
                        className="submit-button"
                        onClick={() => handleSubmit()}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}