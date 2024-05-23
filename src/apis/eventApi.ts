import http from '../http-common'
class EventApi {
  getAll() {
    const lstFake: EventModel[] = [
      { id: 1, name: 'a', description: 'a' },
      { id: 2, name: 'a2', description: 'a2' }
    ]
    return { data: lstFake }
    // return http.get('/api/events/')
  }

  get(id: string) {
    return http.get(`/tutorials/${id}`)
  }

  // create(data) {
  //   return http.post("/tutorials", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return http.get(`/tutorials?title=${title}`);
  // }
}

type EventModel = {
  id: number
  name: string
  description: string
}

export default new EventApi()
