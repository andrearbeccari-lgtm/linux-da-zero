# Linux da zero: il manuale dei primi passi

*Edizione per Debian*

Benvenuto! Questo manuale è pensato per chi non ha **mai** usato Linux né aperto un terminale. Si parte dalle basi: come aprire il terminale, come muoversi tra le cartelle, come creare e cancellare file. Poi si passa all'installazione dei programmi, ai permessi e ai processi, e infine alla personalizzazione. Ogni capitolo si appoggia solo su ciò che è stato spiegato prima.

Il consiglio più importante: **leggi con il terminale aperto e prova ogni comando**. Linux si impara con le dita, non con gli occhi.

---

## Indice

**Parte I — Primi passi**
1. Prima di iniziare
2. Sette concetti fondamentali
3. Terminale, shell e prompt
4. Muoversi tra le cartelle
5. Lavorare con file e cartelle
6. La tua prima sessione guidata

**Parte II — Usare il sistema**
7. L'amministratore e il comando `sudo`
8. Installare programmi con `apt`
9. Cercare file e testo
10. Permessi e proprietà
11. Processi, memoria e disco
12. Rete e download
13. Archivi compressi

**Parte III — Andare oltre**
14. Personalizzare la shell: alias e variabili
15. Quando qualcosa va storto
16. Riepilogo: "Cosa voglio fare?"
17. Prossimi passi

Appendice A — Soluzioni degli esercizi

---

# Parte I — Primi passi

## 1. Prima di iniziare

### 1.1 Come leggere questo manuale

**I comandi** sono scritti in blocchi come questo. Si digitano così come sono e si conferma con **Invio**:

```bash
echo Ciao
```

**Il risultato** che il comando mostra a video è riportato in un blocco separato, chiamato *Risultato atteso*:

```text
Ciao
```

Alcune convenzioni da conoscere:

* Le righe che iniziano con `#` dentro un blocco di comandi sono **commenti**: spiegano cosa succede e **non vanno digitate**.
* Le parole tra parentesi angolari, come `<nomefile>`, sono **segnaposto**: vanno sostituite con un nome vero, **togliendo anche le parentesi**. Esempio: `cat <nomefile>` diventa `cat appunti.txt`.
* Gli esempi sono di due tipi:
  * **da provare**: si eseguono così come sono, purché tu abbia seguito i passi precedenti dello stesso capitolo. Quando servono dei file, un blocco di **preparazione** li crea prima;
  * **da adattare**: sono schemi che contengono un nome, un numero o un indirizzo da sostituire con il tuo. Iniziano sempre con il commento `# Da adattare:`, che dice cosa cambiare.
* Negli esempi l'utente si chiama **`mario`** e il computer **`debian`**. Sul tuo sistema vedrai il tuo nome utente.
* Se il tuo sistema è in italiano, molti messaggi appariranno in italiano; in questo manuale, dove serve, li riportiamo in entrambe le lingue.

I riquadri hanno tre significati:

> 💡 **Consiglio:** un trucco che ti fa risparmiare tempo.

> ⚠️ **Attenzione:** un punto dove i principianti sbagliano spesso.

> 🛑 **Pericolo:** un'operazione che può cancellare dati o danneggiare il sistema.

> 🍎 **Su Mac:** come cambiano i tasti se usi Debian in una macchina virtuale su un Mac (vedi la sezione 1.4).

### 1.2 Dove fare pratica

Per imparare ti serve un Debian su cui fare esperimenti senza paura di rompere qualcosa. Hai quattro strade:

| Soluzione | Per chi è adatta | Come si fa |
| :--- | :--- | :--- |
| **WSL su Windows** | Chi ha un PC Windows 10/11 e vuole iniziare subito | Apri PowerShell come amministratore, digita `wsl --install -d Debian`, riavvia, poi apri "Debian" dal menu Start e scegli nome utente e password. |
| **Macchina virtuale** | Chi vuole Debian completo, con la grafica, dentro una finestra | Installa un programma di virtualizzazione (VirtualBox su PC; UTM, Parallels o VMware Fusion su Mac), scarica l'immagine ISO da `debian.org` e installala nella macchina virtuale. |
| **Chiavetta "live"** | Chi vuole provare Debian sul proprio PC senza installarlo | Scarica l'immagine *live* da `debian.org` e **scrivila** sulla chiavetta con un programma apposito: non basta trascinare il file, e l'operazione cancella tutto il contenuto della chiavetta. La procedura è descritta su `wiki.debian.org/DebianInstaller/CreateUSBMedia`. Poi avvia il PC dalla chiavetta. Le modifiche si perdono allo spegnimento. Non funziona sui Mac con chip Apple. |
| **Debian già installato** | Chi ha già un PC con Debian | Niente da fare: apri il terminale. |

> 💡 **Consiglio:** per i primi esperimenti WSL e la macchina virtuale sono le scelte migliori: se qualcosa si rompe dentro Debian, nel peggiore dei casi lo reinstalli in pochi minuti.

> ⚠️ **Attenzione:** l'isolamento non è totale. Da WSL puoi modificare e cancellare i file di Windows attraverso `/mnt/c`; da una macchina virtuale, i file del Mac che hai condiviso con Debian (vedi la sezione 1.4). Durante le prove lavora solo nella cartella di prova `palestra`, che creerai nel capitolo 5.

> ⚠️ **Attenzione (solo WSL):** in WSL la cartella personale è vuota, mancano cartelle come `Documenti` o `Scaricati`, e non c'è un desktop grafico. I comandi però sono identici. I file di Windows si trovano in `/mnt/c` (il disco `C:`).

### 1.3 Aprire (e chiudere) il terminale

* **Debian con desktop GNOME** (quello predefinito): premi il tasto **Windows** (su Linux si chiama *Super*), scrivi `Terminale` e premi **Invio**.
* **Debian con KDE**: cerca **Konsole** nel menu.
* **Debian con XFCE**: cerca **Terminale** nel menu Applicazioni.
* **WSL**: apri **Debian** dal menu Start di Windows.
* **Debian in una macchina virtuale su Mac**: fai clic dentro la finestra della macchina virtuale, premi **Command (⌘)**, che per Linux è il tasto *Super*, scrivi `Terminale` e premi **Invio**.

> 💡 **Consiglio:** in GNOME, quando il terminale è aperto, fai clic destro sulla sua icona nella barra e scegli **Aggiungi ai preferiti**: lo ritroverai sempre lì.

Si apre una finestra con una riga di testo e un cursore che lampeggia. Quella riga si chiama **prompt** e significa "sono pronto, dimmi cosa fare". La vedremo nel dettaglio nel capitolo 3.

Per chiudere il terminale digita `exit` e premi **Invio**, oppure premi **Ctrl + D**.

### 1.4 Se usi Debian in una macchina virtuale su Mac

Questo manuale è scritto con i tasti di un PC. Se usi Debian dentro una macchina virtuale (UTM, Parallels, VMware Fusion o VirtualBox) su un Mac con tastiera italiana, leggi questa sezione: qui trovi come "tradurre" i tasti.

**Quale tasto del Mac corrisponde a quale tasto del PC**

| Tasto del manuale (PC) | Tasto da premere sul Mac | Nota |
| :--- | :--- | :--- |
| **Ctrl** | **Control (⌃)** | ⚠️ **Non** Command (⌘). Ogni volta che il manuale dice Ctrl, usa Control. |
| **Alt** | **Option (⌥)** | |
| **AltGr** | **Option (⌥)** | serve per i simboli come `@`, `#`, `[` |
| **Super** (tasto Windows) | **Command (⌘)** | apre la ricerca delle applicazioni in GNOME |
| **Backspace** (cancella a sinistra) | **Delete (⌫)** | |
| **Canc** (cancella a destra) | **fn + Delete** | |
| **F1 … F12** | **fn + F1 … fn + F12** | sui Mac i tasti F di solito regolano luminosità e volume |
| **Home / Fine** | **fn + freccia sinistra / destra** | inizio e fine della riga |
| **Pagina su / giù** | **fn + freccia su / giù** | |

Esempi: **Ctrl + C** diventa **Control + C**; copiare nel terminale (**Ctrl + Shift + C**) diventa **Control + Shift + C**; uscire da `htop` con **F10** diventa **fn + F10**.

> ⚠️ **Attenzione:** alcuni programmi di virtualizzazione (per esempio Parallels) possono "tradurre" in automatico **Command + C** in **Ctrl + C**. Nel terminale questo **interrompe** il comando invece di copiare. Nel terminale usa sempre **Control + Shift + C / V**.

**Scegliere la disposizione della tastiera giusta in Debian**

Debian deve sapere che stai usando una tastiera Mac, altrimenti alcuni simboli non corrispondono a quelli stampati sui tasti. In GNOME:

