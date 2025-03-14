// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfabricIngestionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#app AppfabricIngestion#app}
  */
  readonly app: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#app_bundle_arn AppfabricIngestion#app_bundle_arn}
  */
  readonly appBundleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#ingestion_type AppfabricIngestion#ingestion_type}
  */
  readonly ingestionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#tags AppfabricIngestion#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#tenant_id AppfabricIngestion#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion aws_appfabric_ingestion}
*/
export class AppfabricIngestion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appfabric_ingestion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfabricIngestion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfabricIngestion to import
  * @param importFromId The id of the existing AppfabricIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfabricIngestion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appfabric_ingestion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/appfabric_ingestion aws_appfabric_ingestion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfabricIngestionConfig
  */
  public constructor(scope: Construct, id: string, config: AppfabricIngestionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appfabric_ingestion',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.91.0',
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
    this._app = config.app;
    this._appBundleArn = config.appBundleArn;
    this._ingestionType = config.ingestionType;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_bundle_arn - computed: false, optional: false, required: true
  private _appBundleArn?: string; 
  public get appBundleArn() {
    return this.getStringAttribute('app_bundle_arn');
  }
  public set appBundleArn(value: string) {
    this._appBundleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appBundleArnInput() {
    return this._appBundleArn;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_type - computed: false, optional: false, required: true
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      app_bundle_arn: cdktf.stringToTerraform(this._appBundleArn),
      ingestion_type: cdktf.stringToTerraform(this._ingestionType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_bundle_arn: {
        value: cdktf.stringToHclTerraform(this._appBundleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingestion_type: {
        value: cdktf.stringToHclTerraform(this._ingestionType),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
