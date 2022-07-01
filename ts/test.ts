class Axios {
  private static query: Axios | null = null
  private constructor(){
    console.log('constructor')
  }
  static make():Axios{
    if(Axios.query == null){
      Axios.query = new Axios()
    }
    return Axios.query
  }
}

const query = Axios.make();
const query2 = Axios.make();
