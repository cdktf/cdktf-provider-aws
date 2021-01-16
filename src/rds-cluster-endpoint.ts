// https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsClusterEndpointConfig extends cdktf.TerraformMetaArguments {
  readonly clusterEndpointIdentifier: string;
  readonly clusterIdentifier: string;
  readonly customEndpointType: string;
  readonly excludedMembers?: string[];
  readonly staticMembers?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class RdsClusterEndpoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_cluster_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
    this._clusterIdentifier = config.clusterIdentifier;
    this._customEndpointType = config.customEndpointType;
    this._excludedMembers = config.excludedMembers;
    this._staticMembers = config.staticMembers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_endpoint_identifier - computed: false, optional: false, required: true
  private _clusterEndpointIdentifier: string;
  public get clusterEndpointIdentifier() {
    return this.getStringAttribute('cluster_endpoint_identifier');
  }
  public set clusterEndpointIdentifier(value: string) {
    this._clusterEndpointIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointIdentifierInput() {
    return this._clusterEndpointIdentifier
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier: string;
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // custom_endpoint_type - computed: false, optional: false, required: true
  private _customEndpointType: string;
  public get customEndpointType() {
    return this.getStringAttribute('custom_endpoint_type');
  }
  public set customEndpointType(value: string) {
    this._customEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointTypeInput() {
    return this._customEndpointType
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // excluded_members - computed: false, optional: true, required: false
  private _excludedMembers?: string[];
  public get excludedMembers() {
    return this.getListAttribute('excluded_members');
  }
  public set excludedMembers(value: string[] ) {
    this._excludedMembers = value;
  }
  public resetExcludedMembers() {
    this._excludedMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedMembersInput() {
    return this._excludedMembers
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // static_members - computed: false, optional: true, required: false
  private _staticMembers?: string[];
  public get staticMembers() {
    return this.getListAttribute('static_members');
  }
  public set staticMembers(value: string[] ) {
    this._staticMembers = value;
  }
  public resetStaticMembers() {
    this._staticMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMembersInput() {
    return this._staticMembers
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
      cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      custom_endpoint_type: cdktf.stringToTerraform(this._customEndpointType),
      excluded_members: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedMembers),
      static_members: cdktf.listMapper(cdktf.stringToTerraform)(this._staticMembers),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
