// https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpclatticeServiceNetworkResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}
  */
  readonly serviceNetworkIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}
  */
  readonly timeouts?: VpclatticeServiceNetworkResourceAssociationTimeouts;
}
export interface VpclatticeServiceNetworkResourceAssociationDnsEntry {
}

export function vpclatticeServiceNetworkResourceAssociationDnsEntryToTerraform(struct?: VpclatticeServiceNetworkResourceAssociationDnsEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpclatticeServiceNetworkResourceAssociationDnsEntryToHclTerraform(struct?: VpclatticeServiceNetworkResourceAssociationDnsEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpclatticeServiceNetworkResourceAssociationDnsEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpclatticeServiceNetworkResourceAssociationDnsEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}

export class VpclatticeServiceNetworkResourceAssociationDnsEntryList extends cdktf.ComplexList {

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
  public get(index: number): VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference {
    return new VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpclatticeServiceNetworkResourceAssociationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#create VpclatticeServiceNetworkResourceAssociation#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#delete VpclatticeServiceNetworkResourceAssociation#delete}
  */
  readonly delete?: string;
}

export function vpclatticeServiceNetworkResourceAssociationTimeoutsToTerraform(struct?: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpclatticeServiceNetworkResourceAssociationTimeoutsToHclTerraform(struct?: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association}
*/
export class VpclatticeServiceNetworkResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpclattice_service_network_resource_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import
  * @param importFromId The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpclattice_service_network_resource_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpclatticeServiceNetworkResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: VpclatticeServiceNetworkResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpclattice_service_network_resource_association',
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
    this._resourceConfigurationIdentifier = config.resourceConfigurationIdentifier;
    this._serviceNetworkIdentifier = config.serviceNetworkIdentifier;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dns_entry - computed: true, optional: false, required: false
  private _dnsEntry = new VpclatticeServiceNetworkResourceAssociationDnsEntryList(this, "dns_entry", false);
  public get dnsEntry() {
    return this._dnsEntry;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_configuration_identifier - computed: false, optional: false, required: true
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }

  // service_network_identifier - computed: false, optional: false, required: true
  private _serviceNetworkIdentifier?: string; 
  public get serviceNetworkIdentifier() {
    return this.getStringAttribute('service_network_identifier');
  }
  public set serviceNetworkIdentifier(value: string) {
    this._serviceNetworkIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkIdentifierInput() {
    return this._serviceNetworkIdentifier;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpclatticeServiceNetworkResourceAssociationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_configuration_identifier: cdktf.stringToTerraform(this._resourceConfigurationIdentifier),
      service_network_identifier: cdktf.stringToTerraform(this._serviceNetworkIdentifier),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: vpclatticeServiceNetworkResourceAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_configuration_identifier: {
        value: cdktf.stringToHclTerraform(this._resourceConfigurationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_network_identifier: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkIdentifier),
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
      timeouts: {
        value: vpclatticeServiceNetworkResourceAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpclatticeServiceNetworkResourceAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
