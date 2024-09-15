from app.models.faq_model import FAQ

# Simulated database for FAQs
faqs = [
    FAQ(1, "What is an apple?", "An apple is a sweet fruit."),
    FAQ(2, "What is a banana?", "A banana is a long yellow fruit."),
]

def get_all_faqs():
    return faqs

def get_faq_by_id(faq_id):
    return next((faq for faq in faqs if faq.id == faq_id), None)

def create_faq(data):
    new_id = max(faq.id for faq in faqs) + 1 if faqs else 1
    new_faq = FAQ(new_id, data['question'], data['answer'])
    faqs.append(new_faq)
    return new_faq

def update_faq(faq_id, data):
    faq = get_faq_by_id(faq_id)
    if faq:
        faq.question = data['question']
        faq.answer = data['answer']
    return faq

def delete_faq(faq_id):
    global faqs
    faqs = [faq for faq in faqs if faq.id != faq_id]
    return True
