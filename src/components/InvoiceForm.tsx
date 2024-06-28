import { Address } from "@/types";
import stateCode from "@/utils/stateCode.json";
import { FaCheck, FaPlus } from "react-icons/fa";

const InvoiceForm = ({handleCompanyLogo, seller_address, billing_address, shipping_address, checkedSameAddress, reverseCharges, setReverseCharges, changeShippingAddress, changeBillingAddress, changeSellerAddress, handleTickSameAddress, rowData, handleAddRow, handleRowData, discount, setDiscount, supplyPlace, deliveryPlace, changeSupplyPlace, changeDeliveryPlace, orderDetails, changeOrderDetails, invoiceDetails, changeInvoiceDetails, sellerDetails, changeSellerDetails, handleSignature, emptyRow
    }
    :{handleCompanyLogo:any, seller_address:Address, billing_address:Address, shipping_address:Address, checkedSameAddress:boolean, reverseCharges:boolean, setReverseCharges:any, changeShippingAddress:any, changeBillingAddress:any, changeSellerAddress:any, handleTickSameAddress:any, rowData:any, handleAddRow:any, handleRowData:any, discount:number, setDiscount:any, supplyPlace:number, deliveryPlace:number, changeSupplyPlace:any, changeDeliveryPlace:any, orderDetails:any, changeOrderDetails:any, invoiceDetails:any, changeInvoiceDetails:any, sellerDetails:any, changeSellerDetails:any, handleSignature:any, emptyRow:any}) => {

        const taxCheck=()=>{

            if(supplyPlace===deliveryPlace) {
                return true;
            }
            return false;
        }
        
        console.log(stateCode.codes[supplyPlace].name, "checking statecode")

    return ( 
        <div>
            <div className="w-full bg-blue-100 text-black mt-10 py-10">
                <div className="flex justify-between px-4 pb-5">
                    <div className='w-[180px] h-[70px] bg-cover bg-gray-100'>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-4 h-4 mb-1 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-1 text-[10px] text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-[8px] text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleCompanyLogo}/>
                    </label>
                    {/* <img src={companyLogo} /> */}
                    </div>
                    <div className="text-right">
                        <p className='font-bold'>Tax Invoice/Bill of Supply/Cash Memo</p>
                        <p>(Original for Recipient)</p>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div className="flex-grow flex flex-col gap-y-1">
                        <p className='font-bold'>Sold By:</p>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.name} placeholder="name" name='name' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.street} placeholder="street" name='street' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.address} placeholder="address" name='address' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.city} placeholder="city" name='city' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.state} placeholder="state" name='state' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.zip} placeholder="zip" name='zip' onChange={changeSellerAddress}/>
                        <input className='w-fit min-w-4 rounded-full px-2' value={seller_address.country} placeholder="country" name='country' onChange={changeSellerAddress}/>
                    </div>
                    <div className="text-right flex-grow flex flex-col gap-y-1 items-end">
                        <p className='font-bold'>Billing Address:</p>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.name} placeholder="name" name='name' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.street} placeholder="street" name='street' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.address} placeholder="address" name='address' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.city} placeholder="city" name='city' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.state} placeholder="state" name='state' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.zip} placeholder="zip" name='zip' onChange={changeBillingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={billing_address.country} placeholder="country" name='country' onChange={changeBillingAddress}/>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div>
                        <p className='mt-2'><strong>Pan No: </strong><input className='text-left rounded-full px-2' name="panNumber" value={sellerDetails.panNumber} onChange={changeSellerDetails}/> </p>
                        <p className='font-bold mt-2'>GST Registration Number: <input className='text-left rounded-full px-2' name="gstNumber" value={sellerDetails.gstNumber} onChange={changeSellerDetails}/></p>
                    </div>
                    <div className="text-right flex items-center">
                        <p className='font-bold'>State/UT Code: {stateCode.codes[supplyPlace].code}</p>
                        {/* <input className='w-10 text-right rounded-full px-2' value="29"/> */}
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-y-1">
                        <p className='font-bold'>Shiping Address:</p>
                        <label><input type="checkbox" checked={checkedSameAddress} onChange={handleTickSameAddress} />same as Billing Address</label>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.name} placeholder="name" name='name' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.street} placeholder="street" name='street' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.address} placeholder="address" name='address' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.city} placeholder="city" name='city' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.state} placeholder="state" name='state' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.zip} placeholder="zip" name='zip' onChange={changeShippingAddress}/>
                        <input className='w-fit min-w-4 text-right rounded-full px-2' value={shipping_address.country} placeholder="country" name='country' onChange={changeShippingAddress}/>
                    </div>
                </div>
                <div className="flex justify-between px-4">
                    <div>
                    </div>
                    <div className="text-right">
                        <p className='font-bold mt-2'>State/UT Code: {stateCode.codes[deliveryPlace].code}
                            {/* <input className='text-left w-10 rounded-full px-2' value="32"/> */}
                        </p>
                        <p className='font-bold mt-2 flex gap-x-3'>Place of Supply: <StateCodes changePlace={changeSupplyPlace}/>
                            {/* <input className='text-left rounded-full px-2' value={seller_address.state}/> */}
                        </p>
                        <p className='font-bold mt-2 flex gap-x-3' >Place of Delivery: <StateCodes changePlace={changeDeliveryPlace}/>
                            {/* <input className='text-left rounded-full px-2' value={shipping_address.state}/> */}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between px-4">
                    <div>
                        <p className='font-bold mt-2'>Order Number: <input className='text-left rounded-full px-2' name="orderNumber" value={orderDetails.orderNumber} onChange={changeOrderDetails}/></p>
                        <p className='font-bold mt-2'>Order Date: <input className='text-left rounded-full px-2' name="orderDate" value={orderDetails.orderDate} onChange={changeOrderDetails}/></p>
                    </div>
                    <div className="text-right">
                        <p className='font-bold mt-2'>Invoice Number: <input className='text-left rounded-full px-2' name="invoiceNumber" value={invoiceDetails.invoiceNumber} onChange={changeInvoiceDetails}/></p>
                        <p className='font-bold mt-2'>Invoice Details: <input className='text-left rounded-full px-2' name="invoiceDetail" value={invoiceDetails.invoiceDetail} onChange={changeInvoiceDetails}/></p>
                        <p className='font-bold mt-2'>Invoice Date: <input className='text-left rounded-full px-2' name="invoiceDate" value={invoiceDetails.invoiceDate} onChange={changeInvoiceDetails}/></p>
                    </div>
                </div>
                
                
                <div className="">
                    <table id="details-table" className="w-full bg-blue-100 border-collapse mt-4 px-4">
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
                            {/* <tr className=""> */}
                                {/* <td className="p-[8px] border border-black">1.</td>
                                <td className="p-[8px] border border-black"><input className='text-left w-full' value="web dev service"/></td>
                                <td className="p-[8px] border border-black"><input className='text-left w-20' value="6000"/></td>
                                <td className="p-[8px] border border-black"><input className='text-left w-10' value="2"/></td>
                                <td className="p-[8px] border border-black">5000</td>
                                <td className="p-[8px] border border-black"><p>9%</p><p>9%</p></td>
                                <td className="p-[8px] border border-black"><p>CGST</p><p>SGST</p></td>
                                <td className="p-[8px] border border-black"><p>Rs. 75</p><p>Rs. 75</p></td>
                                <td className="p-[8px] border border-black">Rs. 5150</td> */}
                            {/* </tr> */}
                                {/* {empty.map((data:any, index:number) => ( */}
                                    <tr >
                                        <td className="p-[8px] border border-black">1</td>
                                        <td className="p-[8px] border border-black"><input className='text-left w-full ' value={emptyRow.description} name="description" onChange={handleRowData}/></td>
                                        <td className="p-[8px] border border-black"><input className='text-left w-20' value={emptyRow.unitPrice} name="unitPrice" onChange={handleRowData}/></td>
                                        <td className="p-[8px] border border-black"><input className='text-left w-10' name="Qty" value={emptyRow.Qty} onChange={handleRowData}/></td>
                                        <td className="p-[8px] border border-black">{emptyRow.unitPrice * emptyRow.Qty}</td>
                                        {/* taxRate: {CGST:[{name:"CGST", tax:9.5},{name:"IGST", tax:9.5}], SGST:[{name:"SGST", tax:18}]}, */}
                                        <td className="p-[8px] border border-black">{taxCheck()?(emptyRow.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax}%</p>))):(emptyRow.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax}%</p>)))}</td>
                                        
                                        <td className="p-[8px] border border-black">{taxCheck()?(emptyRow.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>{tax.name}</p>))):(emptyRow.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{tax.name}</p>)))}</td>
                                        
                                        <td className="p-[8px] border border-black" >{taxCheck()?(emptyRow.taxRate.CGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax/100 * ((emptyRow.unitPrice * emptyRow.Qty)-(discount/100 * emptyRow.unitPrice * emptyRow.Qty))}</p>))):(emptyRow.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{tax.tax/100 * ((emptyRow.unitPrice * emptyRow.Qty)-(discount/100 * emptyRow.unitPrice * emptyRow.Qty))}</p>)))}</td>
                                        <td className="p-[8px] border border-black">Rs. {emptyRow.taxRate.SGST.map((tax:any, i:number)=>(<p key={i}>{((emptyRow.unitPrice * emptyRow.Qty)-(discount/100 * emptyRow.unitPrice * emptyRow.Qty)) + tax.tax/100 * ((emptyRow.unitPrice * emptyRow.Qty)-(discount/100 * emptyRow.unitPrice * emptyRow.Qty))}</p>))}</td>
                                    </tr>
                                
                            {/* ))} */}
                        </tbody>
                        
                    </table>
                    <div className="flex gap-x-3">
                        <p className="mt-4 flex px-3 py-1 border rounded-full border-black w-fit gap-x-2 cursor-pointer items-center" onClick={handleAddRow}>Confirm Row<FaCheck /></p>
                        {/* <p className="mt-4 flex px-3 py-1 border rounded-full border-black w-fit gap-x-2 cursor-pointer items-center" onClick={handleAddRow}>Add New Row<FaPlus /></p> */}
                    </div>
                    <div className="w-full text-right">
                        <p>Discount: 
                        <input type="text" value={discount} onChange={(e)=>setDiscount(e.target.value)} />%
                        </p>
                    </div>
                </div>

                <div className="flex justify-between px-4">
                    <div>
                        
                    </div>
                    <div className="text-right">
                        <p>for {seller_address.name}:</p>
                        <div className='w-[180px] h-[70px] bg-cover bg-gray-100'>
                        <label htmlFor="uploadFile1" className="bg-white text-gray-500 font-semibold text-[10px] rounded w-full h-full flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                                <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                                <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                            </svg>
                            Upload Signature

                            <input type="file" id='uploadFile1' className="hidden" onChange={handleSignature}/>
                            <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP.</p>
                            </label>
                            {/* <img src={companyLogo} /> */}
                        </div>
                        <p>Authorized Signatory</p>
                    </div>
                </div>

                <label><input type="checkbox" className="w-4 h-4 ml-4 mr-2" checked={reverseCharges} onChange={()=>setReverseCharges(!reverseCharges)} />Whether tax is payable under reverse charges</label>

            </div>

        </div>
     );
}
 
export default InvoiceForm;

const StateCodes = ({changePlace}:{changePlace:any}) => {
    return (
        <div>
            <select name="stateCode" id="stateCode" onChange={changePlace}>
            {stateCode.codes.map((state, index) => {
               return <option key={index} value={index}>{state.name}</option>
            })}
            </select>
        </div>
    )
}