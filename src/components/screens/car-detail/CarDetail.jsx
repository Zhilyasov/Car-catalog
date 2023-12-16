import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CarServices } from "../../../services/car.service";
import { CarItem } from "../home/car-item/CarItem";

const CarDetail = () => {
  const {id} = useParams()
  const [car, setCar] = useState()

  useEffect(() => {
    if(!id) return

    const fetchData = async () => {
      const data = await CarServices.getById(id)

      setCar(data)
    }

    fetchData()
  }, [id])

  return <div>
    <CarItem car={car} />
    </div>
}

export default CarDetail