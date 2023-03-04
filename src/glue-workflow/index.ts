// https://www.terraform.io/docs/providers/aws/r/glue_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#default_run_properties GlueWorkflow#default_run_properties}
  */
  readonly defaultRunProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#description GlueWorkflow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#id GlueWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#max_concurrent_runs GlueWorkflow#max_concurrent_runs}
  */
  readonly maxConcurrentRuns?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#name GlueWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#tags GlueWorkflow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow#tags_all GlueWorkflow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow aws_glue_workflow}
*/
export class GlueWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_workflow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow aws_glue_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueWorkflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlueWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_workflow',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRunProperties = config.defaultRunProperties;
    this._description = config.description;
    this._id = config.id;
    this._maxConcurrentRuns = config.maxConcurrentRuns;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_run_properties - computed: false, optional: true, required: false
  private _defaultRunProperties?: { [key: string]: string }; 
  public get defaultRunProperties() {
    return this.getStringMapAttribute('default_run_properties');
  }
  public set defaultRunProperties(value: { [key: string]: string }) {
    this._defaultRunProperties = value;
  }
  public resetDefaultRunProperties() {
    this._defaultRunProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRunPropertiesInput() {
    return this._defaultRunProperties;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_concurrent_runs - computed: false, optional: true, required: false
  private _maxConcurrentRuns?: number; 
  public get maxConcurrentRuns() {
    return this.getNumberAttribute('max_concurrent_runs');
  }
  public set maxConcurrentRuns(value: number) {
    this._maxConcurrentRuns = value;
  }
  public resetMaxConcurrentRuns() {
    this._maxConcurrentRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRunsInput() {
    return this._maxConcurrentRuns;
  }

  // name - computed: false, optional: true, required: false
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
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_run_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultRunProperties),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_runs: cdktf.numberToTerraform(this._maxConcurrentRuns),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
