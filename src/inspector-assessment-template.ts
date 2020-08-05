// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html
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
      "duration": {
        "type": "number",
        "required": true
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
      "rules_package_arns": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target_arn": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface InspectorAssessmentTemplateConfig extends TerraformMetaArguments {
  readonly duration: number;
  readonly name: string;
  readonly rulesPackageArns: string[];
  readonly tags?: { [key: string]: string };
  readonly targetArn: string;
}

// Resource

export class InspectorAssessmentTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector_assessment_template',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._duration = config.duration;
    this._name = config.name;
    this._rulesPackageArns = config.rulesPackageArns;
    this._tags = config.tags;
    this._targetArn = config.targetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // duration - computed: false, optional: false, required: true
  private _duration: number;
  public get duration() {
    return this._duration;
  }
  public set duration(value: number) {
    this._duration = value;
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

  // rules_package_arns - computed: false, optional: false, required: true
  private _rulesPackageArns: string[];
  public get rulesPackageArns() {
    return this._rulesPackageArns;
  }
  public set rulesPackageArns(value: string[]) {
    this._rulesPackageArns = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn: string;
  public get targetArn() {
    return this._targetArn;
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: this._duration,
      name: this._name,
      rules_package_arns: this._rulesPackageArns,
      tags: this._tags,
      target_arn: this._targetArn,
    };
  }
}
