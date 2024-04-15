// https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationAzureBlobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}
  */
  readonly agentArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}
  */
  readonly blobType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}
  */
  readonly containerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * sas_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#sas_configuration DatasyncLocationAzureBlob#sas_configuration}
  */
  readonly sasConfiguration?: DatasyncLocationAzureBlobSasConfiguration;
}
export interface DatasyncLocationAzureBlobSasConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}
  */
  readonly token: string;
}

export function datasyncLocationAzureBlobSasConfigurationToTerraform(struct?: DatasyncLocationAzureBlobSasConfigurationOutputReference | DatasyncLocationAzureBlobSasConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function datasyncLocationAzureBlobSasConfigurationToHclTerraform(struct?: DatasyncLocationAzureBlobSasConfigurationOutputReference | DatasyncLocationAzureBlobSasConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationAzureBlobSasConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationAzureBlobSasConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationAzureBlobSasConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob}
*/
export class DatasyncLocationAzureBlob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_azure_blob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationAzureBlob to import
  * @param importFromId The id of the existing DatasyncLocationAzureBlob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationAzureBlob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_azure_blob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationAzureBlobConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationAzureBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_azure_blob',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.45.0',
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
    this._accessTier = config.accessTier;
    this._agentArns = config.agentArns;
    this._authenticationType = config.authenticationType;
    this._blobType = config.blobType;
    this._containerUrl = config.containerUrl;
    this._id = config.id;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._sasConfiguration.internalValue = config.sasConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tier - computed: false, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

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

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // blob_type - computed: false, optional: true, required: false
  private _blobType?: string; 
  public get blobType() {
    return this.getStringAttribute('blob_type');
  }
  public set blobType(value: string) {
    this._blobType = value;
  }
  public resetBlobType() {
    this._blobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobTypeInput() {
    return this._blobType;
  }

  // container_url - computed: false, optional: false, required: true
  private _containerUrl?: string; 
  public get containerUrl() {
    return this.getStringAttribute('container_url');
  }
  public set containerUrl(value: string) {
    this._containerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerUrlInput() {
    return this._containerUrl;
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

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
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

  // sas_configuration - computed: false, optional: true, required: false
  private _sasConfiguration = new DatasyncLocationAzureBlobSasConfigurationOutputReference(this, "sas_configuration");
  public get sasConfiguration() {
    return this._sasConfiguration;
  }
  public putSasConfiguration(value: DatasyncLocationAzureBlobSasConfiguration) {
    this._sasConfiguration.internalValue = value;
  }
  public resetSasConfiguration() {
    this._sasConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasConfigurationInput() {
    return this._sasConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_tier: cdktf.stringToTerraform(this._accessTier),
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agentArns),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      blob_type: cdktf.stringToTerraform(this._blobType),
      container_url: cdktf.stringToTerraform(this._containerUrl),
      id: cdktf.stringToTerraform(this._id),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      sas_configuration: datasyncLocationAzureBlobSasConfigurationToTerraform(this._sasConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_tier: {
        value: cdktf.stringToHclTerraform(this._accessTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agentArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blob_type: {
        value: cdktf.stringToHclTerraform(this._blobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_url: {
        value: cdktf.stringToHclTerraform(this._containerUrl),
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
      sas_configuration: {
        value: datasyncLocationAzureBlobSasConfigurationToHclTerraform(this._sasConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationAzureBlobSasConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
