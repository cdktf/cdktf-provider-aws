// https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
  readonly ruleSetName: string;
}

// Resource

export class SesReceiptRuleSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesReceiptRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ruleSetName = config.ruleSetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_set_name - computed: false, optional: false, required: true
  private _ruleSetName: string;
  public get ruleSetName() {
    return this.getStringAttribute('rule_set_name');
  }
  public set ruleSetName(value: string) {
    this._ruleSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetNameInput() {
    return this._ruleSetName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
    };
  }
}
