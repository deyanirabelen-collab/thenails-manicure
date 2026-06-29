"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://yxqkrblgiqtpqjpcfddk.supabase.co', 
  'sb_publishable_2hF93cR_m_yMWo0hWtC6VA_vRldsr12'
);

export default function AgendarCita() {
  const [form, setForm] = useState({ rut: '', nombre: '', correo: '', telefono: '', servicio: '', fecha_cita: '', hora_cita: '' });

  const agendar = async () => {
    try {
      const { error } = await supabase.from('citas').insert([form]);
      if (error) throw error;
      alert("¡Cita agendada con éxito!");
      setForm({ rut: '', nombre: '', correo: '', telefono: '', servicio: '', fecha_cita: '', hora_cita: '' });
    } catch (err: any) {
      alert("Error al guardar: " + err.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto space-y-4 border rounded-xl shadow-lg bg-white">
      <h1 className="text-xl font-bold">Agendar Nueva Cita</h1>
      <input placeholder="RUT" onChange={e => setForm({...form, rut: e.target.value})} className="border p-2 w-full rounded" />
      <input placeholder="Nombre" onChange={e => setForm({...form, nombre: e.target.value})} className="border p-2 w-full rounded" />
      <input placeholder="Correo" onChange={e => setForm({...form, correo: e.target.value})} className="border p-2 w-full rounded" />
      <button onClick={agendar} className="bg-blue-600 text-white p-3 w-full rounded">Confirmar Cita</button>
    </div>
  );
}
