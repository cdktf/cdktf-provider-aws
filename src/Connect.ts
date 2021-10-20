// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export namespace Connect {
  export interface ConnectContactFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#content ConnectContactFlow#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#content_hash ConnectContactFlow#content_hash}
    */
    readonly contentHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#description ConnectContactFlow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#filename ConnectContactFlow#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#instance_id ConnectContactFlow#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#name ConnectContactFlow#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#tags ConnectContactFlow#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#tags_all ConnectContactFlow#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#type ConnectContactFlow#type}
    */
    readonly type?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#timeouts ConnectContactFlow#timeouts}
    */
    readonly timeouts?: ConnectContactFlowTimeouts;
  }
  export interface ConnectContactFlowTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#create ConnectContactFlow#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#update ConnectContactFlow#update}
    */
    readonly update?: string;
  }

  function connectContactFlowTimeoutsToTerraform(struct?: ConnectContactFlowTimeoutsOutputReference | ConnectContactFlowTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class ConnectContactFlowTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow}
  */
  export class ConnectContactFlow extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_connect_contact_flow";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectContactFlowConfig
    */
    public constructor(scope: Construct, id: string, config: ConnectContactFlowConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_connect_contact_flow',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._content = config.content;
      this._contentHash = config.contentHash;
      this._description = config.description;
      this._filename = config.filename;
      this._instanceId = config.instanceId;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // contact_flow_id - computed: true, optional: false, required: false
    public get contactFlowId() {
      return this.getStringAttribute('contact_flow_id');
    }

    // content - computed: true, optional: true, required: false
    private _content?: string | undefined; 
    public get content() {
      return this.getStringAttribute('content');
    }
    public set content(value: string | undefined) {
      this._content = value;
    }
    public resetContent() {
      this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
      return this._content
    }

    // content_hash - computed: false, optional: true, required: false
    private _contentHash?: string | undefined; 
    public get contentHash() {
      return this.getStringAttribute('content_hash');
    }
    public set contentHash(value: string | undefined) {
      this._contentHash = value;
    }
    public resetContentHash() {
      this._contentHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHashInput() {
      return this._contentHash
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

    // filename - computed: false, optional: true, required: false
    private _filename?: string | undefined; 
    public get filename() {
      return this.getStringAttribute('filename');
    }
    public set filename(value: string | undefined) {
      this._filename = value;
    }
    public resetFilename() {
      this._filename = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filenameInput() {
      return this._filename
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
      this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
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

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConnectContactFlowTimeouts | undefined; 
    private __timeoutsOutput = new ConnectContactFlowTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ConnectContactFlowTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content: cdktf.stringToTerraform(this._content),
        content_hash: cdktf.stringToTerraform(this._contentHash),
        description: cdktf.stringToTerraform(this._description),
        filename: cdktf.stringToTerraform(this._filename),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        timeouts: connectContactFlowTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}
    */
    readonly autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}
    */
    readonly contactFlowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_lens_enabled ConnectInstance#contact_lens_enabled}
    */
    readonly contactLensEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#directory_id ConnectInstance#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#early_media_enabled ConnectInstance#early_media_enabled}
    */
    readonly earlyMediaEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#identity_management_type ConnectInstance#identity_management_type}
    */
    readonly identityManagementType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}
    */
    readonly inboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#instance_alias ConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}
    */
    readonly outboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#timeouts ConnectInstance#timeouts}
    */
    readonly timeouts?: ConnectInstanceTimeouts;
  }
  export interface ConnectInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#create ConnectInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#delete ConnectInstance#delete}
    */
    readonly delete?: string;
  }

  function connectInstanceTimeoutsToTerraform(struct?: ConnectInstanceTimeoutsOutputReference | ConnectInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance}
  */
  export class ConnectInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_connect_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: ConnectInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_connect_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoResolveBestVoicesEnabled = config.autoResolveBestVoicesEnabled;
      this._contactFlowLogsEnabled = config.contactFlowLogsEnabled;
      this._contactLensEnabled = config.contactLensEnabled;
      this._directoryId = config.directoryId;
      this._earlyMediaEnabled = config.earlyMediaEnabled;
      this._identityManagementType = config.identityManagementType;
      this._inboundCallsEnabled = config.inboundCallsEnabled;
      this._instanceAlias = config.instanceAlias;
      this._outboundCallsEnabled = config.outboundCallsEnabled;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_resolve_best_voices_enabled - computed: false, optional: true, required: false
    private _autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get autoResolveBestVoicesEnabled() {
      return this.getBooleanAttribute('auto_resolve_best_voices_enabled') as any;
    }
    public set autoResolveBestVoicesEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._autoResolveBestVoicesEnabled = value;
    }
    public resetAutoResolveBestVoicesEnabled() {
      this._autoResolveBestVoicesEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoResolveBestVoicesEnabledInput() {
      return this._autoResolveBestVoicesEnabled
    }

    // contact_flow_logs_enabled - computed: false, optional: true, required: false
    private _contactFlowLogsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get contactFlowLogsEnabled() {
      return this.getBooleanAttribute('contact_flow_logs_enabled') as any;
    }
    public set contactFlowLogsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._contactFlowLogsEnabled = value;
    }
    public resetContactFlowLogsEnabled() {
      this._contactFlowLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowLogsEnabledInput() {
      return this._contactFlowLogsEnabled
    }

    // contact_lens_enabled - computed: false, optional: true, required: false
    private _contactLensEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get contactLensEnabled() {
      return this.getBooleanAttribute('contact_lens_enabled') as any;
    }
    public set contactLensEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._contactLensEnabled = value;
    }
    public resetContactLensEnabled() {
      this._contactLensEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactLensEnabledInput() {
      return this._contactLensEnabled
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // directory_id - computed: false, optional: true, required: false
    private _directoryId?: string | undefined; 
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string | undefined) {
      this._directoryId = value;
    }
    public resetDirectoryId() {
      this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // early_media_enabled - computed: false, optional: true, required: false
    private _earlyMediaEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get earlyMediaEnabled() {
      return this.getBooleanAttribute('early_media_enabled') as any;
    }
    public set earlyMediaEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._earlyMediaEnabled = value;
    }
    public resetEarlyMediaEnabled() {
      this._earlyMediaEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get earlyMediaEnabledInput() {
      return this._earlyMediaEnabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_management_type - computed: false, optional: false, required: true
    private _identityManagementType?: string; 
    public get identityManagementType() {
      return this.getStringAttribute('identity_management_type');
    }
    public set identityManagementType(value: string) {
      this._identityManagementType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityManagementTypeInput() {
      return this._identityManagementType
    }

    // inbound_calls_enabled - computed: false, optional: false, required: true
    private _inboundCallsEnabled?: boolean | cdktf.IResolvable; 
    public get inboundCallsEnabled() {
      return this.getBooleanAttribute('inbound_calls_enabled') as any;
    }
    public set inboundCallsEnabled(value: boolean | cdktf.IResolvable) {
      this._inboundCallsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundCallsEnabledInput() {
      return this._inboundCallsEnabled
    }

    // instance_alias - computed: false, optional: true, required: false
    private _instanceAlias?: string | undefined; 
    public get instanceAlias() {
      return this.getStringAttribute('instance_alias');
    }
    public set instanceAlias(value: string | undefined) {
      this._instanceAlias = value;
    }
    public resetInstanceAlias() {
      this._instanceAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceAliasInput() {
      return this._instanceAlias
    }

    // outbound_calls_enabled - computed: false, optional: false, required: true
    private _outboundCallsEnabled?: boolean | cdktf.IResolvable; 
    public get outboundCallsEnabled() {
      return this.getBooleanAttribute('outbound_calls_enabled') as any;
    }
    public set outboundCallsEnabled(value: boolean | cdktf.IResolvable) {
      this._outboundCallsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallsEnabledInput() {
      return this._outboundCallsEnabled
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConnectInstanceTimeouts | undefined; 
    private __timeoutsOutput = new ConnectInstanceTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ConnectInstanceTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_resolve_best_voices_enabled: cdktf.booleanToTerraform(this._autoResolveBestVoicesEnabled),
        contact_flow_logs_enabled: cdktf.booleanToTerraform(this._contactFlowLogsEnabled),
        contact_lens_enabled: cdktf.booleanToTerraform(this._contactLensEnabled),
        directory_id: cdktf.stringToTerraform(this._directoryId),
        early_media_enabled: cdktf.booleanToTerraform(this._earlyMediaEnabled),
        identity_management_type: cdktf.stringToTerraform(this._identityManagementType),
        inbound_calls_enabled: cdktf.booleanToTerraform(this._inboundCallsEnabled),
        instance_alias: cdktf.stringToTerraform(this._instanceAlias),
        outbound_calls_enabled: cdktf.booleanToTerraform(this._outboundCallsEnabled),
        timeouts: connectInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsConnectContactFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#contact_flow_id DataAwsConnectContactFlow#contact_flow_id}
    */
    readonly contactFlowId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#instance_id DataAwsConnectContactFlow#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#name DataAwsConnectContactFlow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#tags DataAwsConnectContactFlow#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#type DataAwsConnectContactFlow#type}
    */
    readonly type?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow}
  */
  export class DataAwsConnectContactFlow extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_connect_contact_flow";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectContactFlowConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsConnectContactFlowConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_connect_contact_flow',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._contactFlowId = config.contactFlowId;
      this._instanceId = config.instanceId;
      this._name = config.name;
      this._tags = config.tags;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // contact_flow_id - computed: true, optional: true, required: false
    private _contactFlowId?: string | undefined; 
    public get contactFlowId() {
      return this.getStringAttribute('contact_flow_id');
    }
    public set contactFlowId(value: string | undefined) {
      this._contactFlowId = value;
    }
    public resetContactFlowId() {
      this._contactFlowId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowIdInput() {
      return this._contactFlowId
    }

    // content - computed: true, optional: false, required: false
    public get content() {
      return this.getStringAttribute('content');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
      this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
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

    // tags - computed: true, optional: true, required: false
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

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        contact_flow_id: cdktf.stringToTerraform(this._contactFlowId),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface DataAwsConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_alias DataAwsConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_id DataAwsConnectInstance#instance_id}
    */
    readonly instanceId?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance}
  */
  export class DataAwsConnectInstance extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_connect_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectInstanceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsConnectInstanceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_connect_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceAlias = config.instanceAlias;
      this._instanceId = config.instanceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_resolve_best_voices_enabled - computed: true, optional: false, required: false
    public get autoResolveBestVoicesEnabled() {
      return this.getBooleanAttribute('auto_resolve_best_voices_enabled') as any;
    }

    // contact_flow_logs_enabled - computed: true, optional: false, required: false
    public get contactFlowLogsEnabled() {
      return this.getBooleanAttribute('contact_flow_logs_enabled') as any;
    }

    // contact_lens_enabled - computed: true, optional: false, required: false
    public get contactLensEnabled() {
      return this.getBooleanAttribute('contact_lens_enabled') as any;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
      return this.getStringAttribute('created_time');
    }

    // early_media_enabled - computed: true, optional: false, required: false
    public get earlyMediaEnabled() {
      return this.getBooleanAttribute('early_media_enabled') as any;
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_management_type - computed: true, optional: false, required: false
    public get identityManagementType() {
      return this.getStringAttribute('identity_management_type');
    }

    // inbound_calls_enabled - computed: true, optional: false, required: false
    public get inboundCallsEnabled() {
      return this.getBooleanAttribute('inbound_calls_enabled') as any;
    }

    // instance_alias - computed: true, optional: true, required: false
    private _instanceAlias?: string | undefined; 
    public get instanceAlias() {
      return this.getStringAttribute('instance_alias');
    }
    public set instanceAlias(value: string | undefined) {
      this._instanceAlias = value;
    }
    public resetInstanceAlias() {
      this._instanceAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceAliasInput() {
      return this._instanceAlias
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string | undefined; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string | undefined) {
      this._instanceId = value;
    }
    public resetInstanceId() {
      this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // outbound_calls_enabled - computed: true, optional: false, required: false
    public get outboundCallsEnabled() {
      return this.getBooleanAttribute('outbound_calls_enabled') as any;
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_alias: cdktf.stringToTerraform(this._instanceAlias),
        instance_id: cdktf.stringToTerraform(this._instanceId),
      };
    }
  }
}
