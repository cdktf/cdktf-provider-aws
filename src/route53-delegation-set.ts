// https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53DelegationSetConfig extends cdktf.TerraformMetaArguments {
  readonly referenceName?: string;
}

// Resource

export class Route53DelegationSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53DelegationSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_delegation_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._referenceName = config.referenceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // reference_name - computed: false, optional: true, required: false
  private _referenceName?: string;
  public get referenceName() {
    return this.getStringAttribute('reference_name');
  }
  public set referenceName(value: string ) {
    this._referenceName = value;
  }
  public resetReferenceName() {
    this._referenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceNameInput() {
    return this._referenceName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      reference_name: cdktf.stringToTerraform(this._referenceName),
    };
  }
}
