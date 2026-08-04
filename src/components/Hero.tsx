export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-stage" id="heroStage">
        <div className="hero-layers">
          <span className="hero-ring hr-a" aria-hidden="true" />
          <span className="hero-ring hr-b" aria-hidden="true" />
          <span className="hero-ring hr-c" aria-hidden="true" />
          <span className="hero-ring hr-d" aria-hidden="true" />

          <h1 className="hero-name name-solid">
            <span className="l1">Andrey</span>
            <span className="l2">Reshetnikov</span>
          </h1>
          <div className="hero-name name-outline" aria-hidden="true">
            <span className="l1">Andrey</span>
            <span className="l2">Reshetnikov</span>
          </div>
        </div>
      </div>
    </header>
  )
}
