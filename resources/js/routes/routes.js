// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/mypage/user/routes"
import articleRoutes from "../modules/mypage/article/routes"
import categoryRoutes from "../modules/category/routes"
import mypageRoutes from "../modules/mypage/mypage/routes"
import categoriesMypageRoutes from "../modules/mypage/category/routes"

export default [...webRoutes, ...authRoutes, ...userRoutes, ...articleRoutes, ...categoryRoutes, ...mypageRoutes, ...categoriesMypageRoutes]
