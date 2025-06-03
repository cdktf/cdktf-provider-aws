// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/iam_organizations_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOrganizationsFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/iam_organizations_features#enabled_features IamOrganizationsFeatures#enabled_features}
  */
  readonly enabledFeatures: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/iam_organizations_features aws_iam_organizations_features}
*/
export class IamOrganizationsFeatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_organizations_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOrganizationsFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOrganizationsFeatures to import
  * @param importFromId The id of the existing IamOrganizationsFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/iam_organizations_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOrganizationsFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_organizations_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/iam_organizations_features aws_iam_organizations_features} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOrganizationsFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: IamOrganizationsFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_organizations_features',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._enabledFeatures = config.enabledFeatures;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled_features - computed: false, optional: false, required: true
  private _enabledFeatures?: string[]; 
  public get enabledFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_features'));
  }
  public set enabledFeatures(value: string[]) {
    this._enabledFeatures = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledFeaturesInput() {
    return this._enabledFeatures;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledFeatures),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
