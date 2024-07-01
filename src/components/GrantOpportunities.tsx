import React from 'react';
import {Table} from 'antd';
import type {TableColumnsType} from 'antd';
import Moment from "react-moment";
import {Statuses} from "./common/Statuses";
import {FoundationName} from "./common/FoundationName";
import {EdgeGrant} from "../shared/types";
import {sortStrings} from "../shared/helpers";
import {useSavedGrantsQuery} from "../shared/gql";
import './GrantOpportunities.scss'

const columns: TableColumnsType<EdgeGrant> = [
    {
        title: 'Foundation Name',
        dataIndex: ['node', 'foundationName'],
        sorter: (a, b) => sortStrings(a.node.foundationName, b.node.foundationName),
        render: value => <FoundationName value={value}/>
    },
    {
        title: 'Grant Name',
        dataIndex: ['node', 'grantName'],
        sorter: (a, b) => sortStrings(a.node.grantName, b.node.grantName)
    },
    {
        title: 'Average Amount',
        dataIndex: ['node', 'averageAmount'],
        render: value => <div>${value}</div>,
        sorter: (a, b) => a.node.averageAmount - b.node.averageAmount
    },
    {title: 'Status', dataIndex: ['node', 'status'], render: value => <Statuses status={value}/>},
    {title: 'Deadline', dataIndex: ['node', 'deadline'], render: value => <Moment format="MMMM Mo" date={value}/>},
    {
        title: 'Match date',
        dataIndex: ['node', 'matchDate'],
        render: value => <Moment format="D MMMM YYYY" date={value}/>
    },
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
            <Table columns={columns} dataSource={data?.getUserGrants.edges} pagination={false} bordered/>
        </div>
    )
};
