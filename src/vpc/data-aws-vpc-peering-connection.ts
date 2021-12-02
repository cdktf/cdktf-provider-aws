// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#cidr_block DataAwsVpcPeeringConnection#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#owner_id DataAwsVpcPeeringConnection#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}
  */
  readonly peerCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}
  */
  readonly peerOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_region DataAwsVpcPeeringConnection#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}
  */
  readonly peerVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#region DataAwsVpcPeeringConnection#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#status DataAwsVpcPeeringConnection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#tags DataAwsVpcPeeringConnection#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#vpc_id DataAwsVpcPeeringConnection#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#filter DataAwsVpcPeeringConnection#filter}
  */
  readonly filter?: DataAwsVpcPeeringConnectionFilter[];
}
export class DataAwsVpcPeeringConnectionCidrBlockSet extends cdktf.ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
}
export class DataAwsVpcPeeringConnectionPeerCidrBlockSet extends cdktf.ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
}
export interface DataAwsVpcPeeringConnectionFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#name DataAwsVpcPeeringConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#values DataAwsVpcPeeringConnection#values}
  */
  readonly values: string[];
}

export function dataAwsVpcPeeringConnectionFilterToTerraform(struct?: DataAwsVpcPeeringConnectionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}
*/
export class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_peering_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcPeeringConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpcPeeringConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlock = config.cidrBlock;
    this._ownerId = config.ownerId;
    this._peerCidrBlock = config.peerCidrBlock;
    this._peerOwnerId = config.peerOwnerId;
    this._peerRegion = config.peerRegion;
    this._peerVpcId = config.peerVpcId;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepter - computed: true, optional: false, required: false
  public accepter(key: string): boolean {
    return new cdktf.BooleanMap(this, 'accepter').lookup(key);
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cidr_block_set - computed: true, optional: false, required: false
  public cidrBlockSet(index: string) {
    return new DataAwsVpcPeeringConnectionCidrBlockSet(this, 'cidr_block_set', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // peer_cidr_block - computed: true, optional: true, required: false
  private _peerCidrBlock?: string; 
  public get peerCidrBlock() {
    return this.getStringAttribute('peer_cidr_block');
  }
  public set peerCidrBlock(value: string) {
    this._peerCidrBlock = value;
  }
  public resetPeerCidrBlock() {
    this._peerCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCidrBlockInput() {
    return this._peerCidrBlock;
  }

  // peer_cidr_block_set - computed: true, optional: false, required: false
  public peerCidrBlockSet(index: string) {
    return new DataAwsVpcPeeringConnectionPeerCidrBlockSet(this, 'peer_cidr_block_set', index);
  }

  // peer_owner_id - computed: true, optional: true, required: false
  private _peerOwnerId?: string; 
  public get peerOwnerId() {
    return this.getStringAttribute('peer_owner_id');
  }
  public set peerOwnerId(value: string) {
    this._peerOwnerId = value;
  }
  public resetPeerOwnerId() {
    this._peerOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerOwnerIdInput() {
    return this._peerOwnerId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_vpc_id - computed: true, optional: true, required: false
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
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

  // requester - computed: true, optional: false, required: false
  public requester(key: string): boolean {
    return new cdktf.BooleanMap(this, 'requester').lookup(key);
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcPeeringConnectionFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcPeeringConnectionFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      peer_cidr_block: cdktf.stringToTerraform(this._peerCidrBlock),
      peer_owner_id: cdktf.stringToTerraform(this._peerOwnerId),
      peer_region: cdktf.stringToTerraform(this._peerRegion),
      peer_vpc_id: cdktf.stringToTerraform(this._peerVpcId),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      filter: cdktf.listMapper(dataAwsVpcPeeringConnectionFilterToTerraform)(this._filter),
    };
  }
}
