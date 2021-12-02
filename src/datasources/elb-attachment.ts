// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Sources
*/
export interface ElbAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#elb ElbAttachment#elb}
  */
  readonly elb: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#instance ElbAttachment#instance}
  */
  readonly instance: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment}
*/
export class ElbAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elb_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbAttachmentConfig
  */
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
  private _elb?: string; 
  public get elb() {
    return this.getStringAttribute('elb');
  }
  public set elb(value: string) {
    this._elb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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
