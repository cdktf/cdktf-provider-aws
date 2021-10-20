// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export namespace KMS {
  export interface KmsAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name KmsAlias#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#name_prefix KmsAlias#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html#target_key_id KmsAlias#target_key_id}
    */
    readonly targetKeyId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias}
  */
  export class KmsAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_alias.html aws_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsAliasConfig
    */
    public constructor(scope: Construct, id: string, config: KmsAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._targetKeyId = config.targetKeyId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // target_key_arn - computed: true, optional: false, required: false
    public get targetKeyArn() {
      return this.getStringAttribute('target_key_arn');
    }

    // target_key_id - computed: false, optional: false, required: true
    private _targetKeyId?: string; 
    public get targetKeyId() {
      return this.getStringAttribute('target_key_id');
    }
    public set targetKeyId(value: string) {
      this._targetKeyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetKeyIdInput() {
      return this._targetKeyId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        target_key_id: cdktf.stringToTerraform(this._targetKeyId),
      };
    }
  }
  export interface KmsCiphertextConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#context KmsCiphertext#context}
    */
    readonly context?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#key_id KmsCiphertext#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#plaintext KmsCiphertext#plaintext}
    */
    readonly plaintext: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html aws_kms_ciphertext}
  */
  export class KmsCiphertext extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_ciphertext";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html aws_kms_ciphertext} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsCiphertextConfig
    */
    public constructor(scope: Construct, id: string, config: KmsCiphertextConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_ciphertext',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._context = config.context;
      this._keyId = config.keyId;
      this._plaintext = config.plaintext;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ciphertext_blob - computed: true, optional: false, required: false
    public get ciphertextBlob() {
      return this.getStringAttribute('ciphertext_blob');
    }

    // context - computed: false, optional: true, required: false
    private _context?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get context() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('context') as any;
    }
    public set context(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._context = value;
    }
    public resetContext() {
      this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextInput() {
      return this._context
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // plaintext - computed: false, optional: false, required: true
    private _plaintext?: string; 
    public get plaintext() {
      return this.getStringAttribute('plaintext');
    }
    public set plaintext(value: string) {
      this._plaintext = value;
    }
    // Temporarily expose input value. Use with caution.
    public get plaintextInput() {
      return this._plaintext
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        context: cdktf.hashMapper(cdktf.anyToTerraform)(this._context),
        key_id: cdktf.stringToTerraform(this._keyId),
        plaintext: cdktf.stringToTerraform(this._plaintext),
      };
    }
  }
  export interface KmsExternalKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#deletion_window_in_days KmsExternalKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#description KmsExternalKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#enabled KmsExternalKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#key_material_base64 KmsExternalKey#key_material_base64}
    */
    readonly keyMaterialBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#policy KmsExternalKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags KmsExternalKey#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags_all KmsExternalKey#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#valid_to KmsExternalKey#valid_to}
    */
    readonly validTo?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key}
  */
  export class KmsExternalKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_external_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsExternalKeyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: KmsExternalKeyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_external_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
      this._deletionWindowInDays = config.deletionWindowInDays;
      this._description = config.description;
      this._enabled = config.enabled;
      this._keyMaterialBase64 = config.keyMaterialBase64;
      this._policy = config.policy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._validTo = config.validTo;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
    private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable | undefined; 
    public get bypassPolicyLockoutSafetyCheck() {
      return this.getBooleanAttribute('bypass_policy_lockout_safety_check') as any;
    }
    public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._bypassPolicyLockoutSafetyCheck = value;
    }
    public resetBypassPolicyLockoutSafetyCheck() {
      this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutSafetyCheckInput() {
      return this._bypassPolicyLockoutSafetyCheck
    }

    // deletion_window_in_days - computed: false, optional: true, required: false
    private _deletionWindowInDays?: number | undefined; 
    public get deletionWindowInDays() {
      return this.getNumberAttribute('deletion_window_in_days');
    }
    public set deletionWindowInDays(value: number | undefined) {
      this._deletionWindowInDays = value;
    }
    public resetDeletionWindowInDays() {
      this._deletionWindowInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionWindowInDaysInput() {
      return this._deletionWindowInDays
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // expiration_model - computed: true, optional: false, required: false
    public get expirationModel() {
      return this.getStringAttribute('expiration_model');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_material_base64 - computed: false, optional: true, required: false
    private _keyMaterialBase64?: string | undefined; 
    public get keyMaterialBase64() {
      return this.getStringAttribute('key_material_base64');
    }
    public set keyMaterialBase64(value: string | undefined) {
      this._keyMaterialBase64 = value;
    }
    public resetKeyMaterialBase64() {
      this._keyMaterialBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyMaterialBase64Input() {
      return this._keyMaterialBase64
    }

    // key_state - computed: true, optional: false, required: false
    public get keyState() {
      return this.getStringAttribute('key_state');
    }

    // key_usage - computed: true, optional: false, required: false
    public get keyUsage() {
      return this.getStringAttribute('key_usage');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // valid_to - computed: false, optional: true, required: false
    private _validTo?: string | undefined; 
    public get validTo() {
      return this.getStringAttribute('valid_to');
    }
    public set validTo(value: string | undefined) {
      this._validTo = value;
    }
    public resetValidTo() {
      this._validTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validToInput() {
      return this._validTo
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
        deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
        description: cdktf.stringToTerraform(this._description),
        enabled: cdktf.booleanToTerraform(this._enabled),
        key_material_base64: cdktf.stringToTerraform(this._keyMaterialBase64),
        policy: cdktf.stringToTerraform(this._policy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        valid_to: cdktf.stringToTerraform(this._validTo),
      };
    }
  }
  export interface KmsGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#grant_creation_tokens KmsGrant#grant_creation_tokens}
    */
    readonly grantCreationTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#grantee_principal KmsGrant#grantee_principal}
    */
    readonly granteePrincipal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#key_id KmsGrant#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#name KmsGrant#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#operations KmsGrant#operations}
    */
    readonly operations: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#retire_on_delete KmsGrant#retire_on_delete}
    */
    readonly retireOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#retiring_principal KmsGrant#retiring_principal}
    */
    readonly retiringPrincipal?: string;
    /**
    * constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#constraints KmsGrant#constraints}
    */
    readonly constraints?: KmsGrantConstraints[];
  }
  export interface KmsGrantConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#encryption_context_equals KmsGrant#encryption_context_equals}
    */
    readonly encryptionContextEquals?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html#encryption_context_subset KmsGrant#encryption_context_subset}
    */
    readonly encryptionContextSubset?: { [key: string]: string } | cdktf.IResolvable;
  }

  function kmsGrantConstraintsToTerraform(struct?: KmsGrantConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encryption_context_equals: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.encryptionContextEquals),
      encryption_context_subset: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.encryptionContextSubset),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant}
  */
  export class KmsGrant extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_grant";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_grant.html aws_kms_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsGrantConfig
    */
    public constructor(scope: Construct, id: string, config: KmsGrantConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_grant',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._grantCreationTokens = config.grantCreationTokens;
      this._granteePrincipal = config.granteePrincipal;
      this._keyId = config.keyId;
      this._name = config.name;
      this._operations = config.operations;
      this._retireOnDelete = config.retireOnDelete;
      this._retiringPrincipal = config.retiringPrincipal;
      this._constraints = config.constraints;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // grant_creation_tokens - computed: false, optional: true, required: false
    private _grantCreationTokens?: string[] | undefined; 
    public get grantCreationTokens() {
      return this.getListAttribute('grant_creation_tokens');
    }
    public set grantCreationTokens(value: string[] | undefined) {
      this._grantCreationTokens = value;
    }
    public resetGrantCreationTokens() {
      this._grantCreationTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantCreationTokensInput() {
      return this._grantCreationTokens
    }

    // grant_id - computed: true, optional: false, required: false
    public get grantId() {
      return this.getStringAttribute('grant_id');
    }

    // grant_token - computed: true, optional: false, required: false
    public get grantToken() {
      return this.getStringAttribute('grant_token');
    }

    // grantee_principal - computed: false, optional: false, required: true
    private _granteePrincipal?: string; 
    public get granteePrincipal() {
      return this.getStringAttribute('grantee_principal');
    }
    public set granteePrincipal(value: string) {
      this._granteePrincipal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get granteePrincipalInput() {
      return this._granteePrincipal
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // operations - computed: false, optional: false, required: true
    private _operations?: string[]; 
    public get operations() {
      return this.getListAttribute('operations');
    }
    public set operations(value: string[]) {
      this._operations = value;
    }
    // Temporarily expose input value. Use with caution.
    public get operationsInput() {
      return this._operations
    }

    // retire_on_delete - computed: false, optional: true, required: false
    private _retireOnDelete?: boolean | cdktf.IResolvable | undefined; 
    public get retireOnDelete() {
      return this.getBooleanAttribute('retire_on_delete') as any;
    }
    public set retireOnDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._retireOnDelete = value;
    }
    public resetRetireOnDelete() {
      this._retireOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retireOnDeleteInput() {
      return this._retireOnDelete
    }

    // retiring_principal - computed: false, optional: true, required: false
    private _retiringPrincipal?: string | undefined; 
    public get retiringPrincipal() {
      return this.getStringAttribute('retiring_principal');
    }
    public set retiringPrincipal(value: string | undefined) {
      this._retiringPrincipal = value;
    }
    public resetRetiringPrincipal() {
      this._retiringPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retiringPrincipalInput() {
      return this._retiringPrincipal
    }

    // constraints - computed: false, optional: true, required: false
    private _constraints?: KmsGrantConstraints[] | undefined; 
    public get constraints() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('constraints') as any;
    }
    public set constraints(value: KmsGrantConstraints[] | undefined) {
      this._constraints = value;
    }
    public resetConstraints() {
      this._constraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
      return this._constraints
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        grant_creation_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantCreationTokens),
        grantee_principal: cdktf.stringToTerraform(this._granteePrincipal),
        key_id: cdktf.stringToTerraform(this._keyId),
        name: cdktf.stringToTerraform(this._name),
        operations: cdktf.listMapper(cdktf.stringToTerraform)(this._operations),
        retire_on_delete: cdktf.booleanToTerraform(this._retireOnDelete),
        retiring_principal: cdktf.stringToTerraform(this._retiringPrincipal),
        constraints: cdktf.listMapper(kmsGrantConstraintsToTerraform)(this._constraints),
      };
    }
  }
  export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#customer_master_key_spec KmsKey#customer_master_key_spec}
    */
    readonly customerMasterKeySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#deletion_window_in_days KmsKey#deletion_window_in_days}
    */
    readonly deletionWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#description KmsKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#enable_key_rotation KmsKey#enable_key_rotation}
    */
    readonly enableKeyRotation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#is_enabled KmsKey#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#key_usage KmsKey#key_usage}
    */
    readonly keyUsage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#policy KmsKey#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags KmsKey#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags_all KmsKey#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key}
  */
  export class KmsKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsKeyConfig = {}
    */
    public constructor(scope: Construct, id: string, config: KmsKeyConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
      this._customerMasterKeySpec = config.customerMasterKeySpec;
      this._deletionWindowInDays = config.deletionWindowInDays;
      this._description = config.description;
      this._enableKeyRotation = config.enableKeyRotation;
      this._isEnabled = config.isEnabled;
      this._keyUsage = config.keyUsage;
      this._policy = config.policy;
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

    // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
    private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable | undefined; 
    public get bypassPolicyLockoutSafetyCheck() {
      return this.getBooleanAttribute('bypass_policy_lockout_safety_check') as any;
    }
    public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable | undefined) {
      this._bypassPolicyLockoutSafetyCheck = value;
    }
    public resetBypassPolicyLockoutSafetyCheck() {
      this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutSafetyCheckInput() {
      return this._bypassPolicyLockoutSafetyCheck
    }

    // customer_master_key_spec - computed: false, optional: true, required: false
    private _customerMasterKeySpec?: string | undefined; 
    public get customerMasterKeySpec() {
      return this.getStringAttribute('customer_master_key_spec');
    }
    public set customerMasterKeySpec(value: string | undefined) {
      this._customerMasterKeySpec = value;
    }
    public resetCustomerMasterKeySpec() {
      this._customerMasterKeySpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerMasterKeySpecInput() {
      return this._customerMasterKeySpec
    }

    // deletion_window_in_days - computed: false, optional: true, required: false
    private _deletionWindowInDays?: number | undefined; 
    public get deletionWindowInDays() {
      return this.getNumberAttribute('deletion_window_in_days');
    }
    public set deletionWindowInDays(value: number | undefined) {
      this._deletionWindowInDays = value;
    }
    public resetDeletionWindowInDays() {
      this._deletionWindowInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionWindowInDaysInput() {
      return this._deletionWindowInDays
    }

    // description - computed: true, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enable_key_rotation - computed: false, optional: true, required: false
    private _enableKeyRotation?: boolean | cdktf.IResolvable | undefined; 
    public get enableKeyRotation() {
      return this.getBooleanAttribute('enable_key_rotation') as any;
    }
    public set enableKeyRotation(value: boolean | cdktf.IResolvable | undefined) {
      this._enableKeyRotation = value;
    }
    public resetEnableKeyRotation() {
      this._enableKeyRotation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableKeyRotationInput() {
      return this._enableKeyRotation
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_enabled - computed: false, optional: true, required: false
    private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get isEnabled() {
      return this.getBooleanAttribute('is_enabled') as any;
    }
    public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._isEnabled = value;
    }
    public resetIsEnabled() {
      this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
      return this._isEnabled
    }

    // key_id - computed: true, optional: false, required: false
    public get keyId() {
      return this.getStringAttribute('key_id');
    }

    // key_usage - computed: false, optional: true, required: false
    private _keyUsage?: string | undefined; 
    public get keyUsage() {
      return this.getStringAttribute('key_usage');
    }
    public set keyUsage(value: string | undefined) {
      this._keyUsage = value;
    }
    public resetKeyUsage() {
      this._keyUsage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
      return this._keyUsage
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
      this._policy = value;
    }
    public resetPolicy() {
      this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
        customer_master_key_spec: cdktf.stringToTerraform(this._customerMasterKeySpec),
        deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
        description: cdktf.stringToTerraform(this._description),
        enable_key_rotation: cdktf.booleanToTerraform(this._enableKeyRotation),
        is_enabled: cdktf.booleanToTerraform(this._isEnabled),
        key_usage: cdktf.stringToTerraform(this._keyUsage),
        policy: cdktf.stringToTerraform(this._policy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface DataAwsKmsAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html#name DataAwsKmsAlias#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html aws_kms_alias}
  */
  export class DataAwsKmsAlias extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_alias.html aws_kms_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsAliasConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // target_key_arn - computed: true, optional: false, required: false
    public get targetKeyArn() {
      return this.getStringAttribute('target_key_arn');
    }

    // target_key_id - computed: true, optional: false, required: false
    public get targetKeyId() {
      return this.getStringAttribute('target_key_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsKmsCiphertextConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#context DataAwsKmsCiphertext#context}
    */
    readonly context?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#key_id DataAwsKmsCiphertext#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html#plaintext DataAwsKmsCiphertext#plaintext}
    */
    readonly plaintext: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext}
  */
  export class DataAwsKmsCiphertext extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_ciphertext";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_ciphertext.html aws_kms_ciphertext} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsCiphertextConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsCiphertextConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_ciphertext',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._context = config.context;
      this._keyId = config.keyId;
      this._plaintext = config.plaintext;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ciphertext_blob - computed: true, optional: false, required: false
    public get ciphertextBlob() {
      return this.getStringAttribute('ciphertext_blob');
    }

    // context - computed: false, optional: true, required: false
    private _context?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get context() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('context') as any;
    }
    public set context(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._context = value;
    }
    public resetContext() {
      this._context = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextInput() {
      return this._context
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // plaintext - computed: false, optional: false, required: true
    private _plaintext?: string; 
    public get plaintext() {
      return this.getStringAttribute('plaintext');
    }
    public set plaintext(value: string) {
      this._plaintext = value;
    }
    // Temporarily expose input value. Use with caution.
    public get plaintextInput() {
      return this._plaintext
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        context: cdktf.hashMapper(cdktf.anyToTerraform)(this._context),
        key_id: cdktf.stringToTerraform(this._keyId),
        plaintext: cdktf.stringToTerraform(this._plaintext),
      };
    }
  }
  export interface DataAwsKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#grant_tokens DataAwsKmsKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#key_id DataAwsKmsKey#key_id}
    */
    readonly keyId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}
  */
  export class DataAwsKmsKey extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsKeyConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._grantTokens = config.grantTokens;
      this._keyId = config.keyId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
      return this.getStringAttribute('aws_account_id');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
      return this.getStringAttribute('creation_date');
    }

    // customer_master_key_spec - computed: true, optional: false, required: false
    public get customerMasterKeySpec() {
      return this.getStringAttribute('customer_master_key_spec');
    }

    // deletion_date - computed: true, optional: false, required: false
    public get deletionDate() {
      return this.getStringAttribute('deletion_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // expiration_model - computed: true, optional: false, required: false
    public get expirationModel() {
      return this.getStringAttribute('expiration_model');
    }

    // grant_tokens - computed: false, optional: true, required: false
    private _grantTokens?: string[] | undefined; 
    public get grantTokens() {
      return this.getListAttribute('grant_tokens');
    }
    public set grantTokens(value: string[] | undefined) {
      this._grantTokens = value;
    }
    public resetGrantTokens() {
      this._grantTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTokensInput() {
      return this._grantTokens
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // key_manager - computed: true, optional: false, required: false
    public get keyManager() {
      return this.getStringAttribute('key_manager');
    }

    // key_state - computed: true, optional: false, required: false
    public get keyState() {
      return this.getStringAttribute('key_state');
    }

    // key_usage - computed: true, optional: false, required: false
    public get keyUsage() {
      return this.getStringAttribute('key_usage');
    }

    // origin - computed: true, optional: false, required: false
    public get origin() {
      return this.getStringAttribute('origin');
    }

    // valid_to - computed: true, optional: false, required: false
    public get validTo() {
      return this.getStringAttribute('valid_to');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
        key_id: cdktf.stringToTerraform(this._keyId),
      };
    }
  }
  export interface DataAwsKmsPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#grant_tokens DataAwsKmsPublicKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html#key_id DataAwsKmsPublicKey#key_id}
    */
    readonly keyId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key}
  */
  export class DataAwsKmsPublicKey extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_public_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_public_key.html aws_kms_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsPublicKeyConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsPublicKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_public_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._grantTokens = config.grantTokens;
      this._keyId = config.keyId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // customer_master_key_spec - computed: true, optional: false, required: false
    public get customerMasterKeySpec() {
      return this.getStringAttribute('customer_master_key_spec');
    }

    // encryption_algorithms - computed: true, optional: false, required: false
    public get encryptionAlgorithms() {
      return this.getListAttribute('encryption_algorithms');
    }

    // grant_tokens - computed: false, optional: true, required: false
    private _grantTokens?: string[] | undefined; 
    public get grantTokens() {
      return this.getListAttribute('grant_tokens');
    }
    public set grantTokens(value: string[] | undefined) {
      this._grantTokens = value;
    }
    public resetGrantTokens() {
      this._grantTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantTokensInput() {
      return this._grantTokens
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // key_usage - computed: true, optional: false, required: false
    public get keyUsage() {
      return this.getStringAttribute('key_usage');
    }

    // public_key - computed: true, optional: false, required: false
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }

    // signing_algorithms - computed: true, optional: false, required: false
    public get signingAlgorithms() {
      return this.getListAttribute('signing_algorithms');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
        key_id: cdktf.stringToTerraform(this._keyId),
      };
    }
  }
  export interface DataAwsKmsSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * secret block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#secret DataAwsKmsSecret#secret}
    */
    readonly secret: DataAwsKmsSecretSecret[];
  }
  export interface DataAwsKmsSecretSecret {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#context DataAwsKmsSecret#context}
    */
    readonly context?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#grant_tokens DataAwsKmsSecret#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#name DataAwsKmsSecret#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#payload DataAwsKmsSecret#payload}
    */
    readonly payload: string;
  }

  function dataAwsKmsSecretSecretToTerraform(struct?: DataAwsKmsSecretSecret): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      context: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.context),
      grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grantTokens),
      name: cdktf.stringToTerraform(struct!.name),
      payload: cdktf.stringToTerraform(struct!.payload),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret}
  */
  export class DataAwsKmsSecret extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_secret";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsSecretConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsSecretConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_secret',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._secret = config.secret;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // secret - computed: false, optional: false, required: true
    private _secret?: DataAwsKmsSecretSecret[]; 
    public get secret() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secret') as any;
    }
    public set secret(value: DataAwsKmsSecretSecret[]) {
      this._secret = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretInput() {
      return this._secret
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        secret: cdktf.listMapper(dataAwsKmsSecretSecretToTerraform)(this._secret),
      };
    }
  }
  export interface DataAwsKmsSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
    * secret block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#secret DataAwsKmsSecrets#secret}
    */
    readonly secret: DataAwsKmsSecretsSecret[];
  }
  export interface DataAwsKmsSecretsSecret {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#context DataAwsKmsSecrets#context}
    */
    readonly context?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#grant_tokens DataAwsKmsSecrets#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#name DataAwsKmsSecrets#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#payload DataAwsKmsSecrets#payload}
    */
    readonly payload: string;
  }

  function dataAwsKmsSecretsSecretToTerraform(struct?: DataAwsKmsSecretsSecret): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      context: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.context),
      grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grantTokens),
      name: cdktf.stringToTerraform(struct!.name),
      payload: cdktf.stringToTerraform(struct!.payload),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets}
  */
  export class DataAwsKmsSecrets extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kms_secrets";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsSecretsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKmsSecretsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kms_secrets',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._secret = config.secret;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // plaintext - computed: true, optional: false, required: false
    public plaintext(key: string): string {
      return new cdktf.StringMap(this, 'plaintext').lookup(key);
    }

    // secret - computed: false, optional: false, required: true
    private _secret?: DataAwsKmsSecretsSecret[]; 
    public get secret() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('secret') as any;
    }
    public set secret(value: DataAwsKmsSecretsSecret[]) {
      this._secret = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretInput() {
      return this._secret
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        secret: cdktf.listMapper(dataAwsKmsSecretsSecretToTerraform)(this._secret),
      };
    }
  }
}
