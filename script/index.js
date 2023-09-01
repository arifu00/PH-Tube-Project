const newsCategorys = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();

  // tabContainer
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
const handleLoadData = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();

  //   card container
  const cardContainer = document.getElementById("card-container");
  // click & clear card container 
  cardContainer.innerHTML = '';
  
  //   forEach categoryId
  data.data.forEach((containerCardItem) => {
    const div = document.createElement("div");

    // upload time
    const uploadTime = (time) => {
      if (time > 0) {
        const hour = Math.floor(time / 3600);
        const minute = Math.floor((time % 3600) / 60);
        return (result = `${hour}hrs ${minute}min ago`);
      } else {
        return "Just Now Post";
      }
    };

    // card innerHtml 
    div.innerHTML = `
    <div class="card shadow-xl">
                    <figure class="relative">
                        <img class="h-60 px-5" src="${containerCardItem.thumbnail}" alt="${
      containerCardItem.title
    }" />
                        <div class="absolute bottom-2 right-5">
                            <p id="post-date" class="bg-[#171717] p-2 text-white text-xs font-normal rounded-md">${uploadTime(
                              containerCardItem?.others?.posted_date
                            )}</p></div>
                    </figure>
                    
                    <div class="card-body">
                            <div class=" flex items-start gap-4">
                              <img class="rounded-full w-12 h-12" src="${
                                containerCardItem?.authors[0]?.profile_picture
                              }" />
                              <div class="">
                                <h4 class="text-base font-bold text-[#171717]">${
                                  containerCardItem.title
                                }</h4>
                                <div class="flex gap-2">
                                <p class="mt-1 text-sm font-normal text-[#111111B3]">${
                                  containerCardItem?.authors[0]?.profile_name
                                }</p>
                                <img id="blue-tik" src="${containerCardItem?.authors[0]?.verified ? 'img/bluetik.png' : ''}" alt="">
                                </div>
                                <p class="mt-1 text-sm font-normal text-[#111111B3]">${
                                  containerCardItem?.others?.views
                                }</p>
                              </div>
                            </div>
                      </div>
                    </div>
        `;
    // console.log(containerCardItem.authors);
    cardContainer.appendChild(div);
  });
};

handleLoadData("1000");
newsCategorys();
