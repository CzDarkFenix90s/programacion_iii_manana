import React, { useState } from "react";

export default function LabTwAlert() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [area, setArea] = useState(null);
  const [show, setShow] = useState(false);

  const calcularArea = () => {
    if (base === "" || altura === "") return;

    const resultado = (Number(base) * Number(altura)) / 2;
    setArea(resultado);   // AHORA SÍ TIENE SENTIDO
    setShow(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">LAB: Área de Triángulo</h2>

        {/* Inputs */}
        <div className="mt-4 flex gap-2">
          <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="rounded-lg p-2 text-white"
          />
          <input
            type="number"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            className="rounded-lg p-2 text-white"
          />
        </div>

        {/* Botón */}
        <div className="mt-4">
          <button
            onClick={calcularArea}
            className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Calcular área
          </button>
        </div>

        {/* Alerta */}
        {show && (
          <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-emerald-200">
            ✅ El área del triángulo es: <strong>{area}</strong>
          </div>
        )}
      </div>
    </main>
  );
}
