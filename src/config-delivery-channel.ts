// https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly s3BucketName: string;
  readonly s3KeyPrefix?: string;
  readonly snsTopicArn?: string;
  /** snapshot_delivery_properties block */
  readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
  readonly deliveryFrequency?: string;
}

function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_frequency: cdktf.stringToTerraform(struct!.deliveryFrequency),
  }
}


// Resource

export class ConfigDeliveryChannel extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      snapshot_delivery_properties: cdktf.listMapper(configDeliveryChannelSnapshotDeliveryPropertiesToTerraform)(this._snapshotDeliveryProperties),
    };
  }
}
