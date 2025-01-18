<?php

namespace Tests\Unit;

use Tests\TestCase;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Controllers\BatteryController;
use App\Models\Battery;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;
use Validator;

class BatteryControllerTest extends TestCase{

    /*** TestCase #01: Valid battery details */
    // public function testcase1()
    // {
    //      $request = new Request();
    //      $request->replace([
    //         'mac' => '27:13:45:54:64:72',
    //         'password'=> 'Hello1234*',
    //         'date_of_sale'=>'2023/12/13', //(Y/m/d)
    //         'number_of_chargings' => '10',
    //         'deep_cycle_limit'=>'10',
    //         'BPI'=>'3.4'
    //      ]);

    //     $controller = new BatteryController();

    //     $response = $controller->details($request);

    //     $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    //     $responseData = $response->getData(true);
    //     $this->assertArrayHasKey('msg', $responseData);
    //     $this->assertArrayHasKey('Battery_Details', $responseData);
    //     $this->assertEquals('Details Entered Successfully', $responseData['msg']);
    //     $expectedKeys = ['mac', 'password', 'date_of_sale', 'number_of_chargings', 'deep_cycle_limit', 'BPI'];

    //     foreach ($expectedKeys as $key) {
    //         $this->assertArrayHasKey($key, $responseData['Battery_Details']);
    //     }
    // }

