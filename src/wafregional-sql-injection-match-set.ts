// https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#name WafregionalSqlInjectionMatchSet#name}
  */
  readonly name: string;
  /**
  * sql_injection_match_tuple block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
  */
  readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#data WafregionalSqlInjectionMatchSet#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#type WafregionalSqlInjectionMatchSet#type}
  */
  readonly type: string;
}

function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}
  */
  readonly textTransformation: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
  */
  readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch[];
}

function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
    field_to_match: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set}
*/
export class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_wafregional_sql_injection_match_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalSqlInjectionMatchSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_sql_injection_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._sqlInjectionMatchTuple = config.sqlInjectionMatchTuple;
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

  // sql_injection_match_tuple - computed: false, optional: true, required: false
  private _sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
  public get sqlInjectionMatchTuple() {
    return this.interpolationForAttribute('sql_injection_match_tuple') as any;
  }
  public set sqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] ) {
    this._sqlInjectionMatchTuple = value;
  }
  public resetSqlInjectionMatchTuple() {
    this._sqlInjectionMatchTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInjectionMatchTupleInput() {
    return this._sqlInjectionMatchTuple
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      sql_injection_match_tuple: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform)(this._sqlInjectionMatchTuple),
    };
  }
}
