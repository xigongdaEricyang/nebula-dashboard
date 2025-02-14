import { TIME_OPTION_TYPE } from "./dashboard";
import { VALUE_TYPE } from "./promQL";

export interface IMetric {
  instance: string;
  instanceName: string;
  device?: string;
  mountpoint?: string;
}
export interface IStatRangeItem {
  metric: IMetric;
  values: [number, any];
}
export interface IStatSingleItem {
  metric: IMetric;
  value: [number, any];
}

export interface IVersionItem {
  name: string;
  version: string;
}

export interface ILineChartMetric {
  time: number;
  value: number;
  type: string;
}

export interface IServicePanelConfig {
  period: number;
  metric: string;
  metricFunction: string;
  space?: string;
  metricType: string;
  baseLine: number | undefined;
}

export interface IMetricType {
  key: string;
  value: string;
}

export interface IMetricOption {
  metric: string;
  isSpaceMetric: boolean;
  metricType: IMetricType[];
  valueType: string;
}

export interface MetricsPanelValue {
  timeRange: TIME_OPTION_TYPE | [number, number];
  instanceList: string[];
  frequency: number;
}

export interface ServiceMetricsPanelValue extends MetricsPanelValue {
  space: string;
  metricType: string;
  period: string;
}

export interface DiskMetricInfo {
  size: number;
  device: string;
  used: number;
  mountpoint: string;
  name: string;
}

export enum DashboardType {
  COMMUNTY = 'community',
  ENTERPRISE = 'enterprise',
  CLOUD = 'cloud',
  PLAYGROUND = 'playground'
}

export enum MetricScene {
  MACHINE,
  SERVICE,
  CPU,
  NETWORK,
  DISK,
  MEMORY,
  LOAD,
}

export interface IMachineMetricOption {
  metric: string;
  valueType: VALUE_TYPE;
}