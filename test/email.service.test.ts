import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import emailService from '../src/services/email.service';

const mock = new MockAdapter(axios);

describe('sendEmail', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should send email successfully', async () => {
    const mockResponse = { status: 200 };
    const emailData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    };

    mock.onPost('https://api.resend.com/emails').reply(200, mockResponse);

    await emailService.sendEmail(emailData);

    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].url).toBe('https://api.resend.com/emails');
    expect(mock.history.post[0].data).toContain(emailData.email);
  });

  it('should throw an error if email sending fails', async () => {
    const emailData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message',
    };

    mock.onPost('https://api.resend.com/emails').reply(500);

    await expect(emailService.sendEmail(emailData)).rejects.toThrowError();
  });
});
