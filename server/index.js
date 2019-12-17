const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app =  express()
const cors = require('cors')
const PORT = process.env.PORT || 4000