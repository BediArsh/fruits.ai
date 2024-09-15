from marshmallow import Schema, fields

class FAQSchema(Schema):
    id = fields.Int(required=True)
    question = fields.Str(required=True)
    answer = fields.Str(required=True)
