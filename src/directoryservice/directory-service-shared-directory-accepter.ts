// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Directory Service
*/
export interface DirectoryServiceSharedDirectoryAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#id DirectoryServiceSharedDirectoryAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter#shared_directory_id DirectoryServiceSharedDirectoryAccepter#shared_directory_id}
  */
  readonly sharedDirectoryId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter}
*/
export class DirectoryServiceSharedDirectoryAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_shared_directory_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory_accepter aws_directory_service_shared_directory_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceSharedDirectoryAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceSharedDirectoryAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_shared_directory_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.23.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._sharedDirectoryId = config.sharedDirectoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // owner_directory_id - computed: true, optional: false, required: false
  public get ownerDirectoryId() {
    return this.getStringAttribute('owner_directory_id');
  }

  // shared_directory_id - computed: false, optional: false, required: true
  private _sharedDirectoryId?: string; 
  public get sharedDirectoryId() {
    return this.getStringAttribute('shared_directory_id');
  }
  public set sharedDirectoryId(value: string) {
    this._sharedDirectoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDirectoryIdInput() {
    return this._sharedDirectoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      shared_directory_id: cdktf.stringToTerraform(this._sharedDirectoryId),
    };
  }
}
