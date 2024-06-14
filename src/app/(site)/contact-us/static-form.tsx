export default function StaticForm() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-12">
            
            <form>
                <div className="mb-4 ">
                    <label htmlFor="name" className="block text-gray-700 text-left text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-left text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 text-left text-sm font-bold mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-left text-sm font-bold mb-2">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className="mt-6">
                    <button type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black-600 focus:outline-none focus:bg-black-600">Submit</button>
                </div>
            </form>
        </div>
    </>
  );
}
