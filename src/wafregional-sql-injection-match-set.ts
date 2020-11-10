// https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalSqlInjectionMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** sql_injection_match_tuple block */
  readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch[];
}

// Resource

export class WafregionalSqlInjectionMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      name: this._name,
      sql_injection_match_tuple: this._sqlInjectionMatchTuple,
    };
  }
}
