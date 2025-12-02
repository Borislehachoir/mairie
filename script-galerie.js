
        // 1. CONFIGURATION
        const supabaseUrl = 'https://xduuevajjufhvvhkipcy.supabase.co' // Celle de ton image
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdXVldmFqanVmaHZ2aGtpcGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTU1NTEsImV4cCI6MjA4MDI3MTU1MX0.80TpFnuxPzM9q9XpKHnp_Pp7OBmCZlFx-LyLPf3bilE' // Celle du menu API Keys
        const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

        // 2. FONCTION POUR LIRE LES MESSAGES
        async function chargerMessages() {
            // On demande tout le contenu de la table 'messages'
            let { data: messages, error } = await supabase
                .from('messages')
                .select('*')

            if (error) console.log("Erreur:", error)
            else {
                // On vide la liste et on la remplit
                const liste = document.getElementById('listeMessages')
                liste.innerHTML = "" 
                messages.forEach(msg => {
                    liste.innerHTML += `<li>${msg.content}</li>`
                })
            }
        }

        // 3. FONCTION POUR AJOUTER UN MESSAGE
        async function envoyerMessage() {
            const texte = document.getElementById('messageInput').value
            
            // On insère dans la base
            const { error } = await supabase
                .from('messages')
                .insert({ content: texte }) // Assure-toi d'avoir une colonne 'content'

            if (error) alert("Erreur d'envoi")
            else {
                document.getElementById('messageInput').value = "" // On vide le champ
                chargerMessages() // On recharge la liste
            }
        }

        // On charge les messages au démarrage de la page
        chargerMessages()
  