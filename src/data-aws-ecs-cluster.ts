// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "cluster_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "pending_tasks_count": {
        "type": "number",
        "computed": true
      },
      "registered_container_instances_count": {
        "type": "number",
        "computed": true
      },
      "running_tasks_count": {
        "type": "number",
        "computed": true
      },
      "setting": {
        "type": [
          "set",
          [
            "object",
            {
              "name": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "status": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsEcsClusterConfig extends TerraformMetaArguments {
  readonly clusterName: string;
}
export class DataAwsEcsClusterSetting extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}

// Resource

export class DataAwsEcsCluster extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // pending_tasks_count - computed: true, optional: false, required: true
  public get pendingTasksCount() {
    return this.getNumberAttribute('pending_tasks_count');
  }

  // registered_container_instances_count - computed: true, optional: false, required: true
  public get registeredContainerInstancesCount() {
    return this.getNumberAttribute('registered_container_instances_count');
  }

  // running_tasks_count - computed: true, optional: false, required: true
  public get runningTasksCount() {
    return this.getNumberAttribute('running_tasks_count');
  }

  // setting - computed: true, optional: false, required: true
  public setting(index: string) {
    return new DataAwsEcsClusterSetting(this, 'setting', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: this._clusterName,
    };
  }
}
