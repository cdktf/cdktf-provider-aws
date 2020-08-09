// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_service.html
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
      "cluster_arn": {
        "type": "string",
        "required": true
      },
      "desired_count": {
        "type": "number",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "launch_type": {
        "type": "string",
        "computed": true
      },
      "scheduling_strategy": {
        "type": "string",
        "computed": true
      },
      "service_name": {
        "type": "string",
        "required": true
      },
      "task_definition": {
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

export interface DataAwsEcsServiceConfig extends TerraformMetaArguments {
  readonly clusterArn: string;
  readonly serviceName: string;
}

// Resource

export class DataAwsEcsService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterArn = config.clusterArn;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn: string;
  public get clusterArn() {
    return this._clusterArn;
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }

  // desired_count - computed: true, optional: false, required: true
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_type - computed: true, optional: false, required: true
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // scheduling_strategy - computed: true, optional: false, required: true
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }

  // task_definition - computed: true, optional: false, required: true
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: this._clusterArn,
      service_name: this._serviceName,
    };
  }
}
