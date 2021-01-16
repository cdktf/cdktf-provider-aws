// https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InspectorAssessmentTargetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupArn?: string;
}

// Resource

export class InspectorAssessmentTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: InspectorAssessmentTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector_assessment_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupArn = config.resourceGroupArn;
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

  // resource_group_arn - computed: false, optional: true, required: false
  private _resourceGroupArn?: string;
  public get resourceGroupArn() {
    return this.getStringAttribute('resource_group_arn');
  }
  public set resourceGroupArn(value: string ) {
    this._resourceGroupArn = value;
  }
  public resetResourceGroupArn() {
    this._resourceGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupArnInput() {
    return this._resourceGroupArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_arn: cdktf.stringToTerraform(this._resourceGroupArn),
    };
  }
}
