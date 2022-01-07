// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Device Farm
*/
export interface DevicefarmDevicePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#description DevicefarmDevicePool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#max_devices DevicefarmDevicePool#max_devices}
  */
  readonly maxDevices?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#name DevicefarmDevicePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#project_arn DevicefarmDevicePool#project_arn}
  */
  readonly projectArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#tags DevicefarmDevicePool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#tags_all DevicefarmDevicePool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#rule DevicefarmDevicePool#rule}
  */
  readonly rule: DevicefarmDevicePoolRule[];
}
export interface DevicefarmDevicePoolRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#attribute DevicefarmDevicePool#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#operator DevicefarmDevicePool#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html#value DevicefarmDevicePool#value}
  */
  readonly value?: string;
}

export function devicefarmDevicePoolRuleToTerraform(struct?: DevicefarmDevicePoolRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html aws_devicefarm_device_pool}
*/
export class DevicefarmDevicePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_devicefarm_device_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_device_pool.html aws_devicefarm_device_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicefarmDevicePoolConfig
  */
  public constructor(scope: Construct, id: string, config: DevicefarmDevicePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devicefarm_device_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._maxDevices = config.maxDevices;
    this._name = config.name;
    this._projectArn = config.projectArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_devices - computed: false, optional: true, required: false
  private _maxDevices?: number; 
  public get maxDevices() {
    return this.getNumberAttribute('max_devices');
  }
  public set maxDevices(value: number) {
    this._maxDevices = value;
  }
  public resetMaxDevices() {
    this._maxDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDevicesInput() {
    return this._maxDevices;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_arn - computed: false, optional: false, required: true
  private _projectArn?: string; 
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }
  public set projectArn(value: string) {
    this._projectArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectArnInput() {
    return this._projectArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: DevicefarmDevicePoolRule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: DevicefarmDevicePoolRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      max_devices: cdktf.numberToTerraform(this._maxDevices),
      name: cdktf.stringToTerraform(this._name),
      project_arn: cdktf.stringToTerraform(this._projectArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      rule: cdktf.listMapper(devicefarmDevicePoolRuleToTerraform)(this._rule),
    };
  }
}
