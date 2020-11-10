// https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Cloud9EnvironmentEc2Config extends TerraformMetaArguments {
  readonly automaticStopTimeMinutes?: number;
  readonly description?: string;
  readonly instanceType: string;
  readonly name: string;
  readonly ownerArn?: string;
  readonly subnetId?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Cloud9EnvironmentEc2 extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Cloud9EnvironmentEc2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_cloud9_environment_ec2',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automaticStopTimeMinutes = config.automaticStopTimeMinutes;
    this._description = config.description;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._ownerArn = config.ownerArn;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_stop_time_minutes - computed: false, optional: true, required: false
  private _automaticStopTimeMinutes?: number;
  public get automaticStopTimeMinutes() {
    return this.getNumberAttribute('automatic_stop_time_minutes');
  }
  public set automaticStopTimeMinutes(value: number ) {
    this._automaticStopTimeMinutes = value;
  }
  public resetAutomaticStopTimeMinutes() {
    this._automaticStopTimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticStopTimeMinutesInput() {
    return this._automaticStopTimeMinutes
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
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

  // owner_arn - computed: true, optional: true, required: false
  private _ownerArn?: string;
  public get ownerArn() {
    return this.getStringAttribute('owner_arn');
  }
  public set ownerArn(value: string) {
    this._ownerArn = value;
  }
  public resetOwnerArn() {
    this._ownerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerArnInput() {
    return this._ownerArn
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string ) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_stop_time_minutes: this._automaticStopTimeMinutes,
      description: this._description,
      instance_type: this._instanceType,
      name: this._name,
      owner_arn: this._ownerArn,
      subnet_id: this._subnetId,
      tags: this._tags,
    };
  }
}
