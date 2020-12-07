// https://www.terraform.io/docs/providers/aws/r/data_aws_ecs_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcsServiceConfig extends cdktf.TerraformMetaArguments {
  readonly clusterArn: string;
  readonly serviceName: string;
}

// Resource

export class DataAwsEcsService extends cdktf.TerraformDataSource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn: string;
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn
  }

  // desired_count - computed: true, optional: false, required: false
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_type - computed: true, optional: false, required: false
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // scheduling_strategy - computed: true, optional: false, required: false
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // task_definition - computed: true, optional: false, required: false
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }
}
