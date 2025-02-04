// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfabricAppBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle#customer_managed_key_arn AppfabricAppBundle#customer_managed_key_arn}
  */
  readonly customerManagedKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle#tags AppfabricAppBundle#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle aws_appfabric_app_bundle}
*/
export class AppfabricAppBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appfabric_app_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfabricAppBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfabricAppBundle to import
  * @param importFromId The id of the existing AppfabricAppBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfabricAppBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appfabric_app_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/appfabric_app_bundle aws_appfabric_app_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfabricAppBundleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppfabricAppBundleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_appfabric_app_bundle',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._customerManagedKeyArn = config.customerManagedKeyArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_managed_key_arn - computed: false, optional: true, required: false
  private _customerManagedKeyArn?: string; 
  public get customerManagedKeyArn() {
    return this.getStringAttribute('customer_managed_key_arn');
  }
  public set customerManagedKeyArn(value: string) {
    this._customerManagedKeyArn = value;
  }
  public resetCustomerManagedKeyArn() {
    this._customerManagedKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyArnInput() {
    return this._customerManagedKeyArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_managed_key_arn: cdktf.stringToTerraform(this._customerManagedKeyArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_managed_key_arn: {
        value: cdktf.stringToHclTerraform(this._customerManagedKeyArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
