/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedaccessInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#cidr_endpoints_custom_subdomain VerifiedaccessInstance#cidr_endpoints_custom_subdomain}
  */
  readonly cidrEndpointsCustomSubdomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#region VerifiedaccessInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}
export interface VerifiedaccessInstanceVerifiedAccessTrustProviders {
}

export function verifiedaccessInstanceVerifiedAccessTrustProvidersToTerraform(struct?: VerifiedaccessInstanceVerifiedAccessTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function verifiedaccessInstanceVerifiedAccessTrustProvidersToHclTerraform(struct?: VerifiedaccessInstanceVerifiedAccessTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedaccessInstanceVerifiedAccessTrustProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessInstanceVerifiedAccessTrustProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_trust_provider_type - computed: true, optional: false, required: false
  public get deviceTrustProviderType() {
    return this.getStringAttribute('device_trust_provider_type');
  }

  // trust_provider_type - computed: true, optional: false, required: false
  public get trustProviderType() {
    return this.getStringAttribute('trust_provider_type');
  }

  // user_trust_provider_type - computed: true, optional: false, required: false
  public get userTrustProviderType() {
    return this.getStringAttribute('user_trust_provider_type');
  }

  // verified_access_trust_provider_id - computed: true, optional: false, required: false
  public get verifiedAccessTrustProviderId() {
    return this.getStringAttribute('verified_access_trust_provider_id');
  }
}

export class VerifiedaccessInstanceVerifiedAccessTrustProvidersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference {
    return new VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance}
*/
export class VerifiedaccessInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedaccessInstance to import
  * @param importFromId The id of the existing VerifiedaccessInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedaccessInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedaccessInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VerifiedaccessInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_instance',
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
    this._cidrEndpointsCustomSubdomain = config.cidrEndpointsCustomSubdomain;
    this._description = config.description;
    this._fipsEnabled = config.fipsEnabled;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_endpoints_custom_subdomain - computed: false, optional: true, required: false
  private _cidrEndpointsCustomSubdomain?: string; 
  public get cidrEndpointsCustomSubdomain() {
    return this.getStringAttribute('cidr_endpoints_custom_subdomain');
  }
  public set cidrEndpointsCustomSubdomain(value: string) {
    this._cidrEndpointsCustomSubdomain = value;
  }
  public resetCidrEndpointsCustomSubdomain() {
    this._cidrEndpointsCustomSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrEndpointsCustomSubdomainInput() {
    return this._cidrEndpointsCustomSubdomain;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return cdktf.Fn.tolist(this.getListAttribute('name_servers'));
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

  // verified_access_trust_providers - computed: true, optional: false, required: false
  private _verifiedAccessTrustProviders = new VerifiedaccessInstanceVerifiedAccessTrustProvidersList(this, "verified_access_trust_providers", false);
  public get verifiedAccessTrustProviders() {
    return this._verifiedAccessTrustProviders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_endpoints_custom_subdomain: cdktf.stringToTerraform(this._cidrEndpointsCustomSubdomain),
      description: cdktf.stringToTerraform(this._description),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_endpoints_custom_subdomain: {
        value: cdktf.stringToHclTerraform(this._cidrEndpointsCustomSubdomain),
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
      fips_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
