// https://www.terraform.io/docs/providers/aws/r/data_aws_ec2_transit_gateway.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "amazon_side_asn": {
        "type": "number",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "association_default_route_table_id": {
        "type": "string",
        "computed": true
      },
      "auto_accept_shared_attachments": {
        "type": "string",
        "computed": true
      },
      "default_route_table_association": {
        "type": "string",
        "computed": true
      },
      "default_route_table_propagation": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "dns_support": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "propagation_default_route_table_id": {
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
      },
      "vpn_ecmp_support": {
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

export interface DataAwsEc2TransitGatewayConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsEc2TransitGatewayFilter[];
}
export interface DataAwsEc2TransitGatewayFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsEc2TransitGateway extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway',
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

  // amazon_side_asn - computed: true, optional: false, required: true
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: true
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: true, optional: false, required: true
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }

  // default_route_table_association - computed: true, optional: false, required: true
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }

  // default_route_table_propagation - computed: true, optional: false, required: true
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: true
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpn_ecmp_support - computed: true, optional: false, required: true
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsEc2TransitGatewayFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsEc2TransitGatewayFilter[] | undefined) {
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
