import { random } from 'es-toolkit';
import { http, HttpResponse } from 'msw';

import { API_URLS } from 'src/api/urls';
import type { MaintenanceItem } from 'src/models/MaintenanceItem';

import { formatNumber } from '~/shared/utils/formatNumber';

const MAINTENANCE_ITEMS: Array<Omit<MaintenanceItem, 'mileage' | 'recommendedMileage' | 'status'>> = [
    { id: 'engine_oil', name: '엔진 오일', category: '오일' },
    { id: 'transmission_fluid', name: '미션 오일', category: '오일' },
    { id: 'brake_fluid', name: '브레이크 오일', category: '오일' },
    { id: 'antifreeze', name: '부동액', category: '오일' },

    { id: 'brake_pad', name: '브레이크 패드', category: '부품' },
    { id: 'spark_plug', name: '점화 코일/플러그', category: '부품' },
    { id: 'tire_rotation', name: '타이어 위치교환', category: '부품' },

    { id: 'wiper', name: '와이퍼', category: '소모품' },
    { id: 'air_filter', name: '에어컨 필터', category: '소모품' },
];

const STATUS = ['양호', '주의', '위험'] as const;

export const handlers = [
    http.get(API_URLS.mswTest.maintenance.items, () => {
        return HttpResponse.json({
            items: MAINTENANCE_ITEMS.map((item) => ({
                ...item,
                mileage: `${formatNumber(random(0, 5000))}km`,
                recommendedMileage: `${formatNumber(5000)}km`,
                status: STATUS[random(0, 2)],
            })),
        });
    }),
];
