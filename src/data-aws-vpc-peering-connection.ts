// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_peering_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  readonly cidrBlock?: string;
  readonly ownerId?: string;
  readonly peerCidrBlock?: string;
  readonly peerOwnerId?: string;
  readonly peerRegion?: string;
  readonly peerVpcId?: string;
  readonly region?: string;
  readonly status?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  /** filter block */
  readonly filter?: DataAwsVpcPeeringConnectionFilter[];
}
export interface DataAwsVpcPeeringConnectionFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsVpcPeeringConnectionFilterToTerraform(struct?: DataAwsVpcPeeringConnectionFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._cidrBlock
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
    return this._ownerId
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
    return this._peerCidrBlock
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
    return this._peerOwnerId
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
    return this._peerRegion
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
    return this._peerVpcId
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
    return this._region
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
    return this._status
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
    return this._vpcId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcPeeringConnectionFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcPeeringConnectionFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
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
