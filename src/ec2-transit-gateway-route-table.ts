// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_association_route_table": {
        "type": "bool",
        "computed": true
      },
      "default_propagation_route_table": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "transit_gateway_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2TransitGatewayRouteTableConfig extends TerraformMetaArguments {
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId: string;
}

// Resource

export class Ec2TransitGatewayRouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_association_route_table - computed: true, optional: false, required: true
  public get defaultAssociationRouteTable() {
    return this.getBooleanAttribute('default_association_route_table');
  }

  // default_propagation_route_table - computed: true, optional: false, required: true
  public get defaultPropagationRouteTable() {
    return this.getBooleanAttribute('default_propagation_route_table');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
    };
  }
}
