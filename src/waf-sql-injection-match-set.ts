// https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** sql_injection_match_tuples block */
  readonly sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
}
export interface WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
  readonly data?: string;
  readonly type: string;
}

function wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafSqlInjectionMatchSetSqlInjectionMatchTuples {
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch[];
}

function wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform(struct?: WafSqlInjectionMatchSetSqlInjectionMatchTuples): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


// Resource

export class WafSqlInjectionMatchSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_sql_injection_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._sqlInjectionMatchTuples = config.sqlInjectionMatchTuples;
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

  // sql_injection_match_tuples - computed: false, optional: true, required: false
  private _sqlInjectionMatchTuples?: WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
  public get sqlInjectionMatchTuples() {
    return this.interpolationForAttribute('sql_injection_match_tuples') as any;
  }
  public set sqlInjectionMatchTuples(value: WafSqlInjectionMatchSetSqlInjectionMatchTuples[] ) {
    this._sqlInjectionMatchTuples = value;
  }
  public resetSqlInjectionMatchTuples() {
    this._sqlInjectionMatchTuples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInjectionMatchTuplesInput() {
    return this._sqlInjectionMatchTuples
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      sql_injection_match_tuples: cdktf.listMapper(wafSqlInjectionMatchSetSqlInjectionMatchTuplesToTerraform)(this._sqlInjectionMatchTuples),
    };
  }
}
