// https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}
  */
  readonly cloudHsmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}
  */
  readonly customKeyStoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}
  */
  readonly customKeyStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}
  */
  readonly trustAnchorCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}
  */
  readonly xksProxyConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}
  */
  readonly xksProxyUriEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}
  */
  readonly xksProxyUriPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}
  */
  readonly xksProxyVpcEndpointServiceName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}
  */
  readonly timeouts?: KmsCustomKeyStoreTimeouts;
  /**
  * xks_proxy_authentication_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}
  */
  readonly xksProxyAuthenticationCredential?: KmsCustomKeyStoreXksProxyAuthenticationCredential;
}
export interface KmsCustomKeyStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}
  */
  readonly update?: string;
}

export function kmsCustomKeyStoreTimeoutsToTerraform(struct?: KmsCustomKeyStoreTimeouts | cdktf.IResolvable): any {
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


export function kmsCustomKeyStoreTimeoutsToHclTerraform(struct?: KmsCustomKeyStoreTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsCustomKeyStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
export interface KmsCustomKeyStoreXksProxyAuthenticationCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}
  */
  readonly rawSecretAccessKey: string;
}

export function kmsCustomKeyStoreXksProxyAuthenticationCredentialToTerraform(struct?: KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference | KmsCustomKeyStoreXksProxyAuthenticationCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    raw_secret_access_key: cdktf.stringToTerraform(struct!.rawSecretAccessKey),
  }
}