1. Apri **Impostazioni** → **Tastiera**.
2. In **Sorgenti di input** aggiungi **Italiano (Macintosh)** e spostala in cima all'elenco (o rimuovi le altre).
3. Fai clic sui tre puntini accanto alla sorgente e scegli **Visualizza disposizione tastiera**: compare un disegno della tastiera con tutti i simboli. È il modo più sicuro per scoprire come digitare un simbolo.

**I simboli difficili sulla tastiera Mac italiana**

Con la disposizione **Italiano (Macintosh)** i simboli si digitano come su macOS:

| Simbolo | Nome | Sul Mac (tastiera italiana) |
| :---: | :--- | :--- |
| `~` | tilde | Option + 5 |
| `\|` | barra verticale (pipe) | Shift + `\` |
| `#` | cancelletto | Option + à |
| `@` | chiocciola | Option + ò |
| `[` `]` | parentesi quadre | Option + è / Option + + |
| `{` `}` | parentesi graffe | Option + Shift + è / Option + Shift + + |
| `` ` `` | apice inverso | Option + `\` |

> 💡 **Consiglio:** le combinazioni possono cambiare leggermente tra modelli di Mac e tra programmi di virtualizzazione. Se un simbolo non esce, controllalo nel disegno di **Visualizza disposizione tastiera** (punto 3 qui sopra).

**Il mouse "intrappolato" nella macchina virtuale**

Quando fai clic dentro la macchina virtuale, il puntatore a volte non riesce più a uscire. Per liberarlo, di solito:

| Programma | Tasti per liberare il puntatore |
| :--- | :--- |
| UTM | Control + Option |
| Parallels Desktop | Control + Option |
| VMware Fusion | Control + Command |
| VirtualBox | Command sinistro (il tasto *Host*) |

**Copiare e incollare tra macOS e Debian**

Per copiare testo da macOS a Debian e viceversa, la macchina virtuale deve avere installati gli "strumenti ospite":

* **UTM**: il pacchetto `spice-vdagent` (`sudo apt install spice-vdagent`, poi riavvia);
* **Parallels**: *Parallels Tools* (menu **Azioni** → **Installa Parallels Tools**);
* **VMware Fusion**: il pacchetto `open-vm-tools-desktop`;
* **VirtualBox**: le *Guest Additions* (menu **Dispositivi** → **Inserisci l'immagine del CD delle Guest Additions**).

Senza questi strumenti il copia/incolla funziona solo dentro Debian.

> ⚠️ **Attenzione — cartelle condivise:** gli strumenti ospite possono anche rendere visibili dentro Debian alcune cartelle del Mac (con Parallels, per esempio, compaiono sotto `/media/psf`). Lì i comandi agiscono sui **file veri del Mac**: un `rm` li cancella davvero. Durante le prove resta nella cartella `palestra` (capitolo 5).

> 💡 **Mac con chip Apple (M1, M2, M3, M4…):** scarica l'immagine di Debian per l'architettura **arm64** (o *aarch64*), non quella **amd64**. Sui Mac con processore Intel serve invece la versione **amd64**.

---

## 2. Sette concetti fondamentali

Se arrivi da Windows o macOS, queste sette idee ti eviteranno la maggior parte delle frustrazioni iniziali.

### 2.1 Maiuscole e minuscole sono diverse

Per Linux `Documento.txt`, `documento.txt` e `DOCUMENTO.TXT` sono **tre file diversi**, che possono stare nella stessa cartella.

Anche i comandi vanno scritti esattamente come sono: quasi sempre **tutto in minuscolo**. `ls` funziona, `LS` no.

### 2.2 Niente lettere di unità: esiste un solo albero

In Windows ogni disco ha una lettera (`C:\`, `D:\`). In Linux tutto parte da **un'unica cartella principale**, indicata con una barra obliqua: **`/`**. Tutto il resto, comprese chiavette USB e dischi esterni, è un ramo di questo albero:

```text
/                    ← la cartella principale, da cui parte tutto
├── home/            ← le cartelle personali degli utenti
│   └── mario/       ← la TUA cartella personale (la "home")
│       ├── Documenti/
│       └── Scaricati/
├── etc/             ← i file di configurazione del sistema
├── tmp/             ← file temporanei (svuotata al riavvio)
├── usr/             ← i programmi installati
├── var/             ← dati che cambiano: log, cache, ecc.
├── media/           ← qui compaiono chiavette e dischi esterni
└── root/            ← la cartella personale dell'amministratore
```

Nota anche che Linux usa la barra **`/`**, mentre Windows usa la barra rovesciata `\`.

### 2.3 "root" ha due significati

La parola **root** (radice) si usa in due modi diversi, e all'inizio confonde:

1. **La cartella radice `/`**, da cui parte l'albero visto sopra.
2. **L'utente `root`**, cioè l'amministratore con pieni poteri (ne parliamo nel capitolo 7). La sua cartella personale è `/root`, da non confondere con `/`.

Dal contesto capirai sempre a quale dei due ci si riferisce.

### 2.4 Il tasto Tab è il tuo migliore amico

Non scrivere mai a mano nomi di file o cartelle lunghi. Digita le prime 2 o 3 lettere e premi **Tab** (il tasto a sinistra della Q): la shell completa il nome da sola.

Se le possibilità sono più di una, non succede nulla: premi **Tab due volte** e vedrai l'elenco delle scelte.

Tab evita gli errori di battitura e, soprattutto, ti conferma che il file esiste davvero: se Tab non completa, probabilmente il nome è sbagliato.

### 2.5 Nessun messaggio vuol dire "tutto ok"

Molti comandi, quando funzionano, **non scrivono niente**. Se crei una cartella con `mkdir prova` e il terminale torna al prompt in silenzio, l'operazione è riuscita. I messaggi compaiono quasi sempre solo in caso di errore.

### 2.6 Copia e incolla nel terminale sono diversi

Nel terminale **Ctrl + C non copia**: interrompe il comando in esecuzione. Per copiare e incollare usa:

| Azione | Scorciatoia nel terminale |
| :--- | :--- |
| Copia | **Ctrl + Shift + C** |
| Incolla | **Ctrl + Shift + V** |
| Interrompe il comando in corso | **Ctrl + C** |

> 💡 **Consiglio:** su Linux c'è anche un trucco comodo: seleziona del testo con il mouse e premi la **rotellina** (tasto centrale) per incollarlo dove si trova il cursore. Con il trackpad del Mac il tasto centrale di solito non è disponibile: usa le scorciatoie della tabella.

> 🍎 **Su Mac:** premi **Control (⌃)**, non Command (⌘): copia = **Control + Shift + C**, incolla = **Control + Shift + V**, interrompi = **Control + C**. Vedi la sezione 1.4.

### 2.7 Simboli difficili sulla tastiera italiana

Nel terminale si usano simboli che sulla tastiera italiana non hanno un tasto proprio. Il tasto **AltGr** è quello a destra della barra spaziatrice.

| Simbolo | Nome | Su Debian (tastiera italiana) | In WSL / Windows |
| :---: | :--- | :--- | :--- |
| `~` | tilde | AltGr + ì | Alt + 126 (tastierino numerico) |
| `\|` | barra verticale (pipe) | Shift + `\` (tasto a sinistra di 1) | uguale |
| `#` | cancelletto | AltGr + à | uguale |
| `@` | chiocciola | AltGr + ò | uguale |
| `[` `]` | parentesi quadre | AltGr + è / AltGr + + | uguale |
| `{` `}` | parentesi graffe | AltGr + Shift + è / AltGr + Shift + + | uguale |
| `` ` `` | apice inverso | AltGr + ' | Alt + 96 (tastierino numerico) |

> 🍎 **Su Mac:** la tastiera italiana del Mac ha una disposizione diversa da quella del PC. Trovi i simboli corrispondenti nella sezione 1.4.

---

## 3. Terminale, shell e prompt

### 3.1 Terminale e shell: due cose diverse

* **Il terminale** è la finestra: mostra il testo e riceve i tasti che premi.
* **La shell** è il programma, invisibile, che legge quello che scrivi, lo interpreta e lo fa eseguire al sistema.

Un paragone: il terminale è il citofono, la shell è la persona che risponde ed esegue le richieste.

### 3.2 Bash, la shell che userai

Su Debian la shell predefinita si chiama **Bash**. È la più diffusa in assoluto: quando cerchi una soluzione su internet, la risposta è quasi sempre scritta per Bash. Per verificare quale shell stai usando:

```bash
echo $0
```

Risultato atteso:

```text
bash
```

(Potresti vedere `-bash`: è la stessa cosa.)

> 💡 **Per curiosità:** esistono altre shell. **Zsh** è molto personalizzabile ed è la predefinita su macOS; **Fish** dà suggerimenti colorati senza bisogno di configurazione, ma ha una sintassi un po' diversa. Per imparare, resta su Bash.

### 3.3 Leggere il prompt

Il prompt di Debian ha questo aspetto:

```text
mario@debian:~/Documenti$
```

| Parte | Significato |
| :--- | :--- |
| `mario` | il tuo nome utente |
| `@debian` | il nome del computer |
| `~/Documenti` | la cartella in cui ti trovi adesso (`~` = la tua cartella personale) |
| `$` | sei un utente normale |

Se al posto di `$` vedi **`#`**, stai lavorando come amministratore `root`: massima prudenza (vedi capitolo 7).

