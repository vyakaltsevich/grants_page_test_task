import React, {useState} from 'react';
import {NewMatches} from "./components/NewMatches";
import {GrantOpportunities} from "./components/GrantOpportunities";
import {FeedbackModal} from "./components/FeedbackModal";
import {ModalProps} from "./shared/types";
import './App.scss';

function App() {
    const [modal, setModal] = useState<ModalProps | null>(null);

    return (
        <div className="App">
            <NewMatches setModal={setModal}/>
            <GrantOpportunities/>
            <FeedbackModal modal={modal} setModal={setModal}/>
        </div>
    );
}

export default App;
