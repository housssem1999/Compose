from fastapi import FastAPI
from pymongo import MongoClient
from bson.objectid import ObjectId
import pydantic
pydantic.json.ENCODERS_BY_TYPE[ObjectId]=str
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:4200",
    "http://0.0.0.0:80",
    "http://localhost:4200/items",
    "*"
]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mongodb_uri = 'mongodb+srv://marwan:marwen1999@cluster0.ls9byjq.mongodb.net/customerdata?retryWrites=true&w=majority'
port = 8000
client = MongoClient(mongodb_uri, port)
db = client["customerdata"]
collection = db["Customer"]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: str):
    item = collection.find_one({"_id": ObjectId(item_id)})
    return item

@app.get("/items/")
def read_items():
    items = collection.find()
    return {"items": list(items)}

@app.post("/items/")
def create_item(item: dict):
    item_id = collection.insert_one(item).inserted_id
    return {"item_id": str(item_id)}

@app.put("/items/{item_id}")
def update_item(item_id: str, item: dict):
    collection.update_one({"_id": ObjectId(item_id)}, {"$set": item})
    return {"item_id": item_id}

@app.delete("/items/{item_id}")
def delete_item(item_id: str):
    collection.delete_one({"_id": ObjectId(item_id)})
    return {"status": "success"}
