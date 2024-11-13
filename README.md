# Bookingsite
Jag har byggt en sida för en bio där användaren kan se vilka filmer som spelas och till vilket pris. Den kan sedan reservera och boka platserna den har valt.

## Val av ramverk och bibliotek
Det här projektet är byggt i React.js. Jag valde detta ramverk dels för att det jag hade mest efarenhet av det men också för att jag tyckte simpelheten av projektet passade med
React. Om jag till exempel skulle bygga något mer avancerat med många fler undersidor som ska ha dynamiskt renderad data, så skulle jag troligtvis överväga Angular istället. 
Fördelen med Angular är att skillnaden mellan front- och backend blir mycket tydligare eftersom de är frånskilda. Eftersom kompnenterna i det är projektet inte är så 
avancerade/stora så var detta inget större problem för mig med React. 
Sedan är ju också det bästa ramverket (oftast) det man kan och känner sig säkrast med.  

Jag har blant annat använt mig av biblioteken react-router-dom och formik för att bygga sidan. Routern används för att man ska kunna få en riktigt länk till sidan samtidigt
som man slipper hålla kolla på vilken sida användaren befinner sig på med useState. Jag tycker att det underlättar väldigt mycket att man slipper tänka på det. 

Formik användes till att skapa bokningsformuläret och hantera användarens imatningar. I nuläget så skrivs informationen bara ut i konsolen när det skickas in. I framtiden
så vill jag fixa så att en gist-fil uppdateras med den här informationen.

Istället för att använda Javascript så är appikationen skriven i Typescript. När ts väl fungerar så är det underbart och underlättar mycket när man inte behöver sitta och 
console.log:a för att se vilken typ av data man arbetar med just nu. När jag deklarerade typer för funktioner som skulle använda sig av ett useState's prevState så krävdes det dock lite googlande 
för att ta reda på vad som var rätt typ. Samma sak gällde kring hur vissa html-element skulle definieras. 

## Struktur
I det här projektet så har jag inte använt mig av hooken Context för att hålla reda på de olika staten. Anledningen till detta är att jag i början kanske underskattade 
lite vilka useStates jag skulle behöva och i takt med att projektet växte så blev de fler. Visst skulle det vara optimalt att i framtiden göra om och använda sig av 
context, men i nuläget tycker jag att det känns hanterbart ändå (plus lite tidsbrist) eftersom att storleken på projektet gör att inga props behöver "drillas" så 
djupt. I App.tsx kanske det är lite många attribut som skickas med komponenterna, men jag tycker bara att det är där det känns så. 

När sidan laddas så fetchas som sagt datan till filmerna från en gist-fil. Datan från denna fil omvandlas sedan till objekt av klassen Movie. I samma fil har jag även skapat
ett interface som heter MovieDataInterface. Detta exporteras och används i hela applikationen för att typecasta filmobjekt som används. Detta gör att om jag skulle vilja lägga
till ett fält till klassen (t.ex. bokade platser) så behöver vi bara göra ändringen i en fil, vilket jag tycker är smidigt. 

Just nu så är de upptagna platserna kodade som en array i ett useState. Detta gör som sagt att dem återställs varje gång applikationen laddas om istället för att
hämtas från en fil. När en test-användare lägger sin bokning så kommer den dock se att platserna den valde nu är satta som upptagna och inte går att välja igen. Så 
funktionaliteten finns där, jag behöver bara ändra vart datan för sätena hämtas ifrån. När jag gör detta så vill jag även se till att varje film har sin egen sätesplan.
Just nu delar alla filmer på platserna, men jag såg till att när användaren väl har börjat välja platser så går det inte att byta film - ännu en gång: funktionliteten finns där,
den behöver bara förfinas lite. 

## Länk till gh-pages
https://franslin.github.io/
