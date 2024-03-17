export abstract class Identifiable<ID = unknown> {
  abstract get id(): ID
}
