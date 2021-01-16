// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_container_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcsContainerDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly containerName: string;
  readonly taskDefinition: string;
}

// Resource

export class DataAwsEcsContainerDefinition extends cdktf.TerraformDataSource {

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
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // disable_networking - computed: true, optional: false, required: false
  public get disableNetworking() {
    return this.getBooleanAttribute('disable_networking');
  }

  // docker_labels - computed: true, optional: false, required: false
  public dockerLabels(key: string): string {
    return new cdktf.StringMap(this, 'docker_labels').lookup(key);
  }

  // environment - computed: true, optional: false, required: false
  public environment(key: string): string {
    return new cdktf.StringMap(this, 'environment').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getNumberAttribute('memory_reservation');
  }

  // task_definition - computed: false, optional: false, required: true
  private _taskDefinition: string;
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_name: cdktf.stringToTerraform(this._containerName),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
    };
  }
}
