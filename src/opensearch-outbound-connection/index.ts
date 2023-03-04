// https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchOutboundConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}
  */
  readonly connectionAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#id OpensearchOutboundConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * local_domain_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}
  */
  readonly localDomainInfo: OpensearchOutboundConnectionLocalDomainInfo;
  /**
  * remote_domain_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}
  */
  readonly remoteDomainInfo: OpensearchOutboundConnectionRemoteDomainInfo;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}
  */
  readonly timeouts?: OpensearchOutboundConnectionTimeouts;
}
export interface OpensearchOutboundConnectionLocalDomainInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}
  */
  readonly ownerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}
  */
  readonly region: string;
}

export function opensearchOutboundConnectionLocalDomainInfoToTerraform(struct?: OpensearchOutboundConnectionLocalDomainInfoOutputReference | OpensearchOutboundConnectionLocalDomainInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    owner_id: cdktf.stringToTerraform(struct!.ownerId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class OpensearchOutboundConnectionLocalDomainInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOutboundConnectionLocalDomainInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOutboundConnectionLocalDomainInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._ownerId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._ownerId = value.ownerId;
      this._region = value.region;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface OpensearchOutboundConnectionRemoteDomainInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}
  */
  readonly ownerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}
  */
  readonly region: string;
}

export function opensearchOutboundConnectionRemoteDomainInfoToTerraform(struct?: OpensearchOutboundConnectionRemoteDomainInfoOutputReference | OpensearchOutboundConnectionRemoteDomainInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    owner_id: cdktf.stringToTerraform(struct!.ownerId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class OpensearchOutboundConnectionRemoteDomainInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOutboundConnectionRemoteDomainInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOutboundConnectionRemoteDomainInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._ownerId = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._ownerId = value.ownerId;
      this._region = value.region;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface OpensearchOutboundConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#create OpensearchOutboundConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}
  */
  readonly delete?: string;
}

export function opensearchOutboundConnectionTimeoutsToTerraform(struct?: OpensearchOutboundConnectionTimeoutsOutputReference | OpensearchOutboundConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class OpensearchOutboundConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOutboundConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchOutboundConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection aws_opensearch_outbound_connection}
*/
export class OpensearchOutboundConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opensearch_outbound_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection aws_opensearch_outbound_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchOutboundConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchOutboundConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opensearch_outbound_connection',
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
    this._connectionAlias = config.connectionAlias;
    this._id = config.id;
    this._localDomainInfo.internalValue = config.localDomainInfo;
    this._remoteDomainInfo.internalValue = config.remoteDomainInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_alias - computed: false, optional: false, required: true
  private _connectionAlias?: string; 
  public get connectionAlias() {
    return this.getStringAttribute('connection_alias');
  }
  public set connectionAlias(value: string) {
    this._connectionAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionAliasInput() {
    return this._connectionAlias;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
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

  // local_domain_info - computed: false, optional: false, required: true
  private _localDomainInfo = new OpensearchOutboundConnectionLocalDomainInfoOutputReference(this, "local_domain_info");
  public get localDomainInfo() {
    return this._localDomainInfo;
  }
  public putLocalDomainInfo(value: OpensearchOutboundConnectionLocalDomainInfo) {
    this._localDomainInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDomainInfoInput() {
    return this._localDomainInfo.internalValue;
  }

  // remote_domain_info - computed: false, optional: false, required: true
  private _remoteDomainInfo = new OpensearchOutboundConnectionRemoteDomainInfoOutputReference(this, "remote_domain_info");
  public get remoteDomainInfo() {
    return this._remoteDomainInfo;
  }
  public putRemoteDomainInfo(value: OpensearchOutboundConnectionRemoteDomainInfo) {
    this._remoteDomainInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDomainInfoInput() {
    return this._remoteDomainInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchOutboundConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchOutboundConnectionTimeouts) {
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
      connection_alias: cdktf.stringToTerraform(this._connectionAlias),
      id: cdktf.stringToTerraform(this._id),
      local_domain_info: opensearchOutboundConnectionLocalDomainInfoToTerraform(this._localDomainInfo.internalValue),
      remote_domain_info: opensearchOutboundConnectionRemoteDomainInfoToTerraform(this._remoteDomainInfo.internalValue),
      timeouts: opensearchOutboundConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
