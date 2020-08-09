// https://www.terraform.io/docs/providers/aws/r/data_aws_autoscaling_group.html
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
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "default_cooldown": {
        "type": "number",
        "computed": true
      },
      "desired_capacity": {
        "type": "number",
        "computed": true
      },
      "health_check_grace_period": {
        "type": "number",
        "computed": true
      },
      "health_check_type": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "launch_configuration": {
        "type": "string",
        "computed": true
      },
      "load_balancers": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "max_size": {
        "type": "number",
        "computed": true
      },
      "min_size": {
        "type": "number",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "new_instances_protected_from_scale_in": {
        "type": "bool",
        "computed": true
      },
      "placement_group": {
        "type": "string",
        "computed": true
      },
      "service_linked_role_arn": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "target_group_arns": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "termination_policies": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "vpc_zone_identifier": {
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

export interface DataAwsAutoscalingGroupConfig extends TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsAutoscalingGroup extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // default_cooldown - computed: true, optional: false, required: true
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }

  // desired_capacity - computed: true, optional: false, required: true
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // health_check_grace_period - computed: true, optional: false, required: true
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }

  // health_check_type - computed: true, optional: false, required: true
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_configuration - computed: true, optional: false, required: true
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }

  // load_balancers - computed: true, optional: false, required: true
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }

  // max_size - computed: true, optional: false, required: true
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: true
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // new_instances_protected_from_scale_in - computed: true, optional: false, required: true
  public get newInstancesProtectedFromScaleIn() {
    return this.getBooleanAttribute('new_instances_protected_from_scale_in');
  }

  // placement_group - computed: true, optional: false, required: true
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // service_linked_role_arn - computed: true, optional: false, required: true
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_group_arns - computed: true, optional: false, required: true
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }

  // termination_policies - computed: true, optional: false, required: true
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }

  // vpc_zone_identifier - computed: true, optional: false, required: true
  public get vpcZoneIdentifier() {
    return this.getStringAttribute('vpc_zone_identifier');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
