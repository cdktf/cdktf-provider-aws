// https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}
  */
  readonly cloudHsmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}
  */
  readonly customKeyStoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}
  */
  readonly keyStorePassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}
  */
  readonly trustAnchorCertificate: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}
  */
  readonly timeouts?: KmsCustomKeyStoreTimeouts;
}
export interface KmsCustomKeyStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}
  */
  readonly update?: string;
}

export function kmsCustomKeyStoreTimeoutsToTerraform(struct?: KmsCustomKeyStoreTimeoutsOutputReference | KmsCustomKeyStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class KmsCustomKeyStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsCustomKeyStoreTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCustomKeyStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store aws_kms_custom_key_store}
*/
export class KmsCustomKeyStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_custom_key_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store aws_kms_custom_key_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsCustomKeyStoreConfig
  */
  public constructor(scope: Construct, id: string, config: KmsCustomKeyStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_custom_key_store',
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
    this._cloudHsmClusterId = config.cloudHsmClusterId;
    this._customKeyStoreName = config.customKeyStoreName;
    this._id = config.id;
    this._keyStorePassword = config.keyStorePassword;
    this._trustAnchorCertificate = config.trustAnchorCertificate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_hsm_cluster_id - computed: false, optional: false, required: true
  private _cloudHsmClusterId?: string; 
  public get cloudHsmClusterId() {
    return this.getStringAttribute('cloud_hsm_cluster_id');
  }
  public set cloudHsmClusterId(value: string) {
    this._cloudHsmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudHsmClusterIdInput() {
    return this._cloudHsmClusterId;
  }

  // custom_key_store_name - computed: false, optional: false, required: true
  private _customKeyStoreName?: string; 
  public get customKeyStoreName() {
    return this.getStringAttribute('custom_key_store_name');
  }
  public set customKeyStoreName(value: string) {
    this._customKeyStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreNameInput() {
    return this._customKeyStoreName;
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

  // key_store_password - computed: false, optional: false, required: true
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // trust_anchor_certificate - computed: false, optional: false, required: true
  private _trustAnchorCertificate?: string; 
  public get trustAnchorCertificate() {
    return this.getStringAttribute('trust_anchor_certificate');
  }
  public set trustAnchorCertificate(value: string) {
    this._trustAnchorCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorCertificateInput() {
    return this._trustAnchorCertificate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsCustomKeyStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsCustomKeyStoreTimeouts) {
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
      cloud_hsm_cluster_id: cdktf.stringToTerraform(this._cloudHsmClusterId),
      custom_key_store_name: cdktf.stringToTerraform(this._customKeyStoreName),
      id: cdktf.stringToTerraform(this._id),
      key_store_password: cdktf.stringToTerraform(this._keyStorePassword),
      trust_anchor_certificate: cdktf.stringToTerraform(this._trustAnchorCertificate),
      timeouts: kmsCustomKeyStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
