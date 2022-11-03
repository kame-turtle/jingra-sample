export default function Hero({title, subtitle, imageOn}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[image]</figure>}
    </div>
  )
}
