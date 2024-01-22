import { Component, createSignal, Show } from "solid-js";

const Modal: Component<{ open: Function; onClose: Function }> = (props) => {
  const { open } = props;
  const [formData, setFormData] = createSignal({});
  const updateFormData = (e: any) => {
    console.log("update");
    setFormData({ ...formData(), [e.target.name]: e.target.value });
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    props.onClose(formData());
    setFormData({});
  };

  return (
    <Show when={open()}>
      <form onSubmit={closeModal}>
        <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Modal Title
              </h3>
              <div class="mt-2 px-7 py-3">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  onInput={updateFormData}
                  class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                <label>Description</label>
                <input
                  type="text"
                  class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onInput={updateFormData}
                />
                <label for="priority" class="block mb-2 text-sm font-medium">
                  Select a Priority
                </label>
                <select
                  onInput={updateFormData}
                  class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>Choose a Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <p class="text-sm text-gray-500"></p>
              </div>
              <div class="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type="submit"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Show>
  );
};
export default Modal;
