

export interface Products {
    id:number,
    name:string,
    image:string,
    OriginalPrice?:number,
    price:number,
    isNew:boolean,
    description:string,
    hasDiscount:boolean
    
}




export const data:Products[] = [

    {   
        id:1,
        name:"Syltherine",
        image:'/Images.png',
        OriginalPrice:3500.000,
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:true
    },
    {   
        id:2,
        name:"Leviosa",
        image:'/Images (6).png',
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:false
    },
    {   
        id:3,
        name:"Lolito",
        image:'/Images (1).png',
        OriginalPrice:14000.000,
        price:7000.000,
        isNew:false,
        description:"Luxury big sofa",
        hasDiscount:true
    },
    {   
        id:4,
        name:"Respira",
        image:'/Images (2).png',
        price:5000.000,
        isNew:true,
        description:"Outdoor bar table and stool",
        hasDiscount:false
    },
    {   
        id:5,
        name:"Grifo",
        image:'/Images (3).png',
        price:1500.000,
        isNew:false,
        description:"Night lamp",
        hasDiscount:false
    },
    {   
        id:6,
        name:"Muggo",
        image:'/Images (4).png',
        price:1500.000,
        isNew:true,
        description:"Small mug ",
        hasDiscount:false
    },
    {   
        id:7,
        name:"Pingky",
        image:'/image 7.png',
        OriginalPrice:14000.000,
        price:7000.000,
        isNew:false,
        description:"Cute bed set",
        hasDiscount:true
    },
    {   
        id:8,
        name:"Potty",
        image:'/Images (5).png',
        price:500.000,
        isNew:true,
        description:"Minimalist flower pot",
        hasDiscount:false
    },
]



export const data2:Products[] = [

    {   
        id:1,
        name:"Syltherine",
        image:'/Images.png',
        OriginalPrice:3500.000,
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:true
    },
    {   
        id:2,
        name:"Leviosa",
        image:'/Images (6).png',
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:false
    },
    {   
        id:3,
        name:"Lolito",
        image:'/Images (1).png',
        OriginalPrice:14000.000,
        price:7000.000,
        isNew:false,
        description:"Luxury big sofa",
        hasDiscount:true
    },
    {   
        id:4,
        name:"Respira",
        image:'/Images (2).png',
        price:5000.000,
        isNew:true,
        description:"Outdoor bar table and stool",
        hasDiscount:false
    },
    {   
        id:5,
        name:"Syltherine",
        image:'/Images.png',
        OriginalPrice:3500.000,
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:true
    },
    {   
        id:6,
        name:"Leviosa",
        image:'/Images (6).png',
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:false
    },
    {   
        id:7,
        name:"Lolito",
        image:'/Images (1).png',
        OriginalPrice:14000.000,
        price:7000.000,
        isNew:false,
        description:"Luxury big sofa",
        hasDiscount:true
    },
    {   
        id:8,
        name:"Respira",
        image:'/Images (2).png',
        price:5000.000,
        isNew:true,
        description:"Outdoor bar table and stool",
        hasDiscount:false
    },
    {   
        id:9,
        name:"Syltherine",
        image:'/Images.png',
        OriginalPrice:3500.000,
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:true
    },
    {   
        id:10,
        name:"Leviosa",
        image:'/Images (6).png',
        price:2500.000,
        isNew:false,
        description:"Stylish cafe chair",
        hasDiscount:false
    },
    {   
        id:11,
        name:"Lolito",
        image:'/Images (1).png',
        OriginalPrice:14000.000,
        price:7000.000,
        isNew:false,
        description:"Luxury big sofa",
        hasDiscount:true
    },
    {   
        id:12,
        name:"Respira",
        image:'/Images (2).png',
        price:5000.000,
        isNew:true,
        description:"Outdoor bar table and stool",
        hasDiscount:false
    },
]



// export const data3 = [
//     {
//       name: "Product 1",
//       image: "/Images (1).png",
//       price: 1200,
//       rating: 4,
//       views: 3000,
//       sales_packages: "1 Speaker, Cable",
//       model_number: "SPK123",
//       secondary_material: "Wood",
//       configuration: "2.1",
//       upholstery_material: "Fabric",
//       upholstery_color: "Gray",
//       filling_material: "Foam",
//       finish_type: "Matte",
//       adjustable_headrest: "Yes",
//       maximum_load_capacity: "120 kg",
//       origin_of_manufacture: "India",
//       width: "40 cm",
//       height: "60 cm",
//       depth: "30 cm",
//       weight: "15 kg",
//       warranty_summary: "1 Year Warranty",
//       warranty_service_type: "On-site",
//       covered_in_warranty: "Manufacturing Defects",
//       not_covered_in_warranty: "Physical Damage",
//       domestic_warranty: "Yes",
//     },
//     {
//       name: "Product 2",
//       image: "/Images.png",
//       price: 1500,
//       rating: 5,
//       views: 4500,
//       sales_packages: "1 Speaker, Charger",
//       model_number: "SPK456",
//       secondary_material: "Plastic",
//       configuration: "5.1",
//       upholstery_material: "Leather",
//       upholstery_color: "Black",
//       filling_material: "Polyester",
//       finish_type: "Glossy",
//       adjustable_headrest: "No",
//       maximum_load_capacity: "150 kg",
//       origin_of_manufacture: "China",
//       width: "50 cm",
//       height: "70 cm",
//       depth: "35 cm",
//       weight: "20 kg",
//       warranty_summary: "2 Year Warranty",
//       warranty_service_type: "Carry-in",
//       covered_in_warranty: "Parts Failure",
//       not_covered_in_warranty: "Wear and Tear",
//       domestic_warranty: "Yes",
//     },
//   ];
  