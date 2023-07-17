import { useEffect, useMemo, useState } from 'react';
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from 'mantine-react-table';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import { IconUserPlus } from '@tabler/icons-react';

type Person = {
  name: string;
  employeenum: string;
  phone: string;
  update: string;
};

const data: Person[] = [
  // ...data array content
  {
    name: 'Naveen V. Bustamante',
    employeenum: '17-12311',
    phone: '0922-193-6994',
    update: '100 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
  {
    name: 'Arvin Padron',
    employeenum: '17-12305',
    phone: '0923-868-0978',
    update: '91 days ago',
  },
];

const Example = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [newPerson, setNewPerson] = useState<Person | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'employeenum',
        header: 'Employee Number',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'phone',
        header: 'Phone Number',
      },
      {
        accessorKey: 'update',
        header: 'Last Update',
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: newPerson ? [newPerson, ...data] : data,
    
    enableStickyHeader: true,
    mantineTableContainerProps: { sx: { maxHeight: '370px'} },
    enableStickyFooter: true,
  });

  // Search Bar
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Add Button Icon
  const handleAddPerson = () => {
    const person: Person = {
      name: `New Person ${data.length + 1}`,
      employeenum: `EMP${data.length + 1}`,
      phone: '',
      update: '',
    };

    setNewPerson(person);
  };

  return (
    <div className='page'>
        <div className='body'>
            <h4 className="h4-header">
                <span className="h4-day">{currentDateTime.toLocaleDateString('en-US', { weekday: 'long' })}</span> <br />
                <span className="h4-date">{currentDateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} | {currentDateTime.toLocaleTimeString()}</span>
            </h4>
            <h1 className="h1-welcome">
                WELCOME!
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder=""
                    className="input-search"
                    />
                    <FaSearch 
                    className="icon-search"
                    size={15} />
                    <IconUserPlus
                    className="icon-user-plus"
                    onClick={handleAddPerson}
                    size={40}
                    />
                </div>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero, asperiores doloremque consectetur, ab consequuntur recusandae ipsa, molestiae praesentium cupiditate autem dolorem. Vel, cupiditate. Qui dolor alias dolorem in hic.
            </p>
            <div className='table'>
                <MantineReactTable table={table} />
            </div>
            <footer className="footer">
                Copyright 2023 All Rights Reserved Company Name
            </footer>
        </div>
    </div>
  );
};

export default Example;
