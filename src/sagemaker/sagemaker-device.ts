// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device#device SagemakerDevice#device}
  */
  readonly device: SagemakerDeviceDevice;
}
export interface SagemakerDeviceDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device#description SagemakerDevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device#device_name SagemakerDevice#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device#iot_thing_name SagemakerDevice#iot_thing_name}
  */
  readonly iotThingName?: string;
}

export function sagemakerDeviceDeviceToTerraform(struct?: SagemakerDeviceDeviceOutputReference | SagemakerDeviceDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    iot_thing_name: cdktf.stringToTerraform(struct!.iotThingName),
  }
}

export class SagemakerDeviceDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerDeviceDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._iotThingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotThingName = this._iotThingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDeviceDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._deviceName = undefined;
      this._iotThingName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._deviceName = value.deviceName;
      this._iotThingName = value.iotThingName;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // iot_thing_name - computed: false, optional: true, required: false
  private _iotThingName?: string; 
  public get iotThingName() {
    return this.getStringAttribute('iot_thing_name');
  }
  public set iotThingName(value: string) {
    this._iotThingName = value;
  }
  public resetIotThingName() {
    this._iotThingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotThingNameInput() {
    return this._iotThingName;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device aws_sagemaker_device}
*/
export class SagemakerDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device aws_sagemaker_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_device',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceFleetName = config.deviceFleetName;
    this._device.internalValue = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // device_fleet_name - computed: false, optional: false, required: true
  private _deviceFleetName?: string; 
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
  }
  public set deviceFleetName(value: string) {
    this._deviceFleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFleetNameInput() {
    return this._deviceFleetName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // device - computed: false, optional: false, required: true
  private _device = new SagemakerDeviceDeviceOutputReference(this, "device", true);
  public get device() {
    return this._device;
  }
  public putDevice(value: SagemakerDeviceDevice) {
    this._device.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
      device: sagemakerDeviceDeviceToTerraform(this._device.internalValue),
    };
  }
}
