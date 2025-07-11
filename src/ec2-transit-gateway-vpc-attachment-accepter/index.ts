/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#region Ec2TransitGatewayVpcAttachmentAccepter#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}
  */
  readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}
  */
  readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter}
*/
export class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_vpc_attachment_accepter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ec2TransitGatewayVpcAttachmentAccepter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayVpcAttachmentAccepter to import
  * @param importFromId The id of the existing Ec2TransitGatewayVpcAttachmentAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayVpcAttachmentAccepter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_vpc_attachment_accepter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_vpc_attachment_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayDefaultRouteTableAssociation = config.transitGatewayDefaultRouteTableAssociation;
    this._transitGatewayDefaultRouteTablePropagation = config.transitGatewayDefaultRouteTablePropagation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_mode_support - computed: true, optional: false, required: false
  public get applianceModeSupport() {
    return this.getStringAttribute('appliance_mode_support');
  }

  // dns_support - computed: true, optional: false, required: false
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
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

  // ipv6_support - computed: true, optional: false, required: false
  public get ipv6Support() {
    return this.getStringAttribute('ipv6_support');
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

  // security_group_referencing_support - computed: true, optional: false, required: false
  public get securityGroupReferencingSupport() {
    return this.getStringAttribute('security_group_referencing_support');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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

  // transit_gateway_default_route_table_association - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTableAssociation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_association');
  }
  public set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTableAssociation = value;
  }
  public resetTransitGatewayDefaultRouteTableAssociation() {
    this._transitGatewayDefaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTableAssociationInput() {
    return this._transitGatewayDefaultRouteTableAssociation;
  }

  // transit_gateway_default_route_table_propagation - computed: false, optional: true, required: false
  private _transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable; 
  public get transitGatewayDefaultRouteTablePropagation() {
    return this.getBooleanAttribute('transit_gateway_default_route_table_propagation');
  }
  public set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable) {
    this._transitGatewayDefaultRouteTablePropagation = value;
  }
  public resetTransitGatewayDefaultRouteTablePropagation() {
    this._transitGatewayDefaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDefaultRouteTablePropagationInput() {
    return this._transitGatewayDefaultRouteTablePropagation;
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_owner_id - computed: true, optional: false, required: false
  public get vpcOwnerId() {
    return this.getStringAttribute('vpc_owner_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_default_route_table_association: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTableAssociation),
      transit_gateway_default_route_table_propagation: cdktf.booleanToTerraform(this._transitGatewayDefaultRouteTablePropagation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transit_gateway_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_default_route_table_association: {
        value: cdktf.booleanToHclTerraform(this._transitGatewayDefaultRouteTableAssociation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transit_gateway_default_route_table_propagation: {
        value: cdktf.booleanToHclTerraform(this._transitGatewayDefaultRouteTablePropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
