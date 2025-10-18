/* drone_pages/DroneServices.tsx */
import { useEffect, useState } from "react";
import DroneBreadcrumbs from "../drone_components/DroneBreadcrumbs";
import DroneServiceCard from "../drone_components/DroneServiceCard";
import type { DroneService } from "../DroneServiceTypes";
import { listServices } from "../Droneapi";
import { mockDroneServices } from "../mock/DroneServiceMock";
import "./DroneServices.css";

export default function DroneServices() {
  const [services, setServices] = useState<DroneService[]>([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    listServices()
      .then((data) => {
        if (data.length > 0) setServices(data);
        else setServices(mockDroneServices);
      })
      .catch(() => setServices(mockDroneServices));
  }, []);

  const handleSearch = async () => {
    const filtered = await listServices({ name: searchName });
    if (filtered.length > 0) setServices(filtered);
    else
      setServices(
        mockDroneServices.filter((s) =>
          s.name.toLowerCase().includes(searchName.toLowerCase())
        )
      );
  };

  return (
    <div className="services-wrapper">
      <DroneBreadcrumbs
        items={[{ label: "Главная", path: "/drone_main" }, { label: "Услуги" }]}
      />
      <h1>Режимы полета дрона</h1>

      <div className="services-search">
        <input
          type="text"
          placeholder="Введите название услуги..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="details-btn" onClick={handleSearch}>
          Найти
        </button>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <DroneServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
