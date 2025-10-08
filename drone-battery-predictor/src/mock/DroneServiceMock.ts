// src/mock/DroneServiceMock.ts
import type { DroneService } from "../DroneServiceTypes";

export const mockDroneServices: DroneService[] = [
    {
        id: 1,
        name: "С видеозаписью",
        description: "Режим полета с активной видеозаписью в 4K",
        image: "http://localhost:9000/images/recording.jpg",
        power_multiplier: 1.2,
    },
    {
        id: 2,
        name: "Доставка груза",
        description: "Режим транспортировки небольших посылок или медикаментов",
        image: "http://localhost:9000/images/delivery.jpg",
        power_multiplier: 1.5,
    },
    {
        id: 3,
        name: "Тепловизионная съемка",
        description: "Режим с использованием тепловизора для поиска объектов и мониторинга",
        image: "http://localhost:9000/images/thermal.jpg",
        power_multiplier: 1.8,
    },
];
