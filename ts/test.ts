{
  interface AnimationInterface {
    name: string;
    move(): void;
  }

  abstract class Animation {
    protected getPosition(x: number, y: number): number[] {
      return [x, y];
    }
  }

  class Tank extends Animation implements AnimationInterface{
    name: string = "enemy";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }

  class Player extends Animation implements AnimationInterface {
    name: string = "player";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
  }
}
