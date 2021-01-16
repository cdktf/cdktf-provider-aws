// https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53ZoneAssociationConfig extends TerraformMetaArguments {
  readonly vpcId: string;
  readonly vpcRegion?: string;
  readonly zoneId: string;
}

// Resource

export class Route53ZoneAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ZoneAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_zone_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vpcId = config.vpcId;
    this._vpcRegion = config.vpcRegion;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owning_account - computed: true, optional: false, required: true
  public get owningAccount() {
    return this.getStringAttribute('owning_account');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // vpc_region - computed: true, optional: true, required: false
  private _vpcRegion?: string;
  public get vpcRegion() {
    return this._vpcRegion ?? this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string | undefined) {
    this._vpcRegion = value;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this._zoneId;
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vpc_id: this._vpcId,
      vpc_region: this._vpcRegion,
      zone_id: this._zoneId,
    };
  }
}
