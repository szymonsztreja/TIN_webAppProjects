const newsHistory = [];

function fetchData() {
    fetch("http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php")
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Http error: ${res.status}`);
            }
        })
        .then(res => {
            const stockRows = document.querySelectorAll(".stock-table tr");
            const newsRows = document.querySelectorAll(".news-table tr");
            const stocks = res.stock;
            const news = res.news;
            var i = 1;
            for (const [company, stock] of Object.entries(stocks)) {
                const row = stockRows[i];
                const companyCell = row.cells[0];
                const stockCell = row.cells[1];

                if (companyCell != company) {
                    companyCell.textContent = company;
                }
                if (stockCell != stock) {
                    stockCell.textContent = stock;
                }
                i++;
            }

            newsHistory.unshift(news);

            // Ogranicza tablicę do trzech elementów
            if (newsHistory.length > 3) {
                newsHistory.length = 3;
            }

            // Wyświetla newsy w rotatorze
            displayNewsRotator();

        })


        .catch(error => {
            console.error(error)
        });
}

function displayNewsRotator() {
    const rotatorContainer = document.getElementById("container2");
    const newsTable = rotatorContainer.querySelector(".news-table");
    const newsRows = newsTable.querySelectorAll("tr");

    // Aktualizuje zawartość wierszy newsów
    for (let i = 1; i < newsRows.length; i++) {
        const newsRow = newsRows[i];
        const newsCell = newsRow.cells[0];
        const news = newsHistory[i - 1] || "There is no news to be displayed";

        newsCell.textContent = news;
    }
}

// Interval lasting 10 seconds
var interval = 1000 * 10;

// Fetch data every 10 seconds
setInterval(fetchData, interval);