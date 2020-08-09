// https://www.terraform.io/docs/providers/aws/r/data_aws_kinesis_stream.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "closed_shards": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "creation_timestamp": {
        "type": "number",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "open_shards": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "retention_period": {
        "type": "number",
        "computed": true
      },
      "shard_level_metrics": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsKinesisStreamConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsKinesisStream extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConfig) {
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
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // closed_shards - computed: true, optional: false, required: true
  public get closedShards() {
    return this.getListAttribute('closed_shards');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getNumberAttribute('creation_timestamp');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // open_shards - computed: true, optional: false, required: true
  public get openShards() {
    return this.getListAttribute('open_shards');
  }

  // retention_period - computed: true, optional: false, required: true
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // shard_level_metrics - computed: true, optional: false, required: true
  public get shardLevelMetrics() {
    return this.getListAttribute('shard_level_metrics');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
