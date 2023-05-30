import React, { useState, useEffect } from "react";
import BasicExample from "../../components/Navbar";
import SearchForm from "./components/SearchForm";
import PlantsContainer from "./components/PlantsContainer";
import Container from "react-bootstrap/Container";
import { plants } from "../../_mocks/Plants";

export default function Home() {
  const [plantsData, setPlantsData] = useState(plants);
  const [search, setSearch] = useState({});

  useEffect(() => {
    setPlantsData(plants);
  }, []);

  useEffect(() => {
    const { name, type } = search;
    const filteredPlants = plants.filter((plant) => {
      if (name && type) {
        return (
          plant.name.toLowerCase().includes(name.toLowerCase()) &&
          plant.type === type
        );
      } else if (name) {
        return plant.name.toLowerCase().includes(name.toLowerCase());
      } else if (type) {
        return plant.type === type;
      } else {
        return true;
      }
    });
    setPlantsData(filteredPlants);
  }, [search]);

  return (
    <>
      <BasicExample />
      <Container className="mt-5">
        <SearchForm searchSubmit={setSearch} />
      </Container>
      <Container className="mt-5">
        <PlantsContainer plants={plantsData} />
      </Container>
    </>
  );
}
