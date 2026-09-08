import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/* The `JORDAN.` wordmark reduced to what survives at 32px: the J, and the
   accent full stop that the logo is really built around. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(join(process.cwd(), "src/assets/Anton-Regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161826",
          color: "#f3f5fe",
          fontFamily: "Anton",
          fontSize: 24,
          borderRadius: 6,
        }}
      >
        J<span style={{ color: "#9184d9" }}>.</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: font, style: "normal", weight: 400 }] },
  );
}
