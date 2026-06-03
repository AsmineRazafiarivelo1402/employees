import { useUpdate, useRecordContext } from "react-admin";
import { useState } from "react";

export const ActiveButton = () => {
  const record = useRecordContext();
  const [update, { isPending }] = useUpdate();
  const [localActive, setLocalActive] = useState<boolean | null>(null);

  if (!record) return null;

  const isActive = localActive !== null ? localActive : record.active;

  const handleClick = () => {
    const newValue = !isActive;

    setLocalActive(newValue);

    update(
      "employees",
      {
        id: record.id,
        data: { active: newValue },
        previousData: record,
        meta: { method: "PATCH" },
      },
      {
        onError: () => {
          setLocalActive(isActive);
        },
      },
    );
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      style={{
        backgroundColor: isActive ? "#d32f2f" : "#388e3c",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "6px 12px",
        cursor: isPending ? "not-allowed" : "pointer",
        opacity: isPending ? 0.7 : 1,
      }}
    >
      {isActive ? "Désactiver" : "Activer"}
    </button>
  );
};
