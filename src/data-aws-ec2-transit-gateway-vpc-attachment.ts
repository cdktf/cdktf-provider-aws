// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway_vpc_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "dns_support": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "ipv6_support": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
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
      },
      "transit_gateway_id": {
        "type": "string",
        "computed": true
      },
      "vpc_id": {
        "type": "string",
        "computed": true
      },
      "vpc_owner_id": {
        "type": "string",
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
                "list",
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

export interface DataAwsEc2TransitGatewayVpcAttachmentConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayVpcAttachmentFilter[];
}
export interface DataAwsEc2TransitGatewayVpcAttachmentFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2TransitGatewayVpcAttachment extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayVpcAttachmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_support - computed: true, optional: false, required: true
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv6_support - computed: true, optional: false, required: true
  public get ipv6Support() {
    return this.getStringAttribute('ipv6_support');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: true, optional: false, required: true
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_owner_id - computed: true, optional: false, required: true
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayVpcAttachmentFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2TransitGatewayVpcAttachmentFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      filter: this._filter,
    };
  }
}
