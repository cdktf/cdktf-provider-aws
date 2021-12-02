// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie 2
*/
export interface Macie2AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#finding_publishing_frequency Macie2Account#finding_publishing_frequency}
  */
  readonly findingPublishingFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#status Macie2Account#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account}
*/
export class Macie2Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2AccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Macie2AccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string; 
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string) {
    this._findingPublishingFrequency = value;
  }
  public resetFindingPublishingFrequency() {
    this._findingPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingPublishingFrequencyInput() {
    return this._findingPublishingFrequency;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
