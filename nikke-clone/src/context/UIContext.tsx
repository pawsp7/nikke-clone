import React, { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
  showMail: boolean;
  setShowMail: (value: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [showMail, setShowMail] = useState(false);

  return (
    <UIContext.Provider value={{ showMail, setShowMail }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error("useUI must be used inside a UIProvider");
  }
  return ctx;
}
