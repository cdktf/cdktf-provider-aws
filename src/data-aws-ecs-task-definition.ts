// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_task_definition.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "family": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_mode": {
        "type": "string",
        "computed": true
      },
      "revision": {
        "type": "number",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "task_definition": {
        "type": "string",
        "required": true
      },
      "task_role_arn": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsEcsTaskDefinitionConfig extends TerraformMetaArguments {
  readonly taskDefinition: string;
}

// Resource

export class DataAwsEcsTaskDefinition extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // family - computed: true, optional: false, required: true
  public get family() {
    return this.getStringAttribute('family');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_mode - computed: true, optional: false, required: true
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // revision - computed: true, optional: false, required: true
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition: string;
  public get taskDefinition() {
    return this._taskDefinition;
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }

  // task_role_arn - computed: true, optional: false, required: true
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      task_definition: this._taskDefinition,
    };
  }
}
