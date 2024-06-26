import React from 'react';
import './Statuses.scss'

export const Statuses = ({status}: { status: string }) => {
    const classByStatus: { [index: string]: string } = {
        accepted: '--accepted',
        rejected: '--rejected',
        applied: '',
    }
    return <div className={`status ${classByStatus[status]}`}>{status}</div>
};
