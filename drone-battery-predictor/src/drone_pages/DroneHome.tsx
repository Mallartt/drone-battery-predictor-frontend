import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import type { DroneService } from "../DroneServiceTypes";
import { listServices } from "../Droneapi";
import { mockDroneServices } from "../mock/DroneServiceMock";
import "./DroneHome.css";

export default function DroneHome() {
  const [services, setServices] = useState<DroneService[]>([]);

  useEffect(() => {
    listServices()
      .then((data) => {
        if (data.length > 0) setServices(data);
        else setServices(mockDroneServices);
      })
      .catch(() => setServices(mockDroneServices));
  }, []);

  return (
    <div className="home-page">
      <h1>Прогноз скорости разряда аккумулятора дрона</h1>
      <p>
        Цель проекта — создание системы, прогнозирующей скорость разряда
        аккумулятора дрона в зависимости от выбранных режимов полета и
        параметров.
      </p>

      {services.length > 0 ? (
        <Carousel className="drone-carousel" interval={4000} fade>
          {services.map((s) => (
            <Carousel.Item key={s.id}>
              <img
                className="d-block w-100"
                src={s.image || "http://localhost:9000/images/img.jpg"}
                alt={s.name}
              />
              <Carousel.Caption>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}