### 3.4 Com'è fatto un comando

Quasi ogni comando segue lo stesso schema:

```text
comando   opzioni   argomenti
  ls        -l       /home
```

* **Il comando** è il nome del programma: `ls` significa "elenca".
* **Le opzioni** modificano il comportamento. Iniziano con un trattino: `-l` significa "formato lungo, con i dettagli".
* **Gli argomenti** dicono su cosa agire: `/home` è la cartella da elencare.

Altre regole:

* Le parti si separano con **uno spazio**. `ls-l` non funziona; `ls -l` sì.
* Più opzioni brevi si possono unire: `ls -l -a` equivale a `ls -la`.
* Molte opzioni hanno anche una forma lunga con due trattini: `ls -a` equivale a `ls --all`.

### 3.5 Chiedere aiuto

Non serve ricordare tutto: Linux contiene il proprio manuale.

```bash
# Il manuale completo del comando ls
man ls
```

Dentro il manuale ti muovi con le **frecce**, cerchi una parola con **`/parola`** seguito da Invio ed **esci premendo `q`**.

```bash
# Un riassunto più breve delle opzioni
ls --help
```

> 💡 **Consiglio:** il pacchetto `tldr` mostra esempi pratici invece di lunghe spiegazioni. Quando avrai imparato a installare i programmi (capitolo 8) prova `sudo apt install tldr` e poi `tldr tar`. Al primo uso potrebbe chiederti di scaricare le schede con `tldr --update`.

> ⚠️ **Attenzione — se un comando di base manca:** in alcune installazioni ridotte, per esempio Debian su WSL, i programmi `man`, `nano` o `less` possono non essere installati, e il terminale risponde `comando non trovato`. Puoi installarli subito, anche se `apt` lo spiegheremo nel capitolo 8:
>
> ```bash
> sudo apt update
> sudo apt install man-db nano less
> ```
>
> Il comando `man` si trova nel pacchetto `man-db`. Se `sudo` risponde con un errore, leggi prima la sezione 7.3.

### 3.6 Richiamare i comandi già scritti

* **Freccia Su / Giù**: scorre i comandi digitati in precedenza. Utilissimo per ripetere o correggere un comando.
* **Ctrl + R**: cerca nella cronologia. Premilo, scrivi una parte del comando e premi Invio per eseguirlo.
* **`history`**: mostra l'elenco numerato dei comandi digitati.
* **`clear`** (oppure **Ctrl + L**): pulisce lo schermo.

### ✍️ Mettiti alla prova

1. Apri il terminale e individua nel prompt il tuo nome utente e il nome del computer.
2. Apri il manuale del comando `echo`, cerca la parola `newline` ed esci.
3. Usa la freccia Su per richiamare l'ultimo comando senza riscriverlo.

---

## 4. Muoversi tra le cartelle

Nel terminale sei sempre "dentro" una cartella, chiamata **cartella corrente**. All'apertura del terminale è la tua cartella personale, `/home/mario`, abbreviata in `~`.

**Preparazione.** Su Debian con desktop la cartella personale contiene già cartelle come `Documenti` e `Scaricati`; in WSL è vuota. Questo comando crea le due cartelle usate negli esempi, e se esistono già non fa nulla (`mkdir` crea cartelle: lo vedrai meglio nel capitolo 5):

```bash
mkdir -p ~/Documenti ~/Scaricati
```

### 4.1 `pwd`: dove mi trovo?

```bash
pwd
```

Risultato atteso:

```text
/home/mario
```

`pwd` (*print working directory*) mostra il percorso completo della cartella corrente. Usalo ogni volta che ti senti perso.

### 4.2 `ls`: cosa c'è qui?

```bash
# Elenca il contenuto della cartella corrente
ls
```

Risultato atteso (su Debian con desktop):

```text
Documenti  Immagini  Modelli  Musica  Pubblici  Scaricati  Scrivania  Video
```

Le varianti più utili:

| Comando | Cosa mostra |
| :--- | :--- |
| `ls` | i nomi di file e cartelle |
| `ls -l` | un elenco dettagliato: permessi, proprietario, dimensione, data |
| `ls -a` | anche i file **nascosti**, cioè quelli il cui nome inizia con un punto (`.bashrc`) |
| `ls -lh` | come `-l`, ma con dimensioni leggibili (`4,0K`, `12M`) invece che in byte |
| `ls -la` | dettagli + file nascosti |
| `ls /etc` | il contenuto di un'altra cartella, senza spostarti |

> 💡 **Consiglio:** di solito le cartelle appaiono in **blu** e i file in bianco: così le distingui a colpo d'occhio.

### 4.3 `cd`: spostarsi

`cd` (*change directory*) cambia la cartella corrente.

```bash
# Entra nella cartella Documenti
cd Documenti

# Torna su di un livello (alla cartella "genitore")
cd ..

# Vai direttamente in una cartella indicando il percorso completo
cd /etc

# Torna alla tua cartella personale (funziona anche cd da solo)
cd ~

# Torna alla cartella in cui eri prima
cd -
```

Dopo ogni `cd` il prompt cambia e mostra la nuova posizione: è il modo più semplice per capire dove sei.

### 4.4 Percorsi assoluti e relativi

Un **percorso** è l'indirizzo di un file o di una cartella. Ne esistono di due tipi:

| Tipo | Come si riconosce | Esempio | Significato |
| :--- | :--- | :--- | :--- |
| **Assoluto** | inizia con `/` | `/home/mario/Documenti` | l'indirizzo completo, valido da qualunque posizione |
| **Relativo** | non inizia con `/` | `Documenti/note.txt` | parte dalla cartella in cui ti trovi adesso |

Alcuni simboli speciali:

| Simbolo | Significato |
| :---: | :--- |
| `.` | la cartella corrente |
| `..` | la cartella superiore |
| `~` | la tua cartella personale (`/home/mario`) |
| `/` | la cartella radice |

Esempio: se sei in `/home/mario/Documenti`, il percorso `../Scaricati` porta a `/home/mario/Scaricati`.

### 4.5 Nomi con spazi

Lo spazio separa le parti di un comando, quindi un nome come `I miei file` crea confusione: la shell lo legge come tre nomi diversi. Ci sono tre soluzioni:

```bash
# Crea una cartella di prova con gli spazi nel nome
mkdir "I miei file"

# 1. Racchiudi il nome tra virgolette (poi torna indietro con cd ..)
cd "I miei file"
cd ..

# 2. Oppure metti una barra rovesciata prima di ogni spazio
cd I\ miei\ file
cd ..

# 3. Oppure scrivi "cd I" e premi Tab: la shell aggiunge le barre da sola

# Cancella la cartella di prova (rmdir elimina una cartella vuota)
rmdir "I miei file"
```

> 💡 **Consiglio:** quando crei file e cartelle tuoi, evita spazi e lettere accentate. Usa il trattino basso: `i_miei_file`.

### ✍️ Mettiti alla prova

1. Vai nella cartella `/etc` e verifica dove ti trovi con `pwd`.
2. Elenca il contenuto di `/etc` in formato dettagliato.
3. Torna nella tua cartella personale **con un solo comando**.
4. Mostra i file nascosti della tua cartella personale. Trovi un file chiamato `.bashrc`?

---

## 5. Lavorare con file e cartelle

### 5.1 La cartella di prova

Da qui in avanti gli esempi creano, spostano e cancellano file. Per farlo senza rischi lavorerai sempre in una cartella dedicata, chiamata `palestra`. Creala ed entraci:

```bash
cd ~
mkdir palestra
cd palestra
pwd
```

Risultato atteso:

```text
/home/mario/palestra
```

Ogni volta che riapri il terminale per continuare gli esercizi, torna qui con `cd ~/palestra`.

> 🛑 **Pericolo:** durante le prove non lavorare mai in `/mnt/c` (WSL) o nelle cartelle condivise con il Mac (per esempio `/media/psf` con Parallels): lì i comandi agiscono sui file veri di Windows o del Mac. Prima di ogni cancellazione controlla con `pwd` di trovarti in `palestra`.

### 5.2 Creare

