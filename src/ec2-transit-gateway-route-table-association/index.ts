/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}
  */
  readonly replaceExistingAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}
  */
  readonly transitGatewayRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association aws_ec2_transit_gateway_route_table_association}
*/
export class Ec2TransitGatewayRouteTableAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_route_table_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayRouteTableAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayRouteTableAssociation to import
  * @param importFromId The id of the existing Ec2TransitGatewayRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayRouteTableAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_route_table_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/resources/ec2_transit_gateway_route_table_association aws_ec2_transit_gateway_route_table_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayRouteTableAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.29.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._replaceExistingAssociation = config.replaceExistingAssociation;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // replace_existing_association - computed: false, optional: true, required: false
  private _replaceExistingAssociation?: boolean | cdktf.IResolvable; 
  public get replaceExistingAssociation() {
    return this.getBooleanAttribute('replace_existing_association');
  }
  public set replaceExistingAssociation(value: boolean | cdktf.IResolvable) {
    this._replaceExistingAssociation = value;
  }
  public resetReplaceExistingAssociation() {
    this._replaceExistingAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceExistingAssociationInput() {
    return this._replaceExistingAssociation;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId?: string; 
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
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
      id: cdktf.stringToTerraform(this._id),
      replace_existing_association: cdktf.booleanToTerraform(this._replaceExistingAssociation),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_route_table_id: cdktf.stringToTerraform(this._transitGatewayRouteTableId),
    };
  }
}
