// src/components/CRMDasboard.tsx
import React from 'react';
import { ModalConfigMap } from './modalConfig';

interface CRMDashboardProps {
  title: string;
  versionUrl: string;
  currentVersion: string;
  apiHost: string;
  modalConfig: ModalConfigMap;
  openAiJsonModeModel: string;
  openAiApiKey: string;
}

const CRMDashboard: React.FC<CRMDashboardProps> = ({
  title,
  versionUrl,
  currentVersion,
  apiHost,
  modalConfig,
  openAiJsonModeModel,
  openAiApiKey,
}) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">Version: {currentVersion}</p>
      {/* Render your dashboard using the provided props */}
    </div>
  );
};

export default CRMDashboard;

