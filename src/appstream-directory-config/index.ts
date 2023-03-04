// https://www.terraform.io/docs/providers/aws/r/appstream_directory_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppstreamDirectoryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}
  */
  readonly directoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}
  */
  readonly organizationalUnitDistinguishedNames: string[];
  /**
  * service_account_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}
  */
  readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentials;
}
export interface AppstreamDirectoryConfigServiceAccountCredentials {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}
  */
  readonly accountPassword: string;
}

export function appstreamDirectoryConfigServiceAccountCredentialsToTerraform(struct?: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference | AppstreamDirectoryConfigServiceAccountCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    account_password: cdktf.stringToTerraform(struct!.accountPassword),
  }
}

export class AppstreamDirectoryConfigServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppstreamDirectoryConfigServiceAccountCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._accountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountPassword = this._accountPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamDirectoryConfigServiceAccountCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._accountPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._accountPassword = value.accountPassword;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_password - computed: false, optional: false, required: true
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config aws_appstream_directory_config}
*/
export class AppstreamDirectoryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appstream_directory_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config aws_appstream_directory_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamDirectoryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamDirectoryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_directory_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryName = config.directoryName;
    this._id = config.id;
    this._organizationalUnitDistinguishedNames = config.organizationalUnitDistinguishedNames;
    this._serviceAccountCredentials.internalValue = config.serviceAccountCredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // directory_name - computed: false, optional: false, required: true
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
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

  // organizational_unit_distinguished_names - computed: false, optional: false, required: true
  private _organizationalUnitDistinguishedNames?: string[]; 
  public get organizationalUnitDistinguishedNames() {
    return cdktf.Fn.tolist(this.getListAttribute('organizational_unit_distinguished_names'));
  }
  public set organizationalUnitDistinguishedNames(value: string[]) {
    this._organizationalUnitDistinguishedNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNamesInput() {
    return this._organizationalUnitDistinguishedNames;
  }

  // service_account_credentials - computed: false, optional: false, required: true
  private _serviceAccountCredentials = new AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(this, "service_account_credentials");
  public get serviceAccountCredentials() {
    return this._serviceAccountCredentials;
  }
  public putServiceAccountCredentials(value: AppstreamDirectoryConfigServiceAccountCredentials) {
    this._serviceAccountCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_name: cdktf.stringToTerraform(this._directoryName),
      id: cdktf.stringToTerraform(this._id),
      organizational_unit_distinguished_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationalUnitDistinguishedNames),
      service_account_credentials: appstreamDirectoryConfigServiceAccountCredentialsToTerraform(this._serviceAccountCredentials.internalValue),
    };
  }
}
