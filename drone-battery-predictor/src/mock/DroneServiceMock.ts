// src/mock/DroneServiceMock.ts
import type { DroneService } from "../DroneServiceTypes";

export const mockDroneServices: DroneService[] = [
    {
        id: 1,
        name: "С видеозаписью",
        description: "Режим полета с активной видеозаписью в 4K",
        image: "https://i.pinimg.com/originals/20/5f/92/205f92d2838dbee8b8d00c6ee6241d3a.jpg",
        power_multiplier: 1.2,
    },
    {
        id: 2,
        name: "Доставка груза",
        description: "Режим транспортировки небольших посылок или медикаментов",
        image: "https://cdn.shopify.com/s/files/1/0496/8205/files/drone-delivery-blog.jpg?v=1522961122",
        power_multiplier: 1.5,
    },
    {
        id: 3,
        name: "Тепловизионная съемка",
        description: "Режим с использованием тепловизора для поиска объектов и мониторинга",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/114944/pub_650e2d23930e7f4ff48f42df_650e2fba7a6f4c6e1559dfcf/scale_1200",
        power_multiplier: 1.8,
    },
];