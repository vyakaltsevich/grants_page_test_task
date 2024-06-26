import React, {useState} from 'react';
import {NewMatches} from "./components/NewMatches";
import {GrantOpportunities} from "./components/GrantOpportunities";
import {FeedbackModal} from "./components/FeedbackModal";
import {useHideGrantMutation, useSaveGrantMutation} from "./shared/gql";
import {ModalProps} from "./shared/types";
import './App.scss';

function App() {
    const [modal, setModal] = useState<ModalProps | null>(null);
    const [saveGrant] = useSaveGrantMutation();
    const [hideGrant] = useHideGrantMutation();

    const onSubmit = (feedback: string) => {
        setModal(null);
        if (modal?.positive) {
            saveGrant({
                variables: {grantId: modal.id, feedback},
            })
        } else {
            hideGrant({
                variables: {grantId: modal?.id, feedback},
            })
        }
    };

    return (
        <div className="App">
            <NewMatches setModal={setModal}/>
            <GrantOpportunities/>
            <FeedbackModal modal={modal} onSubmit={onSubmit}/>
        </div>
    );
}

export default App;
