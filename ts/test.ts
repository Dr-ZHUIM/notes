class Collection<T>{
  data : T[] = []
  public push(...items: T[]) {
    this.data.push(...items)
  }
}

const numberCollection = new Collection<number>();
numberCollection.push(1, 2, 3, 4, 5)

console.log(numberCollection.data);
