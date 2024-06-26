import React from 'react';
import {Table} from 'antd';
import type {TableColumnsType} from 'antd';
import Moment from "react-moment";
import {Statuses} from "./common/Statuses";
import {FoundationName} from "./common/FoundationName";
import {SavedGrant} from "../shared/types";
import {sortStrings} from "../shared/helpers";
import {useSavedGrantsQuery} from "../shared/gql";
import './GrantOpportunities.scss'

const columns: TableColumnsType<SavedGrant> = [
    {
        title: 'Foundation Name',
        dataIndex: ['grant', 'foundation'],
        sorter: (a, b) => sortStrings(a.grant.foundation, b.grant.foundation),
        render: value => <FoundationName value={value}/>
    },
    {title: 'Grant Name', dataIndex: ['grant', 'name'], sorter: (a, b) => sortStrings(a.grant.name, b.grant.name)},
    {
        title: 'Average Amount',
        dataIndex: ['grant', 'amount'],
        render: value => <div>${value}</div>,
        sorter: (a, b) => a.grant.amount - b.grant.amount
    },
    {title: 'Status', dataIndex: 'status', render: value => <Statuses status={value}/>},
    {title: 'Deadline', dataIndex: ['grant', 'deadline'], render: value => <Moment format="MMMM Mo" date={value}/>},
    {title: 'Match date', dataIndex: 'matchDate', render: value => <Moment format="D MMMM YYYY" date={value}/>},
];

export const GrantOpportunities: React.FC = () => {
    const {data, loading, error} = useSavedGrantsQuery();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }

    return (
        <div className='grant-opportunities'>
            <div className='grant-opportunities__title'>All Grant Opportunities</div>
            <Table columns={columns} dataSource={data?.savedGrants} pagination={false} bordered/>
        </div>
    )
};
