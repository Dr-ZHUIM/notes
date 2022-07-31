class Collection<T>{
  constructor(user:T){}
  data : T[] = []
  public push(...items: T[]) {
    this.data.push(...items)
  }
}

