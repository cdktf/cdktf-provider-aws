// https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcIpv4CidrBlockAssociationConfig extends TerraformMetaArguments {
  readonly cidrBlock: string;
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
}
export interface VpcIpv4CidrBlockAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class VpcIpv4CidrBlockAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcIpv4CidrBlockAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_ipv4_cidr_block_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlock = config.cidrBlock;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcIpv4CidrBlockAssociationTimeouts ) {
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
      cidr_block: this._cidrBlock,
      vpc_id: this._vpcId,
      timeouts: this._timeouts,
    };
  }
}
