<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AccountVerificationMail extends Mailable
{
    // use Queueable, SerializesModels;
    use Queueable;
    public $data; // Declare the property
    /**
     * Create a new message instance.
     *
     * @param array $ownerCrendentialsData The data for the email.
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;

        // Set the queue connection and queue name
        $this->onConnection('database'); // Use the appropriate queue connection
        $this->onQueue('accountVerification'); // Use the appropriate queue name
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.name');
        return $this->subject('Nayel App Account Verifcation')
                ->view('emails')
                ->with([
                    'name' => $this->data['name'],
                    'url' => $this->data['url'],
                ]);
    }
}
