import { Request, Response, Router } from 'express'
import CandleController from '../controllers/CandleController'

export const candleRouter = Router()

const candleCtrl = new CandleController()

candleRouter.get('/:quantity', async (request: Request, response: Response) => {
    const quantity = parseInt(request.params.quantity)
    const lastCandles = await candleCtrl.findLastCandle(quantity)

    return response.json(lastCandles)
})