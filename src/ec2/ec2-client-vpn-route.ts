// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2ClientVpnRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#client_vpn_endpoint_id Ec2ClientVpnRoute#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#description Ec2ClientVpnRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#destination_cidr_block Ec2ClientVpnRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html#target_vpc_subnet_id Ec2ClientVpnRoute#target_vpc_subnet_id}
  */
  readonly targetVpcSubnetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route}
*/
export class Ec2ClientVpnRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_client_vpn_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_route.html aws_ec2_client_vpn_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnRouteConfig
  */
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
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // target_vpc_subnet_id - computed: false, optional: false, required: true
  private _targetVpcSubnetId?: string; 
  public get targetVpcSubnetId() {
    return this.getStringAttribute('target_vpc_subnet_id');
  }
  public set targetVpcSubnetId(value: string) {
    this._targetVpcSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcSubnetIdInput() {
    return this._targetVpcSubnetId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      description: cdktf.stringToTerraform(this._description),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      target_vpc_subnet_id: cdktf.stringToTerraform(this._targetVpcSubnetId),
    };
  }
}
