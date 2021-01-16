// https://www.terraform.io/docs/providers/aws/r/dx_lag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DxLagConfig extends TerraformMetaArguments {
  readonly connectionsBandwidth: string;
  readonly forceDestroy?: boolean;
  readonly location: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DxLag extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxLagConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_lag',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionsBandwidth = config.connectionsBandwidth;
    this._forceDestroy = config.forceDestroy;
    this._location = config.location;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections_bandwidth - computed: false, optional: false, required: true
  private _connectionsBandwidth: string;
  public get connectionsBandwidth() {
    return this._connectionsBandwidth;
  }
  public set connectionsBandwidth(value: string) {
    this._connectionsBandwidth = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // has_logical_redundancy - computed: true, optional: false, required: true
  public get hasLogicalRedundancy() {
    return this.getStringAttribute('has_logical_redundancy');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // jumbo_frame_capable - computed: true, optional: false, required: true
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connections_bandwidth: this._connectionsBandwidth,
      force_destroy: this._forceDestroy,
      location: this._location,
      name: this._name,
      tags: this._tags,
    };
  }
}
