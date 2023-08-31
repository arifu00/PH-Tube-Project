const newsCategorys = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();

  const tabContainer = document.getElementById("tab-container");
  //   forEach
  data.data.forEach((category) => {
    // console.log(category)
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleLoadData('${category.category_id}')" class="tab text-lg font-semibold  px-4 text-[#252525B3] bg-[#25252526]">${category.category}</a>
    `;
    tabContainer.appendChild(div);
  });
};


// tab click data 
const handleLoadData = (categoryId) => {
    console.log(categoryId);
  };
newsCategorys();
