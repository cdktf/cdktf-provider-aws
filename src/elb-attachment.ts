// https://www.terraform.io/docs/providers/aws/r/elb_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly elb: string;
  readonly instance: string;
}

// Resource

export class ElbAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ElbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elb_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._elb = config.elb;
    this._instance = config.instance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // elb - computed: false, optional: false, required: true
  private _elb: string;
  public get elb() {
    return this.getStringAttribute('elb');
  }
  public set elb(value: string) {
    this._elb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      elb: cdktf.stringToTerraform(this._elb),
      instance: cdktf.stringToTerraform(this._instance),
    };
  }
}
