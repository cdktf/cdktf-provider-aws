// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointSubnetAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#subnet_id VpcEndpointSubnetAssociation#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#vpc_endpoint_id VpcEndpointSubnetAssociation#vpc_endpoint_id}
  */
  readonly vpcEndpointId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#timeouts VpcEndpointSubnetAssociation#timeouts}
  */
  readonly timeouts?: VpcEndpointSubnetAssociationTimeouts;
}
export interface VpcEndpointSubnetAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#create VpcEndpointSubnetAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#delete VpcEndpointSubnetAssociation#delete}
  */
  readonly delete?: string;
}

function vpcEndpointSubnetAssociationTimeoutsToTerraform(struct?: VpcEndpointSubnetAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}
*/
export class VpcEndpointSubnetAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint_subnet_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointSubnetAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcEndpointSubnetAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_subnet_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._subnetId = config.subnetId;
    this._vpcEndpointId = config.vpcEndpointId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // vpc_endpoint_id - computed: false, optional: false, required: true
  private _vpcEndpointId: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcEndpointSubnetAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcEndpointSubnetAssociationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
      timeouts: vpcEndpointSubnetAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
