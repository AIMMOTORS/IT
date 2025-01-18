<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LoginCredentialsMail extends Mailable
{
    // use Queueable, SerializesModels;
    use Queueable;
    public $ownerCrendentialsData; // Declare the property
    /**
     * Create a new message instance.
     *
     * @param array $ownerCrendentialsData The data for the email.
     * @return void
     */
    public function __construct(array $ownerCrendentialsData)
    {
        $this->ownerCrendentialsData = $ownerCrendentialsData;

        // Set the queue connection and queue name
        $this->onConnection('database'); // Use the appropriate queue connection
        $this->onQueue('appLoginCredentials'); // Use the appropriate queue name
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.name');
        return $this->subject('Nayel App Credentials')
                ->view('loginCredentialsMail')
                ->with([
                    'name' => $this->ownerCrendentialsData['name'],
                    'email' => $this->ownerCrendentialsData['email'],
                    'randomPassword' => $this->ownerCrendentialsData['randomPassword'],
        ]);
    }
}
