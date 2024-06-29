// https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#id ConfigDeliveryChannel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
  */
  readonly s3KmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * snapshot_delivery_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
  */
  readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties;
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
  */
  readonly deliveryFrequency?: string;
}

export function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_frequency: cdktf.stringToTerraform(struct!.deliveryFrequency),
  }
}


export function configDeliveryChannelSnapshotDeliveryPropertiesToHclTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_frequency: {
      value: cdktf.stringToHclTerraform(struct!.deliveryFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigDeliveryChannelSnapshotDeliveryProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryFrequency = this._deliveryFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigDeliveryChannelSnapshotDeliveryProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryFrequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryFrequency = value.deliveryFrequency;
    }
  }

  // delivery_frequency - computed: false, optional: true, required: false
  private _deliveryFrequency?: string; 
  public get deliveryFrequency() {
    return this.getStringAttribute('delivery_frequency');
  }
  public set deliveryFrequency(value: string) {
    this._deliveryFrequency = value;
  }
  public resetDeliveryFrequency() {
    this._deliveryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryFrequencyInput() {
    return this._deliveryFrequency;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel aws_config_delivery_channel}
*/
export class ConfigDeliveryChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_delivery_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigDeliveryChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigDeliveryChannel to import
  * @param importFromId The id of the existing ConfigDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigDeliveryChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_config_delivery_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/config_delivery_channel aws_config_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_delivery_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.56.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._s3KmsKeyArn = config.s3KmsKeyArn;
    this._snsTopicArn = config.snsTopicArn;
    this._snapshotDeliveryProperties.internalValue = config.snapshotDeliveryProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // s3_kms_key_arn - computed: false, optional: true, required: false
  private _s3KmsKeyArn?: string; 
  public get s3KmsKeyArn() {
    return this.getStringAttribute('s3_kms_key_arn');
  }
  public set s3KmsKeyArn(value: string) {
    this._s3KmsKeyArn = value;
  }
  public resetS3KmsKeyArn() {
    this._s3KmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyArnInput() {
    return this._s3KmsKeyArn;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // snapshot_delivery_properties - computed: false, optional: true, required: false
  private _snapshotDeliveryProperties = new ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(this, "snapshot_delivery_properties");
  public get snapshotDeliveryProperties() {
    return this._snapshotDeliveryProperties;
  }
  public putSnapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties) {
    this._snapshotDeliveryProperties.internalValue = value;
  }
  public resetSnapshotDeliveryProperties() {
    this._snapshotDeliveryProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDeliveryPropertiesInput() {
    return this._snapshotDeliveryProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      snapshot_delivery_properties: configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(this._snapshotDeliveryProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3BucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key_prefix: {
        value: cdktf.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._s3KmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_delivery_properties: {
        value: configDeliveryChannelSnapshotDeliveryPropertiesToHclTerraform(this._snapshotDeliveryProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigDeliveryChannelSnapshotDeliveryPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
