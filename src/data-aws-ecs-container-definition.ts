// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_container_definition.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "container_name": {
        "type": "string",
        "required": true
      },
      "cpu": {
        "type": "number",
        "computed": true
      },
      "disable_networking": {
        "type": "bool",
        "computed": true
      },
      "docker_labels": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "environment": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image": {
        "type": "string",
        "computed": true
      },
      "image_digest": {
        "type": "string",
        "computed": true
      },
      "memory": {
        "type": "number",
        "computed": true
      },
      "memory_reservation": {
        "type": "number",
        "computed": true
      },
      "task_definition": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsEcsContainerDefinitionConfig extends TerraformMetaArguments {
  readonly containerName: string;
  readonly taskDefinition: string;
}

// Resource

export class DataAwsEcsContainerDefinition extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEcsContainerDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_container_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerName = config.containerName;
    this._taskDefinition = config.taskDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_name - computed: false, optional: false, required: true
  private _containerName: string;
  public get containerName() {
    return this._containerName;
  }
  public set containerName(value: string) {
    this._containerName = value;
  }

  // cpu - computed: true, optional: false, required: true
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disable_networking - computed: true, optional: false, required: true
  public get disableNetworking() {
    return this.getBooleanAttribute('disable_networking');
  }

  // docker_labels - computed: true, optional: false, required: true
  public dockerLabels(key: string): string {
    return new StringMap(this, 'docker_labels').lookup(key);
  }

  // environment - computed: true, optional: false, required: true
  public environment(key: string): string {
    return new StringMap(this, 'environment').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: true
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // memory - computed: true, optional: false, required: true
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_reservation - computed: true, optional: false, required: true
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition: string;
  public get taskDefinition() {
    return this._taskDefinition;
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      container_name: this._containerName,
      task_definition: this._taskDefinition,
    };
  }
}
