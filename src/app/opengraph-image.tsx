import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Portfolio Muhammad Vidic Virdiansyah";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#023136",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#AFDDE5",
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
          }}
        >
          Muhammad Vidic Virdiansyah
        </div>

        <div
          style={{
            fontSize: 32,
            marginTop: 20,
          }}
        >
          Web Developer Portfolio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}