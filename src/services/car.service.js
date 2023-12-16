// import axios from 'axios'

// Это для развёртывания локального сервера, а это я в проект не добавлял (json server)

// Дальше код писать не стал связанный с сервером

export const CarServices = {
  async getAll() {
    // const response = await axios.get('http://localhost:4200/cars')
    const response = await console.log('Это типо чтобы ошибок не вылетало закоментировал')

    return response.data
  },

  async getById(id) {
    // const response = await axios.get(`http://localhost:4200/cars.${id}`)
    const response = await console.log('Это типо чтобы ошибок не вылетало закоментировал', id)

    return response.data[0]
  },
}