import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { AnyObject } from 'antd/es/_util/type';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { carrierAsync, carrierSelector } from '../../store/slices/todoSlice';
import { Carrier } from '../../type/todo.type';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Carrier;
    record: Carrier;
    handleSave: (record: Carrier) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    const todoReducer = useSelector(carrierSelector)

    useEffect(() => {
        dispatch(carrierAsync())

    }, []);

    const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
            title: 'carrier_name',
            dataIndex: 'carrier_name',
            // width: '30%',
            // editable: true,
        },
        {
            title: 'holder',
            dataIndex: 'holder',
            // width: '30%',
            // editable: true,
        },
        {
            title: 'maxcapacity',
            dataIndex: 'maxcapacity',
        },
        {
            title: 'burden',
            dataIndex: 'burden',
        },
        {
            title: 'Width',
            dataIndex: 'Width',
        },
        {
            title: 'carrier_max_FTS',
            dataIndex: 'carrier_max_FTS',
        },
        {
            title: 'carrier_max_crane',
            dataIndex: 'carrier_max_crane',
        },
        {
            title: 'length',
            dataIndex: 'length',
        },
        {
            title: 'has_crane',
            dataIndex: 'has_crane',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record) => (
                <Button onClick={() => console.log(record.carrier_name)}>Click me</Button>
            ),
        },
    ];

    const handleAdd = () => {
        // const newData: DataType = {
        //     key: count,
        //     name: `Edward King ${count}`,
        //     name2: `Edward King ${count}`,
        //     age: '32',
        //     address: `London, Park Lane no. ${count}`,
        // };
        // setDataSource([...dataSource, newData]);
        // setCount(count + 1);
    };

    const handleSave = (row: Carrier) => {
        // const newData = [...dataSource];
        // const index = newData.findIndex((item) => row.id === item.id);
        // const item = newData[index];
        // newData.splice(index, 1, {
        //     ...item,
        //     ...row,
        // });
        // setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Carrier) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    return (
        <div>
            <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
                Add a row
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={todoReducer.result}
                columns={columns as ColumnTypes}
            />
        </div>
    );
};

export default App;
