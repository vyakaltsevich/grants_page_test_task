export type Grant = {
    id: string,
    grantName: string,
    averageAmount: number,
    foundationName: string,
    deadline: string,
    location: string,
    area: string[],
    isActive: boolean,
    matchDate: string,
    status: string
};

export type EdgeGrant = {
    cursor: string,
    node: Grant
}

export type ModalProps = { id: string, positive: boolean }
