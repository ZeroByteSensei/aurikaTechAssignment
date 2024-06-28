'use client'
import { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoiceFinal from './InvoiceFinal';


const InvoiceLayout = () => {

    const [empty_address, setEmpty_address] = useState({
        name:"", street: "", address: "", street2: "", city: "", state: "", zip: "", country: "", fax: "", phone: "", attention: ""
    });
    const [seller_address, setSeller_address] = useState({
        name:"", street: "", address: "", street2: "", city: "", state: "", zip: "", country: "", fax:"", phone: "", attention: ""
    });
    const [billing_address, setBilling_address] = useState({
        name:"", street: "", address: "", street2: "", city: "", state: "", zip: "", country: "", fax: "", phone: "", attention: ""
    });
    const [checkedSameAddress, setCheckedSameAddress] = useState(false);

    const [shipping_address, setShipping_address] = useState({
        name:"", street: "", address: "", street2: "", city: "", state: "", zip: "", country: "", fax: "", phone: "", attention: ""
    });

    const handleTickSameAddress = () => {setCheckedSameAddress(!checkedSameAddress); console.log(checkedSameAddress, "address checked"); checkedSameAddress?setShipping_address(empty_address):setShipping_address(billing_address)};

    // Description	Unit Price	Qty	Net Amount	Tax Rate	Tax Type	Tax Amount	Total Amount
    const [emptyRow, setEmptyRow] = useState({
        description: "", unitPrice: 0, Qty: 0, netAmount:0, taxRate: {CGST:[{name:"CGST", tax:9},{name:"IGST", tax:9}], SGST:[{name:"SGST", tax:18}]}, taxType: "SGST"||"CGST", taxAmount: 0, totalAmount: 0
    });
    const [rowData, setRowData] = useState([null || {}]);


    const [supplyPlace, setSupplyPlace] = useState<number>(0);
    const [deliveryPlace, setDeliveryPlace] = useState(0);
    const [orderDetails, setOrderDetails] = useState({orderNumber: "", orderDate: ""});
    const [invoiceDetails, setInvoiceDetails] = useState({invoiceNumber: "",invoiceDetail:"", invoiceDate: ""});
    const [sellerDetails, setSellerDetails] = useState({panNumber: "", gstNumber: ""});
    const [companyLogo, setCompanyLogo] = useState("https://via.placeholder.com/120x60");
    const [signature, setSignature] = useState("https://via.placeholder.com/120x50");

    const [discount, setDiscount] = useState(18);
    const [reverseCharges, setReverseCharges] = useState(false);
    




    const handleCompanyLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files&&setCompanyLogo(URL.createObjectURL(e.target.files[0]))
    }
    const changeShippingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShipping_address({...shipping_address, [e.target.name]: e.target.value})
    }
    const changeBillingAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBilling_address({...billing_address, [e.target.name]: e.target.value})
    }
    const changeSellerAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeller_address({...seller_address, [e.target.name]: e.target.value})
    }
    const changeSupplyPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSupplyPlace(parseInt(e.target.value))
    }
    const handleRowData = (e: any) => {
        setEmptyRow({...emptyRow, [e.target.name]: e.target.value})
        // setRowData([])
    }
    
    const handleAddRow = (e: React.ChangeEvent<HTMLInputElement>) => {
        rowData.push(emptyRow);
        setEmptyRow({
            description: "", unitPrice: 0, Qty: 0, netAmount:0, taxRate: {CGST:[{name:"CGST", tax:9},{name:"IGST", tax:9}], SGST:[{name:"SGST", tax:18}]}, taxType: "SGST"||"CGST", taxAmount: 0, totalAmount: 0
        });
    }
    const changeDeliveryPlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryPlace(parseInt(e.target.value))
    }
    const changeOrderDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderDetails({...orderDetails, [e.target.name]: e.target.value})
    }
    const changeInvoiceDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvoiceDetails({...invoiceDetails, [e.target.name]: e.target.value})
    }
    const changeSellerDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSellerDetails({...sellerDetails, [e.target.name]: e.target.value})
    }
    const handleSignature = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files&&setSignature(URL.createObjectURL(e.target.files[0]))
    }

    // API Doesn't contain
    // seller_details, PAN No., Seller GST No., State/UT Code, Place of Delivery, Authorized Signatory, Signature Image, company logo image, order number, order date, invoice Details.


    return ( 
        <>
            <div className='w-full flex justify-between gap-x-10 px-10'>
                <InvoiceForm handleCompanyLogo={handleCompanyLogo} seller_address={seller_address} shipping_address={shipping_address} billing_address={billing_address} checkedSameAddress={checkedSameAddress} reverseCharges={reverseCharges} setReverseCharges={setReverseCharges} changeShippingAddress={changeShippingAddress} changeBillingAddress={changeBillingAddress} changeSellerAddress={changeSellerAddress} handleTickSameAddress={handleTickSameAddress} rowData={rowData} handleAddRow={handleAddRow} handleRowData={handleRowData} discount={discount} setDiscount={setDiscount} supplyPlace={supplyPlace} deliveryPlace={deliveryPlace} changeSupplyPlace={changeSupplyPlace} changeDeliveryPlace={changeDeliveryPlace} orderDetails={orderDetails} changeOrderDetails={changeOrderDetails} invoiceDetails={invoiceDetails} changeInvoiceDetails={changeInvoiceDetails} sellerDetails={sellerDetails} changeSellerDetails={changeSellerDetails} handleSignature={handleSignature} emptyRow={emptyRow}/>

                <InvoiceFinal companyLogo={companyLogo} seller_address={seller_address} shipping_address={shipping_address} billing_address={billing_address} checkedSameAddress={checkedSameAddress} reverseCharges={reverseCharges} orderDetails={orderDetails} invoiceDetails={invoiceDetails} sellerDetails={sellerDetails} supplyPlace={supplyPlace} deliveryPlace={deliveryPlace} signature={signature} rowData={rowData} discount={discount} />
            </div>
        </>
     );
}
 
export default InvoiceLayout;