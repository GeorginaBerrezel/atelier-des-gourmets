'use client';
import { useState, useMemo } from "react";
import { toWaNumber } from "@/lib/phone";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"ok"|"error">("idle");
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const waHref = useMemo(() => {
    const phone = toWaNumber(site.telephone);
    const text = `Bonjour, je souhaiterais des informations.\nNom: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [form]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: fd });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <form className="card" onSubmit={onSubmit}>
      <label>Nom
        <input name="name" required onChange={(e)=>setForm(s=>({...s,name:e.target.value}))}/>
      </label>

      <label>Email
        <input type="email" name="email" required onChange={(e)=>setForm(s=>({...s,email:e.target.value}))}/>
      </label>

      <label>Message
        <textarea name="message" rows={5} required onChange={(e)=>setForm(s=>({...s,message:e.target.value}))}/>
      </label>

      <div style={{display:"flex",gap:"1rem",marginTop:"1rem",flexWrap:"wrap"}}>
        <button className="btn" type="submit">Envoyer par email</button>

        <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="" width="18" height="18" style={{marginRight:".5rem"}}/>
          WhatsApp
        </a>

        <span aria-live="polite">
          {status==="ok" && "Message envoyé."}
          {status==="error" && "Erreur d’envoi."}
        </span>
      </div>
    </form>
  );
}
