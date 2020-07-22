'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('AquiTokenTelegram')

class EventsController extends TelegramBaseController {
    allEventsAction(scope) {
      let msg = `Dev: Matheus da Silva Vasconcelos\ncontact - matheus.vasconcelos.dev@gmail.com`
  scope.sendMessage(msg)
    }
  get routes() {
      return {
        'allEvents': 'allEventsAction'
      }
    }
  }

  chatbot.router
  .when(
    new TextCommand('/allevents', 'allEvents'), new EventsController()
  )