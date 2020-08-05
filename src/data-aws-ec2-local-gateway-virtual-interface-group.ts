// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_local_gateway_virtual_interface_group.html
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
      "local_gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "local_gateway_virtual_interface_ids": {
        "type": [
          "set",
          "string"
        ],
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

// Configuration

export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig extends TerraformMetaArguments {
  readonly localGatewayId?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2LocalGatewayVirtualInterfaceGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2LocalGatewayVirtualInterfaceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_local_gateway_virtual_interface_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayId = config.localGatewayId;
    this._tags = config.tags;
    this._filter = config.filter;
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

  // local_gateway_id - computed: true, optional: true, required: false
  private _localGatewayId?: string;
  public get localGatewayId() {
    return this._localGatewayId ?? this.getStringAttribute('local_gateway_id');
  }
  public set localGatewayId(value: string | undefined) {
    this._localGatewayId = value;
  }

  // local_gateway_virtual_interface_ids - computed: true, optional: false, required: true
  public get localGatewayVirtualInterfaceIds() {
    return this.getListAttribute('local_gateway_virtual_interface_ids');
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
  private _filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_id: this._localGatewayId,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
