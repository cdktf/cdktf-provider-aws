// https://www.terraform.io/docs/providers/aws/r/detective_invitation_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DetectiveInvitationAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_invitation_accepter#graph_arn DetectiveInvitationAccepter#graph_arn}
  */
  readonly graphArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/detective_invitation_accepter aws_detective_invitation_accepter}
*/
export class DetectiveInvitationAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_detective_invitation_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/detective_invitation_accepter aws_detective_invitation_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DetectiveInvitationAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: DetectiveInvitationAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_detective_invitation_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._graphArn = config.graphArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graph_arn - computed: false, optional: false, required: true
  private _graphArn?: string; 
  public get graphArn() {
    return this.getStringAttribute('graph_arn');
  }
  public set graphArn(value: string) {
    this._graphArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphArnInput() {
    return this._graphArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      graph_arn: cdktf.stringToTerraform(this._graphArn),
    };
  }
}
