// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route#blackhole Ec2TransitGatewayRoute#blackhole}
  */
  readonly blackhole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route#destination_cidr_block Ec2TransitGatewayRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route#id Ec2TransitGatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route#transit_gateway_attachment_id Ec2TransitGatewayRoute#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route#transit_gateway_route_table_id Ec2TransitGatewayRoute#transit_gateway_route_table_id}
  */
  readonly transitGatewayRouteTableId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route aws_ec2_transit_gateway_route}
*/
export class Ec2TransitGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route aws_ec2_transit_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blackhole = config.blackhole;
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._id = config.id;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blackhole - computed: false, optional: true, required: false
  private _blackhole?: boolean | cdktf.IResolvable; 
  public get blackhole() {
    return this.getBooleanAttribute('blackhole');
  }
  public set blackhole(value: boolean | cdktf.IResolvable) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  public resetTransitGatewayAttachmentId() {
    this._transitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId;
  }

  // transit_gateway_route_table_id - computed: false, optional: false, required: true
  private _transitGatewayRouteTableId?: string; 
  public get transitGatewayRouteTableId() {
    return this.getStringAttribute('transit_gateway_route_table_id');
  }
  public set transitGatewayRouteTableId(value: string) {
    this._transitGatewayRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayRouteTableIdInput() {
    return this._transitGatewayRouteTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blackhole: cdktf.booleanToTerraform(this._blackhole),
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
    };
  }
}
