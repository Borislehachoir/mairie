// 1. CONFIGURATION
    const supabaseUrl = 'https://xduuevajjufhvvhkipcy.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdXVldmFqanVmaHZ2aGtpcGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTU1NTEsImV4cCI6MjA4MDI3MTU1MX0.80TpFnuxPzM9q9XpKHnp_Pp7OBmCZlFx-LyLPf3bilE';
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

   async function chargerArticles() {
    // 2a. Récupération des données
    let { data: articles, error } = await supabase
        .from('articles') 
        .select('*')      

    if (error) {
        console.error("Erreur de chargement des articles:", error);
    } 
    // VÉRIFICATION : Si le tableau est vide, on affiche un message (utile pour le debug)
    else if (!articles || articles.length === 0) { 
        document.getElementById('listeArticles').innerHTML = 
            "<p style='padding: 20px; text-align: center;'>Aucun article trouvé. Vérifiez votre Table Editor dans Supabase.</p>";
    }
    
    else {
        const conteneur = document.getElementById('listeArticles');
        conteneur.innerHTML = ""; 

        articles.forEach(article => {
            
            // 1. UTILISATION DU CHAMP 'date' pour la date
            // On vérifie que la date existe avant de la formater
            let dateAffichage = 'Date non spécifiée';
            if (article.date) {
                 dateAffichage = new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric', month: 'long', day: 'numeric'
                });
            }

            // 2. CONSTRUCTION DU HTML AVEC LES NOUVEAUX CHAMPS
            conteneur.innerHTML += `
                <div class="grid-item-card">
                    
                    <img src="${article.img}" alt="${article.name}" class="gallery-image">
                    
                    <div class="grid-overlay-bandeau">
                        <h4>${article.name}</h4> 
                        <p>Publié le ${dateAffichage}</p>
                    </div>
                </div>
            `;
        });
    }
}

// Déclenchement au chargement de la page
chargerArticles();