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
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await listServices();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(mockDroneServices);
        }
      } catch {
        setServices(mockDroneServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const filtered = await listServices({ name: searchName.trim() });
      if (filtered.length > 0) {
        setServices(filtered);
        setNotFound(false);
      } else {
        // fallback на mock, если API ничего не нашел
        const mockFiltered = mockDroneServices.filter((s) =>
          s.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setServices(mockFiltered);
        setNotFound(mockFiltered.length === 0);
      }
    } catch {
      const mockFiltered = mockDroneServices.filter((s) =>
        s.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setServices(mockFiltered);
      setNotFound(mockFiltered.length === 0);
    } finally {
      setLoading(false);
    }
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
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="details-btn" onClick={handleSearch}>
          Найти
        </button>
      </div>

      {loading ? (
        <div className="services-loading">Загрузка...</div>
      ) : notFound ? (
        <div className="services-empty">Ничего не найдено</div>
      ) : (
        <div className="services-grid">
          {services.map((s) => (
            <DroneServiceCard key={s.id} service={s} />
          ))}
        </div>
      )}
    </div>
  );
}
