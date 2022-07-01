
type  CardProps =  {
    data :{
        description : string 
        image : string ;
        title : string ;
        price  : number ;
        rating :{
            rate : number;
            count : number 
        };
        id : number ;
        category : string 
    }
}
export default function Card(  props : CardProps   ) {
    console.log ( props )
  return (
  <div className="w-72 m-2 border border-slate-300 p-2 self-stretch overflow-hidden ">
   <div className="h-64 w-[10rem] mx-auto mb-6">
    <img src={ props.data.image} alt="" className="h-full w-full object-contain"/>
   </div>
   <div className="px-1">
    <h3>{props.data.title.slice( 0 , 25 ) + "..."}</h3>
    <h4>{props.data.category}</h4>
    <div className="flex flex-nowrap items-center justify-between gap-2 ">
        <h5 className="font-bold text-slate-800">{props.data.price}</h5>
        <h3>{props.data.rating.rate}</h3>
    </div>
   </div>
  </div>
   
  )
}
