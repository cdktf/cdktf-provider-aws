/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayDomainNameAccessAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#access_association_source ApiGatewayDomainNameAccessAssociation#access_association_source}
  */
  readonly accessAssociationSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#access_association_source_type ApiGatewayDomainNameAccessAssociation#access_association_source_type}
  */
  readonly accessAssociationSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#domain_name_arn ApiGatewayDomainNameAccessAssociation#domain_name_arn}
  */
  readonly domainNameArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#region ApiGatewayDomainNameAccessAssociation#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#tags ApiGatewayDomainNameAccessAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association}
*/
export class ApiGatewayDomainNameAccessAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_domain_name_access_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayDomainNameAccessAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayDomainNameAccessAssociation to import
  * @param importFromId The id of the existing ApiGatewayDomainNameAccessAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayDomainNameAccessAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_api_gateway_domain_name_access_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/api_gateway_domain_name_access_association aws_api_gateway_domain_name_access_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayDomainNameAccessAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameAccessAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_domain_name_access_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAssociationSource = config.accessAssociationSource;
    this._accessAssociationSourceType = config.accessAssociationSourceType;
    this._domainNameArn = config.domainNameArn;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_association_source - computed: false, optional: false, required: true
  private _accessAssociationSource?: string; 
  public get accessAssociationSource() {
    return this.getStringAttribute('access_association_source');
  }
  public set accessAssociationSource(value: string) {
    this._accessAssociationSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAssociationSourceInput() {
    return this._accessAssociationSource;
  }

  // access_association_source_type - computed: false, optional: false, required: true
  private _accessAssociationSourceType?: string; 
  public get accessAssociationSourceType() {
    return this.getStringAttribute('access_association_source_type');
  }
  public set accessAssociationSourceType(value: string) {
    this._accessAssociationSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAssociationSourceTypeInput() {
    return this._accessAssociationSourceType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name_arn - computed: false, optional: false, required: true
  private _domainNameArn?: string; 
  public get domainNameArn() {
    return this.getStringAttribute('domain_name_arn');
  }
  public set domainNameArn(value: string) {
    this._domainNameArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameArnInput() {
    return this._domainNameArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
      access_association_source: cdktf.stringToTerraform(this._accessAssociationSource),
      access_association_source_type: cdktf.stringToTerraform(this._accessAssociationSourceType),
      domain_name_arn: cdktf.stringToTerraform(this._domainNameArn),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_association_source: {
        value: cdktf.stringToHclTerraform(this._accessAssociationSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_association_source_type: {
        value: cdktf.stringToHclTerraform(this._accessAssociationSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_arn: {
        value: cdktf.stringToHclTerraform(this._domainNameArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
