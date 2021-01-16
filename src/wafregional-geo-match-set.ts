// https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** geo_match_constraint block */
  readonly geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
}
export interface WafregionalGeoMatchSetGeoMatchConstraint {
  readonly type: string;
  readonly value: string;
}

function wafregionalGeoMatchSetGeoMatchConstraintToTerraform(struct?: WafregionalGeoMatchSetGeoMatchConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class WafregionalGeoMatchSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_geo_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._geoMatchConstraint = config.geoMatchConstraint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // geo_match_constraint - computed: false, optional: true, required: false
  private _geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
  public get geoMatchConstraint() {
    return this.interpolationForAttribute('geo_match_constraint') as any;
  }
  public set geoMatchConstraint(value: WafregionalGeoMatchSetGeoMatchConstraint[] ) {
    this._geoMatchConstraint = value;
  }
  public resetGeoMatchConstraint() {
    this._geoMatchConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchConstraintInput() {
    return this._geoMatchConstraint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      geo_match_constraint: cdktf.listMapper(wafregionalGeoMatchSetGeoMatchConstraintToTerraform)(this._geoMatchConstraint),
    };
  }
}
