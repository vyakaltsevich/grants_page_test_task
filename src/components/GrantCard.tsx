import React from 'react';
import payments from '../shared/icons/payments.svg';
import thumb_down from '../shared/icons/thumb_down.svg';
import thumb_up from '../shared/icons/thumb_up.svg';
import Moment from "react-moment";
import {Grant, ModalProps} from "../shared/types";
import './GrantCard.scss';

type GrantCardProps = {
    grant: Grant,
    setModal: ({id, positive}: ModalProps) => void
}
export const GrantCard = ({grant, setModal}: GrantCardProps) => {
    const {id, grantName, averageAmount, deadline, location, area, foundationName}: Grant = grant

    const onThumbUpClick = () => {
        setModal({id, positive: true})
    }
    const onThumbDownClick = () => {
        setModal({id, positive: false})
    }

    return (
        <div className='card'>

            <div className='card__header'>
                <div className='card__header-logo'>{grantName.split('')[0]}</div>
                <div className='card__header-icon' onClick={onThumbUpClick}>
                    <img src={thumb_up} alt="thumb_up"/>
                </div>
                <div className='card__header-icon' onClick={onThumbDownClick}>
                    <img src={thumb_down} alt="thumb_down"/>
                </div>
            </div>

            <label className='card__foundation'>{foundationName}</label>
            <div className='card__name'>{grantName}</div>

            <div className='card__payments'>
                <div className='card__payments-block '>
                    <div className='card__payments-icon'>
                        <img src={payments} alt="payments"/>
                    </div>
                    <div className='card__payments-amount'>${averageAmount}</div>
                    <div className='fw-500'>Avg amount</div>
                </div>
                <div className='card__payments-block '>
                    <label>Deadline</label>
                    <div className='fw-700'><Moment format="MMMM Mo" date={deadline}/></div>
                    <hr/>
                    <label>Getting started</label>
                    <div className='fw-700'>Apply online</div>
                </div>
            </div>

            <div className='card__location'>
                <label>Location</label>
                <div className='fw-500'>{location}</div>
            </div>

            <div className='card__areas-title'>Area of Funding</div>
            <div className='card__areas'>
                {area.map((area: string) => <div key={area} className='card__area'>{area}</div>)}
            </div>

        </div>
    );
}
