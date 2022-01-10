// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}
  */
  readonly onCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}
  */
  readonly onStart?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}
*/
export class SagemakerNotebookInstanceLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_notebook_instance_lifecycle_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceLifecycleConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance_lifecycle_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._onCreate = config.onCreate;
    this._onStart = config.onStart;
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

  // on_create - computed: false, optional: true, required: false
  private _onCreate?: string; 
  public get onCreate() {
    return this.getStringAttribute('on_create');
  }
  public set onCreate(value: string) {
    this._onCreate = value;
  }
  public resetOnCreate() {
    this._onCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateInput() {
    return this._onCreate;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string; 
  public get onStart() {
    return this.getStringAttribute('on_start');
  }
  public set onStart(value: string) {
    this._onStart = value;
  }
  public resetOnStart() {
    this._onStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      on_create: cdktf.stringToTerraform(this._onCreate),
      on_start: cdktf.stringToTerraform(this._onStart),
    };
  }
}
