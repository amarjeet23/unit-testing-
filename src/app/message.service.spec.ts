import { MessageService } from "./message.service";
describe("messageService", () => {
  let messageService = new MessageService();
  beforeEach(() => {
    messageService = new MessageService();
  });

  //   1.
  it("should have no element when start", () => {
    expect(messageService.messages.length).toBe(0);
  });

  //   2.
  it("should add an element when add is clicked", () => {
    messageService.add("message1");
    expect(messageService.messages.length).toBe(1);
  });

  //   3.
  it("it should have no item when clear is called", () => {
    // let newItem = "test3";
    messageService.add("message2");
    messageService.clear();
    expect(messageService.messages.length).toBe(0);
  });
});
