import { useEffect } from 'react'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';
import { carrierSelector, carrierAsync } from '../../store/slices/todoSlice';
import { useAppDispatch } from '../../store/store';
import { Carrier } from '../../type';

type Props = {}

export default function HomePage({ }: Props) {
    const dispatch = useAppDispatch()
    const carrierReducer = useSelector(carrierSelector)

    useEffect(() => {
        dispatch(carrierAsync())
    }, []);

    const columns: ColumnsType<Carrier> = [
        {
            title: '#',
            width: 50,
            dataIndex: 'cr_id',
            key: 'cr_id',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 180,
            dataIndex: 'carrier_name',
            key: 'age',
            fixed: 'left',
        },
        { title: 'Column 1', dataIndex: 'holder', key: '1' },
        { title: 'Column 2', dataIndex: 'maxcapacity', key: '2' },
        { title: 'Column 3', dataIndex: 'burden', key: '3' },
        { title: 'Column 4', dataIndex: 'Width', key: '4' },
        { title: 'Column 5', dataIndex: 'carrier_max_FTS', key: '5' },
        { title: 'Column 6', dataIndex: 'carrier_max_crane', key: '6' },
        { title: 'Column 7', dataIndex: 'length', key: '7' },
        { title: 'Column 8', dataIndex: 'has_crane', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>action</a>,
        },
    ];

    return (
        <Table columns={columns} dataSource={carrierReducer.result} scroll={{ x: 1300 }} rowKey={(record) => record.cr_id.toString()} />
    )
}