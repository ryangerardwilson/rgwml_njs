// src/components/CRMDasboard.tsx
import React from 'react';
import DynamicTable from './DynamicTable';
import Sidebar from './Sidebar';
import { ModalConfigMap } from './modalConfig';

interface CRMDashboardProps {
  apiHost: string;
  modal: string;
  columns: string[];
  data: any[];
  modalConfigMap: ModalConfigMap;
}

const CRMDashboard: React.FC<CRMDashboardProps> = ({ apiHost, modal, columns, data, modalConfigMap }) => {

  const modalConfig = modalConfigMap[modal]
    
  return (
    <div className="flex">
      <Sidebar modalConfigMap={modalConfigMap} />
      <div className="bg-black min-h-screen flex-1 p-8 overflow-x-auto">
        <div className="container mx-auto">
          <h1 className="text-yellow-100/50 mr-2 text-right">
            {modal} table
          </h1>
          {!!apiHost && (
            <DynamicTable
              apiHost={apiHost}
              modal={modal}
              columns={columns}
              data={data}
              modalConfig={modalConfig}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;


