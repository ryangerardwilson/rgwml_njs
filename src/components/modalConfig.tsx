// src/components/modalConfig.tsx

export interface Options {
  [key: string]: string[] | undefined; // Allows any string key with string array or undefined value
}

export interface ConditionalOption {
  condition: string;
  options: string[];
}

export interface Scopes {
  create: boolean;
  read: string[];
  update: string[];
  delete: boolean;
}

export interface ValidationRules {
  [key: string]: string[];
}

export interface AIQualityChecks {
  [key: string]: string[];
}

export interface ModalConfig {
  options: Options;
  conditional_options?: {
    [key: string]: ConditionalOption[];
  };
  scopes: Scopes;
  validation_rules?: ValidationRules;
  ai_quality_checks?: AIQualityChecks;
  read_routes?: string[];
}

export interface ModalConfigMap {
  [key: string]: ModalConfig;
}

