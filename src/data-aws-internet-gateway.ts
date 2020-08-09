// https://www.terraform.io/docs/providers/aws/r/data_aws_internet_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "state": "string",
              "vpc_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "internet_gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
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
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsInternetGatewayConfig extends TerraformMetaArguments {
  readonly internetGatewayId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsInternetGatewayFilter[];
}
export class DataAwsInternetGatewayAttachments extends ComplexComputedList {

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface DataAwsInternetGatewayFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsInternetGateway extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsInternetGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_internet_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetGatewayId = config.internetGatewayId;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attachments - computed: true, optional: false, required: true
  public attachments(index: string) {
    return new DataAwsInternetGatewayAttachments(this, 'attachments', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // internet_gateway_id - computed: true, optional: true, required: false
  private _internetGatewayId?: string;
  public get internetGatewayId() {
    return this._internetGatewayId ?? this.getStringAttribute('internet_gateway_id');
  }
  public set internetGatewayId(value: string | undefined) {
    this._internetGatewayId = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInternetGatewayFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsInternetGatewayFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      internet_gateway_id: this._internetGatewayId,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
