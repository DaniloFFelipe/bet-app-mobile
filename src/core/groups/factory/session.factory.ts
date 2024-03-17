import { HttpSessionDataSource } from '../datasources/http-session-datasource'
import { SessionDataSource } from '../datasources/session-datasource'

export const SessionFactory = {
  getDataSource(): SessionDataSource {
    return HttpSessionDataSource
  },
}
