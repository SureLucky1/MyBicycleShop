// 引入 express 模組
const express = require("express");

// 從 orderController 中引入相關的控制器函數
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controller/orderController");

// 從 auth 中引入相關的驗證函數
const { isAuthentictedUser, authorizeRoles } = require("../middleWare/auth");

// 創建一個新的路由
const router = express.Router();
 
// 為創建新訂單的路由添加 POST 請求處理
router.route("/order/new").post(isAuthentictedUser, newOrder);

// 為獲取單個訂單的路由添加 GET 請求處理
router.route("/order/:id").get(isAuthentictedUser , getSingleOrder);

// 為獲取我的訂單的路由添加 GET 請求處理
router.route("/orders/myOrders").get(isAuthentictedUser , myOrders)

// 為獲取所有訂單的路由添加 GET 請求處理，並添加角色驗證
router.route("/admin/orders").get(isAuthentictedUser , authorizeRoles("admin") ,getAllOrders);

// 為更新和刪除訂單的路由添加 PUT 和 DELETE 請求處理，並添加角色驗證
router.route("/admin/order/:id").put(isAuthentictedUser , authorizeRoles("admin") , updateOrder).delete(deleteOrder);

// 將路由導出，以便在其他文件中使用
module.exports = router;
