export type MaintenanceStatus = '양호' | '주의' | '위험';
export type MaintenanceCategory = '오일' | '부품' | '소모품';

export interface MaintenanceItem {
    id: string;
    name: string;
    category: MaintenanceCategory;
    mileage: string;
    recommendedMileage: string;
    status: MaintenanceStatus;
}

export interface MaintenanceItemList {
    items: MaintenanceItem[];
}
