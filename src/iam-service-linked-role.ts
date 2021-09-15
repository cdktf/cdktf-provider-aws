// https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#aws_service_name IamServiceLinkedRole#aws_service_name}
  */
  readonly awsServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#custom_suffix IamServiceLinkedRole#custom_suffix}
  */
  readonly customSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html#description IamServiceLinkedRole#description}
  */
  readonly description?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role}
*/
export class IamServiceLinkedRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_service_linked_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html aws_iam_service_linked_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceLinkedRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_service_linked_role',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsServiceName = config.awsServiceName;
    this._customSuffix = config.customSuffix;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_name - computed: false, optional: false, required: true
  private _awsServiceName: string;
  public get awsServiceName() {
    return this.getStringAttribute('aws_service_name');
  }
  public set awsServiceName(value: string) {
    this._awsServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceNameInput() {
    return this._awsServiceName
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // custom_suffix - computed: false, optional: true, required: false
  private _customSuffix?: string;
  public get customSuffix() {
    return this.getStringAttribute('custom_suffix');
  }
  public set customSuffix(value: string ) {
    this._customSuffix = value;
  }
  public resetCustomSuffix() {
    this._customSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSuffixInput() {
    return this._customSuffix
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_name: cdktf.stringToTerraform(this._awsServiceName),
      custom_suffix: cdktf.stringToTerraform(this._customSuffix),
      description: cdktf.stringToTerraform(this._description),
    };
  }
}
