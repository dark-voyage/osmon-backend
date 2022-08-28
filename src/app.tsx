export default function App({ req, isCold }) {
  const parsedCity = decodeURIComponent(req.headers.get("x-vercel-ip-city"));
  // from vercel we get the string `null` when it can't decode the IP
  const city = parsedCity === "null" ? null : parsedCity;
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

  return (
    <html lang="en">
      <Head />
      <body>
        <div style={{ height: "100%" }}>
          <Card />

          <main>
            <h1>
              <span>Osmon API</span>
            </h1>

            <div class="info">
              <div class="block">
                <div class="contents">
                  <span>Your city</span>
                  <strong
                    title={
                      city === null
                        ? "GeoIP information could not be derived from your IP"
                        : null
                    }
                    class={city === null ? "na" : null}
                  >
                    {city === null ? "N/A" : city}
                  </strong>
                </div>
              </div>

              <div class="block">
                <div class="contents">
                  <span>Your IP address</span>
                  <strong>{ip}</strong>
                </div>
              </div>
            </div>
          </main>
          <div class="debug">
            Generated at {new Date().toISOString()} ({isCold ? "cold" : "hot"})
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}

function Head() {
  return (
    <head>
      <title>Osmon API</title>
      <meta charset="utf-8" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/app.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Backend Serverless API made for Osmon"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uwussimo" />
      <meta name="twitter:creator" content="@uwussimo" />
      <meta name="twitter:title" content="Osmon API" />
      <meta
        name="twitter:description"
        content="Backend Serverless API made for Osmon"
      />
      <meta name="twitter:image" content="/static/og/card.png" />
      <meta name="twitter:image:alt" content="Osmon Lang Open Graph" />
    </head>
  );
}

function Card() {
  return (
    <svg className="card" viewBox="0 50 840 440">
      <defs>
        <linearGradient
          id="gradient-1"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={275}
          x2={420}
          y2={167}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-2"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={325}
          x2={420}
          y2={117.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={1}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-3"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={382}
          x2={420}
          y2={60.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.16,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-4"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={488.788}
          x2={420}
          y2={-46.967}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.089}
            style={{
              stopOpacity: 0.1,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.27,
            }}
          />
          <stop
            offset={0.896}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-5"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={610}
          x2={420}
          y2={-168.179}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.172}
            style={{
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.21,
            }}
          />
          <stop
            offset={0.771}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-vercel"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.5}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: "var(--g1)",
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "var(--g2)",
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "var(--g1)",
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-react"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.1}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: "var(--react)",
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#BBF0FF",
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: "var(--react)",
            }}
          />
        </linearGradient>
        <symbol id="react-logo" viewBox="0 0 585.59 252.64">
          <path
            fill="var(--fg)"
            d="M339.89,471.89q17.42,21.71,17.41,54.68,0,32.38-17.41,54.07-19.56,24.14-54.07,24.13-34.81,0-54.07-24.13-17.1-21.69-17.1-54.07,0-33,17.1-54.68,19.25-24.12,54.07-24.13Q320.33,447.76,339.89,471.89ZM247,477.09q-11.92,19.55-11.92,49.48,0,29.32,11.92,48.57,13.74,22,38.79,22,24.75,0,38.49-22,12.21-19.25,12.22-48.57,0-29.93-12.22-49.48-13.74-21.69-38.49-21.69Q260.77,455.4,247,477.09Z"
            transform="translate(-214.65 -352.75)"
          />
          <path
            fill="var(--fg)"
            d="M429.39,582.78a69.07,69.07,0,0,0,42.16,14.05q15.87,0,26-8.86,10.38-8.85,10.39-23.82,0-11-9.78-18t-34.21-14.35q-35.13-11-48.26-22.61Q404,499.08,404,482.89q0-15,12.83-24.74,13.74-9.78,35.74-9.78a82.39,82.39,0,0,1,14.05,1.22q4,.93,10.39,2.75,4.88,1.23,7,1.53a8.7,8.7,0,0,0,5.19-.3l11.61-5.5L518.59,493l-5.19,2.45q-7.33-13.14-21.69-24.44-19.24-14.67-39.1-14.66-15,0-23.83,6.72-8.86,7-8.86,19.85,0,10.39,11.31,17.41,8.53,5.51,32.68,13.14,32.68,10.08,45.82,20.77,13.75,11.31,13.75,29.94,0,19.54-16.5,31.15-14.36,10.08-35.43,10.08a62.31,62.31,0,0,1-13.75-1.52,72.36,72.36,0,0,1-11-2.75c-4.27-1-7.33-1.73-9.16-2.14a15.68,15.68,0,0,0-7.64.61l-12.83,5.19-18.32-48,4-1.83Q416.56,573.63,429.39,582.78Z"
            transform="translate(-214.65 -352.75)"
          />
          <path
            fill="var(--fg)"
            d="M553.11,591.94q11.61,0,17.1-4.27,5.19-4.27,5.2-13.44V482.59q0-10.38-5.2-13.75-4.28-3-15.88-3.06l-1.22-5.49L594,447.76v28.11q13.44-12.53,23.22-18.64,16.18-9.47,33-9.47a37,37,0,0,1,21.38,6.72,35.53,35.53,0,0,1,14,20.77,112.78,112.78,0,0,1,25.05-18.93q15.59-8.55,31.16-8.56,15.89,0,26.27,11a33.1,33.1,0,0,1,9.77,23.83v91.64q0,8.87,5.5,13.44,5.8,4.27,16.8,4.27v7.64h-61.7v-7.64q10.68,0,15.58-4.27,5.19-4.27,5.19-13.44V487.47a24.5,24.5,0,0,0-7.33-18q-7.63-7.93-20.77-7.94-11.91,0-24.13,6.72-9.78,5.19-21.39,16.19v89.81q0,8.87,5.2,13.44,5.19,4.27,15.88,4.27v7.64H646.28v-7.64q11,0,15.88-4.27t4.89-13.44V486.86a24.18,24.18,0,0,0-7.33-17.72,26.34,26.34,0,0,0-18.94-7.33,50.39,50.39,0,0,0-25.66,6.72Q606,473.74,594,486.25v88q0,9.16,4.89,13.44,5.19,4.27,16.8,4.27v7.64H553.11Z"
            transform="translate(-214.65 -352.75)"
          />
          <path
            fill="var(--fg)"
            d="M309.78,431.82Q333,391.67,369.7,371.59q34.6-18.84,80.31-18.84,46.33,0,80.92,18.84,36.77,19.77,59.3,60.23H585a163.34,163.34,0,0,0-57.14-43.55q-35.5-16.68-77.83-16.68-42,0-77.83,16.68Q337.89,404,315.34,431.82Z"
            transform="translate(-214.65 -352.75)"
          />
        </symbol>
        <linearGradient id="#mask-gradient">
          <stop offset="0" stop-color="black" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <mask id="mask">
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="url(#mask-gradient)"
          />
        </mask>
      </defs>
      <g className="orbits" transform="translate(420, 220)">
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-1)",
              animationDelay: 0,
            }}
            r={53.4}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-2)",
              animationDelay: "0.03s",
            }}
            r={103.4}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: "0.9s",
            }}
            cx={-69.6}
            cy={-76}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-3)",
              animationDelay: "0.06s",
            }}
            r={160.4}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.8s",
            }}
            cx={102.4}
            cy={-123}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-4)",
              animationDelay: "0.09s",
            }}
            r={267.3}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.6s",
            }}
            cx={-243.6}
            cy={111.4}
            r={5.8}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: "1s",
            }}
            cx={250}
            cy={94.4}
            r={5.8}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: "0.7s",
            }}
            cx={-236.6}
            cy={-123.6}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: "url(#gradient-5)",
              animationDelay: "0.12s",
            }}
            r={388.5}
          />
        </g>
      </g>
      <path
        id="vercel-logo"
        d="m336.4 261-46.2-80-46.2 80h92.4z"
        style={{
          fill: "url(#gradient-vercel)",
        }}
      />
      <g id="center">
        <path
          d="M420 202 v36 M 402 220h36"
          style={{
            strokeWidth: 3.5625,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#999",
            fill: "none",
          }}
        />
      </g>
      <use href="#react-logo" width={120} x={500} />
      <use href="#react-logo" width={120} x={500} mask="url(#mask)" />
    </svg>
  );
}

function Footer() {
  return (
    <footer>
      <p class="company">
        <a target="_blank" href="https://vercel.com" aria-label="Vercel">
          <svg
            viewBox="0 0 4438 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
              fill="var(--fg)"
            />
          </svg>
        </a>
      </p>

      <p class="details">
        By{" "}
        <a target="_blank" href="https://osmon.dev">
          Osmon's Authors
        </a>
      </p>

      <a
        target="_blank"
        href="https://github.com/osmon-lang/osmon-backend"
        class="source"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
            fill="var(--fg)"
          />
        </svg>
        Source
      </a>
    </footer>
  );
}
