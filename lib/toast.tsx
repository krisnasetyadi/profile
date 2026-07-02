import { AlertTriangle, Check, Info, X } from "lucide-react";
import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning";
type ThemeMode = "light" | "dark";

interface ToastClassesOptions {
  type: ToastType;
}

interface ThemeStyleConfig {
  light: {
    accent: string;
    border: string;
    gradient: string;
    textColor: string;
    descriptionColor: string;
    boxShadow: string;
  };
  dark: {
    accent: string;
    border: string;
    gradient: string;
    textColor: string;
    descriptionColor: string;
    boxShadow: string;
  };
}

const TYPE_STYLES: Record<ToastType, ThemeStyleConfig> = {
  success: {
    light: {
      accent: "#10b981",
      border: "rgba(16,185,129,0.3)",
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(34,197,94,0.04))",
      textColor: "#065f46",
      descriptionColor: "rgba(6,95,70,0.75)",
      boxShadow: "0 8px 32px rgba(16,185,129,0.15), 0 2px 8px rgba(0,0,0,0.08)",
    },
    dark: {
      accent: "#34d399",
      border: "rgba(52,211,153,0.4)",
      gradient: "linear-gradient(135deg, rgba(52,211,153,0.12), rgba(16,185,129,0.06))",
      textColor: "#d1fae5",
      descriptionColor: "rgba(209,250,229,0.75)",
      boxShadow: "0 8px 32px rgba(52,211,153,0.2), 0 2px 8px rgba(0,0,0,0.4)",
    },
  },
  error: {
    light: {
      accent: "#ef4444",
      border: "rgba(239,68,68,0.3)",
      gradient: "linear-gradient(135deg, rgba(239,68,68,0.08), rgba(244,63,94,0.04))",
      textColor: "#7f1d1d",
      descriptionColor: "rgba(127,29,29,0.75)",
      boxShadow: "0 8px 32px rgba(239,68,68,0.15), 0 2px 8px rgba(0,0,0,0.08)",
    },
    dark: {
      accent: "#f87171",
      border: "rgba(248,113,113,0.4)",
      gradient: "linear-gradient(135deg, rgba(248,113,113,0.12), rgba(239,68,68,0.06))",
      textColor: "#fee2e2",
      descriptionColor: "rgba(254,226,226,0.75)",
      boxShadow: "0 8px 32px rgba(248,113,113,0.2), 0 2px 8px rgba(0,0,0,0.4)",
    },
  },
  info: {
    light: {
      accent: "#3b82f6",
      border: "rgba(59,130,246,0.3)",
      gradient: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(96,165,250,0.04))",
      textColor: "#1e40af",
      descriptionColor: "rgba(30,64,175,0.75)",
      boxShadow: "0 8px 32px rgba(59,130,246,0.15), 0 2px 8px rgba(0,0,0,0.08)",
    },
    dark: {
      accent: "#60a5fa",
      border: "rgba(96,165,250,0.4)",
      gradient: "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(59,130,246,0.06))",
      textColor: "#dbeafe",
      descriptionColor: "rgba(219,238,254,0.75)",
      boxShadow: "0 8px 32px rgba(96,165,250,0.2), 0 2px 8px rgba(0,0,0,0.4)",
    },
  },
  warning: {
    light: {
      accent: "#f59e0b",
      border: "rgba(245,158,11,0.3)",
      gradient: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(251,146,60,0.04))",
      textColor: "#92400e",
      descriptionColor: "rgba(146,64,14,0.75)",
      boxShadow: "0 8px 32px rgba(245,158,11,0.15), 0 2px 8px rgba(0,0,0,0.08)",
    },
    dark: {
      accent: "#fbbf24",
      border: "rgba(251,191,36,0.4)",
      gradient: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(245,158,11,0.06))",
      textColor: "#fef3c7",
      descriptionColor: "rgba(254,243,199,0.75)",
      boxShadow: "0 8px 32px rgba(251,191,36,0.2), 0 2px 8px rgba(0,0,0,0.4)",
    },
  },
};

function getTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function toastClasses({ type }: ToastClassesOptions) {
  const theme = getTheme();
  const s = TYPE_STYLES[type][theme];

  return {
    style: {
      background: s.gradient,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: `2px solid ${s.accent}`,
      borderRadius: "12px",
      color: s.textColor,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "0.02em",
      padding: "16px 20px",
      boxShadow: s.boxShadow,
      display: "flex",
      alignItems: "center",
      gap: "12px",
      overflow: "hidden",
      position: "relative" as const,
    },
    descriptionStyle: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      fontSize: "13px",
      letterSpacing: "0.01em",
      color: s.descriptionColor,
      marginTop: "4px",
      fontWeight: "400",
      lineHeight: "1.4",
    },
  } as const;
}

function getIconComponent(type: ToastType) {
  const theme = getTheme();

  const iconStyles = {
    success: {
      light: { bg: "#dcfce7", color: "#15803d" },
      dark: { bg: "rgba(52,211,153,0.2)", color: "#86efac" },
      icon: <Check className="h-4 w-4" />,
    },
    error: {
      light: { bg: "#fee2e2", color: "#991b1b" },
      dark: { bg: "rgba(248,113,113,0.2)", color: "#fca5a5" },
      icon: <X className="h-4 w-4" />,
    },
    info: {
      light: { bg: "#dbeafe", color: "#1e40af" },
      dark: { bg: "rgba(96,165,250,0.2)", color: "#93c5fd" },
      icon: <Info className="h-4 w-4" />,
    },
    warning: {
      light: { bg: "#fef3c7", color: "#b45309" },
      dark: { bg: "rgba(251,191,36,0.2)", color: "#fde047" },
      icon: <AlertTriangle className="h-4 w-4" />,
    },
  };

  const colorStyle = iconStyles[type][theme]; 
  const icon = iconStyles[type].icon; 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: colorStyle.bg,
        color: colorStyle.color,
        fontSize: "14px",
        fontWeight: "bold",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
  );
}

class ToastManager {
  private activeToasts = new Set<string>();
  private toastTimeouts = new Map<string, NodeJS.Timeout>();

  showError(message: string, description?: string, duration = 5000) {
    const key = `error-${message}-${description ?? ""}`;

    if (this.activeToasts.has(key)) return;

    this.activeToasts.add(key);

    toast.error(message, {
      id: key,
      icon: getIconComponent("error"),
      description,
      duration,
      ...toastClasses({ type: "error" }),
    });

    const timeout = setTimeout(() => {
      this.activeToasts.delete(key);
      this.toastTimeouts.delete(key);
    }, duration);

    this.toastTimeouts.set(key, timeout);
  }

  showSuccess(message: string, description?: string, duration = 3000) {
    const key = `success-${message}-${description ?? ""}`;

    this.activeToasts.add(key);

    toast.success(message, {
      id: key,
      icon: getIconComponent("success"),
      description,
      duration,
      ...toastClasses({ type: "success" }),
    });

    const timeout = setTimeout(() => {
      this.activeToasts.delete(key);
      this.toastTimeouts.delete(key);
    }, duration);

    this.toastTimeouts.set(key, timeout);
  }

  showInfo(message: string, description?: string, duration = 4000) {
    const key = `info-${message}-${description ?? ""}`;

    this.activeToasts.add(key);

    toast.info(message, {
      id: key,
      icon: getIconComponent("info"),
      description,
      duration,
      ...toastClasses({ type: "info" }),
    });

    const timeout = setTimeout(() => {
      this.activeToasts.delete(key);
      this.toastTimeouts.delete(key);
    }, duration);

    this.toastTimeouts.set(key, timeout);
  }

  showWarning(message: string, description?: string, duration = 4000) {
    const key = `warning-${message}-${description ?? ""}`;

    this.activeToasts.add(key);

    toast.warning(message, {
      id: key,
      icon: getIconComponent("warning"),
      description,
      duration,
      ...toastClasses({ type: "warning" }),
    });

    const timeout = setTimeout(() => {
      this.activeToasts.delete(key);
      this.toastTimeouts.delete(key);
    }, duration);

    this.toastTimeouts.set(key, timeout);
  }

  dismissAll() {
    this.activeToasts.clear();
    this.toastTimeouts.forEach((t) => clearTimeout(t));
    this.toastTimeouts.clear();
    toast.dismiss();
  }
}

export const toastManager = new ToastManager();
