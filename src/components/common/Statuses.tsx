import './Statuses.scss'

export const Statuses = ({status}: { status: string }) => {

    const classByStatus: { [index: string]: string } = {
        Accepted: '--accepted',
        Rejected: '--rejected',
    }
    return <div className={`status ${classByStatus[status]}`}>{status}</div>
};
