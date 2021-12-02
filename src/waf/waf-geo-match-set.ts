// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF
*/
export interface WafGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#name WafGeoMatchSet#name}
  */
  readonly name: string;
  /**
  * geo_match_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#geo_match_constraint WafGeoMatchSet#geo_match_constraint}
  */
  readonly geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[];
}
export interface WafGeoMatchSetGeoMatchConstraint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#type WafGeoMatchSet#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#value WafGeoMatchSet#value}
  */
  readonly value: string;
}

export function wafGeoMatchSetGeoMatchConstraintToTerraform(struct?: WafGeoMatchSetGeoMatchConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set}
*/
export class WafGeoMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_waf_geo_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafGeoMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafGeoMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_geo_match_set',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // geo_match_constraint - computed: false, optional: true, required: false
  private _geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[]; 
  public get geoMatchConstraint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('geo_match_constraint') as any;
  }
  public set geoMatchConstraint(value: WafGeoMatchSetGeoMatchConstraint[]) {
    this._geoMatchConstraint = value;
  }
  public resetGeoMatchConstraint() {
    this._geoMatchConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchConstraintInput() {
    return this._geoMatchConstraint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      geo_match_constraint: cdktf.listMapper(wafGeoMatchSetGeoMatchConstraintToTerraform)(this._geoMatchConstraint),
    };
  }
}
