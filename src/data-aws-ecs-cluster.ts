// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcsClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterName: string;
}
export class DataAwsEcsClusterSetting extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

// Resource

export class DataAwsEcsCluster extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pending_tasks_count - computed: true, optional: false, required: false
  public get pendingTasksCount() {
    return this.getNumberAttribute('pending_tasks_count');
  }

  // registered_container_instances_count - computed: true, optional: false, required: false
  public get registeredContainerInstancesCount() {
    return this.getNumberAttribute('registered_container_instances_count');
  }

  // running_tasks_count - computed: true, optional: false, required: false
  public get runningTasksCount() {
    return this.getNumberAttribute('running_tasks_count');
  }

  // setting - computed: true, optional: false, required: false
  public setting(index: string) {
    return new DataAwsEcsClusterSetting(this, 'setting', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
    };
  }
}
