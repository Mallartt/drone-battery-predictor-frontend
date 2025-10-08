/* drone_DroneServiceDetail.tsx */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DroneBreadcrumbs from "../drone_components/DroneBreadcrumbs";
import type { DroneService } from "../DroneServiceTypes";
import { getService } from "../Droneapi";
import { mockDroneServices } from "../mock/DroneServiceMock";
import "./DroneServiceDetail.css";

export default function DroneServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState<DroneService | null>(null);

  useEffect(() => {
    if (!id) return;

    getService(Number(id))
      .then((data) => {
        if (data) setService(data);
        else {
          const mock = mockDroneServices.find((s) => s.id === Number(id)) || null;
          setService(mock);
        }
      })
      .catch(() => {
        const mock = mockDroneServices.find((s) => s.id === Number(id)) || null;
        setService(mock);
      });
  }, [id]);

  if (!service) return <p>Загрузка...</p>;

  return (
    <div>
      <DroneBreadcrumbs
        items={[
          { label: "Главная", path: "/" },
          { label: "Услуги", path: "/services" },
          { label: service.name },
        ]}
      />

      <div className="detail-card">
        <div className="detail-image">
          {service.image && <img src={service.image} alt={service.name} />}
        </div>
        <div className="service-info">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          {service.power_multiplier && (
            <p>Множитель мощности: {service.power_multiplier}</p>
          )}
        </div>
      </div>
    </div>
  );
}
