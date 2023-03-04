// https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#capacity NetworkfirewallRuleGroup#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#description NetworkfirewallRuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#id NetworkfirewallRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#name NetworkfirewallRuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rules NetworkfirewallRuleGroup#rules}
  */
  readonly rules?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#tags NetworkfirewallRuleGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#tags_all NetworkfirewallRuleGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}
  */
  readonly type: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#encryption_configuration NetworkfirewallRuleGroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: NetworkfirewallRuleGroupEncryptionConfiguration;
  /**
  * rule_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rule_group NetworkfirewallRuleGroup#rule_group}
  */
  readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
}
export interface NetworkfirewallRuleGroupEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#key_id NetworkfirewallRuleGroup#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}
  */
  readonly type: string;
}

export function networkfirewallRuleGroupEncryptionConfigurationToTerraform(struct?: NetworkfirewallRuleGroupEncryptionConfigurationOutputReference | NetworkfirewallRuleGroupEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class NetworkfirewallRuleGroupEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
      this._type = value.type;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#reference_arn NetworkfirewallRuleGroup#reference_arn}
  */
  readonly referenceArn: string;
}

export function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_arn: cdktf.stringToTerraform(struct!.referenceArn),
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceArn = this._referenceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceArn = value.referenceArn;
    }
  }

  // reference_arn - computed: false, optional: false, required: true
  private _referenceArn?: string; 
  public get referenceArn() {
    return this.getStringAttribute('reference_arn');
  }
  public set referenceArn(value: string) {
    this._referenceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceArnInput() {
    return this._referenceArn;
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
  */
  readonly key: string;
  /**
  * ip_set_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#ip_set_reference NetworkfirewallRuleGroup#ip_set_reference}
  */
  readonly ipSetReference: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    ip_set_reference: cdktf.listMapper(networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceToTerraform, true)(struct!.ipSetReference),
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ipSetReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReference = this._ipSetReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._ipSetReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._ipSetReference.internalValue = value.ipSetReference;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // ip_set_reference - computed: false, optional: false, required: true
  private _ipSetReference = new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceList(this, "ip_set_reference", false);
  public get ipSetReference() {
    return this._ipSetReference;
  }
  public putIpSetReference(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable) {
    this._ipSetReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceInput() {
    return this._ipSetReference.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSets {
  /**
  * ip_set_references block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#ip_set_references NetworkfirewallRuleGroup#ip_set_references}
  */
  readonly ipSetReferences?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupReferenceSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference | NetworkfirewallRuleGroupRuleGroupReferenceSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_set_references: cdktf.listMapper(networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToTerraform, true)(struct!.ipSetReferences),
  }
}

export class NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferences = this._ipSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipSetReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipSetReferences.internalValue = value.ipSetReferences;
    }
  }

  // ip_set_references - computed: false, optional: true, required: false
  private _ipSetReferences = new NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesList(this, "ip_set_references", true);
  public get ipSetReferences() {
    return this._ipSetReferences;
  }
  public putIpSetReferences(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable) {
    this._ipSetReferences.internalValue = value;
  }
  public resetIpSetReferences() {
    this._ipSetReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferencesInput() {
    return this._ipSetReferences.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
  */
  readonly definition: string[];
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.definition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string[]; 
  public get definition() {
    return cdktf.Fn.tolist(this.getListAttribute('definition'));
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
  */
  readonly key: string;
  /**
  * ip_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#ip_set NetworkfirewallRuleGroup#ip_set}
  */
  readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet;
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    ip_set: networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct!.ipSet),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._ipSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSet = this._ipSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._ipSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._ipSet.internalValue = value.ipSet;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // ip_set - computed: false, optional: false, required: true
  private _ipSet = new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference(this, "ip_set");
  public get ipSet() {
    return this._ipSet;
  }
  public putIpSet(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet) {
    this._ipSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetInput() {
    return this._ipSet.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
  */
  readonly definition: string[];
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.definition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string[]; 
  public get definition() {
    return cdktf.Fn.tolist(this.getListAttribute('definition'));
  }
  public set definition(value: string[]) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
  */
  readonly key: string;
  /**
  * port_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#port_set NetworkfirewallRuleGroup#port_set}
  */
  readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet;
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    port_set: networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct!.portSet),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._portSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSet = this._portSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._portSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._portSet.internalValue = value.portSet;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // port_set - computed: false, optional: false, required: true
  private _portSet = new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference(this, "port_set");
  public get portSet() {
    return this._portSet;
  }
  public putPortSet(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet) {
    this._portSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetInput() {
    return this._portSet.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
  /**
  * ip_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#ip_sets NetworkfirewallRuleGroup#ip_sets}
  */
  readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable;
  /**
  * port_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#port_sets NetworkfirewallRuleGroup#port_sets}
  */
  readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform, true)(struct!.ipSets),
    port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform, true)(struct!.portSets),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets?.internalValue;
    }
    if (this._portSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSets = this._portSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipSets.internalValue = undefined;
      this._portSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipSets.internalValue = value.ipSets;
      this._portSets.internalValue = value.portSets;
    }
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList(this, "ip_sets", true);
  public get ipSets() {
    return this._ipSets;
  }
  public putIpSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable) {
    this._ipSets.internalValue = value;
  }
  public resetIpSets() {
    this._ipSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets.internalValue;
  }

  // port_sets - computed: false, optional: true, required: false
  private _portSets = new NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList(this, "port_sets", true);
  public get portSets() {
    return this._portSets;
  }
  public putPortSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable) {
    this._portSets.internalValue = value;
  }
  public resetPortSets() {
    this._portSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSetsInput() {
    return this._portSets.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
  */
  readonly generatedRulesType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#target_types NetworkfirewallRuleGroup#target_types}
  */
  readonly targetTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#targets NetworkfirewallRuleGroup#targets}
  */
  readonly targets: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
    target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTypes),
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generatedRulesType !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedRulesType = this._generatedRulesType;
    }
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._generatedRulesType = undefined;
      this._targetTypes = undefined;
      this._targets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._generatedRulesType = value.generatedRulesType;
      this._targetTypes = value.targetTypes;
      this._targets = value.targets;
    }
  }

  // generated_rules_type - computed: false, optional: false, required: true
  private _generatedRulesType?: string; 
  public get generatedRulesType() {
    return this.getStringAttribute('generated_rules_type');
  }
  public set generatedRulesType(value: string) {
    this._generatedRulesType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRulesTypeInput() {
    return this._generatedRulesType;
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('target_types'));
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#direction NetworkfirewallRuleGroup#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#protocol NetworkfirewallRuleGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}
  */
  readonly sourcePort: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    direction: cdktf.stringToTerraform(struct!.direction),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source: cdktf.stringToTerraform(struct!.source),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._destinationPort = undefined;
      this._direction = undefined;
      this._protocol = undefined;
      this._source = undefined;
      this._sourcePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._destinationPort = value.destinationPort;
      this._direction = value.direction;
      this._protocol = value.protocol;
      this._source = value.source;
      this._sourcePort = value.sourcePort;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#keyword NetworkfirewallRuleGroup#keyword}
  */
  readonly keyword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#settings NetworkfirewallRuleGroup#settings}
  */
  readonly settings?: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    settings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.settings),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._settings = value.settings;
    }
  }

  // keyword - computed: false, optional: false, required: true
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string[]; 
  public get settings() {
    return cdktf.Fn.tolist(this.getListAttribute('settings'));
  }
  public set settings(value: string[]) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#action NetworkfirewallRuleGroup#action}
  */
  readonly action: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#header NetworkfirewallRuleGroup#header}
  */
  readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader;
  /**
  * rule_option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rule_option NetworkfirewallRuleGroup#rule_option}
  */
  readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    header: networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct!.header),
    rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform, true)(struct!.ruleOption),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._ruleOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOption = this._ruleOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._header.internalValue = undefined;
      this._ruleOption.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._header.internalValue = value.header;
      this._ruleOption.internalValue = value.ruleOption;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // header - computed: false, optional: false, required: true
  private _header = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // rule_option - computed: false, optional: false, required: true
  private _ruleOption = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList(this, "rule_option", true);
  public get ruleOption() {
    return this._ruleOption;
  }
  public putRuleOption(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable) {
    this._ruleOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOptionInput() {
    return this._ruleOption.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}
  */
  readonly value: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#dimension NetworkfirewallRuleGroup#dimension}
  */
  readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform, true)(struct!.dimension),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
  /**
  * publish_metric_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
  */
  readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_metric_action: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishMetricAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishMetricAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishMetricAction.internalValue = value.publishMetricAction;
    }
  }

  // publish_metric_action - computed: false, optional: false, required: true
  private _publishMetricAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action");
  public get publishMetricAction() {
    return this._publishMetricAction;
  }
  public putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction) {
    this._publishMetricAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMetricActionInput() {
    return this._publishMetricAction.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#action_name NetworkfirewallRuleGroup#action_name}
  */
  readonly actionName: string;
  /**
  * action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#action_definition NetworkfirewallRuleGroup#action_definition}
  */
  readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    action_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct!.actionDefinition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._actionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._actionDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._actionDefinition.internalValue = value.actionDefinition;
    }
  }

  // action_name - computed: false, optional: false, required: true
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // action_definition - computed: false, optional: false, required: true
  private _actionDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference(this, "action_definition");
  public get actionDefinition() {
    return this._actionDefinition;
  }
  public putActionDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition) {
    this._actionDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDefinitionInput() {
    return this._actionDefinition.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
  */
  readonly toPort?: number;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
  */
  readonly addressDefinition: string;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressDefinition = this._addressDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressDefinition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressDefinition = value.addressDefinition;
    }
  }

  // address_definition - computed: false, optional: false, required: true
  private _addressDefinition?: string; 
  public get addressDefinition() {
    return this.getStringAttribute('address_definition');
  }
  public set addressDefinition(value: string) {
    this._addressDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressDefinitionInput() {
    return this._addressDefinition;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
  */
  readonly toPort?: number;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#flags NetworkfirewallRuleGroup#flags}
  */
  readonly flags: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#masks NetworkfirewallRuleGroup#masks}
  */
  readonly masks?: string[];
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    masks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.masks),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._masks !== undefined) {
      hasAnyValues = true;
      internalValueResult.masks = this._masks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._masks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._masks = value.masks;
    }
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // masks - computed: false, optional: true, required: false
  private _masks?: string[]; 
  public get masks() {
    return cdktf.Fn.tolist(this.getListAttribute('masks'));
  }
  public set masks(value: string[]) {
    this._masks = value;
  }
  public resetMasks() {
    this._masks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masksInput() {
    return this._masks;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#protocols NetworkfirewallRuleGroup#protocols}
  */
  readonly protocols?: number[];
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}
  */
  readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable;
  /**
  * destination_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}
  */
  readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}
  */
  readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable;
  /**
  * source_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}
  */
  readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable;
  /**
  * tcp_flag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
  */
  readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocols: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.protocols),
    destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform, true)(struct!.destination),
    destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform, true)(struct!.destinationPort),
    source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform, true)(struct!.source),
    source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform, true)(struct!.sourcePort),
    tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform, true)(struct!.tcpFlag),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._destinationPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sourcePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort?.internalValue;
    }
    if (this._tcpFlag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFlag = this._tcpFlag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocols = undefined;
      this._destination.internalValue = undefined;
      this._destinationPort.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sourcePort.internalValue = undefined;
      this._tcpFlag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocols = value.protocols;
      this._destination.internalValue = value.destination;
      this._destinationPort.internalValue = value.destinationPort;
      this._source.internalValue = value.source;
      this._sourcePort.internalValue = value.sourcePort;
      this._tcpFlag.internalValue = value.tcpFlag;
    }
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: number[]; 
  public get protocols() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protocols')));
  }
  public set protocols(value: number[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList(this, "destination_port", true);
  public get destinationPort() {
    return this._destinationPort;
  }
  public putDestinationPort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable) {
    this._destinationPort.internalValue = value;
  }
  public resetDestinationPort() {
    this._destinationPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList(this, "source_port", true);
  public get sourcePort() {
    return this._sourcePort;
  }
  public putSourcePort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable) {
    this._sourcePort.internalValue = value;
  }
  public resetSourcePort() {
    this._sourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort.internalValue;
  }

  // tcp_flag - computed: false, optional: true, required: false
  private _tcpFlag = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList(this, "tcp_flag", true);
  public get tcpFlag() {
    return this._tcpFlag;
  }
  public putTcpFlag(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable) {
    this._tcpFlag.internalValue = value;
  }
  public resetTcpFlag() {
    this._tcpFlag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagInput() {
    return this._tcpFlag.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#actions NetworkfirewallRuleGroup#actions}
  */
  readonly actions: string[];
  /**
  * match_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#match_attributes NetworkfirewallRuleGroup#match_attributes}
  */
  readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    match_attributes: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct!.matchAttributes),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._matchAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actions = undefined;
      this._matchAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actions = value.actions;
      this._matchAttributes.internalValue = value.matchAttributes;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // match_attributes - computed: false, optional: false, required: true
  private _matchAttributes = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference(this, "match_attributes");
  public get matchAttributes() {
    return this._matchAttributes;
  }
  public putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes) {
    this._matchAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAttributesInput() {
    return this._matchAttributes.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#priority NetworkfirewallRuleGroup#priority}
  */
  readonly priority: number;
  /**
  * rule_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rule_definition NetworkfirewallRuleGroup#rule_definition}
  */
  readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_definition: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct!.ruleDefinition),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._ruleDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._ruleDefinition.internalValue = value.ruleDefinition;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_definition - computed: false, optional: false, required: true
  private _ruleDefinition = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference(this, "rule_definition");
  public get ruleDefinition() {
    return this._ruleDefinition;
  }
  public putRuleDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition) {
    this._ruleDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionInput() {
    return this._ruleDefinition.internalValue;
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList extends cdktf.ComplexList {
  public internalValue? : NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable

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
  public get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference {
    return new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
  /**
  * custom_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#custom_action NetworkfirewallRuleGroup#custom_action}
  */
  readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable;
  /**
  * stateless_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
  */
  readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform, true)(struct!.customAction),
    stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform, true)(struct!.statelessRule),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAction = this._customAction?.internalValue;
    }
    if (this._statelessRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRule = this._statelessRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAction.internalValue = undefined;
      this._statelessRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAction.internalValue = value.customAction;
      this._statelessRule.internalValue = value.statelessRule;
    }
  }

  // custom_action - computed: false, optional: true, required: false
  private _customAction = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList(this, "custom_action", true);
  public get customAction() {
    return this._customAction;
  }
  public putCustomAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable) {
    this._customAction.internalValue = value;
  }
  public resetCustomAction() {
    this._customAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionInput() {
    return this._customAction.internalValue;
  }

  // stateless_rule - computed: false, optional: false, required: true
  private _statelessRule = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList(this, "stateless_rule", true);
  public get statelessRule() {
    return this._statelessRule;
  }
  public putStatelessRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable) {
    this._statelessRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRuleInput() {
    return this._statelessRule.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rules_string NetworkfirewallRuleGroup#rules_string}
  */
  readonly rulesString?: string;
  /**
  * rules_source_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
  */
  readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
  /**
  * stateful_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
  */
  readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable;
  /**
  * stateless_rules_and_custom_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
  */
  readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}

export function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules_string: cdktf.stringToTerraform(struct!.rulesString),
    rules_source_list: networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct!.rulesSourceList),
    stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform, true)(struct!.statefulRule),
    stateless_rules_and_custom_actions: networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct!.statelessRulesAndCustomActions),
  }
}

