// https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html
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
        "required": true
      }
    },
    "block_types": {
      "s3_destination": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket_name": {
              "type": "string",
              "required": true
            },
            "kms_key_arn": {
              "type": "string",
              "optional": true
            },
            "prefix": {
              "type": "string",
              "optional": true
            },
            "region": {
              "type": "string",
              "required": true
            },
            "sync_format": {
              "type": "string",
              "optional": true
            }
          }
        },
        "min_items": 1,
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

export interface SsmResourceDataSyncConfig extends TerraformMetaArguments {
  readonly name: string;
  /** s3_destination block */
  readonly s3Destination: SsmResourceDataSyncS3Destination[];
}
export interface SsmResourceDataSyncS3Destination {
  readonly bucketName: string;
  readonly kmsKeyArn?: string;
  readonly prefix?: string;
  readonly region: string;
  readonly syncFormat?: string;
}

// Resource

export class SsmResourceDataSync extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_resource_data_sync',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._s3Destination = config.s3Destination;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // s3_destination - computed: false, optional: false, required: true
  private _s3Destination: SsmResourceDataSyncS3Destination[];
  public get s3Destination() {
    return this._s3Destination;
  }
  public set s3Destination(value: SsmResourceDataSyncS3Destination[]) {
    this._s3Destination = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      s3_destination: this._s3Destination,
    };
  }
}
