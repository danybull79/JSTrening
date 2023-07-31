function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let numberOfNights = Number(input[3]);

    let sport;
    let nightPrice;

    // Определяме цените за нощувките в зависимост от сезона и групата
    if (season === "Winter") {
        if (groupType === "boys" || groupType === "girls") {
            nightPrice = 9.60;
        } else if (groupType === "mixed") {
            nightPrice = 10;
        }
    } else if (season === "Spring") {
        if (groupType === "boys" || groupType === "girls") {
            nightPrice = 7.20;
        } else if (groupType === "mixed") {
            nightPrice = 9.50;
        }
    } else if (season === "Summer") {
        if (groupType === "boys" || groupType === "girls") {
            nightPrice = 15;
        } else if (groupType === "mixed") {
            nightPrice = 20;
        }
    }

    // Пресмятаме цената за всички нощувки без отстъпка
    let totalPrice = nightPrice * studentsCount * numberOfNights;

    // Проверяваме и прилагаме отстъпките
    if (studentsCount >= 50) {
        totalPrice *= 0.5;
    } else if (studentsCount >= 20) {
        totalPrice *= 0.85;
    } else if (studentsCount >= 10) {
        totalPrice *= 0.95;
    }
  
      if (season === "Winter" && groupType === "girls") {
        sport = "Gymnastics";
    } else if (season === "Spring" && groupType === "girls") {
        sport = "Athletics";
    } else if (season === "Summer" && groupType === "girls") {
        sport = "Volleyball";
    } else if (season === "Winter" && groupType === "boys") {
        sport = "Judo";
    } else if (season === "Spring" && groupType === "boys") {
        sport = "Tennis";
    } else if (season === "Summer" && groupType === "boys") {
        sport = "Football";
    } else if (season === "Winter" && groupType === "mixed") {
        sport = "Ski";
    } else if (season === "Spring" && groupType === "mixed") {
        sport = "Cycling";
    } else if (season === "Summer" && groupType === "mixed") {
        sport = "Swimming";
    }
  
     console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp (["Spring", "girls", "20", "7"])