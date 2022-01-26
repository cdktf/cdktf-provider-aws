// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2
*/
export interface Ec2HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#auto_placement Ec2Host#auto_placement}
  */
  readonly autoPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#availability_zone Ec2Host#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#host_recovery Ec2Host#host_recovery}
  */
  readonly hostRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#instance_family Ec2Host#instance_family}
  */
  readonly instanceFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#instance_type Ec2Host#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#tags Ec2Host#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host#tags_all Ec2Host#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_host aws_ec2_host}
*/
export class Ec2Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ec2_host";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_host aws_ec2_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2HostConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2HostConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_host',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoPlacement = config.autoPlacement;
    this._availabilityZone = config.availabilityZone;
    this._hostRecovery = config.hostRecovery;
    this._instanceFamily = config.instanceFamily;
    this._instanceType = config.instanceType;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_placement - computed: false, optional: true, required: false
  private _autoPlacement?: string; 
  public get autoPlacement() {
    return this.getStringAttribute('auto_placement');
  }
  public set autoPlacement(value: string) {
    this._autoPlacement = value;
  }
  public resetAutoPlacement() {
    this._autoPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPlacementInput() {
    return this._autoPlacement;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // host_recovery - computed: false, optional: true, required: false
  private _hostRecovery?: string; 
  public get hostRecovery() {
    return this.getStringAttribute('host_recovery');
  }
  public set hostRecovery(value: string) {
    this._hostRecovery = value;
  }
  public resetHostRecovery() {
    this._hostRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRecoveryInput() {
    return this._hostRecovery;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_family - computed: false, optional: true, required: false
  private _instanceFamily?: string; 
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }
  public set instanceFamily(value: string) {
    this._instanceFamily = value;
  }
  public resetInstanceFamily() {
    this._instanceFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamilyInput() {
    return this._instanceFamily;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_placement: cdktf.stringToTerraform(this._autoPlacement),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      host_recovery: cdktf.stringToTerraform(this._hostRecovery),
      instance_family: cdktf.stringToTerraform(this._instanceFamily),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
