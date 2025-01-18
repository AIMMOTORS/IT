<?php

namespace Tests\Unit;

use Tests\TestCase;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Controllers\BikeController;
use App\Models\Bike;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Validator;

class BikeControllerTest extends TestCase
{
    /*************************** Testing the details function of Bike Controller  ************/

    /********  Test Case #01: mac field is missing */
    public function testcase1()
    {
        $request = new Request();
        $request->replace([
            'mac' => '', // Invalid value for 'mac' field
            'model' => 'nayel-3.8e',
            'sub_model' => 'abc-126',
            'reg_num' => '0123-6482-ab64-3623',
            'chassis_id' => 'ab34-sw46-5379-2734',
            'model_year' => '2022',
            'date_of_purchase' => '2021-06-30',
        ]);

        $controller = new BikeController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $this->assertArrayHasKey('mac', $response->getData(true));
        $this->assertEquals(['The mac field is required.'], $response->getData(true)['mac']);

    }

    /********  Test Case #02: More than one field is missing */
    public function testcase2()
    {
        $request = new Request();
        $request->replace([
            'mac' => '', // Invalid value for 'mac' field
            'model' => 'nayel-3.8e',
            'sub_model' => '',
            'reg_num' => '0123-6482-ab64-3623',
            'chassis_id' => 'ab34-sw46-5379-2734',
            'model_year' => '',
            'date_of_purchase' => '2021-06-30',
        ]);

        $controller = new BikeController();

        $response = $controller->details($request);

        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
        $responseData = $response->getData(true);
        $this->assertArrayHasKey('mac', $responseData);
        $this->assertArrayHasKey('sub_model', $responseData);
        $this->assertArrayHasKey('model_year', $responseData);
        $this->assertEquals(['The mac field is required.'], $responseData['mac']);
        $this->assertEquals(['The sub model field is required.'], $responseData['sub_model']);
        $this->assertEquals(['The model year field is required.'], $responseData['model_year']);

    }

     /********  Test Case #03: Duplicate mac address*/
     public function testcase3()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54:64:72', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '2012',
             'date_of_purchase' => '2021-06-30',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('mac', $responseData);
         $this->assertEquals(['The mac has already been taken.'], $responseData['mac']);

    }
    /********  Test Case #04: Valid bike details*/
    // public function testcase4()
    // {
    //      $request = new Request();
    //      $request->replace([
    //          'mac' => '27:13:45:54:64:72', // Invalid value for 'mac' field
    //          'model' => 'nayel-3.8e',
    //          'sub_model' => 'abc-172',
    //          'reg_num' => '0123-6482-ab64-3623',
    //          'chassis_id' => 'ab34-sw46-5379-2734',
    //          'model_year' => '2012',
    //          'date_of_purchase' => '2021-06-30',
    //      ]);

    //     $controller = new BikeController();

    //     $response = $controller->details($request);

    //     $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    //     $responseData = $response->getData(true);
    //     $this->assertArrayHasKey('msg', $responseData);
    //     $this->assertArrayHasKey('Bike_Details', $responseData);
    //     $this->assertEquals('Details Entered Successfully', $responseData['msg']);
    //     $expectedKeys = ['mac', 'model', 'sub_model', 'reg_num', 'chassis_id', 'model_year', 'date_of_purchase'];

    //     foreach ($expectedKeys as $key) {
    //         $this->assertArrayHasKey($key, $responseData['Bike_Details']);
    //     }


    // }

    /********  Test Case #05: Invalid mac address*/
    public function testcase5()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '2012',
             'date_of_purchase' => '2021-06-30',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('mac', $responseData);
         $this->assertEquals(['The mac must be a valid MAC address.'], $responseData['mac']);
    }

    /********  Test Case #06: Invalid date of purchase---- one way*/
    public function testcase6()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54:12:34', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '2012',
             'date_of_purchase' => '30/01/2009',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('date_of_purchase', $responseData);
         $this->assertEquals(['The date_of_purchase field does not match any of the supported date formats: d-m-Y, Y-m-d, Y/m/d'], $responseData['date_of_purchase']);
    }


    /********  Test Case #07: Invalid date of purchase------Second way*/
    public function testcase7()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54:12:34', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '2012',
             'date_of_purchase' => '2009/01/30',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('date_of_purchase', $responseData);
         $this->assertEquals(['The date_of_purchase field does not match any of the supported date formats: d-m-Y, d/m/Y, Y-m-d'], $responseData['date_of_purchase']);
    }

    /********  Test Case #08: Invalid date of purchase-----third way*/
    public function testcase8()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54:12:34', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '2012',
             'date_of_purchase' => '30-01-2009',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('date_of_purchase', $responseData);
         $this->assertEquals(['The date_of_purchase field does not match any of the supported date formats: d/m/Y, Y-m-d, Y/m/d'], $responseData['date_of_purchase']);
    }


    /********  Test Case #09: Invalid model year*/
    public function testcase9()
    {
         $request = new Request();
         $request->replace([
             'mac' => 'ab:1c:de:54:12:34', // Invalid value for 'mac' field
             'model' => 'nayel-3.8e',
             'sub_model' => 'abc-172',
             'reg_num' => '0123-6482-ab64-3623',
             'chassis_id' => 'ab34-sw46-5379-2734',
             'model_year' => '20',
             'date_of_purchase' => '2009-01-30',
         ]);

         $controller = new BikeController();

         $response = $controller->details($request);

         $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
         $responseData = $response->getData(true);
         $this->assertArrayHasKey('model_year', $responseData);
         $this->assertEquals(['The model year must be at least 1900.'], $responseData['model_year']);
    }

    /********  Test Case #10: Return Json Response*/
    public function testcase10()
    {
        $controller = new BikeController();
        $response = $controller->bikeData();
        $this->assertInstanceOf(\Illuminate\Http\JsonResponse::class, $response);
    }
}
