// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InspectorAssessmentTemplateConfig extends cdktf.TerraformMetaArguments {
  readonly duration: number;
  readonly name: string;
  readonly rulesPackageArns: string[];
  readonly tags?: { [key: string]: string };
  readonly targetArn: string;
}

// Resource

export class InspectorAssessmentTemplate extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // duration - computed: false, optional: false, required: true
  private _duration: number;
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
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

  // rules_package_arns - computed: false, optional: false, required: true
  private _rulesPackageArns: string[];
  public get rulesPackageArns() {
    return this.getListAttribute('rules_package_arns');
  }
  public set rulesPackageArns(value: string[]) {
    this._rulesPackageArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesPackageArnsInput() {
    return this._rulesPackageArns
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn: string;
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      name: cdktf.stringToTerraform(this._name),
      rules_package_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._rulesPackageArns),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_arn: cdktf.stringToTerraform(this._targetArn),
    };
  }
}
