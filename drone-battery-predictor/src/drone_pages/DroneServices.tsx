import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DroneBreadcrumbs from "../drone_components/DroneBreadcrumbs";
import DroneServiceCard from "../drone_components/DroneServiceCard";
import type { DroneService } from "../DroneServiceTypes";
import { listServices } from "../Droneapi";
import { mockDroneServices } from "../mock/DroneServiceMock";
import type { RootState } from "../store";
import { setName } from "../features/servicesFilter/filterSlice";
import "./DroneServices.css";

export default function DroneServices() {
  const dispatch = useDispatch();
  const searchName = useSelector((state: RootState) => state.servicesFilter.name);

  const [services, setServices] = useState<DroneService[]>([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchServices = async (filter?: string) => {
    setLoading(true);
    try {
      const data = await listServices(filter ? { name: filter } : undefined);
      if (data && data.length > 0) {
        setServices(data);
        setNotFound(false);
      } else {
        const mockFiltered = mockDroneServices.filter((s) =>
          s.name.toLowerCase().includes((filter || "").toLowerCase())
        );
        setServices(mockFiltered);
        setNotFound(mockFiltered.length === 0);
      }
    } catch {
      const mockFiltered = mockDroneServices.filter((s) =>
        s.name.toLowerCase().includes((filter || "").toLowerCase())
      );
      setServices(mockFiltered);
      setNotFound(mockFiltered.length === 0);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Поиск по кнопке
  const handleSearch = () => {
    fetchServices(searchName);
  };

  // 🔹 Авто-применение фильтра при возврате на страницу
  useEffect(() => {
    if (searchName) {
      fetchServices(searchName);
    } else {
      fetchServices();
    }
  }, []); // только при первом монтировании

  return (
    <div className="services-wrapper">
      <DroneBreadcrumbs
        items={[{ label: "Главная", path: "/" }, { label: "Услуги" }]}
      />

      <h1>Режимы полета дрона</h1>

      <div className="services-search">
        <input
          type="text"
          placeholder="Введите название услуги..."
          value={searchName}
          onChange={(e) => dispatch(setName(e.target.value))}
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
