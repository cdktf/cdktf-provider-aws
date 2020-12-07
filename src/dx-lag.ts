// https://www.terraform.io/docs/providers/aws/r/dx_lag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxLagConfig extends cdktf.TerraformMetaArguments {
  readonly connectionsBandwidth: string;
  readonly forceDestroy?: boolean;
  readonly location: string;
  readonly name: string;
  readonly numberOfConnections?: number;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DxLag extends cdktf.TerraformResource {

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
    this._numberOfConnections = config.numberOfConnections;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections_bandwidth - computed: false, optional: false, required: true
  private _connectionsBandwidth: string;
  public get connectionsBandwidth() {
    return this.getStringAttribute('connections_bandwidth');
  }
  public set connectionsBandwidth(value: string) {
    this._connectionsBandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsBandwidthInput() {
    return this._connectionsBandwidth
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // has_logical_redundancy - computed: true, optional: false, required: false
  public get hasLogicalRedundancy() {
    return this.getStringAttribute('has_logical_redundancy');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jumbo_frame_capable - computed: true, optional: false, required: false
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // number_of_connections - computed: true, optional: true, required: false
  private _numberOfConnections?: number;
  public get numberOfConnections() {
    return this.getNumberAttribute('number_of_connections');
  }
  public set numberOfConnections(value: number) {
    this._numberOfConnections = value;
  }
  public resetNumberOfConnections() {
    this._numberOfConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfConnectionsInput() {
    return this._numberOfConnections
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connections_bandwidth: cdktf.stringToTerraform(this._connectionsBandwidth),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      number_of_connections: cdktf.numberToTerraform(this._numberOfConnections),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
