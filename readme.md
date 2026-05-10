# S7 Data Logger

S7 Data Logger è un’applicazione per la raccolta e registrazione dati da PLC Siemens S7 tramite protocollo industriale ISO-on-TCP.

Il sistema consente di acquisire variabili di processo in tempo reale e salvarle per analisi, monitoraggio e integrazione con sistemi esterni.

---

## 🏭 Architettura del sistema

Il flusso dati è il seguente:

PLC Siemens S7  
→ Snap7 communication layer  
→ Data acquisition engine  
→ Logger / storage module  
→ Export / visualization (opzionale)

---

## ⚙️ Funzionalità principali

- Lettura dati da PLC Siemens S7
- Comunicazione tramite protocollo ISO-on-TCP
- Logging dati in tempo reale
- Supporto configurazione variabili PLC
- Gestione connessione e riconnessione automatica
- Struttura modulare estendibile

---

## 🧱 Tecnologie utilizzate

- Snap7 (comunicazione PLC)
- JavaScript / HTML / CSS (interfaccia web)
- Componenti open source di terze parti

---

## 📡 Requisiti di sistema

- PLC Siemens S7 compatibile
- Rete Ethernet industriale
- Accesso TCP/IP al PLC
- Browser moderno (per interfaccia UI)

---

## Download

Installer Windows disponibile in:

-Release v1.0.0:
-S7DataLoggerSetup.exe

---

## 🚀 Installazione

1. Scaricare la release dal repository
2. Configurare indirizzo IP del PLC
3. Definire variabili da monitorare
4. Avviare il logger

---

## ⚙️ Configurazione

Esempio configurazione base:

```json
{
  "plc_ip": "192.168.0.10",
  "rack": 0,
  "slot": 1,
  "polling_interval_ms": 1000
}
