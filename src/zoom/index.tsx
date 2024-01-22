
import { useEffect, useRef } from "react";
import { D3ZoomEvent, select, zoom } from "d3";

import { zoomDefault } from "./zoom.css";

export function Zoom() {

  const svgRef = useRef<SVGSVGElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleZoom(event: D3ZoomEvent<SVGSVGElement, unknown>) {
    const { x, y, k } = event.transform;
    select(svgRef.current).select("g").attr("transform", `translate(${x} ${y}) scale(${k})`);
  }

  useEffect(() => {
    if (svgRef.current) {
      console.log("CALL!");
      const svg = select(svgRef.current);
      const d3Zoom = zoom<SVGSVGElement, unknown>()
        .scaleExtent([1/10, 5])
        .on("zoom", handleZoom);


      svg.call(d3Zoom);
    }
  }, [])

  return (
    <svg ref={svgRef} width={512} height={512} className={zoomDefault}>
      <g>
        <RandomRectangles/>
      </g>
    </svg>
  )
}

function RandomRectangles() {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <rect x={30*i} y={0} width={25} height={25} fill="red" key={i}/>
      ))}
    </>
  )
}
