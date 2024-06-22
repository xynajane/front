function showBookingForm(spotName, element) {
    const bookingForm = document.getElementById('booking-form');
  
  
  
  
    document.querySelectorAll('.spot').forEach(item => {
      item.classList.remove('selected');
      item.style.display = "none";
    });
    element.classList.add('selected');
  
    const locationHeadTag = document.getElementById("location-heading");
  
    if (spotName == "Spot 1") {
      locationHeadTag.textContent = "Location selected: Boracay";
    } else if (spotName == "Spot 2") {
      locationHeadTag.textContent = "Location selected: Mount Mayon";
    } else if (spotName == "Spot 3") {
      locationHeadTag.textContent = "Location selected: Chocolate Hills";
    } else if (spotName == "Spot 4") {
      locationHeadTag.textContent = "Location selected: Banaue Rice Terraces";
    } else if (spotName == "Spot 5") {
      locationHeadTag.textContent = "Location selected: El Nido Palawan";
    }
  
    bookingForm.style.display = 'block';
  
    console.log('Booking form opened for:', spotName);
  }
  document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
  
    const images = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
    ];
    const descriptions = [
      "Boracay, a world-renowned tropical paradise in the Philippines, boasts powdery white sand beaches and crystal-clear turquoise waters, making it a top destination for sun-seekers and water enthusiasts alike. Nestled in the Western Visayas region, this vibrant island offers a perfect blend of relaxation and adventure, with a lively beachfront scene complemented by a myriad of water sports and activities. Known for its vibrant nightlife, diverse dining options, and luxurious resorts, Boracay caters to a wide range of travelers. Beyond the beaches, visitors can explore Puka Shell Beach, enjoy vibrant sunsets at White Beach, or partake in thrilling water adventures like snorkeling and parasailing. As an idyllic getaway, Boracay continues to enchant tourists with its tropical charm and warm hospitality.",
      "Mount Mayon, an iconic natural wonder in the Philippines, stands proudly as an active stratovolcano known for its nearly perfect cone shape. Located in Albay province, it rises 2,462 meters above sea level and is acclaimed for its breathtaking beauty, earning the nickname Magayon, which translates to beautiful in the local language. However, Mayon's allure is coupled with the awareness of its volatility, as it is the country's most active volcano, with a history of frequent eruptions. Despite this, the captivating landscapes surrounding Mount Mayon, along with the cultural significance embedded in local folklore, continue to attract tourists and researchers alike, making it a prominent destination that showcases the dynamic beauty of nature in the Philippines.",
      "Chocolate Hills, Philippines, are an extraordinary geological formation that captivates visitors with its unique and enchanting landscape. Comprising over 1,200 perfectly cone-shaped hills spread across an area of approximately 50 square kilometers, the hills get their name from the brown color they take on during the dry season, resembling chocolate kisses. These conical mounds, covered in grass, create a mesmerizing and surreal panorama. The origin of the Chocolate Hills remains a geological mystery, adding to the allure of this natural wonder. A popular tourist destination, the Chocolate Hills offer stunning panoramic views from viewing points like the Chocolate Hills Complex, making it a must-visit site for those seeking the wonders of nature in the Philippines.",
      "Banaue Rice Terraces, often referred to as the Eighth Wonder of the World, are a breathtaking testament to ancient engineering and the harmonious coexistence between humans and nature. Carved into the Ifugao mountains in the Philippines over 2,000 years ago by the indigenous people, these terraces showcase a remarkable feat of agricultural ingenuity. The intricate system of stone-walled terraces follows the natural contours of the mountains, creating a stunning stair-like formation that stretches for miles. Recognized as a UNESCO World Heritage Site, the Banaue Rice Terraces not only serve as a vital source of livelihood for the local Ifugao communities but also stand as an awe-inspiring symbol of sustainable farming practices and cultural heritage. Visitors are treated to panoramic views, reflecting the profound connection between humanity and the environment.",
      "El Nido Palawan, Philippines, is a tropical paradise renowned for its unparalleled natural beauty and pristine landscapes. Comprising a cluster of limestone islands and karst formations, El Nido's crystal-clear turquoise waters, hidden lagoons, and secluded beaches create a mesmerizing seascape. The area is dotted with dramatic cliffs, lush jungles, and diverse marine life, making it a haven for nature lovers and adventure seekers. El Nido is famed for its island-hopping tours, allowing visitors to explore the Big and Small Lagoons, Secret Lagoon, and Shimizu Island, among other stunning locations. The vibrant underwater world, vibrant coral reefs, and the enchanting Cadlao Island add to the allure of El Nido, making it a must-visit destination that embodies the tropical paradise of Palawan.",
    ];
  
    let currentIndex = 0;
  
    function updateGallery() {
      const currentImage = images[currentIndex];
      const currentDescription = descriptions[currentIndex];
  
      gallery.innerHTML = `
        <div class="image-container" id="image-container">
          <h1>${currentDescription.split(",")[0]}</h1>
          <img src="${currentImage}" alt="Image ${currentIndex + 1}" id="slide" />
          <p>${currentDescription}</p>
        </div>`;
      gallery.style.opacity = 1;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      gallery.style.opacity = 0;
      setTimeout(() => {
        updateGallery();
      }, 1500);
    }
  
    setInterval(nextSlide, 6000);
  
    gallery.addEventListener("click", nextSlide);
  
    updateGallery();
  });
  
  
  