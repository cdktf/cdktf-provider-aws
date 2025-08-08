/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}
  */
  readonly deliveryDestinationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}
  */
  readonly deliverySourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}
  */
  readonly recordFields?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#region CloudwatchLogDelivery#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}
  */
  readonly s3DeliveryConfiguration?: CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface CloudwatchLogDeliveryS3DeliveryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}
  */
  readonly enableHiveCompatiblePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}
  */
  readonly suffixPath?: string;
}

export function cloudwatchLogDeliveryS3DeliveryConfigurationToTerraform(struct?: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_hive_compatible_path: cdktf.booleanToTerraform(struct!.enableHiveCompatiblePath),
    suffix_path: cdktf.stringToTerraform(struct!.suffixPath),
  }
}


export function cloudwatchLogDeliveryS3DeliveryConfigurationToHclTerraform(struct?: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_hive_compatible_path: {
      value: cdktf.booleanToHclTerraform(struct!.enableHiveCompatiblePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_path: {
      value: cdktf.stringToHclTerraform(struct!.suffixPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHiveCompatiblePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHiveCompatiblePath = this._enableHiveCompatiblePath;
    }
    if (this._suffixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixPath = this._suffixPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableHiveCompatiblePath = undefined;
      this._suffixPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableHiveCompatiblePath = value.enableHiveCompatiblePath;
      this._suffixPath = value.suffixPath;
    }
  }

  // enable_hive_compatible_path - computed: true, optional: true, required: false
  private _enableHiveCompatiblePath?: boolean | cdktf.IResolvable; 
  public get enableHiveCompatiblePath() {
    return this.getBooleanAttribute('enable_hive_compatible_path');
  }
  public set enableHiveCompatiblePath(value: boolean | cdktf.IResolvable) {
    this._enableHiveCompatiblePath = value;
  }
  public resetEnableHiveCompatiblePath() {
    this._enableHiveCompatiblePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHiveCompatiblePathInput() {
    return this._enableHiveCompatiblePath;
  }

  // suffix_path - computed: true, optional: true, required: false
  private _suffixPath?: string; 
  public get suffixPath() {
    return this.getStringAttribute('suffix_path');
  }
  public set suffixPath(value: string) {
    this._suffixPath = value;
  }
  public resetSuffixPath() {
    this._suffixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixPathInput() {
    return this._suffixPath;
  }
}

export class CloudwatchLogDeliveryS3DeliveryConfigurationList extends cdktf.ComplexList {
  public internalValue? : CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference {
    return new CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery}
*/
export class CloudwatchLogDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchLogDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogDelivery to import
  * @param importFromId The id of the existing CloudwatchLogDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.8.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_delivery',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.8.0',
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
    this._deliveryDestinationArn = config.deliveryDestinationArn;
    this._deliverySourceName = config.deliverySourceName;
    this._fieldDelimiter = config.fieldDelimiter;
    this._recordFields = config.recordFields;
    this._region = config.region;
    this._s3DeliveryConfiguration.internalValue = config.s3DeliveryConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_destination_arn - computed: false, optional: false, required: true
  private _deliveryDestinationArn?: string; 
  public get deliveryDestinationArn() {
    return this.getStringAttribute('delivery_destination_arn');
  }
  public set deliveryDestinationArn(value: string) {
    this._deliveryDestinationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDestinationArnInput() {
    return this._deliveryDestinationArn;
  }

  // delivery_source_name - computed: false, optional: false, required: true
  private _deliverySourceName?: string; 
  public get deliverySourceName() {
    return this.getStringAttribute('delivery_source_name');
  }
  public set deliverySourceName(value: string) {
    this._deliverySourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverySourceNameInput() {
    return this._deliverySourceName;
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // record_fields - computed: true, optional: true, required: false
  private _recordFields?: string[]; 
  public get recordFields() {
    return this.getListAttribute('record_fields');
  }
  public set recordFields(value: string[]) {
    this._recordFields = value;
  }
  public resetRecordFields() {
    this._recordFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFieldsInput() {
    return this._recordFields;
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

  // s3_delivery_configuration - computed: true, optional: true, required: false
  private _s3DeliveryConfiguration = new CloudwatchLogDeliveryS3DeliveryConfigurationList(this, "s3_delivery_configuration", false);
  public get s3DeliveryConfiguration() {
    return this._s3DeliveryConfiguration;
  }
  public putS3DeliveryConfiguration(value: CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable) {
    this._s3DeliveryConfiguration.internalValue = value;
  }
  public resetS3DeliveryConfiguration() {
    this._s3DeliveryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DeliveryConfigurationInput() {
    return this._s3DeliveryConfiguration.internalValue;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_destination_arn: cdktf.stringToTerraform(this._deliveryDestinationArn),
      delivery_source_name: cdktf.stringToTerraform(this._deliverySourceName),
      field_delimiter: cdktf.stringToTerraform(this._fieldDelimiter),
      record_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordFields),
      region: cdktf.stringToTerraform(this._region),
      s3_delivery_configuration: cdktf.listMapper(cloudwatchLogDeliveryS3DeliveryConfigurationToTerraform, false)(this._s3DeliveryConfiguration.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_destination_arn: {
        value: cdktf.stringToHclTerraform(this._deliveryDestinationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_source_name: {
        value: cdktf.stringToHclTerraform(this._deliverySourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_delimiter: {
        value: cdktf.stringToHclTerraform(this._fieldDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_delivery_configuration: {
        value: cdktf.listMapperHcl(cloudwatchLogDeliveryS3DeliveryConfigurationToHclTerraform, false)(this._s3DeliveryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchLogDeliveryS3DeliveryConfigurationList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
