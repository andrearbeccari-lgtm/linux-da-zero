# Linux da zero

Un manuale per chi non ha mai usato Linux né aperto un terminale, scritto per **Debian**. Parte dalle basi (aprire il terminale, muoversi tra le cartelle, creare e cancellare file) e arriva a installare programmi, gestire permessi e processi e personalizzare la shell. Include le indicazioni per chi usa Debian in una macchina virtuale su Mac con tastiera italiana.

**Leggi la versione interattiva:** https://andrearbeccari-lgtm.github.io/linux-da-zero/

La versione interattiva ha un indice laterale, una ricerca in tutto il testo, un elenco dei comandi con pulsante per copiarli e le soluzioni degli esercizi a scomparsa.

## File

| File | Contenuto |
| :--- | :--- |
| [`linux_da_zero_debian.md`](linux_da_zero_debian.md) | Il manuale in Markdown: è il testo di partenza da modificare |
| [`index.html`](index.html) | La pagina interattiva, generata dal Markdown. Si apre anche in locale con un doppio clic |
| [`build/`](build/) | Il modello della pagina e lo script che la genera |

## Rigenerare la pagina dopo una modifica

Serve [Node.js](https://nodejs.org/). Dalla cartella `build`:

```bash
npm install
npm run build
```

Lo script legge `linux_da_zero_debian.md` e riscrive `index.html`.

Nei blocchi di codice del Markdown, un blocco `bash` che inizia con il commento `# Da adattare:` viene mostrato nella pagina come **Esempio da adattare**; gli altri blocchi `bash` come **Prova nel terminale**.
