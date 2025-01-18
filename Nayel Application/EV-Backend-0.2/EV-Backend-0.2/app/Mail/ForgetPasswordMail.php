<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $url;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url)
    {
        $this->url = $url;

        // Set the queue connection and queue name
        $this->onConnection('database'); // Use the appropriate queue connection
        $this->onQueue('forgetPassword'); // Use the appropriate queue name

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // return $this->view('view.name');
        return $this->subject('Password Reset')
            ->view('forgetPasswordMail') // Blade view for the email content
            ->with(['url' => $this->url]);

    }
}
