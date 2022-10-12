package menuItems;

public class RealDB {

	int itemId, itemPrice;
	String itemName, itemDescription, imgLoc, foodType;
	
	public RealDB(int itemId, int itemPrice, String itemName, String itemDescription, String imgLoc, String foodType) {
		super();
		this.itemId = itemId;
		this.itemPrice = itemPrice;
		this.itemName = itemName;
		this.itemDescription = itemDescription;
		this.imgLoc = imgLoc;
		this.foodType = foodType;
	}

	@Override
	public String toString() {
		return "RealDB [itemId=" + itemId + ", itemPrice=" + itemPrice + ", itemName=" + itemName + ", itemDescription="
				+ itemDescription + ", imgLoc=" + imgLoc + ", foodType=" + foodType + "]";
	}

	/**
	 * @return the itemId
	 */
	public int getItemId() {
		return itemId;
	}

	/**
	 * @param itemId the itemId to set
	 */
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	/**
	 * @return the itemPrice
	 */
	public int getItemPrice() {
		return itemPrice;
	}

	/**
	 * @param itemPrice the itemPrice to set
	 */
	public void setItemPrice(int itemPrice) {
		this.itemPrice = itemPrice;
	}

	/**
	 * @return the itemName
	 */
	public String getItemName() {
		return itemName;
	}

	/**
	 * @param itemName the itemName to set
	 */
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	/**
	 * @return the itemDescription
	 */
	public String getItemDescription() {
		return itemDescription;
	}

	/**
	 * @param itemDescription the itemDescription to set
	 */
	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	/**
	 * @return the imgLoc
	 */
	public String getImgLoc() {
		return imgLoc;
	}

	/**
	 * @param imgLoc the imgLoc to set
	 */
	public void setImgLoc(String imgLoc) {
		this.imgLoc = imgLoc;
	}

	/**
	 * @return the foodType
	 */
	public String getFoodType() {
		return foodType;
	}

	/**
	 * @param foodType the foodType to set
	 */
	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}

	public RealDB() {
		// TODO Auto-generated constructor stub
	}


}
