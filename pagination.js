console.log("Hello, Pagination!");

const dataPerPage = 5;
let currentPage = 1;
let isWaiting = false;

// Update the page number display
function updatePageInfo() {
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `Page ${currentPage}`;
}

// Show/hide Prev/Next buttons
function updateButtonVisibility(totalPages) {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.style.display = currentPage === 1 ? "none" : "inline-block";
  nextButton.style.display = currentPage === totalPages ? "none" : "inline-block";
}

// Render character cards
function renderPosts(posts) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className =
      "p-4 bg-white border-l-4 border-green-500 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn";

    postDiv.innerHTML = `
      <img src="${post.image}" alt="${post.name}" class="w-32 h-32 rounded-full mx-auto mb-2">
      <h3 class="text-xl font-semibold text-green-800">${post.name}</h3>
      <p class="text-gray-700">Species: ${post.species}</p>
      <p class="text-gray-700">Status: ${post.status}</p>
    `;

    container.appendChild(postDiv);
  });
}

// Main fetch function
async function fetchPosts(page) {
  const rateMessage = document.getElementById("rateMessage");
  const spinner = document.getElementById("spinner");
  const toast = document.getElementById("toast");

  // If already waiting, show toast
  if (isWaiting) {
    toast.textContent = "⏳ Slow down friend… Please wait 2 seconds.";
    toast.classList.remove("opacity-0");
    setTimeout(() => {
      toast.classList.add("opacity-0");
    }, 2000);
    return;
  }

  isWaiting = true;
  rateMessage.textContent = "";
  spinner.classList.remove("opacity-0");
  document.body.style.cursor = "wait";

  setTimeout(() => {
    isWaiting = false;
  }, 2000);

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    const fullResults = data.results;

    const startIndex = 0;
    const slicedResults = fullResults.slice(startIndex, startIndex + dataPerPage);

    renderPosts(slicedResults);
    updatePageInfo();
    updateButtonVisibility(data.info.pages);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    rateMessage.textContent = "⚠️ Error fetching posts.";
    console.log("Error fetching posts:", error.message);
  } finally {
    spinner.classList.add("opacity-0");
    document.body.style.cursor = "default";
    console.log("Fetch completed");
  }
}

// Navigation
document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPosts(currentPage);
  }
});

document.getElementById("nextButton").addEventListener("click", () => {
  currentPage++;
  fetchPosts(currentPage);
});

// Initial load
fetchPosts(currentPage);
