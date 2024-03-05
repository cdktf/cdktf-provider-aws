// https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}
  */
  readonly agentArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}
  */
  readonly serverHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}
  */
  readonly subdirectory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}
  */
  readonly user: string;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}
  */
  readonly mountOptions?: DatasyncLocationSmbMountOptions;
}
export interface DatasyncLocationSmbMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}
  */
  readonly version?: string;
}

export function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptionsOutputReference | DatasyncLocationSmbMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationSmbMountOptionsToHclTerraform(struct?: DatasyncLocationSmbMountOptionsOutputReference | DatasyncLocationSmbMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationSmbMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationSmbMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationSmbMountOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb aws_datasync_location_smb}
*/
export class DatasyncLocationSmb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_smb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationSmb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationSmb to import
  * @param importFromId The id of the existing DatasyncLocationSmb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationSmb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_smb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/datasync_location_smb aws_datasync_location_smb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationSmbConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_smb',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.39.1',
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
    this._agentArns = config.agentArns;
    this._domain = config.domain;
    this._id = config.id;
    this._password = config.password;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._user = config.user;
    this._mountOptions.internalValue = config.mountOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns?: string[]; 
  public get agentArns() {
    return cdktf.Fn.tolist(this.getListAttribute('agent_arns'));
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname?: string; 
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname;
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new DatasyncLocationSmbMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationSmbMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agentArns),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user: cdktf.stringToTerraform(this._user),
      mount_options: datasyncLocationSmbMountOptionsToTerraform(this._mountOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agentArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_hostname: {
        value: cdktf.stringToHclTerraform(this._serverHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdirectory: {
        value: cdktf.stringToHclTerraform(this._subdirectory),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_options: {
        value: datasyncLocationSmbMountOptionsToHclTerraform(this._mountOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationSmbMountOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
