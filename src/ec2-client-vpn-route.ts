// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "client_vpn_endpoint_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "destination_cidr_block": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "origin": {
        "type": "string",
        "computed": true
      },
      "target_vpc_subnet_id": {
        "type": "string",
        "required": true
      },
      "type": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Ec2ClientVpnRouteConfig extends TerraformMetaArguments {
  readonly clientVpnEndpointId: string;
  readonly description?: string;
  readonly destinationCidrBlock: string;
  readonly targetVpcSubnetId: string;
}

// Resource

export class Ec2ClientVpnRoute extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2ClientVpnRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._description = config.description;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._targetVpcSubnetId = config.targetVpcSubnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId: string;
  public get clientVpnEndpointId() {
    return this._clientVpnEndpointId;
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this._destinationCidrBlock;
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // origin - computed: true, optional: false, required: true
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // target_vpc_subnet_id - computed: false, optional: false, required: true
  private _targetVpcSubnetId: string;
  public get targetVpcSubnetId() {
    return this._targetVpcSubnetId;
  }
  public set targetVpcSubnetId(value: string) {
    this._targetVpcSubnetId = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: this._clientVpnEndpointId,
      description: this._description,
      destination_cidr_block: this._destinationCidrBlock,
      target_vpc_subnet_id: this._targetVpcSubnetId,
    };
  }
}
