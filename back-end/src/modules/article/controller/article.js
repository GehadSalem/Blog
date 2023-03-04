import articleModel from "../../../../DB/model/article.model.js";

export const getArticles = async (req, res, next) => {
    try {
        const articles = await articleModel.find({}).populate({
            path: 'userId',
            select: 'userName'
        })
        console.log({x:"getArticles",articles:articles[0].userId});
        return res.json({ message: "Done", articles })
    } catch (error) {
        return res.json({ message: "Catch error", error })

    }
}


export const getArticleByID = async (req, res, next) => {

    try {
        const articles = await articleModel.findById(req.params.id).populate({
            path: 'userId',
            select:'userName'
        })

        
        return res.json({ message: "Done", articles })
    } catch (error) {
        return res.json({ message: "Catch error", error , stack: error.stack})

    }
}


export const addArticle = async (req, res, next) => {
    try {
        const { title, content} = req.body;
        console.log({ title, content });
        
        const article = await articleModel.create({ title, content, userId: req.user._id })
        return res.json({ message: "Done", article })
    } catch (error) {
        return res.json({ message: "Catch error", error })

    }
}

export const updateArticle = async (req, res, next) => {
    

    try {
        const id = req.params.id
        const { title, content} = req.body;
        console.log({id, title, content });
        
        const article = await articleModel.findOneAndUpdate({_id: id, userId: req.user._id}, { title, content}, {new: true})
        return article ? res.json({ message: "Done", article }) : res.json({ message: "not auth user"})
    } catch (error) {
        return res.json({ message: "Catch error", error , stack: error.stack})
    }
        
}



export const deleteArticle = async (req, res, next) => {
    

    try {
        const id = req.params.id
        const article = await articleModel.findOneAndDelete({_id: id, userId: req.user._id})
        return article ? res.json({ message: "Done", article }) : res.json({ message: "not auth user"})
    } catch (error) {
        return res.json({ message: "Catch error", error , stack: error.stack})

    }
        
}