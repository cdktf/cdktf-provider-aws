// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3OutpostsEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#outpost_id S3OutpostsEndpoint#outpost_id}
  */
  readonly outpostId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#security_group_id S3OutpostsEndpoint#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html#subnet_id S3OutpostsEndpoint#subnet_id}
  */
  readonly subnetId: string;
}
export class S3OutpostsEndpointNetworkInterfaces extends cdktf.ComplexComputedList {

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint}
*/
export class S3OutpostsEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3outposts_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3outposts_endpoint.html aws_s3outposts_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3OutpostsEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: S3OutpostsEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3outposts_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._outpostId = config.outpostId;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interfaces - computed: true, optional: false, required: false
  public networkInterfaces(index: string) {
    return new S3OutpostsEndpointNetworkInterfaces(this, 'network_interfaces', index);
  }

  // outpost_id - computed: false, optional: false, required: true
  private _outpostId?: string; 
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostIdInput() {
    return this._outpostId;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      outpost_id: cdktf.stringToTerraform(this._outpostId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }
}
