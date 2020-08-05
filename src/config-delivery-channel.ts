// https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "s3_bucket_name": {
        "type": "string",
        "required": true
      },
      "s3_key_prefix": {
        "type": "string",
        "optional": true
      },
      "sns_topic_arn": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "snapshot_delivery_properties": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "delivery_frequency": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigDeliveryChannelConfig extends TerraformMetaArguments {
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

// Resource

export class ConfigDeliveryChannel extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName: string;
  public get s3BucketName() {
    return this._s3BucketName;
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string;
  public get s3KeyPrefix() {
    return this._s3KeyPrefix;
  }
  public set s3KeyPrefix(value: string | undefined) {
    this._s3KeyPrefix = value;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string;
  public get snsTopicArn() {
    return this._snsTopicArn;
  }
  public set snsTopicArn(value: string | undefined) {
    this._snsTopicArn = value;
  }

  // snapshot_delivery_properties - computed: false, optional: true, required: false
  private _snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
  public get snapshotDeliveryProperties() {
    return this._snapshotDeliveryProperties;
  }
  public set snapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties[] | undefined) {
    this._snapshotDeliveryProperties = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      s3_bucket_name: this._s3BucketName,
      s3_key_prefix: this._s3KeyPrefix,
      sns_topic_arn: this._snsTopicArn,
      snapshot_delivery_properties: this._snapshotDeliveryProperties,
    };
  }
}