```bash
# Crea una cartella
mkdir progetti

# Crea più cartelle annidate in un colpo solo (-p = "anche quelle intermedie")
mkdir -p progetti/2026/foto

# Crea un file vuoto
touch appunti.txt
```

### 5.3 Leggere il contenuto di un file

Il file `appunti.txt` appena creato è vuoto. Per fare pratica usa due file di testo che su Debian esistono sempre: `/etc/os-release`, che descrive la versione del sistema, e `/etc/passwd`, l'elenco degli utenti.

| Comando | Cosa fa | Quando usarlo |
| :--- | :--- | :--- |
| `cat /etc/os-release` | stampa tutto il file a video | file brevi |
| `less /etc/passwd` | apre il file in una finestra scorrevole (frecce per muoversi, `/` per cercare, **`q` per uscire**) | file lunghi |
| `head /etc/passwd` | mostra le prime 10 righe | per dare un'occhiata all'inizio |
| `tail /etc/passwd` | mostra le ultime 10 righe | per vedere la fine, per esempio di un log |
| `tail -n 3 /etc/passwd` | mostra le ultime 3 righe | per scegliere quante righe vedere |

> 💡 **Consiglio:** con `cat /etc/os-release` scopri quale versione di Debian stai usando: guarda la riga `PRETTY_NAME`.

### 5.4 Copiare, spostare, rinominare

```bash
# Copia un file (originale → copia)
cp appunti.txt appunti_copia.txt

# Copia un file dentro una cartella
cp appunti.txt progetti/

# Copia una cartella con tutto il suo contenuto (-r = "ricorsivo")
cp -r progetti progetti_backup

# Rinomina un file (in Linux rinominare = spostare con un nome nuovo)
mv appunti_copia.txt vecchi_appunti.txt

# Sposta un file in un'altra cartella
mv vecchi_appunti.txt progetti/
```

> ⚠️ **Attenzione:** se il file di destinazione esiste già, `cp` e `mv` lo **sovrascrivono senza chiedere**. Aggiungi `-i` (`cp -i`, `mv -i`) per farti chiedere conferma.

### 5.5 Cancellare

```bash
# Cancella un file (vecchi_appunti.txt ora si trova dentro progetti)
rm progetti/vecchi_appunti.txt

# Crea una cartella vuota e poi cancellala
mkdir cartella_vuota
rmdir cartella_vuota

# Cancella una cartella con tutto il suo contenuto
rm -r progetti_backup

# Chiedi conferma prima di cancellare
rm -i appunti.txt
```

Con `-i` il terminale chiede conferma, per esempio `rm: rimuovere file regolare vuoto 'appunti.txt'?`. Rispondi `s` (o `y`) e premi Invio per cancellare; qualunque altra risposta annulla.

> 🛑 **Pericolo: nel terminale non esiste il cestino.** Un file cancellato con `rm` è perso per sempre. Prima di premere Invio rileggi il comando, soprattutto se contiene `-r` o il simbolo `*`. Non eseguire mai `rm -rf` seguito da un percorso di cui non sei sicuro.

### 5.6 I caratteri jolly

L'asterisco `*` significa "qualunque sequenza di caratteri". Prepara alcuni file vuoti su cui provarlo:

```bash
# touch può creare più file in un colpo solo
touch foto1.jpg foto2.jpg nota.txt
```

```bash
# Elenca solo i file che finiscono con .jpg
ls *.jpg

# Crea la cartella foto e copiaci tutti i file .jpg
mkdir foto
cp *.jpg foto/
ls foto
```

Risultato atteso: entrambi gli `ls` mostrano

```text
foto1.jpg  foto2.jpg
```

> 💡 **Consiglio:** prima di usare `*` con `rm`, prova lo stesso schema con `ls` per vedere esattamente quali file verrebbero cancellati: prima `ls *.jpg`, poi `rm *.jpg`.

### 5.7 Modificare un file di testo con `nano`

`nano` è un editor di testo che funziona dentro il terminale. È il più semplice per iniziare. (Se il terminale risponde `comando non trovato`, leggi il riquadro nella sezione 3.5.)

```bash
nano appunti.txt
```

Se il file non esiste, `nano` lo crea quando salvi. Una volta dentro:

* **Scrivi** normalmente e muoviti con le **frecce** (il mouse di solito non serve).
* In fondo alla finestra sono elencati i comandi. Il simbolo **`^`** significa **Ctrl**: `^X` vuol dire **Ctrl + X**.

| Scorciatoia | Azione |
| :--- | :--- |
| **Ctrl + O**, poi **Invio** | Salva (Invio conferma il nome del file) |
| **Ctrl + X** | Esci. Se ci sono modifiche non salvate, chiede se salvarle: rispondi **S** (Sì) o **N** (No). Su un sistema in inglese le lettere sono **Y** e **N**. |
| **Ctrl + W** | Cerca una parola |
| **Ctrl + K** | Taglia la riga intera |
| **Ctrl + U** | Incolla la riga tagliata |
| **Alt + U** | Annulla l'ultima modifica |

### ✍️ Mettiti alla prova

1. Dentro `palestra`, crea la cartella `esercizi` e, al suo interno, il file `lista.txt`.
2. Apri `lista.txt` con `nano`, scrivi tre righe di testo, salva ed esci.
3. Mostra il contenuto del file con `cat`.
4. Copia `lista.txt` in `lista_vecchia.txt`, poi cancella `lista_vecchia.txt`.

---

## 6. La tua prima sessione guidata

In questo esercizio, di circa 10 minuti, usi insieme tutto quello che hai imparato. Lavori in una sottocartella di `palestra`, chiamata `sessione`, che alla fine cancellerai: non rischi nulla.

**Passo 1 — Entra nella palestra e crea la cartella della sessione**

```bash
cd ~/palestra
mkdir sessione
cd sessione
pwd
```

Risultato atteso:

```text
/home/mario/palestra/sessione
```

**Passo 2 — Crea un file e controlla che esista**

```bash
touch primo.txt
ls
```

Risultato atteso:

```text
primo.txt
```

**Passo 3 — Scrivi qualcosa nel file**

```bash
nano primo.txt
```

Scrivi `Ciao Linux!`, poi salva (**Ctrl + O**, **Invio**) ed esci (**Ctrl + X**). Controlla il contenuto:

```bash
cat primo.txt
```

Risultato atteso:

```text
Ciao Linux!
```

**Passo 4 — Copia, rinomina e sposta**

```bash
cp primo.txt copia.txt
mv copia.txt secondo.txt
mkdir archivio
mv secondo.txt archivio/
ls
ls archivio
```

Risultato atteso:

```text
archivio  primo.txt
secondo.txt
```

La prima riga è il contenuto di `palestra`, la seconda il contenuto di `archivio`.

**Passo 5 — Guarda i dettagli**

```bash
ls -l
```

Risultato atteso (data e ora saranno diverse):

```text
totale 8
drwxr-xr-x 2 mario mario 4096 25 ott 10:42 archivio
-rw-r--r-- 1 mario mario   12 25 ott 10:40 primo.txt
```

La `d` all'inizio della prima riga indica una cartella (*directory*). Il resto lo spiegheremo nel capitolo 10.

**Passo 6 — Provoca un errore di proposito**

```bash
cat inesistente.txt
```

Risultato atteso:

```text
cat: inesistente.txt: File o directory non esistente
```

(Su un sistema in inglese: `No such file or directory`.) Gli errori non rompono nulla: leggili, ti dicono esattamente cosa non va.

**Passo 7 — Fai pulizia**

```bash
cd ..
rm -r sessione
ls
```

La cartella `sessione` non compare più nell'elenco. La cartella `palestra` invece resta: ti servirà nei prossimi capitoli. Complimenti: hai completato la tua prima sessione nel terminale!

---

# Parte II — Usare il sistema

## 7. L'amministratore e il comando `sudo`

### 7.1 Utente normale e utente root

In Linux esiste un utente speciale, **root**, che può fare qualunque cosa: installare programmi, modificare la configurazione del sistema, cancellare qualsiasi file. Proprio per questo non si lavora mai come root. Si usa il proprio utente normale e, solo quando serve, si "prendono in prestito" i poteri di amministratore con il comando **`sudo`** (*superuser do*).

```bash
# Con quale utente sto lavorando?
whoami
```

Risultato atteso:

```text
mario
```

### 7.2 Usare `sudo`

Basta scrivere `sudo` prima del comando da eseguire come amministratore:

```bash
sudo apt update
```

Il terminale chiede una password:

```text
[sudo] password di mario:
```

> ⚠️ **Attenzione — la password è invisibile.** Mentre digiti la password **non compare nulla**: niente asterischi, niente puntini, il cursore resta fermo. È normale: è una misura di sicurezza. Digitala alla cieca e premi **Invio**. Se sbagli, il terminale te la richiede.

