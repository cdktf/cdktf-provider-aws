// https://www.terraform.io/docs/providers/aws/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  readonly assignIpv6AddressOnCreation?: boolean;
  readonly availabilityZone?: string;
  readonly availabilityZoneId?: string;
  readonly cidrBlock: string;
  readonly ipv6CidrBlock?: string;
  readonly mapPublicIpOnLaunch?: boolean;
  readonly outpostArn?: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function subnetTimeoutsToTerraform(struct?: SubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class Subnet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._cidrBlock = config.cidrBlock;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
    this._outpostArn = config.outpostArn;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assign_ipv6_address_on_creation - computed: false, optional: true, required: false
  private _assignIpv6AddressOnCreation?: boolean;
  public get assignIpv6AddressOnCreation() {
    return this.getBooleanAttribute('assign_ipv6_address_on_creation');
  }
  public set assignIpv6AddressOnCreation(value: boolean ) {
    this._assignIpv6AddressOnCreation = value;
  }
  public resetAssignIpv6AddressOnCreation() {
    this._assignIpv6AddressOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6AddressOnCreationInput() {
    return this._assignIpv6AddressOnCreation
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string;
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId
  }

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

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock
  }

  // ipv6_cidr_block_association_id - computed: true, optional: false, required: false
  public get ipv6CidrBlockAssociationId() {
    return this.getStringAttribute('ipv6_cidr_block_association_id');
  }

  // map_public_ip_on_launch - computed: false, optional: true, required: false
  private _mapPublicIpOnLaunch?: boolean;
  public get mapPublicIpOnLaunch() {
    return this.getBooleanAttribute('map_public_ip_on_launch');
  }
  public set mapPublicIpOnLaunch(value: boolean ) {
    this._mapPublicIpOnLaunch = value;
  }
  public resetMapPublicIpOnLaunch() {
    this._mapPublicIpOnLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPublicIpOnLaunchInput() {
    return this._mapPublicIpOnLaunch
  }

  // outpost_arn - computed: false, optional: true, required: false
  private _outpostArn?: string;
  public get outpostArn() {
    return this.getStringAttribute('outpost_arn');
  }
  public set outpostArn(value: string ) {
    this._outpostArn = value;
  }
  public resetOutpostArn() {
    this._outpostArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnInput() {
    return this._outpostArn
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetTimeouts ) {
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
      assign_ipv6_address_on_creation: cdktf.booleanToTerraform(this._assignIpv6AddressOnCreation),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      map_public_ip_on_launch: cdktf.booleanToTerraform(this._mapPublicIpOnLaunch),
      outpost_arn: cdktf.stringToTerraform(this._outpostArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: subnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
