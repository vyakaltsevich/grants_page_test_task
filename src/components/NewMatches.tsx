import React from 'react';
import {GrantCard} from "./GrantCard";
import {Grant, ModalProps} from "../shared/types";
import {useGrantsMatchesQuery} from "../shared/gql";
import './NewMatches.scss'

type NewMatchesProps = {
    setModal: ({id, positive}: ModalProps) => void
}
export const NewMatches = ({setModal}: NewMatchesProps) => {
    const {data, loading, error} = useGrantsMatchesQuery();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }

    return (
        <div className='new-matches'>
            <div className='new-matches__title'>New Matches</div>
            <div className='new-matches__list'>
                {data?.grantsMatches.map((grant: Grant) =>
                    <GrantCard key={grant._id} grant={grant} setModal={setModal}/>
                )}
            </div>
        </div>
    );
}
