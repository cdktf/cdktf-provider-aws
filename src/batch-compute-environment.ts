// https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  readonly computeEnvironmentName?: string;
  readonly computeEnvironmentNamePrefix?: string;
  readonly serviceRole: string;
  readonly state?: string;
  readonly type: string;
  /** compute_resources block */
  readonly computeResources?: BatchComputeEnvironmentComputeResources[];
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
  readonly launchTemplateId?: string;
  readonly launchTemplateName?: string;
  readonly version?: string;
}

function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface BatchComputeEnvironmentComputeResources {
  readonly allocationStrategy?: string;
  readonly bidPercentage?: number;
  readonly desiredVcpus?: number;
  readonly ec2KeyPair?: string;
  readonly imageId?: string;
  readonly instanceRole: string;
  readonly instanceType: string[];
  readonly maxVcpus: number;
  readonly minVcpus: number;
  readonly securityGroupIds: string[];
  readonly spotIamFleetRole?: string;
  readonly subnets: string[];
  readonly tags?: { [key: string]: string };
  readonly type: string;
  /** launch_template block */
  readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate[];
}

function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    bid_percentage: cdktf.numberToTerraform(struct!.bidPercentage),
    desired_vcpus: cdktf.numberToTerraform(struct!.desiredVcpus),
    ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_role: cdktf.stringToTerraform(struct!.instanceRole),
    instance_type: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceType),
    max_vcpus: cdktf.numberToTerraform(struct!.maxVcpus),
    min_vcpus: cdktf.numberToTerraform(struct!.minVcpus),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    spot_iam_fleet_role: cdktf.stringToTerraform(struct!.spotIamFleetRole),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    launch_template: cdktf.listMapper(batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform)(struct!.launchTemplate),
  }
}


// Resource

export class BatchComputeEnvironment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_compute_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeEnvironmentName = config.computeEnvironmentName;
    this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
    this._serviceRole = config.serviceRole;
    this._state = config.state;
    this._type = config.type;
    this._computeResources = config.computeResources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: true, optional: true, required: false
  private _computeEnvironmentName?: string;
  public get computeEnvironmentName() {
    return this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string) {
    this._computeEnvironmentName = value;
  }
  public resetComputeEnvironmentName() {
    this._computeEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNameInput() {
    return this._computeEnvironmentName
  }

  // compute_environment_name_prefix - computed: false, optional: true, required: false
  private _computeEnvironmentNamePrefix?: string;
  public get computeEnvironmentNamePrefix() {
    return this.getStringAttribute('compute_environment_name_prefix');
  }
  public set computeEnvironmentNamePrefix(value: string ) {
    this._computeEnvironmentNamePrefix = value;
  }
  public resetComputeEnvironmentNamePrefix() {
    this._computeEnvironmentNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnvironmentNamePrefixInput() {
    return this._computeEnvironmentNamePrefix
  }

  // ecc_cluster_arn - computed: true, optional: false, required: false
  public get eccClusterArn() {
    return this.getStringAttribute('ecc_cluster_arn');
  }

  // ecs_cluster_arn - computed: true, optional: false, required: false
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // compute_resources - computed: false, optional: true, required: false
  private _computeResources?: BatchComputeEnvironmentComputeResources[];
  public get computeResources() {
    return this.interpolationForAttribute('compute_resources') as any;
  }
  public set computeResources(value: BatchComputeEnvironmentComputeResources[] ) {
    this._computeResources = value;
  }
  public resetComputeResources() {
    this._computeResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: cdktf.stringToTerraform(this._computeEnvironmentName),
      compute_environment_name_prefix: cdktf.stringToTerraform(this._computeEnvironmentNamePrefix),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      compute_resources: cdktf.listMapper(batchComputeEnvironmentComputeResourcesToTerraform)(this._computeResources),
    };
  }
}
