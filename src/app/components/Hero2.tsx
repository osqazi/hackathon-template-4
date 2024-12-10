export default function Hero2(props:any) {
  return (
    <div>
      <div className="bg-purple-100 p-28 lg:px-72">
        <div>
          <h1 className="text-3xl font-bold text-black-600">{props.name}</h1>
        </div>
        <div>
          <span>
          {props.add1}<span className="text-red-700">{props.add2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
