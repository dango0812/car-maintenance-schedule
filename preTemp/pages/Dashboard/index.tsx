import { useSuspenseQuery } from '@tanstack/react-query';
import { groupBy, kebabCase } from 'es-toolkit';

import { getMaintenanceItems } from 'src/api/maintenance';
import { Asset, Button, Card, FlexBox, For, Grid, Spacing, Typography } from 'src/components/base';
import type { MaintenanceItem } from 'src/models/MaintenanceItem';

export default function DashboardPage() {
    const { data: maintenanceItems } = useSuspenseQuery({
        queryKey: ['maintenance', 'items'],
        queryFn: getMaintenanceItems,
        staleTime: 1000 * 60 * 5,
        select: (data) => {
            const grouped = groupBy(data.items, (item) => item.category);

            return Object.entries(grouped).map(([category, items]) => ({
                category,
                items: items as MaintenanceItem[],
            }));
        },
    });

    return (
        <>
            <Grid colGap="20px" rowGap="20px">
                <For each={maintenanceItems}>
                    {({ category, items }, index) => (
                        <>
                            <Grid.Item key={index} span={12}>
                                <Spacing height="20px" />
                                <Typography variant="h6" fontWeight="bold">
                                    {category}
                                </Typography>
                            </Grid.Item>

                            <For each={items}>
                                {(item) => (
                                    <Grid.Item
                                        key={item.name}
                                        span={{
                                            xs: 12,
                                            sm: 6,
                                        }}
                                    >
                                        <Card variant="solid" color="white">
                                            <FlexBox direction="column" gap="g8">
                                                <FlexBox justifyContent="space-between">
                                                    <FlexBox direction="column" gap="g4">
                                                        <Typography as="span" variant="title" fontWeight="bold">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="caption">0km / 5,000km</Typography>
                                                    </FlexBox>

                                                    <Typography color="green">양호</Typography>
                                                </FlexBox>

                                                <FlexBox alignItems="flex-end" justifyContent="space-between">
                                                    <Button
                                                        variant="soft"
                                                        color="grey"
                                                        size="sm"
                                                        startDecorator={
                                                            <Asset.Icon name="edit" width={20} height={20} />
                                                        }
                                                    >
                                                        업데이트
                                                    </Button>
                                                    <Asset.Image
                                                        name={`${kebabCase(item.id)}.webp`}
                                                        width={60}
                                                        height={60}
                                                    />
                                                </FlexBox>
                                            </FlexBox>
                                        </Card>
                                    </Grid.Item>
                                )}
                            </For>
                        </>
                    )}
                </For>
            </Grid>
            <Spacing height="40px" />
        </>
    );
}
