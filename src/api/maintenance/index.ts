import { http } from 'src/api/http';
import { API_URLS } from 'src/api/urls';
import type { MaintenanceItemList } from 'src/models/MaintenanceItem';

export const getMaintenanceItems = async () => {
    const response: MaintenanceItemList = await http.get(API_URLS.mswTest.maintenance.items);
    return response ?? [];
};
