export default function Hero2(props:any) {
  return (
    <div>
      <div className="bg-purple-100 p-28 lg:px-72">
        <div>
          <h1 className="lg:text-3xl font-bold text-black-600 text-2xl">{props.name}</h1>
        </div>
        <div>
          <span className="text-nowrap">
          {props.add1}<span className="text-red-700">{props.add2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