    /********  Test Case #02: More than one field is missing */
    public function testcase2()
    {
        $request = new Request();
        $request->replace([
            'mac' => '',
            'password'=> '',
            'date_of_sale'=>'2023/12/13', //(Y/m/d)
            'number_of_chargings' => '',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('mac', $responseData);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertArrayHasKey('number_of_chargings', $responseData);
        $this->assertEquals(['The mac field is required.'], $responseData['mac']);
        $this->assertEquals(['The password field is required.'], $responseData['password']);
        $this->assertEquals(['The number of chargings field is required.'], $responseData['number_of_chargings']);
    }

    /********  Test Case #03: Invalid mac address */
    public function testcase3()
    {
         $request = new Request();
         $request->replace([
            'mac' => '27:13:45:54',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'2023/12/13', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('mac', $responseData);
        $this->assertEquals(['The mac must be a valid MAC address.'], $responseData['mac']);
    }

    /********  Test Case #04: Duplicate mac address*/
    public function testcase4()
    {
         $request = new Request();
         $request->replace([
            'mac' => '27:13:45:54:64:72',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'2023/12/13', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('mac', $responseData);
        $this->assertEquals(['The mac has already been taken.'], $responseData['mac']);
    }

    /********  Test Case #05: mac field is missing */
    public function testcase5()
    {
         $request = new Request();
         $request->replace([
            'mac' => '',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'2023/12/13', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('mac', $responseData);
        $this->assertEquals(['The mac field is required.'], $responseData['mac']);
    }

    /********  Test Case #06: Invalid date of sale---- one way*/
    public function testcase6()
    {
         $request = new Request();
         $request->replace([
            'mac' => '27:13:45:54:14:73',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'13/12/2023', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('date_of_sale', $responseData);
         $this->assertEquals(['The date_of_sale field does not match any of the supported date formats: d-m-Y,Y-m-d, Y/m/d'], $responseData['date_of_sale']);
    }

    /********  Test Case #07: Invalid date of sale------Second way*/
    public function testcase7()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'EF:13:A5:54:14:73',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'2009/01/30', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('date_of_sale', $responseData);
        $this->assertEquals(['The date_of_sale field does not match any of the supported date formats: d-m-Y,d/m/Y,Y-m-d'], $responseData['date_of_sale']);
    }


    /********  Test Case #08: Invalid date of sale-----third way*/
    public function testcase8()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'EF:10:A5:54:14:73',
            'password'=> 'Hello1234*',
            'date_of_sale'=>'30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('date_of_sale', $responseData);
        $this->assertEquals(['The date_of_sale field does not match any of the supported date formats: d/m/Y,Y/m/d, Y-m-d'], $responseData['date_of_sale']);
    }

    /********  Test Case #09: Missing uppercase letter in password*/
    public function testcase9()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password'=> 'hello1234*',
            'date_of_sale'=>'30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertEquals(['The password must contain at least one uppercase and one lowercase letter.'], $responseData['password']);
    }

    /********  Test Case #10: Missing lowercase letter in password*/
    public function testcase10()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password'=> 'HELLO1234*',
            'date_of_sale'=>'30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertEquals(['The password must contain at least one uppercase and one lowercase letter.'], $responseData['password']);
    }


    /********  Test Case #11: Missing lowercase letter and a special character in password*/
    public function testcase11()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'HELLO1234',
            'date_of_sale' => '30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertIsArray($responseData['password']);
        $this->assertCount(2, $responseData['password']);
        $this->assertEquals('The password must contain at least one uppercase and one lowercase letter.', $responseData['password'][0]);
        $this->assertEquals('The password must contain at least one symbol.', $responseData['password'][1]);
    }

    /********  Test Case #12: Missing numbers in password and the length ofthe password is not 8 characters*/
    public function testcase12()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'Hello#',
            'date_of_sale' => '30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertIsArray($responseData['password']);
        $this->assertCount(2, $responseData['password']);
        $this->assertEquals('The password must be at least 8 characters.', $responseData['password'][0]);
        $this->assertEquals('The password must contain at least one number.', $responseData['password'][1]);
    }

    /********  Test Case #13: Minimum length of password is not 8 characters*/
    public function testcase13()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'Hel12#',
            'date_of_sale' => '30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('password', $responseData);
        $this->assertEquals(['The password must be at least 8 characters.'], $responseData['password']);
    }

    /********  Test Case #14: number of chargings as integer value*/
    public function testcase14()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'HELLO1234*',
            'date_of_sale' => '30-01-2009',
            'number_of_chargings' => 10, // Updated to an integer value
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayNotHasKey('number_of_chargings', $responseData); // Assert that there is no error for 'number_of_chargings'
    }


    /********  Test Case #15: number of chargings as float value*/
    public function testcase15()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password'=> 'HELLO1234*',
            'date_of_sale'=>'30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10.65',
            'deep_cycle_limit'=>'10',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('number_of_chargings', $responseData);
        $this->assertEquals(['The number of chargings must be an integer.'], $responseData['number_of_chargings']);
    }


    /********  Test Case #16: deep cycle limit  as float value*/
    public function testcase16()
    {
         $request = new Request();
         $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password'=> 'HELLO1234*',
            'date_of_sale'=>'30-01-2009', //(Y/m/d)
            'number_of_chargings' => '10',
            'deep_cycle_limit'=>'10.54',
            'BPI'=>'3.4'
         ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('deep_cycle_limit', $responseData);
        $this->assertEquals(['The deep cycle limit must be an integer.'], $responseData['deep_cycle_limit']);
    }

    /********  Test Case #17: deep cycle limit  as integer value*/
    public function testcase17()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'HELLO1234*',
            'date_of_sale' => '30-01-2009',
            'number_of_chargings' => 10,
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayNotHasKey('deep_cycle_limit', $responseData); // Assert that there is no error for 'deep_cycle_limit'
    }

    /********  Test Case #18: BPI  as float value*/
    public function testcase18()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'HELLO1234*',
            'date_of_sale' => '30-01-2009',
            'number_of_chargings' => 10,
            'deep_cycle_limit' => '10',
            'BPI' => '3.4'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayNotHasKey('BPI', $responseData); // Assert that there is no error for 'deep_cycle_limit'
    }

    /********  Test Case #19: BPI  as integer value*/
    public function testcase19()
    {
        $request = new Request();
        $request->replace([
            'mac' => 'AB:CD:EF:12:34:56',
            'password' => 'HELLO1234*',
            'date_of_sale' => '30-01-2009',
            'number_of_chargings' => 10,
            'deep_cycle_limit' => '10',
            'BPI' => '3563'
        ]);

        $controller = new BatteryController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayNotHasKey('BPI', $responseData); // Assert that there is no error for 'deep_cycle_limit'
    }

    /********  Test Case #20: Return Json Response*/
    public function testcase20()
    {
        $controller = new BatteryController();
        $response = $controller->batteryData();
        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    }

}
