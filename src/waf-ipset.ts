// https://www.terraform.io/docs/providers/aws/r/waf_ipset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafIpsetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** ip_set_descriptors block */
  readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[];
}
export interface WafIpsetIpSetDescriptors {
  readonly type: string;
  readonly value: string;
}

function wafIpsetIpSetDescriptorsToTerraform(struct?: WafIpsetIpSetDescriptors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class WafIpset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._ipSetDescriptors = config.ipSetDescriptors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ip_set_descriptors - computed: false, optional: true, required: false
  private _ipSetDescriptors?: WafIpsetIpSetDescriptors[];
  public get ipSetDescriptors() {
    return this.interpolationForAttribute('ip_set_descriptors') as any;
  }
  public set ipSetDescriptors(value: WafIpsetIpSetDescriptors[] ) {
    this._ipSetDescriptors = value;
  }
  public resetIpSetDescriptors() {
    this._ipSetDescriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetDescriptorsInput() {
    return this._ipSetDescriptors
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ip_set_descriptors: cdktf.listMapper(wafIpsetIpSetDescriptorsToTerraform)(this._ipSetDescriptors),
    };
  }
}
