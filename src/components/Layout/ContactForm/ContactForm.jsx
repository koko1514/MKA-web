import FormField from "../../Element/FormField";
import Button from "../../Element/Button";

const ContactForm = () => { 
    return (
      <form className="w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <FormField label="Name *" name="name" placeholder="John Doe" />
          <FormField label="Phone Number" name="phone" placeholder="+62 1234567890" />
          <FormField
            label="Email *"
            name="email"
            type="email"
            placeholder="john@gmail.com"
          />
          <FormField
            label="Company"
            name="company"
            placeholder="Your Company Name"
          />
        </div>
        <FormField label="Subject *" name="subject" placeholder="Your subject" />
        <FormField
          label="Question *"
          name="question"
          textarea={true}
          placeholder="Type your question here..."
        />
        <Button to="#" className="mt-4">
          Submit
        </Button>
      </form>
    );
}

export default ContactForm;