export class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulesString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesString = this._rulesString;
    }
    if (this._rulesSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
    }
    if (this._statefulRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRule = this._statefulRule?.internalValue;
    }
    if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rulesString = undefined;
      this._rulesSourceList.internalValue = undefined;
      this._statefulRule.internalValue = undefined;
      this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rulesString = value.rulesString;
      this._rulesSourceList.internalValue = value.rulesSourceList;
      this._statefulRule.internalValue = value.statefulRule;
      this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
    }
  }

  // rules_string - computed: false, optional: true, required: false
  private _rulesString?: string; 
  public get rulesString() {
    return this.getStringAttribute('rules_string');
  }
  public set rulesString(value: string) {
    this._rulesString = value;
  }
  public resetRulesString() {
    this._rulesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesStringInput() {
    return this._rulesString;
  }

  // rules_source_list - computed: false, optional: true, required: false
  private _rulesSourceList = new NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference(this, "rules_source_list");
  public get rulesSourceList() {
    return this._rulesSourceList;
  }
  public putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList) {
    this._rulesSourceList.internalValue = value;
  }
  public resetRulesSourceList() {
    this._rulesSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceListInput() {
    return this._rulesSourceList.internalValue;
  }

  // stateful_rule - computed: false, optional: true, required: false
  private _statefulRule = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList(this, "stateful_rule", false);
  public get statefulRule() {
    return this._statefulRule;
  }
  public putStatefulRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable) {
    this._statefulRule.internalValue = value;
  }
  public resetStatefulRule() {
    this._statefulRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleInput() {
    return this._statefulRule.internalValue;
  }

  // stateless_rules_and_custom_actions - computed: false, optional: true, required: false
  private _statelessRulesAndCustomActions = new NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(this, "stateless_rules_and_custom_actions");
  public get statelessRulesAndCustomActions() {
    return this._statelessRulesAndCustomActions;
  }
  public putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions) {
    this._statelessRulesAndCustomActions.internalValue = value;
  }
  public resetStatelessRulesAndCustomActions() {
    this._statelessRulesAndCustomActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessRulesAndCustomActionsInput() {
    return this._statelessRulesAndCustomActions.internalValue;
  }
}
export interface NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rule_order NetworkfirewallRuleGroup#rule_order}
  */
  readonly ruleOrder: string;
}

