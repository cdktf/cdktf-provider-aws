// https://www.terraform.io/docs/providers/aws/r/data_aws_autoscaling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsAutoscalingGroup extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // default_cooldown - computed: true, optional: false, required: false
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }

  // desired_capacity - computed: true, optional: false, required: false
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // health_check_grace_period - computed: true, optional: false, required: false
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_configuration - computed: true, optional: false, required: false
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }

  // load_balancers - computed: true, optional: false, required: false
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // new_instances_protected_from_scale_in - computed: true, optional: false, required: false
  public get newInstancesProtectedFromScaleIn() {
    return this.getBooleanAttribute('new_instances_protected_from_scale_in');
  }

  // placement_group - computed: true, optional: false, required: false
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // service_linked_role_arn - computed: true, optional: false, required: false
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_group_arns - computed: true, optional: false, required: false
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }

  // termination_policies - computed: true, optional: false, required: false
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }

  // vpc_zone_identifier - computed: true, optional: false, required: false
  public get vpcZoneIdentifier() {
    return this.getStringAttribute('vpc_zone_identifier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