Altre cose da sapere:

* La password richiesta è **quella del tuo utente**, non una password speciale.
* Dopo averla inserita, `sudo` non la chiede di nuovo per circa **15 minuti**.
* Usa `sudo` solo quando serve davvero (installare programmi, modificare file di sistema). Per lavorare sui tuoi file non serve mai.

### 7.3 Se `sudo` non funziona (tipico di Debian)

Durante l'installazione Debian chiede se impostare una password per l'utente root.

* Se **hai lasciato vuota** la password di root, Debian ha già abilitato `sudo` per il tuo utente: puoi saltare questa sezione.
* Se **hai impostato** una password di root, il tuo utente non può usare `sudo`, e vedrai uno di questi messaggi:

```text
mario non è nel file sudoers.
```

```text
bash: sudo: comando non trovato
```

La soluzione si applica una volta sola. Diventa root con `su -` (la password richiesta è quella di **root**, anch'essa invisibile) e aggiungi il tuo utente al gruppo `sudo`:

```bash
# Da adattare: al posto di mario scrivi il tuo nome utente (lo vedi con whoami)
# Diventa root: il prompt finirà con # invece di $
su -

# Solo se avevi visto "comando non trovato": installa sudo
apt install sudo

# Aggiungi mario al gruppo sudo (usa il TUO nome utente)
usermod -aG sudo mario

# Torna al tuo utente normale
exit
```

Ora **esci dalla sessione e rientra** (o riavvia il computer): la modifica vale solo dal nuovo accesso. Per verificare:

```bash
groups
```

Nel risultato deve comparire la parola `sudo`.

> 💡 **WSL:** con Debian su WSL `sudo` è già configurato per l'utente creato al primo avvio.

> 🛑 **Pericolo:** quando il prompt termina con `#` sei root e ogni comando ha pieni poteri. Fai solo l'operazione necessaria e torna subito al tuo utente con `exit`.

---

## 8. Installare programmi con `apt`

### 8.1 Come funziona

In Linux non si scaricano installatori `.exe` dai siti web. Debian offre un enorme catalogo di programmi controllati e sicuri, i **repository**, da cui si installa con lo strumento **`apt`**. Funziona come un "negozio di app" da riga di comando, ed è gratuito.

### 8.2 I comandi principali

```bash
# 1. Aggiorna l'ELENCO dei programmi disponibili (non installa niente)
sudo apt update

# 2. Aggiorna i programmi GIÀ INSTALLATI alle versioni nuove
sudo apt upgrade

# 3. Cerca un programma
apt search editor

# 4. Mostra le informazioni su un programma
apt show htop

# 5. Installa un programma
sudo apt install htop

# 6. Disinstalla un programma
sudo apt remove htop

# 7. Rimuovi le dipendenze che non servono più a nessun programma
sudo apt autoremove
```

La differenza tra `update` e `upgrade` confonde tutti all'inizio:

* **`update`** è come sfogliare il catalogo aggiornato del negozio: scopri cosa c'è di nuovo, ma non compri niente.
* **`upgrade`** è come sostituire i programmi che hai già con le loro versioni nuove.

Per tenere aggiornato il sistema esegui periodicamente entrambi, in quest'ordine.

### 8.3 La domanda di conferma

Prima di installare o aggiornare, `apt` mostra cosa sta per fare e chiede conferma:

```text
Continuare? [S/n]
```

La lettera **maiuscola** è la risposta predefinita: premendo solo **Invio** rispondi "Sì". Per annullare scrivi `n` e premi Invio.

> 💡 **Consiglio:** con l'opzione `-y` `apt` risponde "Sì" da solo: `sudo apt install -y htop`. Comodo, ma all'inizio è meglio leggere cosa sta per fare.

> ⚠️ **Attenzione:** evita di scaricare file `.deb` da siti sconosciuti. Usa i repository di Debian: sono controllati e si aggiornano da soli.

> 💡 **Altre distribuzioni:** `apt` è lo strumento di Debian e delle distribuzioni derivate (Ubuntu, Linux Mint). Altre distribuzioni usano strumenti diversi, con lo stesso principio:
>
> | Azione | Debian | Fedora | Arch Linux |
> | :--- | :--- | :--- | :--- |
> | Installare | `sudo apt install <nome>` | `sudo dnf install <nome>` | `sudo pacman -S <nome>` |
> | Aggiornare tutto | `sudo apt update && sudo apt upgrade` | `sudo dnf upgrade` | `sudo pacman -Syu` |

### ✍️ Mettiti alla prova

1. Aggiorna l'elenco dei pacchetti.
2. Cerca il programma `cowsay` e leggi le sue informazioni con `apt show`.
3. Installalo e prova `cowsay Ciao`. Poi disinstallalo.

---

## 9. Cercare file e testo

Due comandi, due scopi diversi:

* **`find`** cerca i **file** in base al nome, al tipo o alla dimensione.
* **`grep`** cerca **parole dentro** i file.

### 9.1 `find`: trovare un file

Gli esempi cercano i file creati nel capitolo 5, quindi parti dalla palestra:

```bash
cd ~/palestra

# Cerca, dalla cartella corrente (.) in giù, tutti i file che finiscono con .txt
find . -name "*.txt"

# Cerca nella tua cartella personale, ignorando maiuscole e minuscole (-iname)
find ~ -iname "FOTO*"

# Cerca solo le cartelle (-type d) che si chiamano "foto"
find ~ -type d -name "foto"
```

> ⚠️ **Attenzione:** metti sempre il nome tra virgolette quando contiene `*`, altrimenti la shell lo interpreta prima di passarlo a `find`.

> 💡 **Consiglio:** se cerchi in tutto il sistema (`find / -name ...`) vedrai molti messaggi `Permesso negato` per le cartelle riservate all'amministratore. Per nasconderli aggiungi `2>/dev/null` in fondo al comando: `find / -name "*.conf" 2>/dev/null`.

### 9.2 `grep`: trovare una parola dentro i file

```bash
# Mostra le righe del file che contengono il tuo nome utente
grep "$USER" /etc/passwd

# Ignora maiuscole/minuscole (-i) e mostra il numero di riga (-n)
grep -in "alias" ~/.bashrc

# Cerca la parola "debian" in tutti i file di una cartella e delle sue sottocartelle (-r)
grep -r "debian" /etc/apt
```

`$USER` contiene il tuo nome utente: le variabili come questa sono spiegate nel capitolo 14.

Risultato atteso del primo comando:

```text
mario:x:1000:1000:Mario,,,:/home/mario:/bin/bash
```

### 9.3 La pipe `|`: collegare i comandi

La barra verticale `|` (si legge *pipe*, "tubo") passa il risultato di un comando al comando successivo. È uno dei concetti più potenti di Linux.

```bash
# Elenca /etc e sfoglia il risultato con less, invece di vederlo scorrere via
ls -l /etc | less

# Tra tutti i comandi digitati, mostra solo quelli che contengono "apt"
history | grep apt
```

### 9.4 Salvare il risultato in un file: `>` e `>>`

```bash
# Scrive l'elenco dei file in elenco.txt (crea il file o lo SOVRASCRIVE)
ls -l > elenco.txt

# Aggiunge una riga in FONDO al file, senza cancellare il resto
echo "Riga aggiunta" >> elenco.txt
```

> 🛑 **Pericolo:** `>` cancella il contenuto precedente del file senza chiedere. Se vuoi aggiungere, usa sempre `>>`.

### ✍️ Mettiti alla prova

1. Trova tutti i file `.conf` dentro `/etc` (solo nella cartella `/etc`, senza `sudo`; ignora gli eventuali `Permesso negato`).
2. Cerca la riga che contiene il tuo nome utente nel file `/etc/group`.
3. Salva in `pacchetti.txt` l'elenco dei pacchetti installati (`apt list --installed`) e conta quante righe ha con `wc -l pacchetti.txt`.

---

## 10. Permessi e proprietà

### 10.1 Leggere i permessi

Ogni file appartiene a un **utente** (il proprietario) e a un **gruppo**. Vedi entrambi con `ls -l`:

```text
-rw-r--r-- 1 mario mario 1234 25 ott 10:30 appunti.txt
```

La prima colonna, `-rw-r--r--`, si legge così:

| Posizione | Valore nell'esempio | Significato |
| :--- | :--- | :--- |
| 1° carattere | `-` | tipo: `-` = file, `d` = cartella, `l` = collegamento |
| caratteri 2–4 | `rw-` | cosa può fare il **proprietario** (`mario`) |
| caratteri 5–7 | `r--` | cosa possono fare i membri del **gruppo** (`mario`) |
| caratteri 8–10 | `r--` | cosa possono fare **tutti gli altri** |

Le lettere hanno questo significato:

| Lettera | Su un file | Su una cartella |
| :---: | :--- | :--- |
| `r` | leggere il contenuto | elencare i file contenuti |
| `w` | modificare il contenuto | creare o cancellare file al suo interno |
| `x` | eseguirlo come programma | entrarci con `cd` |
| `-` | permesso assente | permesso assente |

Nell'esempio, quindi, `mario` può leggere e modificare `appunti.txt`; tutti gli altri possono solo leggerlo.

### 10.2 `chmod`: cambiare i permessi (modo con le lettere)

**Preparazione.** Crea nella palestra i file usati negli esempi di questo capitolo:

```bash
cd ~/palestra
touch script.sh diario.txt progetto.txt
```

Dopo ogni `chmod` puoi controllare il risultato con `ls -l`.

Il modo più intuitivo usa le lettere: **chi** (`u` = proprietario, *user*; `g` = gruppo; `o` = altri, *others*; `a` = tutti), **`+` o `-`** (aggiungi o togli) e **quale permesso** (`r`, `w`, `x`).

```bash
# Rendi eseguibile il file per tutti
chmod +x script.sh

# Togli agli "altri" il permesso di lettura
chmod o-r diario.txt

# Dai al gruppo il permesso di scrittura
chmod g+w progetto.txt
```

### 10.3 `chmod`: il modo con i numeri

Nelle guide online troverai spesso comandi come `chmod 755`. Ogni permesso ha un valore: **r = 4, w = 2, x = 1**. Si sommano, e le **tre cifre** corrispondono nell'ordine a **proprietario, gruppo, altri**.

| Numero | Lettere | Significato | Uso tipico |
| :---: | :---: | :--- | :--- |
| `644` | `rw-r--r--` | il proprietario legge e scrive; gli altri leggono | documenti normali |
| `755` | `rwxr-xr-x` | il proprietario fa tutto; gli altri leggono ed eseguono | programmi, script, cartelle |
| `600` | `rw-------` | solo il proprietario legge e scrive | file privati |
| `700` | `rwx------` | solo il proprietario può fare tutto | cartelle private |

Esempio: `7` = 4 + 2 + 1 = `rwx`; `5` = 4 + 1 = `r-x`; `4` = `r--`.

> 🛑 **Pericolo:** non seguire mai i consigli che suggeriscono `chmod 777` "per risolvere un problema di permessi". Così chiunque può modificare quel file: è una falla di sicurezza, non una soluzione.

### 10.4 `chown`: cambiare il proprietario

Molti file di sistema appartengono a root, ed è giusto così: **non vanno "ripresi"**. `chown` serve in un caso preciso: un **tuo file di lavoro**, dentro la tua cartella personale, che hai creato per sbaglio con `sudo` e che ora appartiene a root. Puoi simulare la situazione nella palestra:

```bash
cd ~/palestra

# Crea un file con sudo: apparterrà a root
sudo touch creato_con_sudo.txt
ls -l creato_con_sudo.txt

# Restituiscilo al tuo utente e al tuo gruppo (sintassi: utente:gruppo)
sudo chown "$USER":"$USER" creato_con_sudo.txt
ls -l creato_con_sudo.txt
```

Il primo `ls -l` mostra `root root`, il secondo il tuo nome utente.

Per una cartella e tutto ciò che contiene si aggiunge `-R` (*ricorsivo*):

```bash
# Da adattare: sostituisci progetto_mio con una TUA cartella dentro la tua home
sudo chown -R "$USER":"$USER" ~/progetto_mio
```

> 🛑 **Pericolo:** `-R` cambia il proprietario di **tutto** il contenuto, sottocartelle comprese. Usalo solo su cartelle tue dentro la tua home. Mai su cartelle di sistema come `/`, `/etc`, `/usr` o `/var`: i programmi che le usano smetterebbero di funzionare.

### 10.5 Il tuo primo script

Uno **script** è un file di testo che contiene una serie di comandi da eseguire in sequenza. Creane uno nella palestra:

```bash
cd ~/palestra
nano ciao.sh
```

Scrivi queste righe, poi salva ed esci:

```bash
#!/bin/bash
echo "Ciao, $USER!"
echo "Oggi è: $(date)"
echo "Ti trovi nella cartella: $(pwd)"
```

La prima riga, `#!/bin/bash`, dice al sistema di eseguire il file con Bash (anche se inizia con `#`, qui non è un commento: è un'indicazione speciale chiamata *shebang*). `$(...)` inserisce nel testo il risultato di un comando.

Rendilo eseguibile e avvialo:

```bash
chmod +x ciao.sh
./ciao.sh
```

Risultato atteso (con la data di oggi):

```text
Ciao, mario!
Oggi è: dom 25 ott 2026, 11:05:12, CET
Ti trovi nella cartella: /home/mario/palestra
```

Il prefisso **`./`** significa "il file che si trova qui, nella cartella corrente". Senza `./` la shell cerca il comando solo nelle cartelle di sistema e risponde `comando non trovato`.

### ✍️ Mettiti alla prova

1. Crea un file `segreto.txt` e fai in modo che solo tu possa leggerlo e modificarlo (con i numeri).
2. Controlla il risultato con `ls -l`: quali lettere vedi nella prima colonna?
3. Modifica `ciao.sh` aggiungendo una riga che mostri il contenuto della cartella corrente.

---

## 11. Processi, memoria e disco

Ogni programma in esecuzione è un **processo** e riceve dal sistema un numero di identificazione unico, il **PID** (*Process ID*).

### 11.1 Interrompere il comando nel terminale

* **Ctrl + C**: interrompe il comando che sta girando nel terminale. È il primo tentativo da fare.

> ⚠️ **Attenzione:** **Ctrl + Z** non interrompe il comando: lo **sospende** e lo mette in pausa in sottofondo. Se l'hai premuto per sbaglio, digita `fg` per riprenderlo.

### 11.2 Vedere i processi: `top` e `htop`

```bash
top
```

`top` è sempre presente: mostra i processi in tempo reale, ordinati per uso del processore. **Esci con `q`**.

`htop` è la versione colorata e più comoda, simile al Task Manager di Windows. Su Debian va installato:

```bash
sudo apt install htop
htop
```

* In alto vedi le barre del processore (una per ogni *core*) e la memoria usata.
* Seleziona un processo con le frecce e premi **F9** (o **k**) per terminarlo.
* Premi **F10** o **q** per uscire.

> 🍎 **Su Mac:** i tasti funzione si premono insieme a **fn**: **fn + F9** per terminare un processo, **fn + F10** per uscire. Il tasto **q** funziona senza fn.

### 11.3 Trovare il PID di un programma

Per fare pratica senza rischi avvia un processo innocuo: `sleep 300` aspetta 300 secondi senza fare nulla, e il simbolo `&` lo fa girare in sottofondo, lasciandoti libero il terminale.

```bash
# Avvia il processo di prova in sottofondo
sleep 300 &

# Mostra i processi che si chiamano "sleep" con il loro PID
pgrep -a sleep

# In alternativa: elenca tutti i processi e filtra con grep
ps aux | grep sleep
```

Risultato atteso di `pgrep` (il numero sarà diverso):

```text
4512 sleep 300
```

Il numero all'inizio è il PID. Con un programma vero il procedimento è lo stesso, per esempio `pgrep -a firefox`.

### 11.4 Chiudere un programma bloccato

```bash
# Da adattare: al posto di 4512 scrivi il PID che ti ha mostrato pgrep
# Chiede gentilmente al processo di chiudersi
kill 4512
```

Se il processo non risponde, si forza la chiusura immediata con `-9`, ma solo come ultima risorsa:

```bash
# Da adattare: al posto di 4512 scrivi il PID
kill -9 4512
```

Per chiudere un programma per nome, senza conoscere il PID:

```bash
# Avvia un altro processo di prova e chiudilo per nome
sleep 300 &
pkill sleep
```

> ⚠️ **Attenzione:** `kill -9` chiude il programma all'istante, senza dargli il tempo di salvare. Usalo solo se `kill` da solo non ha funzionato. Potresti trovare anche `killall firefox`: fa la stessa cosa di `pkill`; se manca, si installa con `sudo apt install psmisc`.

### 11.5 Memoria e spazio su disco

```bash
# Quanta memoria RAM è usata e quanta è libera (-h = unità leggibili)
free -h

# Quanto spazio è occupato e libero su ogni disco
df -h

# Quanto occupa una cartella
du -sh ~/palestra
```

---

## 12. Rete e download

### 12.1 La connessione funziona? `ping`

```bash
# Invia 4 segnali a debian.org e aspetta la risposta
ping -c 4 debian.org
```

Se ricevi le risposte, la connessione funziona. Senza `-c 4`, `ping` continua all'infinito: in quel caso fermalo con **Ctrl + C**.

Come leggere il risultato:

* **Arrivano le risposte**: compaiono righe con il tempo di risposta e, alla fine, un riepilogo con `0%` di pacchetti persi. Quel computer è raggiungibile.
* **Il comando si ferma subito con un errore sul nome**, come `Nome o servizio sconosciuto` o un messaggio che parla di *risoluzione del nome* (*name resolution*): il tuo computer non riesce a tradurre `debian.org` in un indirizzo. Il problema è nella "rubrica" dei nomi, il DNS.
* **Non arriva nessuna risposta**, senza errori sul nome: può essere un problema della tua connessione, ma non è detto. Alcune reti e alcuni server non rispondono a `ping` di proposito. Prova un altro indirizzo e controlla se il browser apre i siti.

### 12.2 Il mio indirizzo IP

```bash
ip a
```

Cerca la riga che inizia con `inet` sotto la scheda di rete (per esempio `inet 192.168.1.23/24`): quello è il tuo indirizzo nella rete locale.

> 💡 **Consiglio:** molte guide vecchie usano `ifconfig`, che su Debian non è più installato. Il comando moderno è `ip`.

### 12.3 Scaricare file: `wget` e `curl`

Il file viene salvato nella cartella corrente, quindi prima spostati dove vuoi salvarlo. Per provare, scarica la pagina di `example.com`, un sito che esiste apposta per gli esempi:

```bash
cd ~/palestra

# wget scarica il file mantenendo il suo nome (qui: index.html)
wget https://example.com/index.html

# curl: -O (O maiuscola) salva con il nome originale, -L segue i reindirizzamenti
curl -LO https://example.com/index.html
```

Per scaricare un file vero si usa lo stesso schema:

```bash
# Da adattare: sostituisci <indirizzo> con il link completo del file, che inizia con https://
wget <indirizzo>
```

Su Debian `wget` è quasi sempre presente; `curl` potrebbe mancare: in quel caso installalo con `sudo apt install curl`.

---

## 13. Archivi compressi

### 13.1 Archivi `.tar.gz` (i più comuni su Linux)

**Preparazione.** Crea nella palestra una cartella con qualche file da archiviare:

```bash
cd ~/palestra
mkdir da_archiviare
touch da_archiviare/uno.txt da_archiviare/due.txt
```

```bash
# Crea un archivio compresso a partire dalla cartella
tar -czvf backup.tar.gz da_archiviare/

# Guarda cosa contiene l'archivio, senza estrarlo (-t = elenca)
tar -tf backup.tar.gz

# Estrai in una cartella specifica (-C), che deve già esistere
mkdir estratti_tar
tar -xf backup.tar.gz -C estratti_tar

# Estrai nella cartella corrente (tar riconosce da solo il tipo di compressione)
tar -xf backup.tar.gz
```

Per ricordare le lettere: **c** = *create* (crea), **x** = *extract* (estrai), **t** = *list* (elenca), **z** = comprimi con gzip, **v** = *verbose* (mostra i file uno per uno), **f** = *file* (il nome dell'archivio segue subito dopo).

> ⚠️ **Attenzione:** l'estrazione sovrascrive senza chiedere i file con lo stesso nome già presenti. Per questo conviene prima elencare il contenuto con `-t`.

### 13.2 Archivi `.zip`

Su Debian i comandi per i file zip vanno installati:

```bash
sudo apt install zip unzip
```

```bash
# Crea uno zip della cartella di prova (-r = con tutto il contenuto)
zip -r archivio.zip da_archiviare/

# Guarda il contenuto
unzip -l archivio.zip

# Estrai in una cartella specifica (-d), che viene creata se non esiste
unzip archivio.zip -d estratti_zip
```

Con `unzip archivio.zip`, senza `-d`, i file vengono estratti nella cartella corrente. Se esistono già file con lo stesso nome, `unzip` chiede cosa fare: `y` sovrascrive, `n` salta, `A` sovrascrive tutti, `N` li salta tutti.

---

# Parte III — Andare oltre

## 14. Personalizzare la shell: alias e variabili

### 14.1 Il file `.bashrc`

Ogni volta che apri un terminale, Bash legge un file nascosto nella tua cartella personale: **`~/.bashrc`**. Ciò che scrivi lì viene **riapplicato a ogni apertura del terminale**. È il posto giusto per le tue personalizzazioni.

> ⚠️ **Attenzione:** prima di modificarlo fanne sempre una copia di sicurezza:
>
> ```bash
> cp ~/.bashrc ~/.bashrc.bak
> ```
>
> Se qualcosa va storto, la ripristini con `cp ~/.bashrc.bak ~/.bashrc`.

### 14.2 Gli alias: le tue scorciatoie

Un **alias** è una parola inventata da te che sostituisce un comando lungo. Esempio: vuoi digitare `aggiorna` per aggiornare tutto il sistema.

1. Apri il file:
   ```bash
   nano ~/.bashrc
   ```
2. Vai in fondo al file con la freccia giù (o con **Alt + /**).
3. Aggiungi queste righe:
   ```bash
   # Le mie scorciatoie
   alias aggiorna='sudo apt update && sudo apt upgrade'
   alias ll='ls -lh'
   alias rm='rm -i'
   ```
   * `&&` significa "esegui il secondo comando solo se il primo è riuscito".
   * L'alias `rm='rm -i'` ti fa chiedere conferma prima di ogni cancellazione: un'ottima protezione mentre impari.
4. Salva ed esci: **Ctrl + O**, **Invio**, **Ctrl + X**.
5. Applica subito le modifiche, senza chiudere il terminale:
   ```bash
   source ~/.bashrc
   ```

Ora prova `aggiorna` oppure `ll`. Per vedere tutti gli alias attivi digita `alias`.

> 💡 **Consiglio:** nel `.bashrc` di Debian ci sono già alcuni alias pronti, disattivati con un `#` davanti (per esempio `#alias ll='ls -l'`). Per attivarli basta cancellare il `#`.

### 14.3 Le variabili d'ambiente

Una **variabile** è un'etichetta che contiene un'informazione. Il sistema ne ha già molte; per leggerne il valore si mette il simbolo **`$`** davanti al nome:

```bash
echo $HOME
echo $USER
```

Risultato atteso:

```text
/home/mario
mario
```

Puoi crearne di tue. Aggiungi in fondo a `~/.bashrc` righe come queste:

```bash
# L'editor predefinito per i programmi che ne chiedono uno
export EDITOR="nano"

# Una scorciatoia verso la cartella dei tuoi appunti
export APPUNTI="$HOME/Documenti/appunti"
```

Poi esegui `source ~/.bashrc`. Assegnare un percorso a una variabile **non crea** la cartella: creala tu, poi entraci usando la variabile:

```bash
mkdir -p "$APPUNTI"
cd "$APPUNTI"
pwd
```

Risultato atteso:

```text
/home/mario/Documenti/appunti
```

> 💡 **Regola pratica:** quando una variabile contiene un percorso, scrivila tra **virgolette doppie**, come `"$APPUNTI"`. Così il comando funziona anche se il percorso contiene spazi. Le virgolette semplici non vanno bene: con `'$APPUNTI'` la shell legge il testo così com'è e non lo sostituisce con il valore della variabile.

Il comando `export` rende la variabile disponibile anche ai programmi che avvii dal terminale.

> 💡 **La variabile `PATH`:** contiene l'elenco delle cartelle in cui la shell cerca i comandi (prova `echo $PATH`). Su Debian, se crei la cartella `~/bin` o `~/.local/bin` e ci metti i tuoi script, dal prossimo accesso potrai avviarli da qualunque posizione, senza `./` davanti.

---

## 15. Quando qualcosa va storto

### 15.1 I messaggi di errore più comuni

| Messaggio (italiano / inglese) | Cosa significa | Cosa fare |
| :--- | :--- | :--- |
| `comando non trovato` / `command not found` | La shell non trova il comando. | Controlla maiuscole e lettere. Il programma potrebbe non essere installato (`apt search`). Se è uno script nella cartella corrente, aggiungi `./` davanti. |
| `Permesso negato` / `Permission denied` | Non hai i permessi per quell'operazione su quel file o cartella. | Prima controlla **dove** sei (`pwd`) e **cosa** stai facendo: spesso il percorso è sbagliato. Se è un tuo script, rendilo eseguibile con `chmod +x`. Se è un tuo file di lavoro creato per sbaglio con `sudo`, restituiscilo al tuo utente con `chown` (sezione 10.4). Usa `sudo` solo se stai facendo di proposito un'operazione di amministrazione, come installare un programma o modificare un file in `/etc`. |
| `File o directory non esistente` / `No such file or directory` | Il percorso è sbagliato. | Controlla dove sei con `pwd` e cosa c'è con `ls`. Usa Tab per completare i nomi. |
| `-r non specificato; omessa la directory` / `-r not specified; omitting directory` | Stai copiando una cartella senza `-r`. | Usa `cp -r`. |
| `Impossibile trovare il pacchetto` / `Unable to locate package` | `apt` non conosce quel nome. | Esegui `sudo apt update` e controlla il nome con `apt search`. |
| `Impossibile acquisire il lock` / `Could not get lock` | Un altro programma sta già installando o aggiornando. | Aspetta qualche minuto (magari sono in corso gli aggiornamenti automatici). Non cancellare i file di lock. |
| `mario non è nel file sudoers` / `mario is not in the sudoers file` | Il tuo utente non può usare `sudo`. | Vedi la sezione 7.3. |
| Errore su `cdrom://` durante `apt update` | Il sistema cerca ancora pacchetti sul DVD di installazione. | Apri il file con `sudo nano /etc/apt/sources.list` e metti un `#` all'inizio della riga che contiene `cdrom`. |

### 15.2 Il terminale non risponde più

| Situazione | Soluzione |
| :--- | :--- |
| Un comando non finisce mai | **Ctrl + C** |
| Sei dentro `man`, `less`, `top` o `htop` | premi **q** |
| Sei finito per sbaglio nell'editor `vi`/`vim` (in basso vedi `~` su ogni riga vuota) | premi **Esc**, scrivi `:q!` e premi **Invio** |
| Il terminale sembra congelato e non scrive nulla | forse hai premuto **Ctrl + S** (che blocca lo schermo): premi **Ctrl + Q** per sbloccarlo |
| Il prompt è diventato `>` e non torna normale | hai lasciato aperte delle virgolette: premi **Ctrl + C** e riscrivi il comando |

### 15.3 Come affrontare un errore

1. **Leggi il messaggio**: quasi sempre dice esattamente cosa non va, e spesso in quale file o riga.
2. **Rileggi il comando**: un errore di battitura, uno spazio in più o in meno, una maiuscola sbagliata.
3. **Cerca il messaggio esatto** su un motore di ricerca, tra virgolette, insieme alla parola "Debian". Se il sistema è in italiano, prova anche con il messaggio in inglese: trovi molti più risultati.

### 15.4 Le regole di sicurezza

* 🛑 **Non incollare comandi trovati su internet senza capirli**, soprattutto se contengono `sudo`, `rm` o `curl ... | bash`. Il sito **explainshell.com** spiega pezzo per pezzo cosa fa un comando.
* 🛑 **Non usare `rm -rf`** su percorsi di cui non sei assolutamente sicuro.
* 🛑 **Fai le prove nella cartella `palestra`**, mai in `/mnt/c` (WSL) o nelle cartelle condivise con il Mac.
* ⚠️ **Fai una copia prima di modificare un file di configurazione**: `sudo cp /etc/<file> /etc/<file>.bak`.
* ⚠️ **Usa `sudo` solo quando serve.** Un `Permesso negato` non si risolve aggiungendo `sudo` d'istinto: prima capisci perché succede. E non restare a lavorare come root.
* ⚠️ **Installa i programmi dai repository di Debian** invece che da siti sconosciuti.
* 💡 **Tieni aggiornato il sistema** con `sudo apt update && sudo apt upgrade`.

---

## 16. Riepilogo: "Cosa voglio fare?"

| Voglio... | Comando | Nota |
| :--- | :--- | :--- |
| sapere dove mi trovo | `pwd` | |
| vedere cosa c'è in una cartella | `ls -l` | `-a` per i file nascosti |
| entrare in una cartella | `cd <cartella>` | `cd ..` per salire, `cd` per tornare a casa |
| creare una cartella | `mkdir <nome>` | `-p` per creare anche le intermedie |
| creare un file vuoto | `touch <nome>` | |
| leggere un file | `cat <file>` o `less <file>` | `q` per uscire da `less` |
| modificare un file | `nano <file>` | Ctrl + O salva, Ctrl + X esce |
| modificare un file di sistema | `sudo nano <file>` | prima fai una copia del file! |
| copiare | `cp <origine> <destinazione>` | `-r` per le cartelle |
| spostare o rinominare | `mv <origine> <destinazione>` | |
| cancellare | `rm <file>` | 🛑 non c'è il cestino |
| trovare un file | `find ~ -name "<nome>"` | |
| trovare una parola nei file | `grep -r "<parola>" <cartella>` | `-i` ignora le maiuscole |
| installare un programma | `sudo apt install <nome>` | prima `sudo apt update` |
| aggiornare il sistema | `sudo apt update && sudo apt upgrade` | |
| rendere eseguibile uno script | `chmod +x <script>` | poi avvialo con `./<script>` |
| vedere i programmi in esecuzione | `top` o `htop` | `q` per uscire |
| chiudere un programma bloccato | `pkill <nome>` | `kill -9 <PID>` come ultima risorsa |
| vedere lo spazio libero su disco | `df -h` | |
| controllare la connessione | `ping -c 4 debian.org` | |
| scaricare un file | `wget <indirizzo>` | |
| estrarre un `.tar.gz` | `tar -xf <archivio>` | `-t` per vedere il contenuto prima |
| estrarre uno `.zip` | `unzip <archivio>` | |
| capire come funziona un comando | `man <comando>` | `q` per uscire |
| fermare un comando in corso | **Ctrl + C** | |
| pulire lo schermo | `clear` o **Ctrl + L** | |
| ritrovare un comando già usato | **Freccia Su** o **Ctrl + R** | |
| completare un nome | **Tab** | due volte per vedere le scelte |
| copiare/incollare nel terminale | **Ctrl + Shift + C / V** | su Mac: **Control + Shift + C / V** |
| chiudere il terminale | `exit` o **Ctrl + D** | |

---

## 17. Prossimi passi

Quando ti sentirai a tuo agio con i comandi di questo manuale, ecco alcune risorse gratuite per continuare:

* **`man <comando>`**: la documentazione ufficiale è già nel tuo sistema.
* **Wiki di Debian** (`wiki.debian.org`): guide su installazione, hardware e configurazione, molte disponibili anche in italiano.
* **Il manuale dell'amministratore Debian** (`debian-handbook.info`): un libro completo e gratuito, tradotto anche in italiano.
* **Linux Journey** (`linuxjourney.com`): un percorso a lezioni brevi, in inglese.
* **OverTheWire – Bandit** (`overthewire.org/wargames/bandit`): un gioco a livelli per allenarsi con il terminale, in inglese.
* **explainshell.com**: incolli un comando e ti spiega cosa fa ogni sua parte.

Argomenti da affrontare dopo: scrivere script più completi, collegarsi a un computer remoto con `ssh`, gestire i servizi con `systemctl`, usare un editor più potente come `vim`, e tenere traccia delle modifiche ai file con `git`.

---

## Appendice A — Soluzioni degli esercizi

**Capitolo 3**
1. Nel prompt `mario@debian:~$`, `mario` è l'utente e `debian` il computer.
2. `man echo`, poi `/newline` e Invio, poi `q`.
3. Premi la freccia Su e poi Invio.

**Capitolo 4**
1. `cd /etc` e poi `pwd` (risultato: `/etc`).
2. `ls -l /etc` (oppure `ls -l`, visto che sei già lì).
3. `cd` (oppure `cd ~`).
4. `ls -a ~`: sì, il file `.bashrc` compare nell'elenco.

**Capitolo 5**
1. `cd ~/palestra`, poi `mkdir esercizi` e `touch esercizi/lista.txt`.
2. `nano esercizi/lista.txt`, scrivi le righe, poi Ctrl + O, Invio, Ctrl + X.
3. `cat esercizi/lista.txt`.
4. `cp esercizi/lista.txt esercizi/lista_vecchia.txt`, poi `rm esercizi/lista_vecchia.txt`.

**Capitolo 8**
1. `sudo apt update`.
2. `apt search cowsay`, poi `apt show cowsay`.
3. `sudo apt install cowsay`, poi `cowsay Ciao`, poi `sudo apt remove cowsay`. Se il comando `cowsay` non viene trovato, prova `/usr/games/cowsay Ciao`: su Debian i giochi sono installati in una cartella a parte.

**Capitolo 9**
1. `find /etc -name "*.conf" 2>/dev/null`.
2. `grep "$USER" /etc/group`.
3. `apt list --installed > pacchetti.txt`, poi `wc -l pacchetti.txt`.

**Capitolo 10**
1. `touch segreto.txt`, poi `chmod 600 segreto.txt`.
2. `ls -l segreto.txt`: la prima colonna è `-rw-------`.
3. `nano ciao.sh` e aggiungi in fondo la riga `ls`, poi salva ed esegui `./ciao.sh`.