export function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference | NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_order: cdktf.stringToTerraform(struct!.ruleOrder),
  }
}

export class NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOrder = this._ruleOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleOrder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleOrder = value.ruleOrder;
    }
  }

  // rule_order - computed: false, optional: false, required: true
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }
}
export interface NetworkfirewallRuleGroupRuleGroup {
  /**
  * reference_sets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#reference_sets NetworkfirewallRuleGroup#reference_sets}
  */
  readonly referenceSets?: NetworkfirewallRuleGroupRuleGroupReferenceSets;
  /**
  * rule_variables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rule_variables NetworkfirewallRuleGroup#rule_variables}
  */
  readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
  /**
  * rules_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#rules_source NetworkfirewallRuleGroup#rules_source}
  */
  readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource;
  /**
  * stateful_rule_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group#stateful_rule_options NetworkfirewallRuleGroup#stateful_rule_options}
  */
  readonly statefulRuleOptions?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions;
}

export function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_sets: networkfirewallRuleGroupRuleGroupReferenceSetsToTerraform(struct!.referenceSets),
    rule_variables: networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct!.ruleVariables),
    rules_source: networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct!.rulesSource),
    stateful_rule_options: networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct!.statefulRuleOptions),
  }
}

export class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkfirewallRuleGroupRuleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceSets = this._referenceSets?.internalValue;
    }
    if (this._ruleVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
    }
    if (this._rulesSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesSource = this._rulesSource?.internalValue;
    }
    if (this._statefulRuleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkfirewallRuleGroupRuleGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referenceSets.internalValue = undefined;
      this._ruleVariables.internalValue = undefined;
      this._rulesSource.internalValue = undefined;
      this._statefulRuleOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referenceSets.internalValue = value.referenceSets;
      this._ruleVariables.internalValue = value.ruleVariables;
      this._rulesSource.internalValue = value.rulesSource;
      this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
    }
  }

  // reference_sets - computed: false, optional: true, required: false
  private _referenceSets = new NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference(this, "reference_sets");
  public get referenceSets() {
    return this._referenceSets;
  }
  public putReferenceSets(value: NetworkfirewallRuleGroupRuleGroupReferenceSets) {
    this._referenceSets.internalValue = value;
  }
  public resetReferenceSets() {
    this._referenceSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceSetsInput() {
    return this._referenceSets.internalValue;
  }

  // rule_variables - computed: false, optional: true, required: false
  private _ruleVariables = new NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(this, "rule_variables");
  public get ruleVariables() {
    return this._ruleVariables;
  }
  public putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables) {
    this._ruleVariables.internalValue = value;
  }
  public resetRuleVariables() {
    this._ruleVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVariablesInput() {
    return this._ruleVariables.internalValue;
  }

  // rules_source - computed: false, optional: false, required: true
  private _rulesSource = new NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(this, "rules_source");
  public get rulesSource() {
    return this._rulesSource;
  }
  public putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource) {
    this._rulesSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesSourceInput() {
    return this._rulesSource.internalValue;
  }

  // stateful_rule_options - computed: false, optional: true, required: false
  private _statefulRuleOptions = new NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(this, "stateful_rule_options");
  public get statefulRuleOptions() {
    return this._statefulRuleOptions;
  }
  public putStatefulRuleOptions(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions) {
    this._statefulRuleOptions.internalValue = value;
  }
  public resetStatefulRuleOptions() {
    this._statefulRuleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulRuleOptionsInput() {
    return this._statefulRuleOptions.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group aws_networkfirewall_rule_group}
*/
export class NetworkfirewallRuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkfirewall_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group aws_networkfirewall_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkfirewall_rule_group',
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
    this._capacity = config.capacity;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._rules = config.rules;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._ruleGroup.internalValue = config.ruleGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new NetworkfirewallRuleGroupEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: NetworkfirewallRuleGroupEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup = new NetworkfirewallRuleGroupRuleGroupOutputReference(this, "rule_group");
  public get ruleGroup() {
    return this._ruleGroup;
  }
  public putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup) {
    this._ruleGroup.internalValue = value;
  }
  public resetRuleGroup() {
    this._ruleGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.stringToTerraform(this._rules),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      encryption_configuration: networkfirewallRuleGroupEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      rule_group: networkfirewallRuleGroupRuleGroupToTerraform(this._ruleGroup.internalValue),
    };
  }
}
