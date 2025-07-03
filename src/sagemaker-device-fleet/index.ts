/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#description SagemakerDeviceFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}
  */
  readonly enableIotRoleAlias?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#id SagemakerDeviceFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#region SagemakerDeviceFleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}
  */
  readonly outputConfig: SagemakerDeviceFleetOutputConfig;
}
export interface SagemakerDeviceFleetOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}
  */
  readonly s3OutputLocation: string;
}

export function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_location: cdktf.stringToTerraform(struct!.s3OutputLocation),
  }
}


export function sagemakerDeviceFleetOutputConfigToHclTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_location: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerDeviceFleetOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerDeviceFleetOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3OutputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputLocation = this._s3OutputLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerDeviceFleetOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3OutputLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3OutputLocation = value.s3OutputLocation;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // s3_output_location - computed: false, optional: false, required: true
  private _s3OutputLocation?: string; 
  public get s3OutputLocation() {
    return this.getStringAttribute('s3_output_location');
  }
  public set s3OutputLocation(value: string) {
    this._s3OutputLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputLocationInput() {
    return this._s3OutputLocation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet aws_sagemaker_device_fleet}
*/
export class SagemakerDeviceFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_device_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerDeviceFleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerDeviceFleet to import
  * @param importFromId The id of the existing SagemakerDeviceFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerDeviceFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_device_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_device_fleet aws_sagemaker_device_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDeviceFleetConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_device_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceFleetName = config.deviceFleetName;
    this._enableIotRoleAlias = config.enableIotRoleAlias;
    this._id = config.id;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._outputConfig.internalValue = config.outputConfig;
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

  // enable_iot_role_alias - computed: false, optional: true, required: false
  private _enableIotRoleAlias?: boolean | cdktf.IResolvable; 
  public get enableIotRoleAlias() {
    return this.getBooleanAttribute('enable_iot_role_alias');
  }
  public set enableIotRoleAlias(value: boolean | cdktf.IResolvable) {
    this._enableIotRoleAlias = value;
  }
  public resetEnableIotRoleAlias() {
    this._enableIotRoleAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIotRoleAliasInput() {
    return this._enableIotRoleAlias;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // iot_role_alias - computed: true, optional: false, required: false
  public get iotRoleAlias() {
    return this.getStringAttribute('iot_role_alias');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new SagemakerDeviceFleetOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: SagemakerDeviceFleetOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
      enable_iot_role_alias: cdktf.booleanToTerraform(this._enableIotRoleAlias),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      output_config: sagemakerDeviceFleetOutputConfigToTerraform(this._outputConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_fleet_name: {
        value: cdktf.stringToHclTerraform(this._deviceFleetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_iot_role_alias: {
        value: cdktf.booleanToHclTerraform(this._enableIotRoleAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      output_config: {
        value: sagemakerDeviceFleetOutputConfigToHclTerraform(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerDeviceFleetOutputConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
