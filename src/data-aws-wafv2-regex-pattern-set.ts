// https://www.terraform.io/docs/providers/aws/r/data_aws_wafv2_regex_pattern_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "regular_expression": {
        "type": [
          "set",
          [
            "object",
            {
              "regex_string": "string"
            }
          ]
        ],
        "computed": true
      },
      "scope": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsWafv2RegexPatternSetConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly scope: string;
}
export class DataAwsWafv2RegexPatternSetRegularExpression extends ComplexComputedList {

  // regex_string - computed: true, optional: false, required: true
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
}

// Resource

export class DataAwsWafv2RegexPatternSet extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // regular_expression - computed: true, optional: false, required: true
  public regularExpression(index: string) {
    return new DataAwsWafv2RegexPatternSetRegularExpression(this, 'regular_expression', index);
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this._scope;
  }
  public set scope(value: string) {
    this._scope = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      scope: this._scope,
    };
  }
}
