# Dr. Giorgio Incarbone — Sito professionale

Sito istituzionale del Dr. Giorgio Incarbone, neurochirurgo. Stack: **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**.

Produzione: [https://giorgioincarbone.com](https://giorgioincarbone.com)

## Requisiti

- Node.js 20+
- npm

## Avvio in locale

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Variabili d'ambiente

Copia `.env.example` in `.env.local` e compila i valori:

| Variabile | Descrizione |
|-----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL canonico del sito (`https://giorgioincarbone.com`) |
| `RESEND_API_KEY` | Chiave API Resend per l'invio email transazionali |
| `CONTACT_EMAIL` | Email che riceve le richieste dal modulo contatti |
| `FROM_EMAIL` | Mittente verificato in Resend (es. `noreply@giorgioincarbone.com`) |
| `BASIC_AUTH_ENABLED` | Abilita protezione Basic Auth in anteprima (solo locale/preview) |
| `BASIC_AUTH_USER` | Username Basic Auth |
| `BASIC_AUTH_PASSWORD` | Password Basic Auth |

**Importante:** non committare `.env.local` o altri file con segreti. Sono già esclusi da Git tramite `.gitignore`.

## Configurazione Google Workspace

Il dominio **giorgioincarbone.com** è già collegato a Google Workspace. L'email professionale ufficiale è:

**giorgio.incarbone@giorgioincarbone.com**

### Passaggi consigliati

1. **Verifica dominio** — In [Google Admin Console](https://admin.google.com), conferma che `giorgioincarbone.com` risulti verificato e attivo.
2. **Record DNS** — Assicurati che i record MX, SPF e DKIM di Google siano configurati nel registrar del dominio.
3. **Alias e mittente** — Se usi `noreply@giorgioincarbone.com` per Resend, crea l'alias o l'indirizzo nel pannello Google Workspace oppure gestiscilo solo tramite Resend (vedi sezione successiva).
4. **Inoltro (opzionale)** — Puoi impostare regole di inoltro in Gmail per archiviare le richieste dal sito in cartelle dedicate.

Le email inviate dal modulo contatti arrivano a `CONTACT_EMAIL` e il visitatore riceve un'email di conferma automatica.

## Configurazione Resend

Il modulo **Richiedi consulenza** invia email tramite [Resend](https://resend.com).

### 1. Crea un account Resend

Registrati su [resend.com](https://resend.com) e genera una API key in **API Keys**.

### 2. Verifica il dominio

In Resend → **Domains**, aggiungi `giorgioincarbone.com` e configura i record DNS richiesti:

- SPF
- DKIM
- (opzionale) DMARC

Attendi la verifica del dominio prima del go-live.

### 3. Configura il mittente

Imposta `FROM_EMAIL` su un indirizzo del dominio verificato, ad esempio:

```
FROM_EMAIL=noreply@giorgioincarbone.com
```

### 4. Imposta le variabili

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=giorgio.incarbone@giorgioincarbone.com
FROM_EMAIL=noreply@giorgioincarbone.com
```

### 5. Test del modulo

1. Avvia il sito in locale con le variabili configurate.
2. Compila il modulo nella sezione Contatti.
3. Verifica la ricezione su `CONTACT_EMAIL` e l'email di conferma al mittente.

## API contatti

Endpoint: `POST /api/contact`

Il form invia:

- Nome, cognome, telefono, email, motivo, messaggio
- Protezione anti-spam (honeypot, validazione server-side, controllo tempi)
- Email al professionista e conferma al visitatore

## Deploy su Vercel

### 1. Collega il repository

1. Vai su [vercel.com/new](https://vercel.com/new).
2. Importa il repository Git del progetto.
3. Framework preset: **Next.js** (rilevato automaticamente).

### 2. Variabili d'ambiente in produzione

In **Project Settings → Environment Variables**, aggiungi per l'ambiente **Production**:

```
NEXT_PUBLIC_SITE_URL=https://giorgioincarbone.com
RESEND_API_KEY=re_xxxxxxxx
CONTACT_EMAIL=giorgio.incarbone@giorgioincarbone.com
FROM_EMAIL=noreply@giorgioincarbone.com
```

Non impostare `BASIC_AUTH_ENABLED` in produzione, così il sito resta pubblico.

Per gli ambienti **Preview**, puoi aggiungere le variabili `BASIC_AUTH_*` per proteggere le anteprime.

### 3. Dominio personalizzato

1. In Vercel → **Domains**, aggiungi `giorgioincarbone.com` e `www.giorgioincarbone.com`.
2. Configura i record DNS nel registrar:
   - **A** o **CNAME** verso Vercel (come indicato dalla dashboard)
   - Mantieni i record MX di Google Workspace per l'email
   - Aggiungi i record Resend per SPF/DKIM sullo stesso dominio
3. Imposta `giorgioincarbone.com` come dominio primario e reindirizza `www` se preferito.

### 4. Deploy

```bash
git push origin main
```

Vercel esegue automaticamente `npm run build`. Verifica che la build sia verde prima di annunciare il go-live.

### 5. Checklist post-deploy

- [ ] Homepage e sezioni caricano correttamente
- [ ] Modulo contatti invia email e mostra conferma
- [ ] Link `mailto:giorgio.incarbone@giorgioincarbone.com` funzionanti
- [ ] Metadata e Open Graph con URL `https://giorgioincarbone.com`
- [ ] Mappa sedi di consulenza interattiva
- [ ] Certificato SSL attivo su Vercel

## Script disponibili

```bash
npm run dev      # Sviluppo locale
npm run build    # Build di produzione
npm run start    # Server di produzione
npm run lint     # ESLint
```

## Struttura principale

```
app/                  # App Router Next.js
  api/contact/        # API invio modulo contatti
components/           # Sezioni e UI
lib/                  # Dati sito, validazione, email, schema SEO
types/                # Tipi TypeScript
```

## Licenza

Progetto privato — tutti i diritti riservati.
