// https://www.terraform.io/docs/providers/aws/r/glue_workflow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueWorkflowConfig extends TerraformMetaArguments {
  readonly defaultRunProperties?: { [key: string]: string };
  readonly description?: string;
  readonly maxConcurrentRuns?: number;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class GlueWorkflow extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_workflow',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultRunProperties = config.defaultRunProperties;
    this._description = config.description;
    this._maxConcurrentRuns = config.maxConcurrentRuns;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_run_properties - computed: false, optional: true, required: false
  private _defaultRunProperties?: { [key: string]: string };
  public get defaultRunProperties() {
    return this._defaultRunProperties;
  }
  public set defaultRunProperties(value: { [key: string]: string } | undefined) {
    this._defaultRunProperties = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_concurrent_runs - computed: false, optional: true, required: false
  private _maxConcurrentRuns?: number;
  public get maxConcurrentRuns() {
    return this._maxConcurrentRuns;
  }
  public set maxConcurrentRuns(value: number | undefined) {
    this._maxConcurrentRuns = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_run_properties: this._defaultRunProperties,
      description: this._description,
      max_concurrent_runs: this._maxConcurrentRuns,
      name: this._name,
      tags: this._tags,
    };
  }
}
