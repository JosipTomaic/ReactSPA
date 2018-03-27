export const discountsList = [
    {
        id: 1,
        name: '50% of on this Iron Maiden T-shirt',
        image: 'https://i.ebayimg.com/images/g/7wEAAOSw76pZi3ww/s-l300.png',
        regularPrice: 100,
        discountPrice: 50,
        redeemed: false
    },
    {
        id: 2,
        name: '20% of on this Metallica T-shirt',
        image: 'http://www.ghostdogshop.com/250-large_default/metallica-t-shirt-skulls.jpg',
        regularPrice: 120,
        discountPrice: 96,
        redeemed: false
    },
    {
        id: 3,
        name: '30% of on this Led Zeppelin guitar pick',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61C7xQyqzSL._SY355_.jpg',
        regularPrice: 30,
        discountPrice: 21,
        redeemed: false
    },
    {
        id: 4,
        name: '40% of on this Gibson SG Standard 2018 Electric Guitar',
        image: 'https://images.reverb.com/image/upload/s--VVxcdmuH--/a_exif,c_limit,' +
        'e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1509642527/ailvpnfikhmcquyqmye2.png',
        regularPrice: 12000,
        discountPrice: 7200,
        redeemed: false
    }
];

export function GetSpecificDiscount (id: number) {
    // ne pronađe objekt u polju objekata ukoliko se koristi stroga provjera jednakosti (a to zahtijeva tslint)...
    var discount =  discountsList.find(x => x.id === id);
    return discount;
}