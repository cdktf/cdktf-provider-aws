// https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#name ConfigDeliveryChannel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
  */
  readonly s3KmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * snapshot_delivery_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
  */
  readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
  */
  readonly deliveryFrequency?: string;
}

function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_frequency: cdktf.stringToTerraform(struct!.deliveryFrequency),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}
*/
export class ConfigDeliveryChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_delivery_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigDeliveryChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_delivery_channel',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._s3BucketName = config.s3BucketName;
    this._s3KeyPrefix = config.s3KeyPrefix;
    this._s3KmsKeyArn = config.s3KmsKeyArn;
    this._snsTopicArn = config.snsTopicArn;
    this._snapshotDeliveryProperties = config.snapshotDeliveryProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName: string;
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string ) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix
  }

  // s3_kms_key_arn - computed: false, optional: true, required: false
  private _s3KmsKeyArn?: string;
  public get s3KmsKeyArn() {
    return this.getStringAttribute('s3_kms_key_arn');
  }
  public set s3KmsKeyArn(value: string ) {
    this._s3KmsKeyArn = value;
  }
  public resetS3KmsKeyArn() {
    this._s3KmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyArnInput() {
    return this._s3KmsKeyArn
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string;
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string ) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn
  }

  // snapshot_delivery_properties - computed: false, optional: true, required: false
  private _snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
  public get snapshotDeliveryProperties() {
    return this.interpolationForAttribute('snapshot_delivery_properties') as any;
  }
  public set snapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties[] ) {
    this._snapshotDeliveryProperties = value;
  }
  public resetSnapshotDeliveryProperties() {
    this._snapshotDeliveryProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDeliveryPropertiesInput() {
    return this._snapshotDeliveryProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
      s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      snapshot_delivery_properties: cdktf.listMapper(configDeliveryChannelSnapshotDeliveryPropertiesToTerraform)(this._snapshotDeliveryProperties),
    };
  }
}
