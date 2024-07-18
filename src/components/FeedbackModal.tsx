import {useState} from 'react';
import {Button, Input, Modal} from 'antd';
import {ModalProps} from "../shared/types";
import {useGrantsMatchesQuery, useSavedGrantsQuery, useSaveGrantMutation} from "../shared/gql";

const {TextArea} = Input;

type FeedbackModalProps = {
    modal: ModalProps | null,
    setModal: (value: null) => void
}

export const FeedbackModal = ({modal, setModal}: FeedbackModalProps) => {
    const [value, setValue] = useState('')

    const [saveGrant] = useSaveGrantMutation();
    const {refetch: refetchGrantsMatches} = useGrantsMatchesQuery();
    const {refetch: refetchSavedGrants} = useSavedGrantsQuery();

    const onSubmit = (feedback: string) => {
        saveGrant({
            variables: {
                grantId: modal?.id,
                feedback,
                isApproved: modal?.positive
            },
        })
            .then(refetchSavedGrants)
            .then(refetchGrantsMatches)
        setModal(null);
    };

    const onChange = (event: any) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        onSubmit(value)
        setValue('')
    }

    const closeModalWindow = () => {
        setModal(null);
    }

    return (
        <>
            <Modal title="Thanks for your opinion"
                   open={!!modal}
                   onCancel={closeModalWindow}
                   footer={[
                       <Button key="submit" type="primary" onClick={handleSubmit}>
                           Submit
                       </Button>
                   ]}>
                <p>Your feedback helps us make our project better</p>
                <TextArea rows={4} value={value} onChange={onChange} placeholder="I'm happy with the product"/>
            </Modal>
        </>
    );
};
