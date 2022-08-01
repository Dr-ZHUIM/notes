const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number, y: number } => {
    return { x: 100, y: 200 }
  }
}

class Tank {
  public getPosition() { }
}

class Player {
  public getPosition() { }
}

moveDecorator(Tank);
moveDecorator(Player);

const t = new Tank();
console.log('t.getPosition()', t.getPosition())
const p = new Player();
console.log('p.getPosition()', p.getPosition())