import { D3ZoomEvent, select, zoom, zoomIdentity } from "d3";
import { useEffect, useMemo, useRef } from "react";
import { Room } from "../../../utils/dungeon-gen/dto/room.dto";

export type UseDungeonMapProps = {
  rooms: Room[]
}

export function useDungeonMap({ rooms }: UseDungeonMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const d3Zoom = useMemo(() => zoom<SVGSVGElement, unknown>(), []);

  function HandleZoom(this:SVGGElement, { transform }: D3ZoomEvent<SVGSVGElement, unknown>) {
    this.setAttribute("transform", `translate(${transform.x} ${transform.y}) scale(${transform.k})`);
  }

  useEffect(() => {
    const svg = select<SVGSVGElement, unknown>(svgRef.current!);
    const g = svg.select<SVGGElement>("g");
    d3Zoom
      .scaleExtent([1/10, 2.5])
      .on("zoom", HandleZoom.bind(g.node()!));

      svg.call(d3Zoom);
  }, [d3Zoom]);

  useEffect(() => {
    const svg = select<SVGSVGElement, unknown>(svgRef.current!);
    const { innerWidth, innerHeight } = window;
    svg.call(d3Zoom.transform, zoomIdentity.translate(innerWidth/2, innerHeight/2).scale(1/2));

  }, [d3Zoom, rooms]);

  return {
    svgRef
  }
}
