from flask_restful import Api
from app.routes.faq_routes import FAQListResource, FAQResource

def init_routes(app):
    api = Api(app)
    api.add_resource(FAQListResource, '/faqs')  # <-- Check this line
    api.add_resource(FAQResource, '/faqs/<int:faq_id>')
