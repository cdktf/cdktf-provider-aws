// https://www.terraform.io/docs/providers/aws/r/route53_zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ZoneConfig extends cdktf.TerraformMetaArguments {
  readonly comment?: string;
  readonly delegationSetId?: string;
  readonly forceDestroy?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly vpcId?: string;
  readonly vpcRegion?: string;
  /** vpc block */
  readonly vpc?: Route53ZoneVpc[];
}
export interface Route53ZoneVpc {
  readonly vpcId: string;
  readonly vpcRegion?: string;
}

function route53ZoneVpcToTerraform(struct?: Route53ZoneVpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vpc_region: cdktf.stringToTerraform(struct!.vpcRegion),
  }
}


// Resource

export class Route53Zone extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_zone',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._delegationSetId = config.delegationSetId;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpcRegion = config.vpcRegion;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // delegation_set_id - computed: false, optional: true, required: false
  private _delegationSetId?: string;
  public get delegationSetId() {
    return this.getStringAttribute('delegation_set_id');
  }
  public set delegationSetId(value: string ) {
    this._delegationSetId = value;
  }
  public resetDelegationSetId() {
    this._delegationSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationSetIdInput() {
    return this._delegationSetId
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
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

  // vpc_region - computed: true, optional: true, required: false
  private _vpcRegion?: string;
  public get vpcRegion() {
    return this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string) {
    this._vpcRegion = value;
  }
  public resetVpcRegion() {
    this._vpcRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRegionInput() {
    return this._vpcRegion
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc?: Route53ZoneVpc[];
  public get vpc() {
    return this.interpolationForAttribute('vpc') as any;
  }
  public set vpc(value: Route53ZoneVpc[] ) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      delegation_set_id: cdktf.stringToTerraform(this._delegationSetId),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_region: cdktf.stringToTerraform(this._vpcRegion),
      vpc: cdktf.listMapper(route53ZoneVpcToTerraform)(this._vpc),
    };
  }
}
