/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayPrefixListReferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#blackhole Ec2TransitGatewayPrefixListReference#blackhole}
  */
  readonly blackhole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#id Ec2TransitGatewayPrefixListReference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#prefix_list_id Ec2TransitGatewayPrefixListReference#prefix_list_id}
  */
  readonly prefixListId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#region Ec2TransitGatewayPrefixListReference#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#transit_gateway_attachment_id Ec2TransitGatewayPrefixListReference#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#transit_gateway_route_table_id Ec2TransitGatewayPrefixListReference#transit_gateway_route_table_id}
  */
  readonly transitGatewayRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference}
*/
export class Ec2TransitGatewayPrefixListReference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_prefix_list_reference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayPrefixListReference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayPrefixListReference to import
  * @param importFromId The id of the existing Ec2TransitGatewayPrefixListReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayPrefixListReference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_prefix_list_reference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/ec2_transit_gateway_prefix_list_reference aws_ec2_transit_gateway_prefix_list_reference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPrefixListReferenceConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPrefixListReferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_prefix_list_reference',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
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
    this._id = config.id;
    this._prefixListId = config.prefixListId;
    this._region = config.region;
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

  // prefix_list_id - computed: false, optional: false, required: true
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // prefix_list_owner_id - computed: true, optional: false, required: false
  public get prefixListOwnerId() {
    return this.getStringAttribute('prefix_list_owner_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      id: cdktf.stringToTerraform(this._id),
      prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
      region: cdktf.stringToTerraform(this._region),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blackhole: {
        value: cdktf.booleanToHclTerraform(this._blackhole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._prefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
