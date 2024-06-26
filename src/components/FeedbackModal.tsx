import React, {useState} from 'react';
import {Button, Input, Modal} from 'antd';
import {ModalProps} from "../shared/types";

const {TextArea} = Input;
type FeedbackModalProps = {
    modal: ModalProps | null,
    onSubmit: (value: string) => void
}

export const FeedbackModal = ({modal, onSubmit}: FeedbackModalProps) => {
    const [value, setValue] = useState('')

    const onChange = (event: any) => {
        setValue(event.target.value)
    }
    const handleSubmit = () => {
        onSubmit(value)
        setValue('')
    }

    return (
        <>
            <Modal title="Thanks for your opinion"
                   open={!!modal}
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
