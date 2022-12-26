export default function Button (props){
    const {color,method,placeholder} = props;
    const handleClick = () => {
      const value = method();
      console.log('value',value)
    };
    return (
      <>
        <button onClick={handleClick} style={{backgroundColor:color}}>{placeholder}</button>
      </>
    )
  }