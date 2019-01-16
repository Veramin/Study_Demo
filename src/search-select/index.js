
const countries = window.countries = ["Afghanistan","Albania","Algeria","Andorra","Angola",
"Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize",
"Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil",
"Brunei ","Bulgaria","Burkina Faso","Burundi","Côte d'Ivoire","Cabo Verde",
"Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China",
"Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba",
"Cyprus","Czech Republic","Democratic Republic of the Congo",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
"Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
"Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
"Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
"Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq",
"Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
"Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia",
"Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia (FYROM)",
"Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
"Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
"Montenegro","Morocco","Mozambique","Myanmar (formerly Burma)","Namibia","Nauru",
"Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
"Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea",
"Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
"Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
"Saint Vincent and the Grenadines","Samoa","San Marino",
"Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
"Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands",
"Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka",
"Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Tajikistan",
"Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago",
"Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
"United Arab Emirates","United Kingdom","United States of America",
"Uruguay","Uzbekistan","Vanuatu",
"Venezuela","Viet Nam","Yemen","Zambia","Zimbabwe"].map((t, index) => {
    return `${t}_${index}`
});



const searchSelect = document.querySelector('.search-select');
const input = searchSelect.querySelector('input');
const ul = searchSelect.querySelector('ul.complete-list');


const renderList = (keyword = '') => {
    let list = [...countries];
    if (keyword) {
        keyword = keyword.toUpperCase();
        list.reverse().sort((oneCountry, nextCountry) => {
            const oneFlag = oneCountry.toUpperCase().startsWith(keyword);
            const nextFlag = nextCountry.toUpperCase().startsWith(keyword)
            // 后面一个以关键字开头,且前面一个不以关键字开头才换位
            if(!oneFlag && nextFlag){
                return 1;
            }
            return -1;
        })
    }
    const listHtml = list.reduce((rs, country) => {
        return `${rs}<li>${country}</li>`;
    }, '');
    ul.innerHTML = listHtml;
}


input.addEventListener('input', (e) => {
    renderList(e.target.value);
});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        input.value = e.target.textContent;
    }
});

// 初始渲染
renderList();