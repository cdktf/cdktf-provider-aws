// https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedaccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#description VerifiedaccessGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#id VerifiedaccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#policy_document VerifiedaccessGroup#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#tags VerifiedaccessGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#tags_all VerifiedaccessGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#verifiedaccess_instance_id VerifiedaccessGroup#verifiedaccess_instance_id}
  */
  readonly verifiedaccessInstanceId: string;
  /**
  * sse_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#sse_configuration VerifiedaccessGroup#sse_configuration}
  */
  readonly sseConfiguration?: VerifiedaccessGroupSseConfiguration;
}
export interface VerifiedaccessGroupSseConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#customer_managed_key_enabled VerifiedaccessGroup#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#kms_key_arn VerifiedaccessGroup#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function verifiedaccessGroupSseConfigurationToTerraform(struct?: VerifiedaccessGroupSseConfigurationOutputReference | VerifiedaccessGroupSseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_managed_key_enabled: cdktf.booleanToTerraform(struct!.customerManagedKeyEnabled),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function verifiedaccessGroupSseConfigurationToHclTerraform(struct?: VerifiedaccessGroupSseConfigurationOutputReference | VerifiedaccessGroupSseConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_managed_key_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedaccessGroupSseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VerifiedaccessGroupSseConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedKeyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedaccessGroupSseConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerManagedKeyEnabled = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean | cdktf.IResolvable; 
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group aws_verifiedaccess_group}
*/
export class VerifiedaccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedaccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedaccessGroup to import
  * @param importFromId The id of the existing VerifiedaccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedaccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/verifiedaccess_group aws_verifiedaccess_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedaccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedaccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.66.0',
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
    this._description = config.description;
    this._id = config.id;
    this._policyDocument = config.policyDocument;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._verifiedaccessInstanceId = config.verifiedaccessInstanceId;
    this._sseConfiguration.internalValue = config.sseConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // description - computed: true, optional: true, required: false
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
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

  // verifiedaccess_group_arn - computed: true, optional: false, required: false
  public get verifiedaccessGroupArn() {
    return this.getStringAttribute('verifiedaccess_group_arn');
  }

  // verifiedaccess_group_id - computed: true, optional: false, required: false
  public get verifiedaccessGroupId() {
    return this.getStringAttribute('verifiedaccess_group_id');
  }

  // verifiedaccess_instance_id - computed: false, optional: false, required: true
  private _verifiedaccessInstanceId?: string; 
  public get verifiedaccessInstanceId() {
    return this.getStringAttribute('verifiedaccess_instance_id');
  }
  public set verifiedaccessInstanceId(value: string) {
    this._verifiedaccessInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedaccessInstanceIdInput() {
    return this._verifiedaccessInstanceId;
  }

  // sse_configuration - computed: false, optional: true, required: false
  private _sseConfiguration = new VerifiedaccessGroupSseConfigurationOutputReference(this, "sse_configuration");
  public get sseConfiguration() {
    return this._sseConfiguration;
  }
  public putSseConfiguration(value: VerifiedaccessGroupSseConfiguration) {
    this._sseConfiguration.internalValue = value;
  }
  public resetSseConfiguration() {
    this._sseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseConfigurationInput() {
    return this._sseConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      verifiedaccess_instance_id: cdktf.stringToTerraform(this._verifiedaccessInstanceId),
      sse_configuration: verifiedaccessGroupSseConfigurationToTerraform(this._sseConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      policy_document: {
        value: cdktf.stringToHclTerraform(this._policyDocument),
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
      verifiedaccess_instance_id: {
        value: cdktf.stringToHclTerraform(this._verifiedaccessInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_configuration: {
        value: verifiedaccessGroupSseConfigurationToHclTerraform(this._sseConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedaccessGroupSseConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
