/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceLinkedRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}
  */
  readonly awsServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}
  */
  readonly customSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#description IamServiceLinkedRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#id IamServiceLinkedRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#tags IamServiceLinkedRole#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role aws_iam_service_linked_role}
*/
export class IamServiceLinkedRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_service_linked_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamServiceLinkedRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamServiceLinkedRole to import
  * @param importFromId The id of the existing IamServiceLinkedRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamServiceLinkedRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_service_linked_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/iam_service_linked_role aws_iam_service_linked_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceLinkedRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_service_linked_role',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.62.0',
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
    this._awsServiceName = config.awsServiceName;
    this._customSuffix = config.customSuffix;
    this._description = config.description;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_name - computed: false, optional: false, required: true
  private _awsServiceName?: string; 
  public get awsServiceName() {
    return this.getStringAttribute('aws_service_name');
  }
  public set awsServiceName(value: string) {
    this._awsServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServiceNameInput() {
    return this._awsServiceName;
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
  public set customSuffix(value: string) {
    this._customSuffix = value;
  }
  public resetCustomSuffix() {
    this._customSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSuffixInput() {
    return this._customSuffix;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_service_name: {
        value: cdktf.stringToHclTerraform(this._awsServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_suffix: {
        value: cdktf.stringToHclTerraform(this._customSuffix),
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
