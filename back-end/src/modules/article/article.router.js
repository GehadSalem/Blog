import {Router} from 'express'
import * as articleController from  './controller/article.js'
import auth from '../../middleware/auth.js'
const router = Router();

router.get("/", articleController.getArticles) // get all data for public
router.get("/getToShow/:id", articleController.getArticleByID) // get data for public to reade 
router.get("/getToUpdate/:id", auth , articleController.getArticleByID) // get data for update
router.post("/" , auth, articleController.addArticle) // post new data
router.put("/update/:id", auth , articleController.updateArticle) // post data That I made for update
router.delete("/:id", auth , articleController.deleteArticle)


export default  router