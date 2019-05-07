const toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");

toggler.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollpos = window.pageYOffset;
//   if (prevScrollpos > currentScrollpos) {
//     document.querySelector("header").style.top = "0";
//   } else {
//     document.querySelector("header").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollpos;
// };

let myPicturesArray = [
  {
    albumId: 1,
    id: 1,
    title: "Skye",
    url: "img/skye.jpg",
    thumbnailUrl: "img/Skye-small.jpg"
  },
  {
    albumId: 1,
    id: 2,
    title: "Skye",
    url: "img/skye2.jpg",
    thumbnailUrl: "img/skye2.jpg"
  },
  {
    albumId: 1,
    id: 3,
    title: "Skye",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Bagno_Chlebowo%2C_fungi_%2810%29.JPG",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Bagno_Chlebowo%2C_fungi_%2810%29.JPG"
  },
  {
    albumId: 1,
    id: 4,
    title: "Skye",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Manucure-p%C3%A9dicure.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Manucure-p%C3%A9dicure.jpg"
  },
  {
    albumId: 1,
    id: 5,
    title: "Skye",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Milky_Way_at_the_Square_Tower_Group_%289471482501%29.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Milky_Way_at_the_Square_Tower_Group_%289471482501%29.jpg"
  },
  {
    albumId: 1,
    id: 6,
    title: "Skye",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Blume_mit_Schmetterling_und_Biene_1uf.JPG",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Blume_mit_Schmetterling_und_Biene_1uf.JPG"
  },
  {
    albumId: 2,
    id: 1,
    title: "Ollie",
    url: "img/ollie.jpg",
    thumbnailUrl: "img/ollie.jpg"
  },
  {
    albumId: 2,
    id: 2,
    title: "Ollie",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Primula_aka.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Primula_aka.jpg"
  },
  {
    albumId: 2,
    id: 3,
    title: "Ollie",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Malaysia_-_Malaka_-_19_-_bright_and_gaudy_rickshaw_%286320834312%29.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Malaysia_-_Malaka_-_19_-_bright_and_gaudy_rickshaw_%286320834312%29.jpg"
  },
  {
    albumId: 2,
    id: 4,
    title: "Ollie",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Mimosa_Colombe_d%27Or_Saint_Paul_de_Vence.JPG",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Mimosa_Colombe_d%27Or_Saint_Paul_de_Vence.JPG"
  },
  {
    albumId: 2,
    id: 5,
    title: "Ollie",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Leucochloris_albicollis_-Campos_do_Jordao%2C_Sao_Paulo%2C_Brazil-8.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Leucochloris_albicollis_-Campos_do_Jordao%2C_Sao_Paulo%2C_Brazil-8.jpg"
  },
  {
    albumId: 2,
    id: 6,
    title: "Ollie",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Puerto_Rican_Tody_%28Todus_mexicanus%29_RWD.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Puerto_Rican_Tody_%28Todus_mexicanus%29_RWD.jpg"
  },
  {
    albumId: 3,
    id: 1,
    title: "Nigel",
    url: "img/nigel.jpg",
    thumbnailUrl: "img/nigel.jpg"
  },
  {
    albumId: 3,
    id: 2,
    title: "Nigel",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG"
  },
  {
    albumId: 3,
    id: 3,
    title: "Nigel",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Aerial_View_-_Landschaft_Markgr%C3%A4flerland1.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Aerial_View_-_Landschaft_Markgr%C3%A4flerland1.jpg"
  },
  {
    albumId: 3,
    id: 4,
    title: "Nigel",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tessellated_Pavement_Sunrise_Landscape.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tessellated_Pavement_Sunrise_Landscape.jpg"
  },
  {
    albumId: 3,
    id: 5,
    title: "Nigel",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg"
  },
  {
    albumId: 3,
    id: 6,
    title: "Nigel",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/GothafossWinter.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/GothafossWinter.jpg"
  },
  {
    albumId: 4,
    id: 1,
    title: "Jacc's",
    url: "img/jacc.jpg",
    thumbnailUrl: "img/jacc.jpg"
  },
  {
    albumId: 4,
    id: 2,
    title: "Jacc's",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG"
  },
  {
    albumId: 4,
    id: 3,
    title: "Jacc's",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Aerial_View_-_Landschaft_Markgr%C3%A4flerland1.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Aerial_View_-_Landschaft_Markgr%C3%A4flerland1.jpg"
  },
  {
    albumId: 4,
    id: 4,
    title: "Jacc's",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tessellated_Pavement_Sunrise_Landscape.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Tessellated_Pavement_Sunrise_Landscape.jpg"
  },
  {
    albumId: 4,
    id: 5,
    title: "Jacc's",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Peyto_Lake-Banff_NP-Canada.jpg"
  },
  {
    albumId: 4,
    id: 6,
    title: "Jacc's",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/GothafossWinter.jpg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/GothafossWinter.jpg"
  }
];
document.addEventListener("DOMContentLoaded", function(event) {
  createImg(myPicturesArray);
  document.querySelector("#select-dog").addEventListener("change", selectAlbum);
});

var imgDiv = document.getElementById("images");
var clickedImgDiv = document.getElementById("clickedImg");

function createImg(arr) {
  arr.forEach(function(currentImage) {
    var image = document.createElement("img");
    image.src = currentImage.thumbnailUrl;
    image.alt = currentImage.title;
    image.width = "150";
    image.heigth = "150";

    imgDiv.append(image);

    image.addEventListener("click", function(e) {
      var clickedImg = document.createElement("img");
      clickedImg.src = currentImage.url;
      image.alt = currentImage.title;

      clickedImgDiv.innerHTML = "";
      clickedImgDiv.append(clickedImg);
    });
  });
}
//=============
function selectAlbum() {
  var selectedDog = document.getElementById("select-dog").value;
  console.log(selectedDog);
  switch (selectedDog) {
    case "Skye":
      showAlbum("Skye");
      break;
    case "Ollie":
      showAlbum("Ollie");
      break;
    case "Nigel":
      showAlbum("Nigel");
      break;
    case "Jacc's":
      showAlbum("Jacc's");
      break;
    // case "":
    //   clickedImgDiv.innerHTML = "";
    //   createImg(myPicturesArray);
    //   break;
    default:
      imgDiv.innerHTML = "";
      clickedImgDiv.innerHTML = "";
      createImg(myPicturesArray);
  }
}
//===============
function showAlbum(title) {
  var album = [];
  album = myPicturesArray.forEach(function(item) {
    if (item.title === title) {
      album.push(item);
    }
    imgDiv.innerHTML = "";
    clickedImgDiv.innerHTML = "";
    imgDiv.innerHTML =
      "<h2> Images from " +
      title +
      "'s album</h2><p>click on image to display it</p>";
    createImg(album);
  });
}

//==========
function reset() {
  imgDiv.innerHTML = "";
  imgDiv.innerHTML = "<p>click on image to display it</p>";
  clickedImgDiv.innerHTML = "";
  createImg(myPicturesArray);
}
