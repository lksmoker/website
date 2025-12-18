// Collections: supports either [ ... ] or { value: [ ... ] }
export const collection = (data) =>
    Array.isArray(data) ? data : data?.value ?? [];
  
  // “List” fields: supports array OR single string OR null
  export const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  
  // “Word list”: supports ["react","vite"] OR "react vite"
  export const words = (v) => {
    if (Array.isArray(v)) return v.filter(Boolean);
    if (typeof v === "string") return v.trim().split(/\s+/).filter(Boolean);
    return [];
  };
  
  // “Bullets”: supports array OR newline-delimited string
  export const bullets = (v) => {
    if (Array.isArray(v)) return v.filter(Boolean);
    if (typeof v === "string")
      return v.split(/\n+/).map(s => s.trim()).filter(Boolean);
    return [];
  };
  