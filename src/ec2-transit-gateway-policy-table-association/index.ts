// https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayPolicyTableAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#id Ec2TransitGatewayPolicyTableAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_attachment_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_attachment_id}
  */
  readonly transitGatewayAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_policy_table_id}
  */
  readonly transitGatewayPolicyTableId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association aws_ec2_transit_gateway_policy_table_association}
*/
export class Ec2TransitGatewayPolicyTableAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_policy_table_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association aws_ec2_transit_gateway_policy_table_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPolicyTableAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPolicyTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_policy_table_association',
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
    this._id = config.id;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayPolicyTableId = config.transitGatewayPolicyTableId;
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

  // transit_gateway_policy_table_id - computed: false, optional: false, required: true
  private _transitGatewayPolicyTableId?: string; 
  public get transitGatewayPolicyTableId() {
    return this.getStringAttribute('transit_gateway_policy_table_id');
  }
  public set transitGatewayPolicyTableId(value: string) {
    this._transitGatewayPolicyTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPolicyTableIdInput() {
    return this._transitGatewayPolicyTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_policy_table_id: cdktf.stringToTerraform(this._transitGatewayPolicyTableId),
    };
  }
}
