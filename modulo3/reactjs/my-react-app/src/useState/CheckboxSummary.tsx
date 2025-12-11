import { useState } from "react";

export default function CheckboxSummary() {
    const [checked, setChecked] = useState({ a: false, b: false, z: false });

    return (
        <div>
            <label><input
                    type="checkbox"
                    checked={checked.a}
                    onChange={() => setChecked({ ...checked, a: !checked.a })}/>a</label>
            <label><input
                    type="checkbox"
                    checked={checked.b}
                    onChange={() => setChecked({ ...checked, b: !checked.b })}/>b</label>
            <label><input
                    type="checkbox"
                    checked={checked.z}
                    onChange={() => setChecked({ ...checked, z: !checked.z })}/>z</label>
            <p>Seleccionado: {
                    Object.entries(checked)
                        .filter(([, v]) => v).map(([k]) => k.toUpperCase()).join(', ') || 'ninguno'}</p>
        </div>
    );
}
