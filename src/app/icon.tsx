import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121417",
          color: "#e8eaed",
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          position: "relative",
        }}
      >
        D
        <div
          style={{
            position: "absolute",
            bottom: 4,
            width: 12,
            height: 3,
            background: "#1f7a4c",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
