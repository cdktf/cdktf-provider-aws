// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export interface DataAwsEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition#task_definition DataAwsEcsTaskDefinition#task_definition}
  */
  readonly taskDefinition: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition aws_ecs_task_definition}
*/
export class DataAwsEcsTaskDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecs_task_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition aws_ecs_task_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcsTaskDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcsTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_task_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._taskDefinition = config.taskDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition?: string; 
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition;
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
    };
  }
}
