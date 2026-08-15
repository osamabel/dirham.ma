import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          position: "relative",
        }}
      >
        D
        <div
          style={{
            position: "absolute",
            bottom: 28,
            width: 56,
            height: 12,
            background: "#1f7a4c",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
