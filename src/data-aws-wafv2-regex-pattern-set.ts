// https://www.terraform.io/docs/providers/aws/r/data_aws_wafv2_regex_pattern_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsWafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly scope: string;
}
export class DataAwsWafv2RegexPatternSetRegularExpression extends cdktf.ComplexComputedList {

  // regex_string - computed: true, optional: false, required: false
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
}

// Resource

export class DataAwsWafv2RegexPatternSet extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsWafv2RegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // regular_expression - computed: true, optional: false, required: false
  public regularExpression(index: string) {
    return new DataAwsWafv2RegexPatternSetRegularExpression(this, 'regular_expression', index);
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }
}
