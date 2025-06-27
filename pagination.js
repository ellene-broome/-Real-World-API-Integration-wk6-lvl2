console.log("Hello, Pagination!");

let currentPage = 1;
let postsPerPage = 10;
let isWaiting = false;

// Updates page number text
function updatePageInfo() {
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `Page ${currentPage}`;
}

// Fetches paginated posts
async function fetchAlbums(page) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const artist = "Coldplay";
  const apiUrl = `${proxy}https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    const allAlbums = data.album || [];

    const startIndex = (page - 1) * postsPerPage;
    const paginatedAlbums = allAlbums.slice(startIndex, startIndex + postsPerPage);

    renderAlbums(paginatedAlbums);
    updatePageInfo();

    // Disable Next button at end of results
    const nextBtn = document.getElementById("nextButton");
    nextBtn.disabled = (startIndex + postsPerPage >= allAlbums.length);
    nextBtn.classList.toggle("opacity-50", nextBtn.disabled);
    nextBtn.classList.toggle("cursor-not-allowed", nextBtn.disabled);

  } catch (error) {
    console.log("Error fetching albums:", error.message);
  }
}

// Renders albums to the DOM
function renderAlbums(albums) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  albums.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.className = "p-4 bg-white border-l-4 border-green-500 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform tilt animate-fadeIn flex gap-4";

    albumDiv.innerHTML = `
      <img src="${album.strAlbumThumb || 'https://via.placeholder.com/100?text=No+Image'}" alt="${album.strAlbum}" class="w-24 h-24 object-cover rounded shadow" />
class="w-24 h-24 object-cover rounded shadow" />
      <div>
        <h3 class="text-xl font-semibold text-green-800 mb-1">${album.strAlbum}</h3>
        <p class="text-gray-700">Artist: ${album.strArtist}</p>
        <p class="text-gray-600 text-sm">Released: ${album.intYearReleased}</p>
      </div>
    `;

    container.appendChild(albumDiv);
  });
}


// Pagination controls
document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchAlbums(currentPage);
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  currentPage++;
  fetchAlbums(currentPage);
});

// Load the first page
fetchAlbums(currentPage);
