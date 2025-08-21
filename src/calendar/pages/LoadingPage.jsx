import React from "react";

/**
 * Pantalla de carga de página completa sin Tailwind.
 * Usa estilos inline y keyframes CSS.
 *
 * Uso:
 *   if (status === "checking") return <LoadingPage message="Cargando" />
 */
export default function LoadingPage({
  message = "Cargando…",
  subtext = "Por favor, espera un momento",
}) {
  return (
    <div
      style={styles.container}
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div style={styles.content}>
        {/* Spinner */}
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner} />
          <p style={styles.message}>
            {message}
            <AnimatedDots />
          </p>
          <p style={styles.subtext}>{subtext}</p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes indeterminate {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(40%); }
          100% { transform: translateX(120%); }
        }
        @keyframes dot {
          0%, 20% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
          100% { opacity: 0.2; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function AnimatedDots() {
  return (
    <span style={{ display: "inline-flex", marginLeft: 4 }}>
      <span style={{ ...dotStyle, animationDelay: "0s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.2s" }} />
      <span style={{ ...dotStyle, animationDelay: "0.4s" }} />
    </span>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    userSelect: "none",
  },
  logoBox: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
  },
  appName: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#111",
  },
  spinnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
  spinner: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    border: "4px solid #d1d5db",
    borderTopColor: "#111",
    animation: "spin 1s linear infinite",
  },
  message: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#333",
  },
  subtext: {
    fontSize: "0.875rem",
    color: "#666",
  },
  progressBar: {
    width: 256,
    height: 8,
    borderRadius: 9999,
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
  },
  progressIndicator: {
    height: "100%",
    width: "33%",
    backgroundColor: "#111",
    borderRadius: 9999,
    animation: "indeterminate 1.2s ease-in-out infinite",
  },
};

const dotStyle = {
  width: 4,
  height: 4,
  margin: "0 2px",
  borderRadius: "50%",
  backgroundColor: "#333",
  animation: "dot 1.2s infinite",
};
