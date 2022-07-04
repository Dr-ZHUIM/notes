{
  interface PlayEndInterface {
    end(): void
  }

  interface AnimationInterface extends PlayEndInterface {
    name: string
    move(): void
  }

  abstract class Animation {
    protected getPosition(x: number, y: number): number[] {
      return [x, y];
    }
  }

  class Tank extends Animation implements AnimationInterface {
    name: string = "enemy";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
    public end(): void {
      console.log('敌人无啦');
    }
  }

  class Player extends Animation implements AnimationInterface {
    name: string = "player";
    public move(): void {
      console.log(`${this.name}坦克移动`);
    }
    public end(): void {
      console.log('玩家无啦');
    }
  }
}
