// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Chime
*/
export namespace Chime {
  export interface ChimeVoiceConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#aws_region ChimeVoiceConnector#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#name ChimeVoiceConnector#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html#require_encryption ChimeVoiceConnector#require_encryption}
    */
    readonly requireEncryption: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector}
  */
  export class ChimeVoiceConnector extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector.html aws_chime_voice_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._awsRegion = config.awsRegion;
      this._name = config.name;
      this._requireEncryption = config.requireEncryption;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_region - computed: false, optional: true, required: false
    private _awsRegion?: string | undefined; 
    public get awsRegion() {
      return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string | undefined) {
      this._awsRegion = value;
    }
    public resetAwsRegion() {
      this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
      return this._awsRegion
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

    // outbound_host_name - computed: true, optional: false, required: false
    public get outboundHostName() {
      return this.getStringAttribute('outbound_host_name');
    }

    // require_encryption - computed: false, optional: false, required: true
    private _requireEncryption?: boolean | cdktf.IResolvable; 
    public get requireEncryption() {
      return this.getBooleanAttribute('require_encryption') as any;
    }
    public set requireEncryption(value: boolean | cdktf.IResolvable) {
      this._requireEncryption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEncryptionInput() {
      return this._requireEncryption
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        aws_region: cdktf.stringToTerraform(this._awsRegion),
        name: cdktf.stringToTerraform(this._name),
        require_encryption: cdktf.booleanToTerraform(this._requireEncryption),
      };
    }
  }
  export interface ChimeVoiceConnectorGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#name ChimeVoiceConnectorGroup#name}
    */
    readonly name: string;
    /**
    * connector block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#connector ChimeVoiceConnectorGroup#connector}
    */
    readonly connector?: ChimeVoiceConnectorGroupConnector[];
  }
  export interface ChimeVoiceConnectorGroupConnector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#priority ChimeVoiceConnectorGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}
    */
    readonly voiceConnectorId: string;
  }

  function chimeVoiceConnectorGroupConnectorToTerraform(struct?: ChimeVoiceConnectorGroupConnector): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      voice_connector_id: cdktf.stringToTerraform(struct!.voiceConnectorId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group}
  */
  export class ChimeVoiceConnectorGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group.html aws_chime_voice_connector_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorGroupConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._connector = config.connector;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // connector - computed: false, optional: true, required: false
    private _connector?: ChimeVoiceConnectorGroupConnector[] | undefined; 
    public get connector() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('connector') as any;
    }
    public set connector(value: ChimeVoiceConnectorGroupConnector[] | undefined) {
      this._connector = value;
    }
    public resetConnector() {
      this._connector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorInput() {
      return this._connector
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        connector: cdktf.listMapper(chimeVoiceConnectorGroupConnectorToTerraform)(this._connector),
      };
    }
  }
  export interface ChimeVoiceConnectorLoggingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}
    */
    readonly enableSipLogs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}
    */
    readonly voiceConnectorId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging}
  */
  export class ChimeVoiceConnectorLogging extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_logging";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging.html aws_chime_voice_connector_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorLoggingConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorLoggingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_logging',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enableSipLogs = config.enableSipLogs;
      this._voiceConnectorId = config.voiceConnectorId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enable_sip_logs - computed: false, optional: true, required: false
    private _enableSipLogs?: boolean | cdktf.IResolvable | undefined; 
    public get enableSipLogs() {
      return this.getBooleanAttribute('enable_sip_logs') as any;
    }
    public set enableSipLogs(value: boolean | cdktf.IResolvable | undefined) {
      this._enableSipLogs = value;
    }
    public resetEnableSipLogs() {
      this._enableSipLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSipLogsInput() {
      return this._enableSipLogs
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // voice_connector_id - computed: false, optional: false, required: true
    private _voiceConnectorId?: string; 
    public get voiceConnectorId() {
      return this.getStringAttribute('voice_connector_id');
    }
    public set voiceConnectorId(value: string) {
      this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceConnectorIdInput() {
      return this._voiceConnectorId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enable_sip_logs: cdktf.booleanToTerraform(this._enableSipLogs),
        voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      };
    }
  }
  export interface ChimeVoiceConnectorOriginationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#disabled ChimeVoiceConnectorOrigination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#route ChimeVoiceConnectorOrigination#route}
    */
    readonly route: ChimeVoiceConnectorOriginationRoute[];
  }
  export interface ChimeVoiceConnectorOriginationRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#host ChimeVoiceConnectorOrigination#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#port ChimeVoiceConnectorOrigination#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#priority ChimeVoiceConnectorOrigination#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#protocol ChimeVoiceConnectorOrigination#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html#weight ChimeVoiceConnectorOrigination#weight}
    */
    readonly weight: number;
  }

  function chimeVoiceConnectorOriginationRouteToTerraform(struct?: ChimeVoiceConnectorOriginationRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      port: cdktf.numberToTerraform(struct!.port),
      priority: cdktf.numberToTerraform(struct!.priority),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination}
  */
  export class ChimeVoiceConnectorOrigination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_origination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_origination.html aws_chime_voice_connector_origination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorOriginationConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorOriginationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_origination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._disabled = config.disabled;
      this._voiceConnectorId = config.voiceConnectorId;
      this._route = config.route;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disabled - computed: false, optional: true, required: false
    private _disabled?: boolean | cdktf.IResolvable | undefined; 
    public get disabled() {
      return this.getBooleanAttribute('disabled') as any;
    }
    public set disabled(value: boolean | cdktf.IResolvable | undefined) {
      this._disabled = value;
    }
    public resetDisabled() {
      this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledInput() {
      return this._disabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // voice_connector_id - computed: false, optional: false, required: true
    private _voiceConnectorId?: string; 
    public get voiceConnectorId() {
      return this.getStringAttribute('voice_connector_id');
    }
    public set voiceConnectorId(value: string) {
      this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceConnectorIdInput() {
      return this._voiceConnectorId
    }

    // route - computed: false, optional: false, required: true
    private _route?: ChimeVoiceConnectorOriginationRoute[]; 
    public get route() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('route') as any;
    }
    public set route(value: ChimeVoiceConnectorOriginationRoute[]) {
      this._route = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeInput() {
      return this._route
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        disabled: cdktf.booleanToTerraform(this._disabled),
        voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
        route: cdktf.listMapper(chimeVoiceConnectorOriginationRouteToTerraform)(this._route),
      };
    }
  }
  export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#data_retention ChimeVoiceConnectorStreaming#data_retention}
    */
    readonly dataRetention: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#disabled ChimeVoiceConnectorStreaming#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
    */
    readonly streamingNotificationTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
    */
    readonly voiceConnectorId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming}
  */
  export class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_streaming";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_streaming.html aws_chime_voice_connector_streaming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorStreamingConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_streaming',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dataRetention = config.dataRetention;
      this._disabled = config.disabled;
      this._streamingNotificationTargets = config.streamingNotificationTargets;
      this._voiceConnectorId = config.voiceConnectorId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_retention - computed: false, optional: false, required: true
    private _dataRetention?: number; 
    public get dataRetention() {
      return this.getNumberAttribute('data_retention');
    }
    public set dataRetention(value: number) {
      this._dataRetention = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRetentionInput() {
      return this._dataRetention
    }

    // disabled - computed: false, optional: true, required: false
    private _disabled?: boolean | cdktf.IResolvable | undefined; 
    public get disabled() {
      return this.getBooleanAttribute('disabled') as any;
    }
    public set disabled(value: boolean | cdktf.IResolvable | undefined) {
      this._disabled = value;
    }
    public resetDisabled() {
      this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledInput() {
      return this._disabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // streaming_notification_targets - computed: false, optional: true, required: false
    private _streamingNotificationTargets?: string[] | undefined; 
    public get streamingNotificationTargets() {
      return this.getListAttribute('streaming_notification_targets');
    }
    public set streamingNotificationTargets(value: string[] | undefined) {
      this._streamingNotificationTargets = value;
    }
    public resetStreamingNotificationTargets() {
      this._streamingNotificationTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamingNotificationTargetsInput() {
      return this._streamingNotificationTargets
    }

    // voice_connector_id - computed: false, optional: false, required: true
    private _voiceConnectorId?: string; 
    public get voiceConnectorId() {
      return this.getStringAttribute('voice_connector_id');
    }
    public set voiceConnectorId(value: string) {
      this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceConnectorIdInput() {
      return this._voiceConnectorId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        data_retention: cdktf.numberToTerraform(this._dataRetention),
        disabled: cdktf.booleanToTerraform(this._disabled),
        streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform)(this._streamingNotificationTargets),
        voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      };
    }
  }
  export interface ChimeVoiceConnectorTerminationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#calling_regions ChimeVoiceConnectorTermination#calling_regions}
    */
    readonly callingRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}
    */
    readonly cidrAllowList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#cps_limit ChimeVoiceConnectorTermination#cps_limit}
    */
    readonly cpsLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}
    */
    readonly defaultPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#disabled ChimeVoiceConnectorTermination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination}
  */
  export class ChimeVoiceConnectorTermination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_termination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination.html aws_chime_voice_connector_termination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_termination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._callingRegions = config.callingRegions;
      this._cidrAllowList = config.cidrAllowList;
      this._cpsLimit = config.cpsLimit;
      this._defaultPhoneNumber = config.defaultPhoneNumber;
      this._disabled = config.disabled;
      this._voiceConnectorId = config.voiceConnectorId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // calling_regions - computed: false, optional: false, required: true
    private _callingRegions?: string[]; 
    public get callingRegions() {
      return this.getListAttribute('calling_regions');
    }
    public set callingRegions(value: string[]) {
      this._callingRegions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get callingRegionsInput() {
      return this._callingRegions
    }

    // cidr_allow_list - computed: false, optional: false, required: true
    private _cidrAllowList?: string[]; 
    public get cidrAllowList() {
      return this.getListAttribute('cidr_allow_list');
    }
    public set cidrAllowList(value: string[]) {
      this._cidrAllowList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrAllowListInput() {
      return this._cidrAllowList
    }

    // cps_limit - computed: false, optional: true, required: false
    private _cpsLimit?: number | undefined; 
    public get cpsLimit() {
      return this.getNumberAttribute('cps_limit');
    }
    public set cpsLimit(value: number | undefined) {
      this._cpsLimit = value;
    }
    public resetCpsLimit() {
      this._cpsLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpsLimitInput() {
      return this._cpsLimit
    }

    // default_phone_number - computed: false, optional: true, required: false
    private _defaultPhoneNumber?: string | undefined; 
    public get defaultPhoneNumber() {
      return this.getStringAttribute('default_phone_number');
    }
    public set defaultPhoneNumber(value: string | undefined) {
      this._defaultPhoneNumber = value;
    }
    public resetDefaultPhoneNumber() {
      this._defaultPhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultPhoneNumberInput() {
      return this._defaultPhoneNumber
    }

    // disabled - computed: false, optional: true, required: false
    private _disabled?: boolean | cdktf.IResolvable | undefined; 
    public get disabled() {
      return this.getBooleanAttribute('disabled') as any;
    }
    public set disabled(value: boolean | cdktf.IResolvable | undefined) {
      this._disabled = value;
    }
    public resetDisabled() {
      this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledInput() {
      return this._disabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // voice_connector_id - computed: false, optional: false, required: true
    private _voiceConnectorId?: string; 
    public get voiceConnectorId() {
      return this.getStringAttribute('voice_connector_id');
    }
    public set voiceConnectorId(value: string) {
      this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceConnectorIdInput() {
      return this._voiceConnectorId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        calling_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._callingRegions),
        cidr_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrAllowList),
        cps_limit: cdktf.numberToTerraform(this._cpsLimit),
        default_phone_number: cdktf.stringToTerraform(this._defaultPhoneNumber),
        disabled: cdktf.booleanToTerraform(this._disabled),
        voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
      };
    }
  }
  export interface ChimeVoiceConnectorTerminationCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * credentials block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#credentials ChimeVoiceConnectorTerminationCredentials#credentials}
    */
    readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[];
  }
  export interface ChimeVoiceConnectorTerminationCredentialsCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#password ChimeVoiceConnectorTerminationCredentials#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html#username ChimeVoiceConnectorTerminationCredentials#username}
    */
    readonly username: string;
  }

  function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials}
  */
  export class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_chime_voice_connector_termination_credentials";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials.html aws_chime_voice_connector_termination_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationCredentialsConfig
    */
    public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_chime_voice_connector_termination_credentials',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._voiceConnectorId = config.voiceConnectorId;
      this._credentials = config.credentials;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // voice_connector_id - computed: false, optional: false, required: true
    private _voiceConnectorId?: string; 
    public get voiceConnectorId() {
      return this.getStringAttribute('voice_connector_id');
    }
    public set voiceConnectorId(value: string) {
      this._voiceConnectorId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get voiceConnectorIdInput() {
      return this._voiceConnectorId
    }

    // credentials - computed: false, optional: false, required: true
    private _credentials?: ChimeVoiceConnectorTerminationCredentialsCredentials[]; 
    public get credentials() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('credentials') as any;
    }
    public set credentials(value: ChimeVoiceConnectorTerminationCredentialsCredentials[]) {
      this._credentials = value;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
      return this._credentials
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
        credentials: cdktf.listMapper(chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform)(this._credentials),
      };
    }
  }
}
