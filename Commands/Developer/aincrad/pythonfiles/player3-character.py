import json


with open("./././config.json",'r')as f:
    config = json.load(f)

token= config["playertoken3"]
