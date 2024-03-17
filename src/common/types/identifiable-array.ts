import { Identifiable } from './identifiable'

type FindWithID<ID> = { id: ID }

export class IdentifiableArray<Data extends Identifiable> {
  private mapData: Map<Data['id'], Data> = new Map()

  constructor(array: Data[] = []) {
    array.forEach((data) => {
      this.mapData.set(data.id, data)
    })
  }

  find({ id }: FindWithID<Data['id']>): Data | undefined {
    return this.mapData.get(id)
  }

  remove({ id }: FindWithID<Data['id']>) {
    this.mapData.delete(id)
  }

  set(data: Data) {
    this.mapData.set(data.id, data)
  }

  findAll(): Data[] {
    return Array.from(this.mapData.values())
  }

  first() {
    const values = Array.from(this.mapData.values())
    if (values.length <= 0) return undefined

    return values[1]
  }

  last() {
    const values = Array.from(this.mapData.values())
    if (values.length <= 0) return undefined

    return values[values.length - 1]
  }
}
