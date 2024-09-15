from flask import request
from flask_restful import Resource
from app.services.faq_service import get_all_faqs, get_faq_by_id, create_faq, update_faq, delete_faq
from app.schemas.faq_schema import FAQSchema

# Create the schema instances for single FAQ and list of FAQs
faq_schema = FAQSchema()
faq_list_schema = FAQSchema(many=True)

# Resource to handle the list of FAQs
class FAQListResource(Resource):
    def get(self):
        # Fetch all FAQs
        faqs = get_all_faqs()
        # Return the FAQs as a properly formatted JSON array
        return faq_list_schema.dump(faqs), 200

    def post(self):
        # Create a new FAQ from the request JSON data
        data = request.get_json()
        new_faq = create_faq(data)
        # Return the newly created FAQ
        return faq_schema.dump(new_faq), 201

# Resource to handle individual FAQ by ID
class FAQResource(Resource):
    def get(self, faq_id):
        # Fetch a single FAQ by ID
        faq = get_faq_by_id(faq_id)
        if faq:
            # Return the FAQ data as JSON if found
            return faq_schema.dump(faq), 200
        return {'message': 'FAQ not found'}, 404

    def put(self, faq_id):
        # Update an existing FAQ by ID
        data = request.get_json()
        updated_faq = update_faq(faq_id, data)
        if updated_faq:
            # Return the updated FAQ data
            return faq_schema.dump(updated_faq), 200
        return {'message': 'FAQ not found'}, 404

    def delete(self, faq_id):
        # Delete an FAQ by ID
        if delete_faq(faq_id):
            return {'message': 'FAQ deleted'}, 200
        return {'message': 'FAQ not found'}, 404
