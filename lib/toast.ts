import { toast } from "sonner";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastClassesOptions {
  type: ToastType;
}

const TYPE_STYLES: Record<
  ToastType,
  { accent: string; border: string; icon: string }
> = {
  success: {
    accent: "#22c55e",
    border: "rgba(34,197,94,0.2)",
    icon: "✦",
  },
  error: {
    accent: "#ff4d4d",
    border: "rgba(255,77,77,0.2)",
    icon: "✕",
  },
  info: {
    accent: "#4d9fff",
    border: "rgba(77,159,255,0.2)",
    icon: "○",
  },
  warning: {
    accent: "#f59e0b",
    border: "rgba(245,158,11,0.2)",
    icon: "△",
  },
};

export function toastClasses({ type }: ToastClassesOptions) {
  const s = TYPE_STYLES[type];
  return {
    style: {
      background: "#111111",
      border: `1px solid ${s.border}`,
      borderLeft: `2px solid ${s.accent}`,
      borderRadius: "2px",
      color: "#f0ede8",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "12px",
      letterSpacing: "0.04em",
      padding: "14px 16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      backdropFilter: "blur(12px)",
    },
    descriptionStyle: {
      fontFamily: "'Geist', sans-serif",
      fontSize: "12px",
      letterSpacing: "0.01em",
      color: "rgba(240,237,232,0.5)",
      marginTop: "4px",
    },
  } as const;
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

  showSuccess(message: string, description?: string, duration?: number) {
    toast.success(message, {
      description,
      duration,
      ...toastClasses({ type: "success" }),
    });
  }

  showInfo(message: string, description?: string) {
    toast.info(message, {
      description,
      ...toastClasses({ type: "info" }),
    });
  }

  showWarning(message: string, description?: string) {
    toast.warning(message, {
      description,
      ...toastClasses({ type: "warning" }),
    });
  }

  dismissAll() {
    this.activeToasts.clear();
    this.toastTimeouts.forEach((t) => clearTimeout(t));
    this.toastTimeouts.clear();
    toast.dismiss();
  }
}

export const toastManager = new ToastManager();
