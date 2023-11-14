function StartingPage(){

  let heCookin = 1 + 1

  let wftAmIDon: Date = new Date()

  console.log(wftAmIDon)

  return <TitleCentered title = {'end my suffering'} fullCounter={heCookin} endOfSuffering={wftAmIDon}>
{'its not a child :('}
  </TitleCentered> 
}

type MyProps =  { children: string; title: string; fullCounter: number; endOfSuffering: Date}

function TitleCentered(props:MyProps){
 
  return <>

  <h1 className="text-center">
    <div>{props.children}</div>
    <div>{props.title}</div>
    <div>{props.fullCounter}</div>
    <div>{props.endOfSuffering.toString()}</div>
  </h1>




</>;

}

export default StartingPage;