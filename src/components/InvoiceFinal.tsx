import { Address } from "@/types";
import stateCode from "@/utils/stateCode.json";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'


const InvoiceFinal = ({companyLogo, seller_address, billing_address, shipping_address, checkedSameAddress, reverseCharges, orderDetails, invoiceDetails, sellerDetails,supplyPlace, deliveryPlace, signature, rowData,discount} 
    :{companyLogo:string, seller_address:Address, billing_address:Address, shipping_address:Address, checkedSameAddress:boolean, reverseCharges:boolean, orderDetails:any, invoiceDetails:any, sellerDetails:any, supplyPlace:number, deliveryPlace:number, signature:string, rowData:any, discount:number}) => {

        const taxCheck=()=>{

            if(supplyPlace===deliveryPlace) {
                return true;
            }
            return false;
        }
        let total = 0;
        let totalAmount = 0;
        console.log(rowData, "row data hereee")
        const printDocument:any=()=> {
            const input:any = document.getElementById('divToPrint');
            html2canvas(input)
              .then((canvas:any) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();          
                pdf.addImage(imgData, 'PNG', 0, 0, 200, 280, '', 'FAST');
                pdf.save("download.pdf"); 
              })
            ;
          }

    return ( 
        <>
        <div className=" bg-white mt-10">
            <div id="divToPrint" className="w-full text-black mt-10 py-2 px-4">
                <div className="flex justify-between pb-5">
                    <div className='w-[180px] h-[70px] bg-cover '>
                        <img className="w-[180px] h-[70px] object-contain" src={companyLogo} />
                    </div>
                    <div className="text-right">
                        <p className='font-bold'>Tax Invoice/Bill of Supply/Cash Memo</p>
                        <p>(Original for Recipient)</p>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div className="flex-grow flex flex-col gap-y-1">
                        <p className='font-bold'>Sold By:</p>
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.name}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.street}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.address}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.city}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.state}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.zip}</p> 
                        <p className='w-fit min-w-4 rounded-full px-2'> {seller_address.country}</p> 
                    </div>
                    <div className="text-right flex-grow flex flex-col gap-y-1 items-end">
                        <p className='font-bold'>Billing Address:</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.name}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.street}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'> {billing_address.address}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.city}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.state}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.zip}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{billing_address.country}</p>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div>
                        <p className='mt-2'><strong>Pan No: </strong> {sellerDetails.panNumber}</p>
                        <p className='mt-2'><strong>GST Registration Number: </strong>{sellerDetails.gstNumber}</p>
                    </div>
                    <div className="text-right flex items-center">
                        <p className=''><strong> State/UT Code: </strong>{stateCode.codes[supplyPlace].code}</p>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-y-1">
                        <p className='font-bold'>Shiping Address:</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.name}</p> 
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.street}</p> 
                        <p className='w-fit min-w-4 text-right rounded-full px-2' >{shipping_address.address}</p>
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.city}</p> 
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.state}</p> 
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.zip}</p> 
                        <p className='w-fit min-w-4 text-right rounded-full px-2'>{shipping_address.country}</p> 
                    </div>
                </div>
                <div className="flex justify-between px-4">
                    <div>
                    </div>
                    <div className="text-right">
                        <p className='mt-2'><strong>State/UT Code: </strong>{stateCode.codes[deliveryPlace].code}</p>
                        <p className='mt-2'><strong>Place of Supply: </strong>{stateCode.codes[supplyPlace].name}</p>
                        <p className='mt-2'><strong>Place of Delivery: </strong>{stateCode.codes[deliveryPlace].name}</p>
                    </div>
                </div>
                <div className="flex justify-between px-4">
                    <div>
                        <p className='mt-2'><strong>Order Number: </strong>{orderDetails.orderNumber}</p>
                        <p className='mt-2'><strong>Order Date: </strong>{orderDetails.orderDate}</p>
                    </div>
                    <div className="text-right">
                        <p className='mt-2'><strong>Invoice Number: </strong>{invoiceDetails.invoiceNumber}</p>
                        <p className='mt-2'><strong>Invoice Details: </strong>{invoiceDetails.invoiceDetail}</p>
                        <p className='mt-2'><strong>Invoice Date: </strong>{invoiceDetails.invoiceDate}</p>
                    </div>
                </div>
                
                
                <div className="">
                    <table id="details-table" className="w-full bg-white border-collapse mt-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-[8px] border border-black">Sl. No. </th>
                                <th className="p-[8px] border border-black">Description </th>
                                <th className="p-[8px] border border-black">Unit Price </th>
                                <th className="p-[8px] border border-black">Qty </th>
                                <th className="p-[8px] border border-black">Net Amount </th>
                                <th className="p-[8px] border border-black">Tax Rate </th>
                                <th className="p-[8px] border border-black">Tax Type </th>
                                <th className="p-[8px] border border-black">Tax Amount </th>
                                <th className="p-[8px] border border-black">Total Amount </th>
                            </tr>
                        </thead>
                        <tbody>
                        {rowData.slice(1).map((data:any, index:number) => (
                                    <tr key={index}>
                                        <td className="p-[8px] border border-black">{index+1}</td>
                                        <td className="p-[8px] border border-black">{data.description}</td>
                                        <td className="p-[8px] border border-black">₹{data.unitPrice}</td>
                                        <td className="p-[8px] border border-black">{data.Qty}</td>
                                        <td className="p-[8px] border border-black">₹{data.unitPrice * data.Qty}</td>
                                        
                                        <td className="p-[8px] border border-black">{taxCheck()?(data.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax}%</p>))):(data.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax}%</p>)))}</td>
                                        
                                        <td className="p-[8px] border border-black">{taxCheck()?(data.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>{tax.name}</p>))):(data.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{tax.name}</p>)))}</td>
                                        
                                        <td className="p-[8px] border border-black">{taxCheck()?(data.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>₹{tax.tax/100 * ((data.unitPrice * data.Qty)-(discount/100 * data.unitPrice * data.Qty))}</p>))):(data.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>₹{tax.tax/100 * ((data.unitPrice * data.Qty)-(discount/100 * data.unitPrice * data.Qty))}</p>)))}</td>
                                        <td className="p-[8px] border border-black"> {data.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>₹{((data.unitPrice * data.Qty)-(discount/100 * data.unitPrice * data.Qty)) + tax.tax/100 * ((data.unitPrice * data.Qty)-(discount/100 * data.unitPrice * data.Qty))}</p>))}</td>
                                    </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                            <th id="total" className="text-left border border-black pl-2" colSpan={7}>Total :</th>
                            {rowData.slice(1).forEach((data:any, index:number) => {
                                total+=(data.unitPrice*data.Qty);
                            })}
                                <td className="border border-black">₹ {(total-(discount/100*total))*0.18}</td>
                                <td className="border border-black">₹ {(total-(discount/100*total))+((total-(discount/100*total))*0.18)}</td>
                            </tr>
                            <tr>
                                <th id="total" className="text-left border border-black pl-2" colSpan={7}>Discount :</th>
                                <td className="border border-black">₹ {(discount/100*total)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="flex justify-between px-4 mt-6">
                    <div>
                        
                    </div>
                    <div className="text-right">
                        <p>for {seller_address.name}:</p>
                        <div className='w-[180px] h-[70px] bg-cover '>
                            <img className="w-[180px] h-[70px] object-contain" src={signature} />
                        </div>
                        <p>Authorized Signatory</p>
                    </div>
                </div>

                <p> Whether tax is payable under reverse charges- {reverseCharges?"Yes":"No"}</p>

            </div>

            <div className="w-fit mx-auto mt-6 h-auto bg-green-400 text-black px-6 py-2 rounded-full cursor-pointer">
                <p onClick={printDocument}>Download PDF</p>
            </div>
        </div>

        </>
     );
}
 
export default InvoiceFinal;