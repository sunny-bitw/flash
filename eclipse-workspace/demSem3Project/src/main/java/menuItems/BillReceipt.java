package menuItems;

public class BillReceipt {

	int billReceiptNo, id;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getBillReceiptNo() {
		return billReceiptNo;
	}

	public BillReceipt(int billReceiptNo) {
		super();
		this.billReceiptNo = billReceiptNo;
	}

	public BillReceipt(int billReceiptNo, int id) {
		super();
		this.billReceiptNo = billReceiptNo;
		this.id = id;
	}

	@Override
	public String toString() {
		return "BillReceipt [billReceiptNo=" + billReceiptNo + ", id=" + id + "]";
	}

	public void setBillReceiptNo(int billReceiptNo) {
		this.billReceiptNo = billReceiptNo;
	}

	public BillReceipt() {
		// TODO Auto-generated constructor stub
	}

}
