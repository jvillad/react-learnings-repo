export interface IBannerProps {
  headerText: string;
}

export interface IMachineList {
  id: number;
  name: string;
  dimension: string;
  price: number;
}

export interface IMachineRowProps {
  machine: IMachineList;
}
