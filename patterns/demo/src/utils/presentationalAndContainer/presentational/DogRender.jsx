export default function DogRender(props){
        const {dogs} = props;
        if(dogs){
                console.log('dogs',dogs)
                return dogs.dogs.map((dog,index) => <img src={dog} key={index} alt="dog" />)
        }
}