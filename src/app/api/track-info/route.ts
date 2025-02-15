import shipEngine from '@/lib/shipEngine';
import { NextRequest, NextResponse } from 'next/server';




export async function POST(request:NextRequest){
    
  const body = await request.json()

  console.log(body)

  if (!body.shipToAdress){
    throw new Error("Ship To Adress is Required")
  }

    const shipData = await shipEngine.getRatesWithShipmentDetails({
        rateOptions: {
            carrierIds: [process.env.COURIER_ID as string]
          },
          shipment: {
            shipTo: body.shipToAdress,
            shipFrom: {
              companyName: "Example Corp.",
              name: "John Doe",
              phone: "111-111-1111",
              addressLine1: "4009 Marathon Blvd",
              addressLine2: "Suite 300",
              cityLocality: "Austin",
              stateProvince: "TX",
              postalCode: "78756",
              countryCode: "US",
              addressResidentialIndicator: "no",
            },
            packages: [
                {
                  weight: {
                    value: 1.0,
                    unit: "ounce",
                  },
                },
              ],
        },

    })

    console.log("ShipData" , shipData)

    const rateId = shipData.rateResponse.rates?.[0].rateId

    if(!rateId) {
      throw new Error ("Rate Id not Found!")
    }

    const labelDetail = await shipEngine.createLabelFromRate({
      rateId: rateId as string
    })

    console.log("Lable Details", labelDetail)

    const lableId = labelDetail.labelId;

    if(!lableId){
      throw new Error ("Lable Id not Found!")

    }

    const trackingInfo = await shipEngine.trackUsingLabelId(lableId);

    console.log("Trackin Info", trackingInfo)


    return NextResponse.json({
      Tracking_NO:trackingInfo.trackingNumber,
      Tracking_Label:lableId
    })


  
}

