// https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TrafficMirrorFilterConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly networkServices?: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class Ec2TrafficMirrorFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ec2TrafficMirrorFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_traffic_mirror_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._networkServices = config.networkServices;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_services - computed: false, optional: true, required: false
  private _networkServices?: string[];
  public get networkServices() {
    return this.getListAttribute('network_services');
  }
  public set networkServices(value: string[] ) {
    this._networkServices = value;
  }
  public resetNetworkServices() {
    this._networkServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServicesInput() {
    return this._networkServices
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
      description: cdktf.stringToTerraform(this._description),
      network_services: cdktf.listMapper(cdktf.stringToTerraform)(this._networkServices),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
