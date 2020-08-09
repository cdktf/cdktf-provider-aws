// https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "encryption_type": {
        "type": "string",
        "optional": true
      },
      "enforce_consumer_deletion": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "retention_period": {
        "type": "number",
        "optional": true
      },
      "shard_count": {
        "type": "number",
        "required": true
      },
      "shard_level_metrics": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KinesisStreamConfig extends TerraformMetaArguments {
  readonly encryptionType?: string;
  readonly enforceConsumerDeletion?: boolean;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly retentionPeriod?: number;
  readonly shardCount: number;
  readonly shardLevelMetrics?: string[];
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KinesisStream extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KinesisStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._encryptionType = config.encryptionType;
    this._enforceConsumerDeletion = config.enforceConsumerDeletion;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._retentionPeriod = config.retentionPeriod;
    this._shardCount = config.shardCount;
    this._shardLevelMetrics = config.shardLevelMetrics;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string;
  public get encryptionType() {
    return this._encryptionType;
  }
  public set encryptionType(value: string | undefined) {
    this._encryptionType = value;
  }

  // enforce_consumer_deletion - computed: false, optional: true, required: false
  private _enforceConsumerDeletion?: boolean;
  public get enforceConsumerDeletion() {
    return this._enforceConsumerDeletion;
  }
  public set enforceConsumerDeletion(value: boolean | undefined) {
    this._enforceConsumerDeletion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number;
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public set retentionPeriod(value: number | undefined) {
    this._retentionPeriod = value;
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount: number;
  public get shardCount() {
    return this._shardCount;
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }

  // shard_level_metrics - computed: false, optional: true, required: false
  private _shardLevelMetrics?: string[];
  public get shardLevelMetrics() {
    return this._shardLevelMetrics;
  }
  public set shardLevelMetrics(value: string[] | undefined) {
    this._shardLevelMetrics = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KinesisStreamTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KinesisStreamTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption_type: this._encryptionType,
      enforce_consumer_deletion: this._enforceConsumerDeletion,
      kms_key_id: this._kmsKeyId,
      name: this._name,
      retention_period: this._retentionPeriod,
      shard_count: this._shardCount,
      shard_level_metrics: this._shardLevelMetrics,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
