// https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}
  */
  readonly accessRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}
  */
  readonly baseDirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#description TransferAgreement#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#id TransferAgreement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}
  */
  readonly localProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}
  */
  readonly partnerProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#tags_all TransferAgreement#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement aws_transfer_agreement}
*/
export class TransferAgreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_agreement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferAgreement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferAgreement to import
  * @param importFromId The id of the existing TransferAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferAgreement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_agreement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/transfer_agreement aws_transfer_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: TransferAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_agreement',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRole = config.accessRole;
    this._baseDirectory = config.baseDirectory;
    this._description = config.description;
    this._id = config.id;
    this._localProfileId = config.localProfileId;
    this._partnerProfileId = config.partnerProfileId;
    this._serverId = config.serverId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_role - computed: false, optional: false, required: true
  private _accessRole?: string; 
  public get accessRole() {
    return this.getStringAttribute('access_role');
  }
  public set accessRole(value: string) {
    this._accessRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleInput() {
    return this._accessRole;
  }

  // agreement_id - computed: true, optional: false, required: false
  public get agreementId() {
    return this.getStringAttribute('agreement_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_directory - computed: false, optional: false, required: true
  private _baseDirectory?: string; 
  public get baseDirectory() {
    return this.getStringAttribute('base_directory');
  }
  public set baseDirectory(value: string) {
    this._baseDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirectoryInput() {
    return this._baseDirectory;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_profile_id - computed: false, optional: false, required: true
  private _localProfileId?: string; 
  public get localProfileId() {
    return this.getStringAttribute('local_profile_id');
  }
  public set localProfileId(value: string) {
    this._localProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localProfileIdInput() {
    return this._localProfileId;
  }

  // partner_profile_id - computed: false, optional: false, required: true
  private _partnerProfileId?: string; 
  public get partnerProfileId() {
    return this.getStringAttribute('partner_profile_id');
  }
  public set partnerProfileId(value: string) {
    this._partnerProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerProfileIdInput() {
    return this._partnerProfileId;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_role: cdktf.stringToTerraform(this._accessRole),
      base_directory: cdktf.stringToTerraform(this._baseDirectory),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local_profile_id: cdktf.stringToTerraform(this._localProfileId),
      partner_profile_id: cdktf.stringToTerraform(this._partnerProfileId),
      server_id: cdktf.stringToTerraform(this._serverId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_role: {
        value: cdktf.stringToHclTerraform(this._accessRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_directory: {
        value: cdktf.stringToHclTerraform(this._baseDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_profile_id: {
        value: cdktf.stringToHclTerraform(this._localProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_profile_id: {
        value: cdktf.stringToHclTerraform(this._partnerProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