export function kmsCustomKeyStoreXksProxyAuthenticationCredentialToHclTerraform(struct?: KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference | KmsCustomKeyStoreXksProxyAuthenticationCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.rawSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsCustomKeyStoreXksProxyAuthenticationCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._rawSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawSecretAccessKey = this._rawSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsCustomKeyStoreXksProxyAuthenticationCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._rawSecretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._rawSecretAccessKey = value.rawSecretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // raw_secret_access_key - computed: false, optional: false, required: true
  private _rawSecretAccessKey?: string; 
  public get rawSecretAccessKey() {
    return this.getStringAttribute('raw_secret_access_key');
  }
  public set rawSecretAccessKey(value: string) {
    this._rawSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawSecretAccessKeyInput() {
    return this._rawSecretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store}
*/
export class KmsCustomKeyStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_custom_key_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsCustomKeyStore to import
  * @param importFromId The id of the existing KmsCustomKeyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsCustomKeyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kms_custom_key_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store} Resource
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
        providerVersion: '5.95.0',
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
    this._cloudHsmClusterId = config.cloudHsmClusterId;
    this._customKeyStoreName = config.customKeyStoreName;
    this._customKeyStoreType = config.customKeyStoreType;
    this._id = config.id;
    this._keyStorePassword = config.keyStorePassword;
    this._trustAnchorCertificate = config.trustAnchorCertificate;
    this._xksProxyConnectivity = config.xksProxyConnectivity;
    this._xksProxyUriEndpoint = config.xksProxyUriEndpoint;
    this._xksProxyUriPath = config.xksProxyUriPath;
    this._xksProxyVpcEndpointServiceName = config.xksProxyVpcEndpointServiceName;
    this._timeouts.internalValue = config.timeouts;
    this._xksProxyAuthenticationCredential.internalValue = config.xksProxyAuthenticationCredential;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_hsm_cluster_id - computed: false, optional: true, required: false
  private _cloudHsmClusterId?: string; 
  public get cloudHsmClusterId() {
    return this.getStringAttribute('cloud_hsm_cluster_id');
  }
  public set cloudHsmClusterId(value: string) {
    this._cloudHsmClusterId = value;
  }
  public resetCloudHsmClusterId() {
    this._cloudHsmClusterId = undefined;
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

  // custom_key_store_type - computed: true, optional: true, required: false
  private _customKeyStoreType?: string; 
  public get customKeyStoreType() {
    return this.getStringAttribute('custom_key_store_type');
  }
  public set customKeyStoreType(value: string) {
    this._customKeyStoreType = value;
  }
  public resetCustomKeyStoreType() {
    this._customKeyStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreTypeInput() {
    return this._customKeyStoreType;
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

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // trust_anchor_certificate - computed: false, optional: true, required: false
  private _trustAnchorCertificate?: string; 
  public get trustAnchorCertificate() {
    return this.getStringAttribute('trust_anchor_certificate');
  }
  public set trustAnchorCertificate(value: string) {
    this._trustAnchorCertificate = value;
  }
  public resetTrustAnchorCertificate() {
    this._trustAnchorCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorCertificateInput() {
    return this._trustAnchorCertificate;
  }

  // xks_proxy_connectivity - computed: false, optional: true, required: false
  private _xksProxyConnectivity?: string; 
  public get xksProxyConnectivity() {
    return this.getStringAttribute('xks_proxy_connectivity');
  }
  public set xksProxyConnectivity(value: string) {
    this._xksProxyConnectivity = value;
  }
  public resetXksProxyConnectivity() {
    this._xksProxyConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyConnectivityInput() {
    return this._xksProxyConnectivity;
  }

  // xks_proxy_uri_endpoint - computed: false, optional: true, required: false
  private _xksProxyUriEndpoint?: string; 
  public get xksProxyUriEndpoint() {
    return this.getStringAttribute('xks_proxy_uri_endpoint');
  }
  public set xksProxyUriEndpoint(value: string) {
    this._xksProxyUriEndpoint = value;
  }
  public resetXksProxyUriEndpoint() {
    this._xksProxyUriEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyUriEndpointInput() {
    return this._xksProxyUriEndpoint;
  }

  // xks_proxy_uri_path - computed: false, optional: true, required: false
  private _xksProxyUriPath?: string; 
  public get xksProxyUriPath() {
    return this.getStringAttribute('xks_proxy_uri_path');
  }
  public set xksProxyUriPath(value: string) {
    this._xksProxyUriPath = value;
  }
  public resetXksProxyUriPath() {
    this._xksProxyUriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyUriPathInput() {
    return this._xksProxyUriPath;
  }

  // xks_proxy_vpc_endpoint_service_name - computed: false, optional: true, required: false
  private _xksProxyVpcEndpointServiceName?: string; 
  public get xksProxyVpcEndpointServiceName() {
    return this.getStringAttribute('xks_proxy_vpc_endpoint_service_name');
  }
  public set xksProxyVpcEndpointServiceName(value: string) {
    this._xksProxyVpcEndpointServiceName = value;
  }
  public resetXksProxyVpcEndpointServiceName() {
    this._xksProxyVpcEndpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyVpcEndpointServiceNameInput() {
    return this._xksProxyVpcEndpointServiceName;
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

  // xks_proxy_authentication_credential - computed: false, optional: true, required: false
  private _xksProxyAuthenticationCredential = new KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference(this, "xks_proxy_authentication_credential");
  public get xksProxyAuthenticationCredential() {
    return this._xksProxyAuthenticationCredential;
  }
  public putXksProxyAuthenticationCredential(value: KmsCustomKeyStoreXksProxyAuthenticationCredential) {
    this._xksProxyAuthenticationCredential.internalValue = value;
  }
  public resetXksProxyAuthenticationCredential() {
    this._xksProxyAuthenticationCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyAuthenticationCredentialInput() {
    return this._xksProxyAuthenticationCredential.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_hsm_cluster_id: cdktf.stringToTerraform(this._cloudHsmClusterId),
      custom_key_store_name: cdktf.stringToTerraform(this._customKeyStoreName),
      custom_key_store_type: cdktf.stringToTerraform(this._customKeyStoreType),
      id: cdktf.stringToTerraform(this._id),
      key_store_password: cdktf.stringToTerraform(this._keyStorePassword),
      trust_anchor_certificate: cdktf.stringToTerraform(this._trustAnchorCertificate),
      xks_proxy_connectivity: cdktf.stringToTerraform(this._xksProxyConnectivity),
      xks_proxy_uri_endpoint: cdktf.stringToTerraform(this._xksProxyUriEndpoint),
      xks_proxy_uri_path: cdktf.stringToTerraform(this._xksProxyUriPath),
      xks_proxy_vpc_endpoint_service_name: cdktf.stringToTerraform(this._xksProxyVpcEndpointServiceName),
      timeouts: kmsCustomKeyStoreTimeoutsToTerraform(this._timeouts.internalValue),
      xks_proxy_authentication_credential: kmsCustomKeyStoreXksProxyAuthenticationCredentialToTerraform(this._xksProxyAuthenticationCredential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_hsm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudHsmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_key_store_name: {
        value: cdktf.stringToHclTerraform(this._customKeyStoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_key_store_type: {
        value: cdktf.stringToHclTerraform(this._customKeyStoreType),
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
      key_store_password: {
        value: cdktf.stringToHclTerraform(this._keyStorePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_anchor_certificate: {
        value: cdktf.stringToHclTerraform(this._trustAnchorCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xks_proxy_connectivity: {
        value: cdktf.stringToHclTerraform(this._xksProxyConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xks_proxy_uri_endpoint: {
        value: cdktf.stringToHclTerraform(this._xksProxyUriEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xks_proxy_uri_path: {
        value: cdktf.stringToHclTerraform(this._xksProxyUriPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xks_proxy_vpc_endpoint_service_name: {
        value: cdktf.stringToHclTerraform(this._xksProxyVpcEndpointServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kmsCustomKeyStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsCustomKeyStoreTimeouts",
      },
      xks_proxy_authentication_credential: {
        value: kmsCustomKeyStoreXksProxyAuthenticationCredentialToHclTerraform(this._xksProxyAuthenticationCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsCustomKeyStoreXksProxyAuthenticationCredentialList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
