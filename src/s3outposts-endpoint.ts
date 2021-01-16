// https://www.terraform.io/docs/providers/aws/r/s3_outposts_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface S3OutpostsEndpointConfig extends TerraformMetaArguments {
  readonly outpostId: string;
  readonly securityGroupId: string;
  readonly subnetId: string;
}
export class S3OutpostsEndpointNetworkInterfaces extends ComplexComputedList {

  // network_interface_id - computed: true, optional: false, required: true
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
}

// Resource

export class S3OutpostsEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_interfaces - computed: true, optional: false, required: true
  public networkInterfaces(index: string) {
    return new S3OutpostsEndpointNetworkInterfaces(this, 'network_interfaces', index);
  }

  // outpost_id - computed: false, optional: false, required: true
  private _outpostId: string;
  public get outpostId() {
    return this._outpostId;
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId: string;
  public get securityGroupId() {
    return this._securityGroupId;
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      outpost_id: this._outpostId,
      security_group_id: this._securityGroupId,
      subnet_id: this._subnetId,
    };
  }
}
