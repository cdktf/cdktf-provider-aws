// https://www.terraform.io/docs/providers/aws/r/swf_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwfDomainConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly tags?: { [key: string]: string };
  readonly workflowExecutionRetentionPeriodInDays: string;
}

// Resource

export class SwfDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SwfDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_swf_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._tags = config.tags;
    this._workflowExecutionRetentionPeriodInDays = config.workflowExecutionRetentionPeriodInDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
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

  // workflow_execution_retention_period_in_days - computed: false, optional: false, required: true
  private _workflowExecutionRetentionPeriodInDays: string;
  public get workflowExecutionRetentionPeriodInDays() {
    return this.getStringAttribute('workflow_execution_retention_period_in_days');
  }
  public set workflowExecutionRetentionPeriodInDays(value: string) {
    this._workflowExecutionRetentionPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowExecutionRetentionPeriodInDaysInput() {
    return this._workflowExecutionRetentionPeriodInDays
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      workflow_execution_retention_period_in_days: cdktf.stringToTerraform(this._workflowExecutionRetentionPeriodInDays),
    };
  }
}
