
  const projectId = "0ytuv043"; // 👈 ton project ID
  const dataset = "mairie";
  const apiVersion = "2023-10-01";

  async function fetchArticles() {
  try {
    const query = encodeURIComponent(`*[_type == "article"]{
      title,
      date,
      "imageUrl": image.asset->url,
      content,
      category->{title, slug}
    } | order(date desc)`);

    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Erreur API Sanity: ${response.status}`);

    const data = await response.json();
    console.log("Résultat Sanity :", data); // 👈 pour debug

    return data.result;
  } catch (err) {
    console.error("Erreur lors du fetch des articles :", err);
    return [];
  }
}

  async function displayArticles() {
    const container = document.querySelector(".galerie");
    container.innerHTML = "<p>Chargement des articles...</p>";

    const articles = await fetchArticles();

    if (!articles?.length) {
      container.innerHTML = "<p>Aucun article pour le moment.</p>";
      return;
    }

    container.innerHTML = "";

    articles.forEach((a, i) => {
      const div = document.createElement("div");
      div.className = "poeme";
      div.style.backgroundImage = `url('${a.imageUrl || "img/default.jpg"}')`;
      div.onclick = () => openModal(`modal${i}`);

      div.innerHTML = `<div class="poeme-title">${a.title}</div>`;
      container.appendChild(div);

      const modal = document.createElement("div");
      modal.className = "modal hidden";
      modal.id = `modal${i}`;
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="closeModal('modal${i}')">&times;</span>
          <h2>${a.title}</h2>
          <p>${a.content
            ?.map(block => block.children.map(c => c.text).join(''))
            .join('<br>') || ''}</p>
        </div>
      `;
      document.body.appendChild(modal);
    });
  }

  displayArticles();

  // Gestion modales
  window.openModal = (id) => document.getElementById(id).classList.remove("hidden");
  window.closeModal = (id) => document.getElementById(id).classList.add("hidden");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) e.target.classList.add("hidden");
  });