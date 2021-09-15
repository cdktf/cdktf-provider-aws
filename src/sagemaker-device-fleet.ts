// https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#description SagemakerDeviceFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}
  */
  readonly enableIotRoleAlias?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#role_arn SagemakerDeviceFleet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags SagemakerDeviceFleet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags_all SagemakerDeviceFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#output_config SagemakerDeviceFleet#output_config}
  */
  readonly outputConfig: SagemakerDeviceFleetOutputConfig[];
}
export interface SagemakerDeviceFleetOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#kms_key_id SagemakerDeviceFleet#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#s3_output_location SagemakerDeviceFleet#s3_output_location}
  */
  readonly s3OutputLocation: string;
}

function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_location: cdktf.stringToTerraform(struct!.s3OutputLocation),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet}
*/
export class SagemakerDeviceFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_device_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDeviceFleetConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_device_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._deviceFleetName = config.deviceFleetName;
    this._enableIotRoleAlias = config.enableIotRoleAlias;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._outputConfig = config.outputConfig;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // device_fleet_name - computed: false, optional: false, required: true
  private _deviceFleetName: string;
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
  }
  public set deviceFleetName(value: string) {
    this._deviceFleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFleetNameInput() {
    return this._deviceFleetName
  }

  // enable_iot_role_alias - computed: false, optional: true, required: false
  private _enableIotRoleAlias?: boolean | cdktf.IResolvable;
  public get enableIotRoleAlias() {
    return this.getBooleanAttribute('enable_iot_role_alias');
  }
  public set enableIotRoleAlias(value: boolean | cdktf.IResolvable ) {
    this._enableIotRoleAlias = value;
  }
  public resetEnableIotRoleAlias() {
    this._enableIotRoleAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIotRoleAliasInput() {
    return this._enableIotRoleAlias
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iot_role_alias - computed: true, optional: false, required: false
  public get iotRoleAlias() {
    return this.getStringAttribute('iot_role_alias');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig: SagemakerDeviceFleetOutputConfig[];
  public get outputConfig() {
    return this.interpolationForAttribute('output_config') as any;
  }
  public set outputConfig(value: SagemakerDeviceFleetOutputConfig[]) {
    this._outputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
      enable_iot_role_alias: cdktf.booleanToTerraform(this._enableIotRoleAlias),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      output_config: cdktf.listMapper(sagemakerDeviceFleetOutputConfigToTerraform)(this._outputConfig),
    };
  }
}
