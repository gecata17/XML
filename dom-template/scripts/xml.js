function createXMLDocument() {
    let documentImplementation = document.implementation;
    let doc = documentImplementation.createDocument(null, null);

    documentImplementation.createHTMLDocument();

    let autoservice = doc.createElement("autoservice");
    let automobile = doc.createElement("automobile");
    
    let brand = doc.createElement("brand");
    let brandNode = doc.createTextNode("Мерцедес");
    brand.appendChild(brandNode);

    let model = doc.createElement("model");
    let modelNode = doc.createTextNode("124");
    model.appendChild(modelNode);

    let horsepower = doc.createElement("horsepower");
    let horsepowerNode = doc.createTextNode("90");
    horsepower.appendChild(horsepowerNode);

    let color = doc.createElement("color");
    let colorNode = doc.createTextNode("Червен");
    color.appendChild(colorNode);

    let transmition = doc.createElement("transmition");
    let transmitionNode = doc.createTextNode("Автоматична");
    transmition.appendChild(transmitionNode);

    let available_on_lising = doc.createElement("available_on_lising");
    available_on_lising.setAttribute("isTrue", "ДА");

    let count_of = doc.createElement("count_of");
    count_of.setAttribute("autos", "30");

    //buyer
    let buyer = doc.createElement("buyer");
    let buyerName = doc.createElement("name");
    let buyerNameNode = doc.createTextNode("Иван Иванов");
    buyerName.appendChild(buyerNameNode);
    let buyerPersonal_number = doc.createElement("personal_number");
    let buyerPersonal_numberNode = doc.createTextNode("1234567890");
    buyerPersonal_number.appendChild(buyerPersonal_numberNode);
    let buyerSum_of_purchase = doc.createElement("sum_of_purchase");
    let buyerSum_of_purchaseNode = doc.createTextNode("3000.0");
    buyerSum_of_purchase.appendChild(buyerSum_of_purchaseNode);

    buyer.appendChild(buyerName);
    buyer.appendChild(buyerPersonal_number);
    buyer.appendChild(buyerSum_of_purchase);

    // manifacturer
    let manifacturer = doc.createElement("manifacturer");
    let manifacturerName = doc.createElement("name");
    let manifacturerNameNode = doc.createTextNode("Бенц");
    manifacturerName.appendChild(manifacturerNameNode);

    

    let company_info = doc.createElement("company_info");
    let number_of_employees = doc.createElement("number_of_employees");
    let number_of_employeesNode = doc.createTextNode("2000");
    number_of_employees.appendChild(number_of_employeesNode);
    let boss = doc.createElement("boss");
    let bossNode = doc.createTextNode("Петър Петров");
    boss.appendChild(bossNode);
    let number_of_factories = doc.createElement("number_of_factories");
    let number_of_factoriesNode = doc.createTextNode("100");
    number_of_factories.appendChild(number_of_factoriesNode);
    company_info.appendChild(number_of_employees);
    company_info.appendChild(boss);
    company_info.appendChild(number_of_factories);

    let headquarters = doc.createElement("headquarters");
    let country = doc.createElement("country");
    let countryNode = doc.createTextNode("Германия");
    country.appendChild(countryNode);
    let city = doc.createElement("city");
    let cityNode = doc.createTextNode("Берлин");
    city.appendChild(cityNode);
    let headquarterstype = doc.createElement("type");
    let headquarterstypeNode = doc.createTextNode("Офис сграда");
    headquarterstype.appendChild(headquarterstypeNode);
    headquarters.appendChild(country);
    headquarters.appendChild(city);
    headquarters.appendChild(headquarterstype);

    let type_of_automobiles = doc.createElement("type_of_automobiles");
    let type_of_automobilesNode = doc.createTextNode("Леки автомобили");
    type_of_automobiles.appendChild(type_of_automobilesNode);

    manifacturer.appendChild(manifacturerName);
    manifacturer.appendChild(company_info);
    manifacturer.appendChild(headquarters);
    manifacturer.appendChild(type_of_automobiles);
    // type

    let type = doc.createElement("type");
    let typeNode = doc.createTextNode("Лек автомобил");
    type.appendChild(typeNode);

    // data

    let data = doc.createElement("data");
    let day = doc.createElement("day");
    day.setAttribute("value", "1");
    let month = doc.createElement("month");
    month.setAttribute("value", "1");
    let year = doc.createElement("year");
    year.setAttribute("value", "2004");

    data.appendChild(day);
    data.appendChild(month);
    data.appendChild(year);

    //appendings

    automobile.appendChild(brand);
    automobile.appendChild(model);
    automobile.appendChild(horsepower);
    automobile.appendChild(color);
    automobile.appendChild(transmition);
    automobile.appendChild(available_on_lising);
    automobile.appendChild(count_of);
    automobile.appendChild(buyer);
    automobile.appendChild(manifacturer);
    automobile.appendChild(type);
    automobile.appendChild(data);

    autoservice.appendChild(automobile);
    doc.appendChild(autoservice);


    return doc;
}
